const stats = [
    { value: "2026", label: "Expected Graduation" },
    { value: "10+", label: "Projects Built" },
    { value: "3+", label: "Tech Articles" },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-surface-900/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono">
                        About Me
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary-400/50 to-transparent" />
                </div>

                <div className="max-w-3xl">
                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        I'm{" "}
                        <span className="text-white font-semibold">
                            Luthfan Aryananda Purwito
                        </span>
                        , an Information Systems undergraduate specializing in data engineering and systems architecture. I'm passionate about building efficient data solutions.
                    </p>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        I actively explore data engineering, database internals, and distributed systems — not just through coursework, but by building real systems. From crafting a database engine from scratch to designing distributed key-value stores, I learn by doing.
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                        When I'm not feeling into practical, I write technical articles in Medium
                        breaking down complex data engineering concepts, to track and share my knowledge and learnings.
                    </p>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-surface-800/50 card-glow"
                        >
                            <span className="text-3xl font-bold text-primary-400 font-mono">
                                {stat.value}
                            </span>
                            <span className="text-sm text-slate-400">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
