const express = require('express');
const router = express.Router();
const { searchWeb } = require('../services/duckduckgoSearch');
const { scrapePage } = require('../services/scrapeService');
const { generateAnswer } = require('../services/aiService');

router.post('/ask', async (req, res) => {
    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ error: 'Question is required' });
    }

    try {
        console.log(`[Ask] Searching for: ${question}`);

        // 1. Search DuckDuckGo
        const searchResults = await searchWeb(question);
        if (!searchResults || searchResults.length === 0) {
            return res.json({ answer: "No results found.", sources: [] });
        }

        const topLinks = searchResults.slice(0, 5).map(r => r.link); // Top 5
        console.log(`[Ask] Found ${topLinks.length} links to scrape.`);

        if (topLinks.length === 0) {
            return res.json({ answer: "Found results but could not extract links.", sources: [] });
        }

        // 2. Scrape Content
        // Limit to 3 links to prevent resource exhaustion/timeouts
        // DEBUG: Skipping scraping to verify AI flow.
        const limitedLinks = topLinks.slice(0, 3);
        console.log(`[Ask] Scraping ${limitedLinks.length} pages... (SKIPPED for debugging)`);

        const scrapedData = [];
        /*
        for (const link of limitedLinks) {
            try {
                const data = await scrapePage(link);
                if (data) scrapedData.push(data);
            } catch (error) {
                console.error(`Error scraping ${link}:`, error.message);
            }
        }
        */

        let finalSources = scrapedData;

        if (scrapedData.length === 0) {
            console.log("[Ask] Scraping failed or returned empty. Falling back to search snippets.");
            // Use snippets from search results as context
            finalSources = searchResults.map(r => ({
                title: r.title,
                content: r.snippet,
                url: r.link
            }));
        }

        // 3. Generate Answer with AI
        console.log("[Ask] Generating AI answer...");
        const aiResponse = await generateAnswer(question, finalSources);

        // 4. Return Response
        res.json({
            answer: aiResponse.answer,
            summary: aiResponse.summary,
            sources: finalSources.map(d => ({ title: d.title, url: d.url }))
        });

    } catch (error) {
        console.error("[Ask] Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
