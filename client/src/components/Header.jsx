import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-gray-800/80 backdrop-blur-md border-b border-gray-700 z-50 px-4 py-3">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Bot className="w-8 h-8 text-blue-400" />
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent hidden sm:block">
                        AI Web Intelligence
                    </h1>
                </Link>

                <nav className="flex items-center gap-6">
                    <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Home
                    </Link>
                    <Link to="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
