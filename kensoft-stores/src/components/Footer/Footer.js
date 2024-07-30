import React from 'react'
import './Footer.css'
import Chatbot from '../ChatBot/ChatBot'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-contact">
            <h4>CONTACT US</h4>
            <p>Phone: (+256) 753801606</p>
            <p>Email: kensoft1986@gmail.com</p>
            <p>Location: Best Bargain Center-Nabugabo, Kampala-Uganda</p>
            <p>Hours: Mon-Sat, 9am-5pm</p>
        </div>
        <div className="footer-links">
            <h4>QUICK LINKS</h4>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-of-use">Terms of Use</a></li>
            </ul>
        </div>
        <div className="footer-social">
            <h4>FOLLOW US</h4>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Kensoft Stores. All rights reserved.</p>
        </div>
        <Chatbot />
    </footer>
  )
}

export default Footer
