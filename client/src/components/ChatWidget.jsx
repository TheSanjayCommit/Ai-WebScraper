import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Bot, Loader2, X, MessageSquare } from 'lucide-react';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! I can search the web for you. What would you like to know?', sources: [] }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSendMessage = async (question) => {
        if (!question.trim()) return;

        // Add User Message
        const newMessages = [...messages, { role: 'user', content: question }];
        setMessages(newMessages);
        setIsLoading(true);

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await axios.post(`${API_URL}/api/ask`, { question });
            const { answer, summary, sources } = response.data;

            // Add AI Message
            setMessages(prev => [
                ...prev,
                {
                    role: 'assistant',
                    content: answer,
                    summary,
                    sources
                }
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
        <>
            {/* Toggle Button */}
            {!isOpen && (
                <button
                    id="chat-widget-trigger"
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-105"
                >
                    <MessageSquare className="w-6 h-6" />
                </button>
            )}

            {/* Widget Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[450px] h-[600px] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-gray-800/90 backdrop-blur p-4 flex items-center justify-between border-b border-gray-700">
                        <div className="flex items-center gap-2">
                            <Bot className="w-5 h-5 text-blue-400" />
                            <h2 className="font-semibold text-gray-100">AI Assistant</h2>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700">
                        <MessageList messages={messages} />
                        {isLoading && (
                            <div className="flex gap-4 animate-pulse">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                    <Bot className="w-5 h-5 text-blue-400" />
                                </div>
                                <div className="space-y-3 flex-1">
                                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <Loader2 className="w-3 h-3 animate-spin" />
                                        <span>Analyzing web content...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-gray-800/50 border-t border-gray-700">
                        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
                        <p className="text-center text-[10px] text-gray-500 mt-2">
                            AI can make mistakes. Check important info.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
