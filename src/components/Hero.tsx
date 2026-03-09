import { useState, useEffect } from "react";

const greetings = ["Hi there!", "Hai!", "Bonjour!"];

export default function Hero() {
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setGreetingIndex((prev) => (prev + 1) % greetings.length);
                setFade(true);
            }, 400);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-16 hero-gradient"
        >
            {/* Dot pattern overlay */}
            <div className="absolute inset-0 dot-pattern opacity-40" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Greeting */}
                <p className="text-primary-500 dark:text-primary-400 text-lg font-medium mb-4 animate-fade-in-up">
                    <span
                        style={{
                            transition: "opacity 0.4s ease",
                            opacity: fade ? 1 : 0,
                        }}
                    >
                        {greetings[greetingIndex]}
                    </span>
                </p>

                {/* Name & Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight animate-fade-in-up animate-delay-100">
                    I'm{" "}
                    <span className="text-primary-500 dark:text-primary-400">
                        Luthfan Aryananda Purwito
                    </span>
                    , an Information Systems student.
                </h1>

                {/* Tagline */}
                <p className="mt-6 text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
                    Building robust systems at the intersection of{" "}
                    <span className="text-slate-700 dark:text-slate-200 font-medium">data engineering</span>,{" "}
                    <span className="text-slate-700 dark:text-slate-200 font-medium">systems architecture</span>,
                    and{" "}
                    <span className="text-slate-700 dark:text-slate-200 font-medium">software development</span>.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
                    <a
                        href="https://github.com/luthfan-ap"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View on GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/luthfan-aryananda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        Connect on LinkedIn
                    </a>
                    <a
                        href="https://medium.com/@luthfan-ap"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
                        Read my Medium Articles
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="mt-16 animate-fade-in-up animate-delay-400">
                    <a
                        href="#about"
                        className="inline-flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                        <span className="text-xs font-medium tracking-widest uppercase">
                            Scroll down
                        </span>
                        <svg
                            className="w-5 h-5 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
