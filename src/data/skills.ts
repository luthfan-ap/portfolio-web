export interface SkillCategory {
    category: string;
    items: string[];
}

export const skills: SkillCategory[] = [
    {
        category: "Languages",
        items: ["SQL", "Python", "Java", "JavaScript", "PHP", "HTML5", "R", "TypeScript"],
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "BigQuery", "Neo4j", "Firebase"],
    },
    {
        category: "Tools & Platforms",
        items: ["Linux", "Git", "DBT", "Pandas", "Docker", "Google Cloud", "AWS", "Snowflake", "Apache Spark", "Apache Airflow", "Apache Kafka", "GitHub Actions", "Laravel", "NPM", "VS Code", "DBeaver"],
    },
    {
        category: "Concepts",
        items: ["System Design", "Database Internals", "Data Pipelines", "Distributed Systems", "DevOps"],
    },
];
