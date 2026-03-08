export interface GardenEntry {
    id: string;
    title: string;
    date: string;
    tags: string[];
    summary: string;
    content: string; // supports basic HTML / markdown-like content
    externalUrl?: string;
}

export const gardenEntries: GardenEntry[] = [
    {
        id: "pipeline-idempotency",
        title: "Idempotency in Data Pipelines",
        date: "2026-02-25",
        tags: ["Data Engineering", "PySpark", "Delta Lake"],
        summary:
            "Exploring patterns and techniques for building idempotent data pipelines, including partition overwrite and Delta Lake MERGE operations.",
        content: `
      <h3>Why Idempotency Matters</h3>
      <p>In production data pipelines, failures are inevitable. Idempotency ensures that re-running a pipeline produces the same results — no duplicates, no missing data. This is crucial for data quality and operational reliability.</p>

      <h3>Key Patterns</h3>
      <ul>
        <li><strong>Partition Overwrite:</strong> Replace entire partitions on each run instead of appending. Simple and effective for batch workloads.</li>
        <li><strong>Delta Lake MERGE:</strong> Use SQL MERGE statements to upsert records, handling both inserts and updates in a single atomic operation.</li>
        <li><strong>Checkpointing:</strong> Track pipeline progress so that restarts pick up where they left off.</li>
      </ul>

      <h3>Takeaways</h3>
      <p>Start simple with partition overwrite for batch. Graduate to MERGE when you need row-level upserts. Always test your pipeline by running it twice and asserting identical outputs.</p>
    `,
        externalUrl: "#",
    },
    {
        id: "indexing-internals",
        title: "Database Indexing Internals",
        date: "2026-03-03",
        tags: ["Database", "B-Tree", "Performance"],
        summary:
            "A deep dive into how database indexes work under the hood — B-Trees, hash indexes, and their trade-offs.",
        content: `
      <h3>How Indexes Work</h3>
      <p>At their core, indexes are data structures that trade write performance for read speed. The most common type is the B-Tree, which maintains sorted data and allows searches, insertions, and deletions in O(log n) time.</p>

      <h3>B-Tree vs Hash Index</h3>
      <ul>
        <li><strong>B-Tree:</strong> Supports range queries, ordered traversal. The default choice for most databases.</li>
        <li><strong>Hash Index:</strong> O(1) exact lookups, but no range query support. Useful for equality-only predicates.</li>
      </ul>

      <h3>When to Index</h3>
      <p>Index columns that appear frequently in WHERE, JOIN, and ORDER BY clauses. But don't over-index — each index adds write overhead and storage cost.</p>
    `,
        externalUrl: "#",
    },
    {
        id: "distributed-kv-learnings",
        title: "Building a Distributed KV Store",
        date: "2026-01-15",
        tags: ["Distributed Systems", "Python", "System Design"],
        summary:
            "Lessons learned from building a distributed key-value store with sharding, replication, and hot/cold storage tiers.",
        content: `
      <h3>Architecture Decisions</h3>
      <p>The system uses consistent hashing for shard assignment and a two-tier storage model: frequently accessed keys in "hot" memory storage, older keys in "cold" disk storage.</p>

      <h3>Replication Strategy</h3>
      <p>Each shard is replicated to N-1 nodes using a primary-backup approach. Writes go to the primary and are asynchronously replicated to backups. This provides eventual consistency with low write latency.</p>

      <h3>Challenges</h3>
      <ul>
        <li>Handling node failures and shard rebalancing</li>
        <li>Managing consistency vs. availability trade-offs</li>
        <li>Efficient data migration between hot and cold tiers</li>
      </ul>
    `,
    },
    {
        id: "etl-vs-elt",
        title: "ETL vs ELT — When to Use Which",
        date: "2026-02-10",
        tags: ["Data Engineering", "Architecture", "Cloud"],
        summary:
            "Comparing Extract-Transform-Load and Extract-Load-Transform architectures for modern data platforms.",
        content: `
      <h3>ETL (Extract-Transform-Load)</h3>
      <p>Data is transformed before loading into the destination. Best when storage is expensive or data quality must be enforced upfront. Common in traditional data warehouse environments.</p>

      <h3>ELT (Extract-Load-Transform)</h3>
      <p>Raw data is loaded first, then transformed in the destination. Leverages the processing power of modern cloud data warehouses (BigQuery, Snowflake, Databricks). More flexible for iterative analysis.</p>

      <h3>My Recommendation</h3>
      <p>Use ELT when you have a capable destination system and want flexibility. Use ETL when you need strict data validation or are working with limited compute in the destination.</p>
    `,
    },
    {
        id: "docker-compose-local-dev",
        title: "Docker Compose for Local Dev Environments",
        date: "2026-01-28",
        tags: ["DevOps", "Docker", "Developer Experience"],
        summary:
            "Setting up reproducible local development environments using Docker Compose, including databases, caches, and app servers.",
        content: `
      <h3>Why Docker Compose?</h3>
      <p>Instead of installing PostgreSQL, Redis, and other services locally, define everything in a docker-compose.yml. Every team member gets an identical environment with a single command.</p>

      <h3>Key Tips</h3>
      <ul>
        <li>Use named volumes for database persistence across restarts</li>
        <li>Set up health checks so services start in the right order</li>
        <li>Use .env files for environment-specific configuration</li>
        <li>Add a Makefile for common commands (start, stop, reset, logs)</li>
      </ul>

      <h3>Example Stack</h3>
      <p>A typical stack: app (Node/Python), PostgreSQL, Redis, Adminer (DB GUI). Everything defined in ~30 lines of YAML.</p>
    `,
    },
];
