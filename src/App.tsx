import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Garden from "./components/Garden";
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
        <Garden />
      </main>
      <Footer />
    </div>
  );
}

export default App;
