export default function Contact() {
    return (
        <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-100 mb-8 text-center">Contact Us</h1>

            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700 shadow-xl">
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input type="text" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input type="email" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="john@example.com" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea rows="5" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="How can we help?"></textarea>
                    </div>

                    <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
