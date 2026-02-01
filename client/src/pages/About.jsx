export default function About() {
    return (
        <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold text-gray-100">About Us</h1>
            <div className="prose prose-invert prose-lg text-gray-300">
                <p>
                    AI Web Intelligence is a pioneering project designed to bridge the gap between static knowledge and the dynamic, real-time web.
                    Traditional LLMs are frozen in time; our system breaks those chains by integrating autonomous web scraping directly into the conversation loop.
                </p>
                <p>
                    Our mission is to democratize access to high-quality, cited information. Whether you are a researcher, developer, or curious mind,
                    we provide the tools to get answers that are grounded in reality, not hallucination.
                </p>
                <h3>Our Tech Stack</h3>
                <ul className="grid grid-cols-2 gap-4 list-none pl-0 mt-8">
                    <li className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                        <span className="font-bold text-blue-400 block mb-1">Frontend</span>
                        React, Vite, Tailwind CSS
                    </li>
                    <li className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                        <span className="font-bold text-teal-400 block mb-1">Backend</span>
                        Node.js, Express
                    </li>
                    <li className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                        <span className="font-bold text-purple-400 block mb-1">AI Engine</span>
                        Groq (Llama 3.3)
                    </li>
                    <li className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                        <span className="font-bold text-orange-400 block mb-1">Scraping</span>
                        Puppeteer, Stealth Plugin
                    </li>
                </ul>
            </div>
        </div>
    );
}
