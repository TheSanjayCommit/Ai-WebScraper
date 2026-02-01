const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function debugDDG() {
    try {
        const url = 'https://duckduckgo.com/html/?q=test';
        console.log(`Fetching ${url}...`);

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
            },
            timeout: 10000
        });

        console.log('Status:', response.status);
        fs.writeFileSync('ddg_debug.html', response.data);
        console.log('Saved HTML to ddg_debug.html');

        const $ = cheerio.load(response.data);
        const results = $('.result');
        console.log('Number of .result elements:', results.length);

        // Check if other classes exist
        if (results.length === 0) {
            console.log('HTML Preview (first 500 chars):');
            console.log(response.data.substring(0, 500));
        } else {
            console.log('First result title:', results.first().find('.result__title').text().trim());
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
}

debugDDG();
