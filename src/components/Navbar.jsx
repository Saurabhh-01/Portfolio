// https://preline.co/docs/navbar.html#example

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    let lastScroll = window.pageYOffset || 0;
    let ticking = false;

    const onScroll = () => {
      const current = window.pageYOffset || 0;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // hide when scrolling down past 100px, show when scrolling up
          if (current > lastScroll && current > 100) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          lastScroll = current <= 0 ? 0 : current;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } bg-white/95 backdrop-blur-sm text-sm py-3 dark:bg-neutral-900/75 shadow-sm border-b border-gray-100 dark:border-neutral-800`}
    >
      <nav className="container mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <a
          href="#home"
          className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
          aria-label="Portfolio"
        >
          PORTFOLIO
        </a>
        <div className="flex flex-row items-center gap-5 mt-4 sm:justify-end sm:mt-0">
          <a
            href="#home"
            className={`font-medium text-sm sm:text-base focus:outline-none transition-colors duration-300 ${
              activeSection === 'home'
                ? 'text-blue-500 dark:text-blue-400'
                : 'text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500'
            }`}
          >
            HOME
          </a>
          <a
            href="#about"
            className={`font-medium text-sm sm:text-base focus:outline-none transition-colors duration-300 ${
              activeSection === 'about'
                ? 'text-blue-500 dark:text-blue-400'
                : 'text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500'
            }`}
          >
            ABOUT
          </a>
          <a
            href="#projects"
            className={`font-medium text-sm sm:text-base focus:outline-none transition-colors duration-300 ${
              activeSection === 'projects'
                ? 'text-blue-500 dark:text-blue-400'
                : 'text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500'
            }`}
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className={`font-medium text-sm sm:text-base focus:outline-none transition-colors duration-300 ${
              activeSection === 'contact'
                ? 'text-blue-500 dark:text-blue-400'
                : 'text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500'
            }`}
          >
            CONTACT
          </a>
        </div>
      </nav>
    </header>
  );
}
