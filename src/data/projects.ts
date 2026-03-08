export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "kv-storage",
        title: "Key-Value Storage System",
        description:
            "A distributed key-value storage system with support for sharding, replication, and a two-tier storage architecture (hot/cold storage). Built to explore distributed systems fundamentals.",
        tags: ["Python", "Distributed Systems", "Sharding", "Replication"],
        githubUrl: "https://github.com/luthfan-ap/key-value-storage-system",
        featured: true,
    },
    {
        id: "blog-system",
        title: "Blog System — Centralized & Distributed",
        description:
            "A custom-built blog system with an integrated reader. Contains both a centralized and distributed (pub/sub) version, to understand different database system architectures.",
        tags: ["Java", "Pub/Sub", "Database Architecture", "System Design"],
        githubUrl: "https://github.com/luthfan-ap/my-blog-system",
        featured: true,
    },
    {
        id: "management-dashboard",
        title: "Internal Management Dashboard",
        description:
            "A full-stack internal management dashboard for corporate operations. Built with a modern stack featuring containerized deployment and a reactive frontend.",
        tags: ["Laravel", "React/TSX", "Docker", "PostgreSQL"],
        featured: true,
    },
    {
        id: "master-slave",
        title: "Master-Slave Replication",
        description:
            "An exploration of master-slave replication as a system design exercise. Demonstrates write/read splitting and data consistency patterns.",
        tags: ["Python", "System Design", "Replication", "Database"],
        githubUrl: "https://github.com/luthfan-ap/master-slave-replication",
    },
    {
        id: "simple-db",
        title: "My Simple DB",
        description:
            "A database engine built from scratch — implementing storage, indexing, and query processing to deeply understand how databases work under the hood.",
        tags: ["Java", "Database Internals", "B-Tree", "Storage Engine"],
        githubUrl: "https://github.com/luthfan-ap/my-simple-db",
    },
    {
        id: "data-pipeline",
        title: "Data Pipeline Research — ETL vs ELT",
        description:
            "Comparative research and implementation of ETL vs ELT pipeline architectures, with a focus on idempotency patterns and Delta Lake integration.",
        tags: ["Python", "PySpark", "Delta Lake", "Data Engineering"],
        featured: true,
    },
];
