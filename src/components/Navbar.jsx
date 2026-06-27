import { useEffect, useState } from 'react'
import locLogo from '../assets/loc-logo-transparent.png'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('nav-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-logo">
          <img
            className="navbar-logo-image"
            src={locLogo}
            alt=""
            aria-hidden="true"
          />
          <span className="navbar-logo-text">
            <span className="navbar-logo-name">Lancaster Outdoor Carpentry</span>
            <span className="navbar-logo-services">Decks . Pergolas . Mini Barns</span>
          </span>
        </a>

        <button
          className={`navbar-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div id="primary-navigation" className={`navbar-links ${open ? 'open' : ''}`}>
          <a href="#services" className="navbar-link" onClick={handleLinkClick}>Services</a>
          <a href="#about" className="navbar-link" onClick={handleLinkClick}>About</a>
          <a href="#contact" className="navbar-link" onClick={handleLinkClick}>Contact</a>
          <a href="#contact" className="navbar-cta" onClick={handleLinkClick}>Get a Quote</a>
        </div>
      </div>
    </nav>
  )
}
