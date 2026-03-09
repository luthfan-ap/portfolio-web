import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Knowledge Base", href: "#knowledgeBase" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const sectionIds = navLinks.map((link) => link.href.slice(1));
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                }
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-surface-950/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 transition-colors">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="flex items-center gap-3 text-lg font-bold tracking-tight text-slate-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                        <svg className="h-7 w-auto" viewBox="0 0 571 1037" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M412.806 4.49685C433.286 -2.22792 455.686 -1.26672 472.006 6.41872C500.806 20.5087 515.526 54.4522 515.206 105.368C514.886 200.155 459.526 337.533 361.926 486.759C331.206 533.832 288.646 591.153 254.086 633.102L229.446 662.563L224.006 697.147C216.326 748.384 216.325 884.16 223.685 911.38C231.685 939.559 240.326 955.251 254.086 965.818C271.046 978.947 299.526 978.306 328.645 964.537C394.885 933.475 474.245 846.693 553.605 718.602C561.925 704.833 569.606 694.586 570.246 695.226C574.724 699.712 527.365 797.059 496.006 847.654C387.526 1023.14 264.966 1082.7 182.086 999.761C145.606 963.576 123.846 889.284 123.846 800.901C123.846 771.44 121.926 766.957 113.926 776.564C106.885 785.211 56.6451 826.84 32.6454 844.132C-5.75439 871.671 -9.91396 872.311 18.246 846.373C33.286 832.603 62.7258 804.424 83.8456 783.609L122.565 745.822L128.006 689.142C145.926 503.731 199.366 307.431 270.406 168.133C317.446 74.9468 366.406 18.9071 412.806 4.49685ZM464.326 64.7C456.006 53.8123 445.445 52.2109 432.645 60.2166C371.525 98.9645 303.686 277.971 251.846 537.675C244.806 573.54 239.365 605.243 239.685 607.804C242.566 622.214 345.606 462.101 387.846 377.561C441.926 269.325 470.085 178.7 470.725 111.133C471.045 78.1497 470.406 72.7054 464.326 64.7Z" />
                        </svg>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.slice(1);
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${isActive
                                        ? "text-slate-900 dark:text-white bg-black/5 dark:bg-white/5"
                                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                        {/* Social Icons + Theme Toggle */}
                        <div className="flex items-center gap-1 ml-4">
                            <a
                                href="https://github.com/luthfan-ap"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="p-2 text-slate-400 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/luthfan-aryananda/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="p-2 text-slate-400 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://medium.com/@luthfan-ap"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Medium"
                                className="p-2 text-slate-400 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                                </svg>
                            </a>
                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                            >
                                {theme === "dark" ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile: Theme Toggle + Hamburger */}
                    <div className="flex items-center gap-1 md:hidden">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                        >
                            {theme === "dark" ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 border-t border-black/5 dark:border-white/5 mt-2 pt-3">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.slice(1);
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${isActive
                                        ? "text-slate-900 dark:text-white bg-black/5 dark:bg-white/5"
                                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                        <a
                            href="https://github.com/luthfan-ap"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mx-4 mt-2 px-4 py-2.5 text-sm font-medium text-center text-primary-600 dark:text-white bg-primary-400/10 dark:bg-primary-400/15 border border-primary-400/20 dark:border-primary-400/30 rounded-lg"
                        >
                            GitHub →
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}
