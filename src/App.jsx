import React, { createContext, useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

export const ThemeContext = createContext();

function App() {
  const particlesContainerRef = useRef(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const particlesOptions = useMemo(() => {
    return {
      background: {
        color: theme === 'dark' ? '#1c1c1c' : '#fafafa',
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 80,
          density: { enable: true, value_area: 800 },
        },
        color: { value: theme === 'dark' ? '#ffffff' : '#000000' },
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0.3, max: 0.6 },
          random: true,
          anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false },
        },
        size: {
          value: { min: 2.5, max: 3 },
          random: true,
          anim: { enable: true, speed: 2, size_min: 1, sync: false },
        },
        links: {
          enable: true,
          distance: 180,
          color: theme === 'dark' ? '#00BFFF' : '#1a73e8',
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: ['bubble', 'grab'],
          },
          onClick: {
            enable: false,
          },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 150,
            line_linked: {
              opacity: 0.2,
              color: '#00BFFF',
            },
          },
          bubble: {
            distance: 100,
            size: 6,
            opacity: 0.8,
            duration: 2,
            color: '#00BFFF',
          },
        },
      },
      detectRetina: true,
    };
  }, [theme]);

  useEffect(() => {
    const initParticles = async () => {
      if (!particlesContainerRef.current) return;
      try {
        await loadSlim(tsParticles);
        await tsParticles.load({
          id: 'tsparticles',
          element: particlesContainerRef.current,
          options: particlesOptions,
        });
      } catch (error) {
        console.error('tsParticles failed to load:', error);
      }
    };

    initParticles();

    return () => {
      const container = tsParticles.dom().find((c) => c.id === 'tsparticles');
      if (container) {
        container.destroy();
      }
    };
  }, [particlesOptions]);

  return (
    <div className="relative min-h-screen w-full bg-transparent">
      <div
        id="tsparticles"
        ref={particlesContainerRef}
        className="absolute inset-0 w-full h-full particles-canvas"
        style={{ minHeight: '100vh', zIndex: -10 }}
      />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Navbar />
        <Hero />
        <Education />
        <Projects />
        <AboutMe />
        <Skills />
        <Contact />

        {/* Fixed Hire Me Button */}
        <motion.a
          href="#contact"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`fixed bottom-8 right-8 z-50 px-6 py-3 rounded-full font-bold text-lg shadow-2xl cursor-pointer flex items-center gap-2 transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-[#b8f2e6] text-[#1c1c1c] hover:shadow-[0_0_30px_rgba(184,242,230,0.5)]'
              : 'bg-[#5e6472] text-white hover:shadow-[0_0_30px_rgba(94,100,114,0.4)]'
          }`}
          style={{ textDecoration: 'none' }}
          aria-label="Hire Me"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Hire Me
          <motion.span
            className={`absolute inset-0 rounded-full ${
              theme === 'dark' ? 'bg-[#b8f2e6]' : 'bg-[#5e6472]'
            }`}
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ zIndex: -1 }}
          />
        </motion.a>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;