const axios = require('axios');
require('dotenv').config();

const SEARCH_API_KEY = process.env.SEARCH_API_KEY;
const SEARCH_ENGINE = process.env.SEARCH_ENGINE || 'google'; // google, bing

/**
 * Perform a web search using a Search API
 * @param {string} query
 * @returns {Promise<Array>} Array of { title, link, snippet }
 */
async function searchWeb(query) {
  if (!SEARCH_API_KEY) {
    console.error('SEARCH_API_KEY is missing');
    return [];
  }

  try {
    // Example using SerpAPI (Google Search)
    const response = await axios.get('https://serpapi.com/search.json', {
      params: {
        q: query,
        api_key: SEARCH_API_KEY,
        num: 7, // Fetch top 7 results
      },
    });

    if (response.data.organic_results) {
      return response.data.organic_results.map((result) => ({
        title: result.title,
        link: result.link,
        snippet: result.snippet,
      }));
    }
    
    return [];
  } catch (error) {
    console.error('Search API Error:', error.message);
    return [];
  }
}

module.exports = { searchWeb };
