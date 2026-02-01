import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 px-4 mt-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Brand Column */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                        AI Web Intelligence
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Empowering users with real-time, cited web intelligence powered by next-gen AI.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                            <Github className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-all">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Product Links */}
                <div>
                    <h4 className="font-semibold text-gray-100 mb-6">Product</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/chat" className="hover:text-blue-400 transition-colors">Start Chat</Link></li>
                        <li><Link to="/features" className="hover:text-blue-400 transition-colors">Features</Link></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">API Access</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h4 className="font-semibold text-gray-100 mb-6">Company</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-semibold text-gray-100 mb-6">Stay Updated</h4>
                    <p className="text-gray-400 text-sm mb-4">Get the latest AI trends directly in your inbox.</p>
                    <form className="space-y-2">
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>
                        <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white text-sm font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-all">
                            Subscribe <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-6xl mx-auto pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} AI Web Intelligence. Built with React, Groq, and Puppeteer.
            </div>
        </footer>
    );
}
