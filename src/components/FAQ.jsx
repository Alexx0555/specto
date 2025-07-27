import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need a prescription?",
      answer: "Spectov Air glasses support detachable prescription lens frames. You can have your optometrist fit them with your specific prescription."
    },
    {
      question: "What is the warranty period?",
      answer: "We offer a standard 1-year limited warranty covering any manufacturing defects. An extended 2-year warranty is available for purchase."
    },
    {
      question: "Is the Spectov Adapter or Beam necessary?",
      answer: "For most modern devices with USB-C DisplayPort, no adapter is needed. For devices with Lightning or HDMI, the Spectov Adapter is required. The Spectov Beam is an optional accessory that provides extra battery life and processing power."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item animate-on-scroll ${activeIndex === index ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;