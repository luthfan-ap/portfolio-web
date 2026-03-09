import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import KnowledgeBase from "./components/KnowledgeBase";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-surface-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
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
    </ThemeProvider>
  );
}

export default App;
