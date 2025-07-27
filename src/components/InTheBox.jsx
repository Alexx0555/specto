import React from 'react';

const InTheBox = () => {
  const boxItems = [
    {
      image: "https://i.imgur.com/3gXpVJt.png",
      name: "Spectov Air Glasses"
    },
    {
      image: "https://i.imgur.com/uN1N9fD.png", 
      name: "Protective Case"
    },
    {
      image: "https://i.imgur.com/pCFJmP3.png",
      name: "USB-C Cable"
    },
    {
      image: "https://i.imgur.com/qEaV8Oa.png",
      name: "Cleaning Cloth"
    }
  ];

  return (
    <section id="in-the-box" className="in-the-box-section section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">What's in the Box?</h2>
        <div className="box-items-grid">
          {boxItems.map((item, index) => (
            <div key={index} className="box-item animate-on-scroll">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InTheBox;