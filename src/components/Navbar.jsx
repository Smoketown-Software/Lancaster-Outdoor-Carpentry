import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-logo">
          <span className="navbar-logo-mark">D</span>
          <span>DAVON INC</span>
        </a>

        <button
          className={`navbar-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-links ${open ? 'open' : ''}`}>
          <a href="#services" className="navbar-link" onClick={handleLinkClick}>Services</a>
          <a href="#about" className="navbar-link" onClick={handleLinkClick}>About</a>
          <a href="#contact" className="navbar-link" onClick={handleLinkClick}>Contact</a>
          <a href="#contact" className="navbar-cta" onClick={handleLinkClick}>Get a Quote</a>
        </div>
      </div>
    </nav>
  )
}
