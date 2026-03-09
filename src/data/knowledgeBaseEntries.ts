export interface Entry {
  id: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string; // supports basic HTML / markdown-like content
  externalUrl?: string;
}

export const knowledgeBaseEntries: Entry[] = [
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
      <p>Start simple with partition overwrites for batch workloads, and graduate to MERGE for complex upserts. Always design your architecture for failure so that your pipeline is resilient enough to handle a "rerun" at 2 AM without human intervention.</p>
    `,
    externalUrl: "https://medium.com/towards-data-engineering/the-rerun-problem-idempotency-in-data-pipelines-32b061ee0ff4",
  },
  {
    id: "indexing-internals",
    title: "Database Indexing Internals",
    date: "2026-03-03",
    tags: ["Database", "B-Tree", "Performance", "PostgreSQL"],
    summary:
      "A deep dive into how database indexes work under the hood — B-Trees and their trade-offs.",
    content: `
      <h3>How Indexes Work</h3>
      <p>At their core, indexes are data structures that trade write performance for read speed. The most common type is the B-Tree, which maintains sorted data and allows searches, insertions, and deletions in O(log n) time.</p>

      <h3>Why It Speeds Up Reads</h3>
      <p>Instead of a linear $O(n)$ scan that checks every row, the B-Tree allows for $O(\log n)$ complexity. By navigating a balanced tree, the database can eliminate half of the remaining search space at every step, allowing it to jump directly to the data it needs.</p>
      
      <h3>No Free Lunch</h3>
      <p>While an index makes reads 10x faster, it makes every future INSERT, UPDATE, and DELETE more expensive. The database must now maintain the tree balance and split pages for every write operation. You haven't made the system universally faster; you've simply shifted the cost from the reader to the writer.</p>

      <h3>Benchmark Results</h3>
      <p>I ran a simple benchmark on a table with 1,000,000 rows in PostgreSQL. Without an index, a query on an email column took 2167.280 milliseconds. With an index, it took 1.241 milliseconds.</p>
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
    id: "mewc",
    title: "Keyboard Over Mouse: Lessons from the Microsoft Excel World Championship (MEWC)",
    date: "2026-01-23",
    tags: ["Microsoft Excel", "Productivity", "Shortcuts"],
    summary:
      "Exploring the 'No-Mouse' philosophy and essential efficiency techniques observed from the world’s fastest financial modelers.",
    content: `
      <h3>Why Keyboard Mastery Matters</h3>
      <p>Watching the MEWC (Microsoft Excel World Championship) late at night on YouTube reveals a clear truth: the mouse is a bottleneck. For top-tier professionals, speed isn't just about showing off—it’s about maintaining a flow state. By shifting to a keyboard-centric workflow, you reduce cognitive load and handle data with the precision of a competitive gamer.</p>

      <h3>Key Techniques</h3>
      <ul>
        <li><strong>Rapid Navigation:</strong> Use Ctrl + Arrow Keys to jump between data boundaries and Ctrl + Shift + Arrow Keys to select massive ranges in milliseconds.</li>
        <li><strong>Structural Control:</strong> Master Shift + Space and Ctrl + Space for row and column selection, combined with Ctrl + (+/-) for lightning-fast insertions and deletions.</li>
        <li><strong>The Power of F2:</strong> Eliminate the double-click. Use F2 to enter cell edit mode instantly, keeping your hands on the home row.</li>
        <li><strong>Instant Analysis:</strong> Use Alt + = for AutoSum—the quintessential shortcut for quick data aggregation.</li>
      </ul>

      <h3>Takeaways</h3>
      <p>The path to Excel mastery starts by physically moving your mouse away from your desk for an hour a day. Start with the "No-Mouse" rule for basic navigation, and gradually incorporate functional shortcuts until your keyboard becomes an extension of your thought process.</p>
    `,
    externalUrl: "https://medium.com/@luthfan-ap/keyboard-over-mouse-lessons-from-the-microsoft-excel-world-championship-mewc-01618a05da24",
  },
  {
    id: "sawit-db",
    title: "I Tried SawitDB: The Viral Open-Source Database Based on Palm Oil",
    date: "2026-02-15",
    tags: ["Database", "Open Source", "Software Engineering"],
    summary:
      "A hands-on exploration of a viral Indonesian project that turned a palm oil meme into a fully functional, SQLite-style database engine.",
    content: `
      <h3>What is SawitDB?</h3>
      <p>What started as a viral "shitpost" on social media turned out to be a real, usable software project. SawitDB is an open-source database built on a chaotic philosophy inspired by Indonesian palm oil plantations, complete with its own unique query language. It bridges the gap between internet humor and serious systems programming.</p>

      <h3>Agricultural Query Language (AQL)</h3>
      <p>Forget standard SQL; SawitDB uses AQL, where the vocabulary is derived from the daily life of a local landlord:</p>
      <ul>
        <li><strong>TANAM (Plant):</strong> Used instead of INSERT to add data.</li>
        <li><strong>PANEN (Harvest):</strong> Used instead of SELECT to retrieve data.</li>
        <li><strong>BAKAR LAHAN (Burn Land):</strong> The hilarious equivalent of a DROP TABLE command.</li>
        <li><strong>LIHAT WILAYAH:</strong> Used to show all databases in the system.</li>
      </ul>

      <h3>Technical Internals</h3>
      <p>Despite the humor, the engine isn't just a simple JSON wrapper. It implements legitimate database concepts, including B-Trees for indexing and Write-Ahead Logging (WAL) for data persistence. It handles basic CRUD operations and ensures that data survives even if the server process is killed.</p>

      <h3>Takeaways</h3>
      <p>While you probably shouldn't use it for a production-level startup or a final thesis, SawitDB proves that complex topics like ACID compliance can be learned through fun, community-driven side projects. It’s a reminder that software engineering doesn't always have to be serious to be impressive.</p>
    `,
    externalUrl: "https://medium.com/@luthfan-ap/i-tried-sawitdb-the-viral-open-source-database-based-on-palm-oil-81562495129e",
  }
];
