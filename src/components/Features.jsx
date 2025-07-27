import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "💬",
      title: "Real-Time Translation",
      description: "Communicate effortlessly with real-time sign language and speech translation projected directly in your view."
    },
    {
      icon: "👋",
      title: "Gesture Input", 
      description: "Navigate menus, answer calls, and interact with apps using intuitive hand gestures, powered by advanced LiDAR sensors."
    },
    {
      icon: "🧠",
      title: "Heavy Processor with CORAL",
      description: "Experience lightning-fast performance and on-device AI processing thanks to the integrated Google Coral chip."
    }
  ];

  return (
    <section id="features" className="features-section section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">AI-Powered Features</h2>
        <p className="section-subtitle animate-on-scroll">
          Designed for seamless integration into your daily life.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card animate-on-scroll">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;