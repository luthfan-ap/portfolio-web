import { useState } from "react";
import { gardenEntries } from "../data/gardenEntries";

export default function Garden() {
    const [activeId, setActiveId] = useState(gardenEntries[0]?.id ?? "");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const activeEntry = gardenEntries.find((e) => e.id === activeId);

    // Get all unique tags
    const allTags = Array.from(
        new Set(gardenEntries.flatMap((e) => e.tags))
    ).sort();

    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredEntries = selectedTag
        ? gardenEntries.filter((e) => e.tags.includes(selectedTag))
        : gardenEntries;

    return (
        <section id="garden" className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono">
                        Digital Garden
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary-400/50 to-transparent" />
                </div>
                <p className="text-slate-400 mb-8 max-w-2xl">
                    My learning log — ongoing experiments, lab notes, and explorations.
                    Think of it as a living notebook of ideas and technical deep-dives.
                </p>

                {/* Tag filters */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setSelectedTag(null)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${selectedTag === null
                                ? "text-white bg-primary-400/20 border-primary-400/40"
                                : "text-slate-400 bg-transparent border-white/10 hover:border-white/20 hover:text-slate-300"
                            }`}
                    >
                        All
                    </button>
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() =>
                                setSelectedTag(selectedTag === tag ? null : tag)
                            }
                            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${selectedTag === tag
                                    ? "text-white bg-primary-400/20 border-primary-400/40"
                                    : "text-slate-400 bg-transparent border-white/10 hover:border-white/20 hover:text-slate-300"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Documentation Layout */}
                <div className="flex flex-col lg:flex-row gap-6 min-h-[500px]">
                    {/* Mobile sidebar toggle */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="lg:hidden flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 bg-surface-800 border border-white/5 rounded-lg"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        {sidebarOpen ? "Hide" : "Show"} entries
                    </button>

                    {/* Sidebar */}
                    <div
                        className={`lg:w-64 shrink-0 ${sidebarOpen ? "block" : "hidden lg:block"
                            }`}
                    >
                        <nav className="space-y-1 sticky top-20">
                            {filteredEntries.map((entry) => (
                                <button
                                    key={entry.id}
                                    onClick={() => {
                                        setActiveId(entry.id);
                                        setSidebarOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${activeId === entry.id
                                            ? "bg-primary-400/15 text-white border border-primary-400/30"
                                            : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                                        }`}
                                >
                                    <span className="font-medium block leading-snug">
                                        {entry.title}
                                    </span>
                                    <span className="text-xs text-slate-500 mt-1 block">
                                        {new Date(entry.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 rounded-xl border border-white/5 bg-surface-800/50 p-6 sm:p-8">
                        {activeEntry ? (
                            <div>
                                {/* Entry Header */}
                                <div className="mb-6 pb-6 border-b border-white/5">
                                    <h3 className="text-2xl font-bold text-white font-mono">
                                        {activeEntry.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-3 mt-3">
                                        <span className="text-sm text-slate-500">
                                            {new Date(activeEntry.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </span>
                                        <span className="text-slate-700">·</span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {activeEntry.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 text-[10px] font-medium text-primary-400 bg-primary-400/10 rounded-md"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                                        {activeEntry.summary}
                                    </p>
                                </div>

                                {/* Entry Content */}
                                <div
                                    className="prose prose-invert prose-sm max-w-none
                    prose-headings:text-white prose-headings:font-mono prose-headings:font-semibold
                    prose-p:text-slate-300 prose-p:leading-relaxed
                    prose-li:text-slate-300
                    prose-strong:text-primary-400
                    prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
                    prose-code:text-primary-300 prose-code:bg-surface-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                    prose-ul:list-disc prose-ul:pl-5"
                                    dangerouslySetInnerHTML={{ __html: activeEntry.content }}
                                />

                                {/* External link */}
                                {activeEntry.externalUrl && (
                                    <div className="mt-8 pt-6 border-t border-white/5">
                                        <a
                                            href={activeEntry.externalUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                                        >
                                            Read the full article
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
                                        </a>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-full text-slate-500">
                                <p>Select an entry from the sidebar to begin reading.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
