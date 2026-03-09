import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import KnowledgeBase from "./components/KnowledgeBase";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-surface-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <KnowledgeBase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
