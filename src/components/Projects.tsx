import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-50 dark:bg-surface-900/50 transition-colors">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-mono">
                        Projects
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary-400/50 to-transparent" />
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-2xl">
                    Practical work spanning distributed systems, database internals, data
                    engineering, and full-stack development.
                </p>

                {/* Project Cards */}
                <div className="space-y-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group p-6 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-surface-800/50 card-glow transition-colors"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        {project.featured && (
                                            <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-primary-500 dark:text-primary-400 bg-primary-400/10 border border-primary-400/20 rounded-full">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-surface-700/50 rounded-md border border-black/5 dark:border-white/5"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-2 sm:mt-0 mt-4">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg border border-black/5 dark:border-white/5 transition-all"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            Source
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-primary-500 dark:text-primary-400 hover:text-white bg-primary-400/10 hover:bg-primary-400/20 rounded-lg border border-primary-400/20 transition-all"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                            Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
