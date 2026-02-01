import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="pt-24 pb-12 px-4 max-w-6xl mx-auto space-y-16">
            {/* Hero Section */}
            <section className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-500 pb-2">
                    Unlock the Power of Web Intelligence
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    Get real-time answers, cited sources, and deep insights from across the web—powered by advanced AI and autonomous scraping.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link
                        to="/chat"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
                    >
                        Start Asking Now
                    </Link>
                    <a href="#features" className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-full font-semibold transition-all border border-gray-700">
                        Learn More
                    </a>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors backdrop-blur-sm">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-2xl">🌐</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">Real-Time Scraping</h3>
                    <p className="text-gray-400">Access the latest information from the web with our autonomous puppeteer-based engine.</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-teal-500/50 transition-colors backdrop-blur-sm">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">Groq-Powered AI</h3>
                    <p className="text-gray-400">Blazing fast inference using Llama 3 for immediate, conversational answers.</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-colors backdrop-blur-sm">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-2xl">🛡️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">Cited & Secure</h3>
                    <p className="text-gray-400">Every answer comes with transparent source citations. No black boxes.</p>
                </div>
            </section>
        </div>
    );
}
