const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1',
});

async function generateAnswer(question, contexts) {
    if (!process.env.GROQ_API_KEY) {
        return { answer: "Groq API Key not provided.", summary: "Error: No API Key." };
    }

    const prompt = `
  You are an intelligent AI assistant.
  User Question: "${question}"
  
  Context from top search results:
  ${contexts.map((c, i) => `Source ${i + 1} (${c.url}): ${c.content.slice(0, 500)}...`).join('\n\n')}
  
  Instructions:
  1. Answer the user's question in a comprehensive, natural, and conversational manner (like ChatGPT).
  2. Integrate the summary and details into a single flowing response. Do not separate them into different blocks unless necessary for flow.
  3. Use Markdown formatting (headers, bold, lists) to organize the information.
  4. Cite your sources inline using brackets like [1], [2] corresponding to the source numbers provided in the context.
  5. Do NOT output JSON. Output raw Markdown text.
  `;

    try {
        const completion = await openai.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: "You are a helpful research assistant. Respond in Markdown." },
                { role: "user", content: prompt }
            ],
            // response_format: { type: "text" } // Default is text
        });

        return { answer: completion.choices[0].message.content, summary: null };
    } catch (error) {
        console.error("AI Service Error:", error);
        return { answer: "Failed to generate answer.", summary: "Error processing request." };
    }
}

module.exports = { generateAnswer };
