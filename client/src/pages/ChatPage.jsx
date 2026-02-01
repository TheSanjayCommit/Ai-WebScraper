import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ChatInput from '../components/ChatInput';
import MessageList from '../components/MessageList';
import { Bot, Loader2 } from 'lucide-react';

export default function ChatPage() {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! I am your full-screen AI research assistant. Ask me anything!', sources: [] }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (question) => {
        if (!question.trim()) return;

        const newMessages = [...messages, { role: 'user', content: question }];
        setMessages(newMessages);
        setIsLoading(true);

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await axios.post(`${API_URL}/api/ask`, { question });
            const { answer, summary, sources } = response.data;

            setMessages(prev => [
                ...prev,
                { role: 'assistant', content: answer, summary, sources }
            ]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [
                ...prev,
                { role: 'assistant', content: 'Sorry, something went wrong. Please check the backend connection.', sources: [] }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen pt-20 bg-gray-900 text-gray-100">

            <div className="flex-1 overflow-y-auto w-full px-4 py-8 scrollbar-thin scrollbar-thumb-gray-700">
                <div className="max-w-4xl mx-auto space-y-6">
                    <MessageList messages={messages} />
                    {isLoading && (
                        <div className="flex gap-4 animate-pulse">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="space-y-3 flex-1">
                                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    <span>Deep diving into the web...</span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            <div className="border-t border-gray-800 bg-gray-900/95 backdrop-blur-sm p-4 sticky bottom-0">
                <div className="max-w-4xl mx-auto">
                    <ChatInput onSend={handleSendMessage} disabled={isLoading} />
                    <p className="text-center text-xs text-gray-500 mt-2">
                        AI Web Intelligence utilizes real-time scraping. Results may vary.
                    </p>
                </div>
            </div>
        </div>
    );
}
