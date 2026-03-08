export interface SkillCategory {
    category: string;
    items: { name: string; level: number }[]; // level 0-100
}

export const skills: SkillCategory[] = [
    {
        category: "Languages",
        items: [
            { name: "Python", level: 85 },
            { name: "Java", level: 80 },
            { name: "TypeScript", level: 75 },
            { name: "SQL", level: 85 },
            { name: "JavaScript", level: 70 },
        ],
    },
    {
        category: "Data & Infrastructure",
        items: [
            { name: "PostgreSQL", level: 80 },
            { name: "Apache Spark", level: 70 },
            { name: "Docker", level: 75 },
            { name: "Delta Lake", level: 65 },
            { name: "Redis", level: 60 },
        ],
    },
    {
        category: "Frameworks & Tools",
        items: [
            { name: "React", level: 75 },
            { name: "Laravel", level: 70 },
            { name: "Git", level: 85 },
            { name: "Linux", level: 70 },
            { name: "REST APIs", level: 80 },
        ],
    },
    {
        category: "Concepts",
        items: [
            { name: "System Design", level: 75 },
            { name: "Database Internals", level: 80 },
            { name: "Data Pipelines", level: 75 },
            { name: "Distributed Systems", level: 70 },
            { name: "DevOps", level: 60 },
        ],
    },
];
