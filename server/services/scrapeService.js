const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const cheerio = require('cheerio');
const robotsParser = require('robots-parser');
const axios = require('axios');
const URL = require('url').URL;

async function checkRobotsTxt(url) {
    try {
        const parsedUrl = new URL(url);
        const robotsUrl = `${parsedUrl.protocol}//${parsedUrl.host}/robots.txt`;
        const robotsTxtContent = await axios.get(robotsUrl, { timeout: 5000 }).then(res => res.data).catch(() => '');
        const robots = robotsParser(robotsUrl, robotsTxtContent);
        return robots.isAllowed(url, 'PuppeteerBot'); // Check if our bot is allowed
    } catch (error) {
        // If robots.txt fails, default to allowing for now, or disallowing based on policy.
        // For this demo, we'll allow but log it.
        console.warn(`Could not fetch robots.txt for ${url}: ${error.message}`);
        return true;
    }
}

async function scrapePage(url) {
    const isAllowed = await checkRobotsTxt(url);
    if (!isAllowed) {
        console.log(`Skipping ${url} due to robots.txt`);
        return null;
    }

    let browser;
    try {
        browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--single-process'], // Critical for Render
        });

        const page = await browser.newPage();

        // Set a realistic user agent
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

        // Optimize: Disable images/css/fonts to speed up scraping
        await page.setRequestInterception(true);
        page.on('request', (req) => {
            if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
                req.abort();
            } else {
                req.continue();
            }
        });

        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });

        const content = await page.content();
        const $ = cheerio.load(content);

        // Remove unwanted elements
        $('script, style, nav, footer, iframe, header, ads, .ad, .advertisement').remove();

        const title = $('title').text().trim();
        const text = $('body').text().replace(/\s+/g, ' ').trim().slice(0, 10000); // Limit context size

        return {
            url,
            title,
            content: text,
        };
    } catch (error) {
        console.error(`Error scraping ${url}:`, error.message);
        return null;
    } finally {
        if (browser) await browser.close();
    }
}

module.exports = { scrapePage };
