import { skills } from "../data/skills";

export default function Skills() {
    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono">
                        My Skills
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary-400/50 to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((category) => (
                        <div key={category.category}>
                            <h3 className="text-lg font-semibold text-primary-400 mb-5">
                                {category.category}
                            </h3>
                            <div className="space-y-4">
                                {category.items.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-1.5">
                                            <span className="text-sm font-medium text-slate-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-xs text-slate-500 font-mono">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full h-2 bg-surface-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-700"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
