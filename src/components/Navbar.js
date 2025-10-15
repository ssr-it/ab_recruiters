import React, { useState } from "react";
import logo from "../assets/ab-logo.png";

export default function Navbar({ activePage, onNavClick }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const sections = [
        { label: "Home", id: "home" },
        { label: "About Us", id: "about" },
        { label: "Services", id: "services" },
        { label: "Contact", id: "contact" },
    ];

    // Ripple effect handler
    const handleClick = (e, section, idx, id) => {
        e.preventDefault();
        if (onNavClick) onNavClick(idx);

        // Ripple animation
        const btn = e.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
        circle.classList.add("ripple");
        const ripple = btn.getElementsByClassName("ripple")[0];
        if (ripple) ripple.remove();
        btn.appendChild(circle);

        // Scroll to section
        if (id) {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                window.location.hash = `#${id}`;
            }
        }
        setMenuOpen(false);
    };

    return (
        <nav className="bg-black shadow-md py-3 sticky top-0 z-50">
            <style>{`
        .nav-btn {
          position: relative;
          overflow: hidden;
          transition: color 0.25s, background 0.25s;
        }
        .nav-btn .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          background: linear-gradient(90deg, #33d424ff 0%, #a78bfa 100%);
          opacity: 0.5;
          pointer-events: none;
        }
        @keyframes ripple {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        .nav-btn.active, .nav-btn:focus {
          color: #fff !important;
          background: linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%);
          box-shadow: 0 2px 12px #9dce1544;
        }
                /* Navbar logo: increase size by ~50% (default) */
                .ab-logo {
                    width: 60px;
                    height: 60px;
                }
      `}</style>

            <div className="container mx-auto flex justify-between items-center px-4">
                {/* ✅ Logo + Name */}
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="AB Recruiters Logo"
                        className="ab-logo rounded-full border-2 border-blue-500 shadow-md object-contain"
                        style={{
                            // crop to remove outer blue ring; tweak percentage if needed
                            clipPath: "circle(44% at 50% 50%)",
                            WebkitClipPath: "circle(44% at 50% 50%)",
                        }}
                    />


                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                        AB Recruiters
                    </h1>
                </div>

                {/* Hamburger for mobile */}
                <button
                    className="md:hidden text-white focus:outline-none ml-2"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                menuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul
                    className="hidden md:flex space-x-2 lg:space-x-6"
                    role="menubar"
                    aria-label="Main navigation"
                >
                    {sections.map((section, idx) => (
                        <li key={section.label} role="none">
                            <a
                                href={`#${section.id}`}
                                className={`nav-btn px-3 py-2 rounded-lg font-medium transition-all duration-200 ${activePage === idx
                                    ? "active"
                                    : "text-gray-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-100 hover:text-blue-700"
                                    }`}
                                onClick={(e) => handleClick(e, section.label, idx, section.id)}
                                tabIndex={0}
                                role="menuitem"
                                aria-label={section.label}
                            >
                                {section.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu */}
                {menuOpen && (
                    <ul
                        className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-4 md:hidden shadow-lg animate-fadeIn"
                        role="menubar"
                        aria-label="Mobile navigation"
                    >
                        {sections.map((section, idx) => (
                            <li key={section.label} role="none" className="w-full text-center mb-2">
                                <a
                                    href={`#${section.id}`}
                                    className={`nav-btn block w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 ${activePage === idx
                                        ? "active"
                                        : "text-gray-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-100 hover:text-blue-700"
                                        }`}
                                    onClick={(e) =>
                                        handleClick(e, section.label, idx, section.id)
                                    }
                                    tabIndex={0}
                                    role="menuitem"
                                    aria-label={section.label}
                                >
                                    {section.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}