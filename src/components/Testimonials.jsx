import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Tech Reviewer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The display is incredibly crisp, and the gesture controls feel like science fiction. A truly next-gen product."
    },
    {
      name: "Jane Smith", 
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "A beautiful blend of form and function. They're lightweight enough for all-day wear. Very good experience overall."
    },
    {
      name: "Mike Johnson",
      role: "Developer", 
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      quote: "Excellent support and great quality. The development SDK is robust and easy to work with. Highly recommended!"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Loved by Innovators</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card animate-on-scroll">
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <blockquote>"{testimonial.quote}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
