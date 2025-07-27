import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="animate-on-scroll">See the World, Reimagined.</h1>
          <p className="animate-on-scroll">
            Empowering communication and interaction with AI-driven augmented reality. 
            The Spectov Air glasses bring your digital world to life.
          </p>
          <div className="hero-buttons animate-on-scroll">
            <a href="#" className="btn btn-primary">Order Now</a>
            <a href="#features" className="btn btn-outline">Learn More &rarr;</a>
          </div>
        </div>
        <div className="hero-image animate-on-scroll">
          <img src="https://i.imgur.com/3gXpVJt.png" alt="Sleek and modern Spectov Air augmented reality glasses." />
        </div>
      </div>
    </section>
  );
};

export default Hero;