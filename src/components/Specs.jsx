import React from 'react';

const Specs = () => {
  const specCategories = [
    {
      title: "Display & Audio",
      specs: [
        { label: "Panel", value: "Micro OLED from SONY" },
        { label: "Resolution", value: "1920x1080 per eye" },
        { label: "Field of View", value: "46-Degree FoV" },
        { label: "Refresh Rate", value: "Up to 120Hz" },
        { label: "Audio", value: "Built-in stereo speakers" }
      ]
    },
    {
      title: "Connectivity & Power",
      specs: [
        { label: "Port", value: "USB-C with DisplayPort" },
        { label: "Charging", value: "5X Faster Charging" },
        { label: "Compatibility", value: "iPhone, Android, MacBook, Steam Deck, PC" },
        { label: "Battery", value: "All-day use with Spectov Beam" }
      ]
    },
    {
      title: "Build & Design",
      specs: [
        { label: "Length", value: "148.5 mm (5.83 in)" },
        { label: "Width", value: "60 mm (2.36 in)" },
        { label: "Height", value: "52 mm (2.05 in)" },
        { label: "Design", value: "Ergonomic with 3-position temple adjustment" }
      ]
    }
  ];

  return (
    <section id="specs" className="specs-section section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Technical Specifications</h2>
        <div className="specs-container">
          {specCategories.map((category, index) => (
            <div key={index} className="specs-column animate-on-scroll">
              <h3>{category.title}</h3>
              <ul>
                {category.specs.map((spec, specIndex) => (
                  <li key={specIndex}>
                    <strong>{spec.label}:</strong> {spec.value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;