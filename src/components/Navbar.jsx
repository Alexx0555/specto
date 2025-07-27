import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header id="main-header" className={`navbar ${isScrolled ? 'sticky' : ''}`}>
      <nav className="container navbar-content">
        <a href="#" className="logo">Spectov</a>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#specs">Specs</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <div className="header-actions">
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
          >
            <span className="icon-sun">☀️</span>
            <span className="icon-moon">🌙</span>
          </button>
          <a href="#" className="btn btn-secondary">Buy Now</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

