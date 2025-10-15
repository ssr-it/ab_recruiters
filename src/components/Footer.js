// src/components/Footer.js
import React from "react";
import logo from "../assets/ab-logo.png";
import { Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
            <style>{`
                /* Footer logo sizes (responsive) */
                .footer-logo { width: 164px; height: 164px; }
                @media (min-width: 768px) { .footer-logo { width: 182px; height: 182px; } }

                /* gentle spacing for each section */
                .footer-section { padding: 8px 0; }
                @media (min-width: 768px) { .footer-section { padding: 0; } }

                /* quick-link hover focus */
                .footer-link:focus { outline: 2px solid #60a5fa33; outline-offset: 2px; }
            `}</style>

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-start">
                {/* Left column: Logo + title */}
                <div className="footer-section flex items-start space-x-4">
                    <img
                        src={logo}
                        alt="AB Recruiters Logo"
                        className="footer-logo rounded-full border-2 border-blue-500 shadow-[0_6px_18px_rgba(59,130,246,0.25)] object-cover flex-shrink-0"
                        style={{ clipPath: "circle(38% at 50% 50%)", WebkitClipPath: "circle(38% at 50% 50%)" }}
                    />

                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-start md:gap-4">
                            <h3 className="text-2xl font-bold text-white">AB Recruiters</h3>
                        </div>
                        <p className="text-gray-400 text-sm mt-2 md:mt-1">Connecting talent with opportunities across IT, Healthcare and Manufacturing.</p>
                    </div>
                </div>

                {/* Middle column: Quick Links */}
                <div className="footer-section">
                    <h4 className="text-xl font-semibold text-white mb-3">Quick Links</h4>
                    <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-sm">
                        <li><a className="footer-link hover:text-blue-400 transition-colors" href="#home">Home</a></li>
                        <li><a className="footer-link hover:text-blue-400 transition-colors" href="#about">About Us</a></li>
                        <li><a className="footer-link hover:text-blue-400 transition-colors" href="#services">Services</a></li>
                        <li><a className="footer-link hover:text-blue-400 transition-colors" href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Right column: Social */}
                <div className="footer-section flex flex-col items-center md:items-end">
                    <h4 className="text-xl font-semibold text-white mb-3">Follow Us</h4>
                    <div className="flex items-center space-x-3">
                        <a href="https://www.linkedin.com/company/ab-recruiters1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition">
                            <Linkedin size={20} className="text-white" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-8">
                <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-5">
                    © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">AB Recruiters</span> | All Rights Reserved
                </div>
            </div>
        </footer>
    );
}
