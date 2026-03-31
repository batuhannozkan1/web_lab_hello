import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ProjectList from "./components/sections/ProjectList";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
  return (
    <div
      className="min-h-screen bg-white
        dark:bg-gray-950 text-gray-900
        dark:text-white"
    >
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only
          focus:absolute focus:top-0 focus:left-0
          bg-blue-800 text-white p-2 z-[60]"
      >
        Ana icerige atla
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <ProjectList />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
