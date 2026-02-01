import { useState } from 'react';
import { Send, Search } from 'lucide-react';

export default function ChatInput({ onSend, disabled }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() && !disabled) {
            onSend(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input
                type="text"
                className="block w-full pl-10 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-lg"
                placeholder="Ask anything (e.g., 'Latest AI news')..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={disabled}
            />
            <button
                type="submit"
                disabled={disabled || !input.trim()}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <Send className="h-5 w-5 transform rotate-45" />
            </button>
        </form>
    );
}
