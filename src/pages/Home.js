import React from 'react'
import '../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/LOGO.svg'
import circle from '../images/Ellipse 1.png'
import instagram from '../images/image 14.png'


const Home = () => {
  const [email, setEmail] = useState('')
  const url = 'http://localhost:3700/waitlist/join'
  const redirect = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    const body = { email }
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).then(() => {
      redirect("/join")
    })
  }

  return (
    <div className="Home">
      <div className="navbar">
        <a href="#/">
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
        <h4>Join our exclusive waitlist today!!!</h4>
      </div>

      <div className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Email Address"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" onClick= {handleSubmit}> Get early access</button>
      </div>

      <div className="policy">
        <p>
          By clicking “Continue” you agree to our <br />{' '}
          <span className="privacy">Privacy Policy</span> and{' '}
          <span className="privacy">Terms of Use</span>
        </p>
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

export default Home
