import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './i18n';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Usamos flexbox para estructurar */}
        <Navbar />
        <main className="flex-grow"> {/* Se asegura de que el contenido crezca */}
          <Hero />
          <About />
          <Work />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
