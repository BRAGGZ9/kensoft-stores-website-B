import React, { useState } from 'react';
import './ChatBot.css';

const Chatbot = () => {

  const handleSendMessage = () => {
    const phoneNumber = "+256753801606"; 
    const message = "Hello Kensoft Stores!";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={handleSendMessage}>
        💬 WhatsApp Us !!
      </button>
    
    </div>
  );
};

export default Chatbot;
