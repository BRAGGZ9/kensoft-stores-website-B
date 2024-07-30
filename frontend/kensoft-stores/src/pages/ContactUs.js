import React, { useRef, useState, useEffect } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [formData, setFormData] = useState({
     name: '',
     number: '',
     email: '',
     message: ''
   });
   const slides = [
     '/images/30.jpg',
     '/images/31.jpg',
     '/images/3.jpg',
   ];

   useEffect(() => {
     const slideInterval = setInterval(() => {
       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
     }, 3000);

     return () => clearInterval(slideInterval);
   }, [slides.length]);

     const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({
       ...formData,
       [name]: value
     });
   };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const userName = formData.get('user_name');
    const userNumber = formData.get('user_number');
    const userEmail = formData.get('user_email');
    const message = formData.get('message');

    if (!userName || !userNumber || !userEmail || !message) {
      alert('Please fill out all fields.');
      return;
    }
    emailjs
      .sendForm('service_ynf4n7c', 'template_hlsq8hj', form.current, {
        publicKey: 'S-koLqVckenKsPo-C',
      })
      
            .then(response => {
                alert('Message sent successfully!');
                setFormData({ name: '', number: '', email: '', message: '' });
              })
              .catch(err => {
                console.error('Error sending message:', err);
                alert('Failed to send message. Please try again.');
              });
  };

  return (
    <div className="contact-us-container">
       <div className='cover-image'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
        <h1>Contact Us</h1>
    </div>
    <div className="contents">
         <div className="contact-form1">
           <h3>Get in Touch</h3>
           <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, your message is important to us. Please fill out the form below, and we'll get back to you as soon as possible.</p>
           <h3>Visit Us</h3>
           <p>Best Bargain Center-Nabugabo, Kampala-Uganda</p>
           <h3>Call Us</h3>
           <p>(+256) 753801606</p>
           <h3>Email Us</h3>
           <p>kensoft1986@gmail.com</p>
    </div>
    <div>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group"><label>Name</label>
          <input type="text" name="user_name" /></div>
          <div className="form-group"><label>Phone Number</label>
          <input type="tel" name="user_number" /></div>
        <div className="form-group"><label>Email</label>
          <input type="email" name="user_email" /></div>
        <div className="form-group"><label>Message</label>
        <textarea name="message"></textarea></div>
        <button type="submit" value="Send">Send</button>
      </form>
    </div>
    <div className="map-container">
               <iframe
                 src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kensoft%20Stores,%20Nabugabo%20Road,%20Kampala&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                 width="100%"
                 height="400"
                 frameBorder="0"
                 style= {{ border: 0 }} 
                 allowFullScreen=""
               ></iframe>
             </div>
    </div>
  </div>
  );
;}

export default ContactUs;
