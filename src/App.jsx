import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Achievements />
        <footer id="contact" className="border-t border-gray-200 py-10 mt-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
            <p>
              Reach me at sandeshdevaiahpp01@gmail.com · 9008027802 · LinkedIn: sandesh-devaiah
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
