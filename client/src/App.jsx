import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ChatPage from './pages/ChatPage';
import About from './pages/About';
import Features from './pages/Features';
import Privacy from './pages/Privacy';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="chat" element={<ChatPage />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="features" element={<Features />} />
                    <Route path="privacy" element={<Privacy />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
