import React, { useCallback, useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Tools from './components/Tools';
import Path from './components/Path';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function Landing() {
  const [hasProjects, setHasProjects] = useState(false);
  const onProjectsChange = useCallback((value) => {
    setHasProjects(Boolean(value));
  }, []);

  return (
    <>
      <Header hasProjects={hasProjects} />
      <main>
        <Hero />
        <Services />
        <Process />
        <Tools />
        <Path />
        <Projects onProjectsChange={onProjectsChange} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Landing />
      </div>
    </LanguageProvider>
  );
}

export default App;
