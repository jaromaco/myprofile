import React, { useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Tools from './components/Tools';
import Path from './components/Path';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Tools />
        <Path />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    document.getElementById('static-fallback')?.remove();
  }, []);

  return (
    <LanguageProvider>
      <div className="app">
        <Landing />
      </div>
    </LanguageProvider>
  );
}

export default App;
