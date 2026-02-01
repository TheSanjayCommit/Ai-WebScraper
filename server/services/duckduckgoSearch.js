const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

/**
 * Scrape DuckDuckGo HTML search results using Puppeteer
 * @param {string} query
 * @returns {Promise<Array>} Array of { title, link, snippet }
 */
async function searchWeb(query) {
    let browser;
    try {
        browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--single-process'],
        });

        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

        // DuckDuckGo HTML version is often stricter on direct HTTP requests but might pass with Puppeteer.
        // Alternatively, use standard DDG with JS enabled? The user asked for "HTML search scraping".
        // Let's stick to /html/ first. if it fails we can try main site.
        const searchUrl = `https://duckduckgo.com/html/?q=${encodeURIComponent(query)}`;

        await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });

        // Debug: Save content
        const content = await page.content();
        require('fs').writeFileSync('ddg_puppeteer_debug.html', content);
        console.log('Saved Puppeteer HTML to ddg_puppeteer_debug.html');

        const results = await page.evaluate(() => {
            const items = [];
            // HTML version selectors
            document.querySelectorAll('.result').forEach(element => {
                const titleEl = element.querySelector('.result__title a');
                const linkEl = element.querySelector('.result__a');
                const snippetEl = element.querySelector('.result__snippet');

                if (titleEl && linkEl) {
                    let link = linkEl.getAttribute('href');
                    // Decode DDG redirect if needed
                    if (link.startsWith('/l/?')) {
                        try {
                            const urlObj = new URL('https://duckduckgo.com' + link);
                            link = urlObj.searchParams.get('uddg');
                        } catch (e) { }
                    }

                    if (link && (link.startsWith('http') || link.startsWith('https'))) {
                        items.push({
                            title: titleEl.innerText.trim(),
                            link: link,
                            snippet: snippetEl ? snippetEl.innerText.trim() : ''
                        });
                    }
                }
            });
            return items;
        });

        return results.slice(0, 7);
    } catch (error) {
        console.error('DuckDuckGo Puppeteer Error:', error.message);
        return [];
    } finally {
        if (browser) await browser.close();
    }
}

module.exports = { searchWeb };
