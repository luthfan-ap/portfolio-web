import { useEffect, useState, type ReactNode } from 'react';
import Navbar from './Navbar';
import ResearchProject from './ResearchProject';
import { Arrow } from './PortfolioArrow';

const greetings = ['Hi there!', 'Hai!', 'Bonjour!'];
const articles = [
  ['What really happens when you create an index?', 'Database internals', 'Mar 16, 2026', 'From table scans to B-trees, with a PostgreSQL experiment and the costs behind faster reads.', 'https://medium.com/towards-data-engineering/indexing-internals-what-really-happens-when-you-create-an-index-237ea548450d'],
  ['Message queues vs. pub/sub', 'System design', 'Mar 14, 2026', 'Distributing work and broadcasting events solve different problems. A closer look at the distinction.', 'https://medium.com/towards-data-engineering/message-queues-vs-pub-sub-stop-using-them-interchangeably-01ced86ed570'],
  ['The “rerun” problem in data pipelines', 'Data engineering', 'Feb 25, 2026', 'Why retries create duplicates, and how partition overwrite and Delta Lake MERGE help.', 'https://medium.com/towards-data-engineering/the-rerun-problem-idempotency-in-data-pipelines-32b061ee0ff4'],
];
const smallerProjects = [
  ['Safe pipeline reruns', 'Append, partition overwrite, and Delta Lake MERGE compared through working examples.', 'PySpark · Delta Lake', 'data-pipeline-idempotency'],
  ['Database indexing', 'A million-row PostgreSQL experiment comparing plans before and after an index.', 'Python · PostgreSQL', 'indexing-internals-demo'],
  ['Blog systems', 'Comparing centralized timelines with a subscriber-notification approach.', 'Java · SQLite', 'my-blog-system'],
  ['Read / write replication', 'Exploring separate read and write paths, heartbeats, and application leadership.', 'Python · PostgreSQL', 'master-slave-replication'],
];

function SectionTitle({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-4 mb-4"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-mono">{children}</h2><div className="h-px flex-1 bg-gradient-to-r from-primary-400/50 to-transparent" /></div>;
}

export default function ProfessionalPortfolio() {
  const [greeting, setGreeting] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setGreeting(value => (value + 1) % greetings.length);
        setVisible(true);
      }, 350);
    }, 3200);
    return () => window.clearInterval(interval);
  }, []);

  return <div className="portfolio">
    <Navbar />
    <main id="main" tabIndex={-1}>
      <section id="home" className="relative min-h-[82vh] flex items-center justify-center pt-16 hero-gradient overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-primary-500 dark:text-primary-400 text-lg font-medium mb-4 animate-fade-in-up"><span className="transition-opacity duration-300" style={{ opacity: visible ? 1 : 0 }}>{greetings[greeting]}</span></p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight animate-fade-in-up animate-delay-100">I’m <span className="text-primary-500 dark:text-primary-400">Luthfan Aryananda Purwito</span>, I build dependable software and data systems.</h1>
          <p className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">Information Systems graduate from ITS, with professional experience at Sampoerna and PLN.</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <a href="#projects" className="legacy-primary">View my work <Arrow down /></a>
            <a href="#experience" className="legacy-secondary">View experience <Arrow down /></a>

          </div>
          <a href="#experience" className="legacy-scroll animate-fade-in-up animate-delay-400"><span>Scroll down</span><svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 14-7 7-7-7M12 21V3" /></svg></a>
        </div>
      </section>

      <section id="experience" className="legacy-section"><div className="legacy-shell"><SectionTitle>Experience</SectionTitle><p className="legacy-lead">Professional work across quality engineering, business analysis, and internal software.</p>
        <div className="grid lg:grid-cols-2 gap-5">
          <article className="legacy-card"><header><div><h3>Sampoerna</h3><small>PT HM Sampoerna Tbk.</small></div><time>May 2026 — Present</time></header><h4>Software Quality Assurance Engineer Intern</h4><p>Testing critical journeys in B2B applications and making regression testing easier to repeat and maintain.</p><ul><li>Completed end-to-end QA for 47 backlog items across three sprints.</li><li>Expanded automated regression coverage by approximately 210 test cases using standardized locators, reusable AWS Lambda services, and automated reports.</li></ul><footer>Quality engineering · Test automation · AWS Lambda</footer></article>
          <article className="legacy-card"><header><div><h3>PLN</h3><small>PT PLN (Persero) UP3 Bekasi</small></div><time>Sep — Dec 2025</time></header><h4>Business Analyst Intern · Strategic Planning</h4><p>Translated business requirements into a centralized performance platform covering six operational units.</p><ul><li>Built KPI monitoring, historical analysis, and executive reporting with Laravel, React/TypeScript, and PostgreSQL.</li><li>Supported adoption through documentation, stakeholder training, and improvements based on user feedback.</li></ul><footer>Laravel · React / TypeScript · PostgreSQL · ArcGIS</footer></article>
        </div>
      </div></section>

      <section id="projects" className="legacy-section legacy-tint"><div className="legacy-shell"><SectionTitle>Selected Projects</SectionTitle><p className="legacy-lead">Recent systems work, from controlled data-pipeline research to storage engines built from first principles.</p>
        <ResearchProject />
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <article className="legacy-card system-card"><h3>Key-Value Storage System</h3><p>A Python storage experiment exploring sharding, replication, and the boundary between memory and disk.</p><div className="p-read-path"><span>Hot memory</span><Arrow /><span>Primary disk</span><Arrow /><span>Replica disk</span></div><p>A disk hit is promoted into memory. Writes reach both local disk copies on flush.</p><footer><span>Python · Protocol Buffers</span><a href="https://github.com/luthfan-ap/key-value-storage-system" target="_blank" rel="noopener noreferrer">View source <Arrow /></a></footer></article>
          <article className="legacy-card system-card"><h3>My Simple DB</h3><p>A small Java database built to understand how records are stored, queried, and assembled into a social timeline.</p><div className="p-record-path"><code>record</code><code>record</code><code>record</code><span>Read → deserialize → filter</span></div><p>Fixed-size row serialization and sequential SELECT filtering, implemented from scratch.</p><footer><span>Java · File storage</span><a href="https://github.com/luthfan-ap/my-simple-db" target="_blank" rel="noopener noreferrer">View source <Arrow /></a></footer></article>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-14 mb-5">More things I’ve explored</h3>
        <div className="grid sm:grid-cols-2 gap-4">{smallerProjects.map(([title, description, tech, repo]) => <a className="small-project" key={repo} href={`https://github.com/luthfan-ap/${repo}`} target="_blank" rel="noopener noreferrer"><span><strong>{title}</strong><Arrow /></span><p>{description}</p><small>{tech}</small></a>)}</div>
      </div></section>

      <section id="about" className="legacy-section"><div className="legacy-shell"><SectionTitle>About Me</SectionTitle>
        <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-center mt-12"><figure className="about-photo"><img src="/images/luthfan-hmsi.webp" width="720" height="959" loading="lazy" alt="Luthfan smiling in his HMSI jacket." /><figcaption>Luthfan Aryananda Purwito<span>Information Systems · ITS</span></figcaption></figure>
          <div className="max-w-2xl"><h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Curious about systems. Mindful of people.</h3><p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">I’m interested in what makes software dependable—and what makes it useful to the people who rely on it. That means understanding the data, asking better questions, and caring about implementation details.</p><p className="mt-5 text-slate-500 dark:text-slate-400 leading-relaxed">At PLN, that meant turning reporting needs into a working platform. At Sampoerna, it means thinking through user journeys and edge cases before release.</p><div className="about-facts"><div><strong>Institut Teknologi Sepuluh Nopember</strong><span>Bachelor of Information Systems · 2022–2026<br />Graduated cum laude · GPA 3.65 / 4.00</span></div><div><strong>People and leadership</strong><span>Coordinated 24 members across four divisions as Vice Head of Information Media at HMSI ITS.</span></div></div></div>
        </div>
      </div></section>

      <section id="knowledgeBase" className="legacy-section legacy-tint"><div className="legacy-shell"><SectionTitle>Thinking Out Loud.</SectionTitle><div className="writing-heading"><p>Technical notes and experiments written to make systems concepts easier to understand.</p><a href="https://medium.com/@luthfan-ap" target="_blank" rel="noopener noreferrer">All writing on Medium <Arrow /></a></div><div className="space-y-4">{articles.map(([title, topic, date, description, url]) => <a className="writing-card" key={url} href={url} target="_blank" rel="noopener noreferrer"><div><span>{topic}</span><time>{date}</time></div><div><h3>{title}<Arrow /></h3><p>{description}</p></div></a>)}</div></div></section>

      <section id="contact" className="legacy-contact"><div className="legacy-shell"><h2>Let’s build something useful.</h2><p>Have a role, a project, or an engineering question in mind? I’d be glad to connect.</p><a href="https://www.linkedin.com/in/luthfan-aryananda/" target="_blank" rel="noopener noreferrer" className="legacy-primary">Say hello on LinkedIn <Arrow /></a></div></section>
    </main>
    <footer className="legacy-footer"><div className="legacy-shell"><p>© {new Date().getFullYear()} Luthfan A.P.</p><div><a href="https://github.com/luthfan-ap" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://medium.com/@luthfan-ap" target="_blank" rel="noopener noreferrer">Medium</a><a href="#home">Back to top <Arrow /></a></div></div></footer>
  </div>;
}
