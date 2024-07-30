import React, { useState, useEffect } from 'react';
import './Getstarted.css'; // Import the CSS file

function Getstarted() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://www.firi.go.ug/images/fishing.jpg',
    'https://www.fao.org/images/newsroomlibraries/stories-images/54c8b3fd5d8c5a53bee7d03521463b2b.jpg?sfvrsn=7252b97e_10',
    'https://www.afdb.org/sites/default/files/styles/1700x900/public/a1-fisheries.jpg?itok=oNJaPAG0',
     ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="hero-section2">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide})` }}
        ></div>
      ))}
      <div className="content">
        <h1>Welcome To Kensoft Stores!!</h1>
        <p>Your one-stop store for all fishing equipment</p>
        <div className="buttons">
        <a href="/home"><button className="btn-get-started">Get Started</button></a>
<a href="/contact-us"><button className="btn-contact-us">Contact Us</button></a>
</div>
      </div>
    </div>
  );
}

export default Getstarted;
