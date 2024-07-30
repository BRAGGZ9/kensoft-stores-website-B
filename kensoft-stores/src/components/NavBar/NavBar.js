import React from 'react'
import './NavBar.css';



function NavBar() {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
          <a  href='/'><img src='/icon.jpg' alt='Logo'/>  Kensoft Stores</a>
        </div>
        <ul className='navbar-menu'>
            <li><a href='/home'>Home</a></li>
            <li><a href='/about-us'>About Us</a></li>
            <li><a href='/contact-us'>Contact Us</a></li>
            <li><a href="http://127.0.0.1:8000/admin/login/?next=/admin/">Login</a></li>

        </ul>
    </nav>
  )
}

export default NavBar
