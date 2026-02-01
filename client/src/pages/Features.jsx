import { Globe, Shield, Zap, Search } from 'lucide-react';

export default function Features() {
    const features = [
        {
            icon: <Globe className="w-8 h-8 text-blue-400" />,
            title: "Global Web Access",
            desc: "We don't just search; we read. Our scraper visits pages in real-time to extract the granular details that standard search snippets miss."
        },
        {
            icon: <Zap className="w-8 h-8 text-teal-400" />,
            title: "Lightning Fast AI",
            desc: "Powered by Groq's LPU inference engine, our AI processes complex contexts and generates responses in milliseconds."
        },
        {
            icon: <Shield className="w-8 h-8 text-purple-400" />,
            title: "Privacy Focused",
            desc: "We don't track your search history. Your queries are processed anonymously, and no personal data is stored."
        },
        {
            icon: <Search className="w-8 h-8 text-orange-400" />,
            title: "Citation Engine",
            desc: "Every claim is backed by a source. Clickable citations allow you to verify information instantly."
        }
    ];

    return (
        <div className="pt-24 pb-12 px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-100 mb-4">Powerful Features</h1>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Explore the capabilities that make AI Web Intelligence the smartest way to search.</p>

            <div className="grid md:grid-cols-2 gap-8">
                {features.map((f, i) => (
                    <div key={i} className="p-8 bg-gray-800/50 border border-gray-700 rounded-2xl flex gap-6 hover:bg-gray-800 transition-colors">
                        <div className="shrink-0 pt-1">{f.icon}</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-100 mb-2">{f.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
