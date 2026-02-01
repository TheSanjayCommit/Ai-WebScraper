import ReactMarkdown from 'react-markdown';
import { Bot, User } from 'lucide-react';
import SourceList from './SourceList';

export default function MessageList({ messages }) {
    return (
        <div className="space-y-6">
            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-teal-600'
                        }`}>
                        {msg.role === 'user' ? (
                            <User className="w-5 h-5 text-white" />
                        ) : (
                            <Bot className="w-5 h-5 text-white" />
                        )}
                    </div>

                    {/* Content */}
                    <div className={`flex-1 max-w-[80%] rounded-2xl p-4 shadow-md ${msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-gray-800 text-gray-100 border border-gray-700 rounded-tl-none'
                        }`}>
                        <div className="prose prose-invert prose-sm max-w-none">
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>


                        {msg.role === 'assistant' && msg.sources && (
                            <SourceList sources={msg.sources} />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
