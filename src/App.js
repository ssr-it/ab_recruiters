import { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    const [darkMode, setDarkMode] = useState(() => window.localStorage.getItem("theme") === "dark");
    const [page, setPage] = useState(0);

    const sectionIds = ["home", "about", "services", "contact"];
    const totalPages = sectionIds.length;

    // Apply dark/light theme on load or toggle
    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        window.localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    // Scroll tracking for active section
    useEffect(() => {
        const handleScroll = () => {
            for (let i = 0; i < sectionIds.length; i++) {
                const el = document.getElementById(sectionIds[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setPage(i);
                        return;
                    }
                }
            }
            setPage(0);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (idx) => {
        setPage(idx);
        const el = document.getElementById(sectionIds[idx]);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            window.location.hash = `#${sectionIds[idx]}`;
        }
    };

    return (
        <main
            className={`min-h-screen w-full font-sans transition-colors duration-500 ${darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"
                }`}
        >
            {/* Dark Mode Toggle Button */}
            <button
                className="fixed top-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-pink-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform text-sm sm:text-base"
                onClick={() => setDarkMode((dm) => !dm)}
                aria-label="Toggle dark mode"
            >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

            {/* Navbar with Logo */}
            <Navbar
                activePage={page}
                onNavClick={handleNavClick}
            />

            {/* Main Sections */}
            <Home />
            <About />
            <Services />
            <Contact />

            {/* Footer with Page Indicator */}
            <Footer page={page} totalPages={totalPages} />
        </main>
    );
}

export default App;
