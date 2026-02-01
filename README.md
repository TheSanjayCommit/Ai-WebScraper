# AI Web Scraper & Intelligence App

A production-ready AI-powered web intelligence application.

## Features
- **Smart Search**: Uses SerpAPI/Google to find relevant information.
- **Intelligent Scraping**: Puppeteer-based scraping with `robots.txt` compliance.
- **AI Answers**: Uses OpenAI to synthesize answers with citations.
- **Modern UI**: React + Tailwind CSS with dark mode and glassmorphism.

## Project Structure
- `/client`: React Frontend (Vite)
- `/server`: Node.js Backend (Express)

## Prerequisites
- Node.js (v18+)
- API Keys:
    - [OpenAI API Key](https://platform.openai.com/)
    - [SerpAPI Key](https://serpapi.com/) (or Google Custom Search)

## Local Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Ai-WebScraper
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   # Create .env file
   cp .env.example .env 
   # Edit .env with your API keys
   ```
   Run the server:
   ```bash
   npm start
   # Runs on http://localhost:5000
   ```

3. **Frontend Setup**
   ```bash
   cd client
   npm install
   npm run dev
   # Runs on http://localhost:5173
   ```

4. **Usage**
   - Open the frontend in your browser.
   - Enter a question (e.g., "What are the latest breakthroughs in fusion energy?").
   - Wait for the AI to search, scrape, and answer.

## Deployment (Render)

### Backend (Web Service)
1. Create a new **Web Service** on Render.
2. Connect your repo.
3. Settings:
    - **Root Directory**: `server`
    - **Build Command**: `npm install`
    - **Start Command**: `node index.js`
    - **Environment Variables**:
        - `NODE_VERSION`: `18` (or higher)
        - `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD`: `true` (if using `puppeteer-core`, but for standard puppeteer, Render supports it natively if you add the Buildpack)
        - **IMPORTANT**: Add the **Chrome** buildpack if using Puppeteer.
            - Go to Environment -> Buildpacks -> Add Buildpack -> `https://github.com/puppeteer/puppeteer` (or just ensure a Node environment with Chrome libraries).
            - *Better approach for Render*: Use `puppeteer` and add an environment variable `PUPPETEER_CACHE_DIR` set to `/opt/render/project/.chrome`.
        - Add `OPEN_API_KEY`, `SEARCH_API_KEY`.

### Frontend (Static Site)
1. Create a new **Static Site** on Render.
2. Connect your repo.
3. Settings:
    - **Root Directory**: `client`
    - **Build Command**: `npm run build`
    - **Publish Directory**: `dist`
4. Add Environment Variables (if needed for build time, usually request URL is hardcoded or set via VITE_API_URL).
   - Update `client/src/App.jsx` to use `import.meta.env.VITE_API_URL` instead of localized localhost if deploying.

## License
MIT
