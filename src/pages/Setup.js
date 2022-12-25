import React from 'react'
import '../App.css'
import logo from '../images/LOGO.svg'
import circle from '../images/Ellipse 1.png'
import instagram from '../images/image 14.png'

const Setup = () => {
    console.log("Tola");
    return (
        <div className="Home">
      <div className="navbar">
        <a href="/">
          <img src={logo} className="logo" alt="residoLogo" />
        </a>
        <img src={circle} className="circle" alt="circle" />
      </div>

      <div className="header">
        <h1>
          Be one of the very first to <span>Experience Resido!</span>
        </h1>
        <h4>
          Experience premium home management services that <br /> eliminate the
          added stress of maintaining your homes and facilities
        </h4>
      </div>

        <div>
            <h1>Yay! Thanks for Signing up to Join <span>Resido</span> .</h1>
        </div>

      <div className="social">
        <p>Follow us on Instagram</p>
        <a href="https://www.instagram.com/myresido_ng/">
          <img src={instagram} className="instagram" alt="" />
        </a>
      </div>
    </div>
    )
}

export default Setup
