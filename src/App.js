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
      <div>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
