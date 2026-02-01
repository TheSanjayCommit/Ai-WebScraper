const axios = require('axios');

async function testBackend() {
    try {
        console.log('Testing /api/ask...');
        const response = await axios.post('http://localhost:5000/api/ask', {
            question: 'What is the latest version of React?'
        });

        console.log('Status:', response.status);
        console.log('Answer Length:', response.data.answer.length);
        console.log('Sources:', response.data.sources ? response.data.sources.length : 0);

        if (typeof response.data.answer === 'string' && response.data.answer.length > 0) {
            console.log('SUCCESS: Backend is working correctly!');
        } else {
            console.log('FAILURE: Backend returned incomplete data.');
        }
    } catch (error) {
        console.error('ERROR:', error.response ? error.response.data : error.message);
    }
}

testBackend();
