import { skills } from "../data/skills";

export default function Skills() {
    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-mono">
                        My Skills
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary-400/50 to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {skills.map((category) => (
                        <div key={category.category}>
                            <h3 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg hover:border-primary-400/40 hover:text-primary-600 dark:hover:text-primary-300 hover:bg-primary-400/5 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
