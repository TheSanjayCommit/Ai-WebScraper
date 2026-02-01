import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

export default function Layout() {
    const location = useLocation();
    const isChatPage = location.pathname === '/chat';

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 font-sans">
            <Header />
            <main className="flex-1 w-full">
                <Outlet />
            </main>
            <Footer />
            {/* Show ChatWidget on all pages EXCEPT /chat */}
            {!isChatPage && <ChatWidget />}
        </div>
    );
}
