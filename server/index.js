const express = require('express');
const cors = require('cors');
require('dotenv').config();
const askRoute = require('./routes/ask');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', askRoute);

// Health Check
app.get('/', (req, res) => {
    res.send('AI Web Scraper Backend is running (DuckDuckGo + Groq)');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
