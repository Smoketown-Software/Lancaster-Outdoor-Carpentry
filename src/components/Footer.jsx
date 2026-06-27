import locLogo from '../assets/loc-logo-transparent.png'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                className="footer-logo-image"
                src={locLogo}
                alt="Lancaster Outdoor Carpentry"
              />
            </div>
            <p className="footer-tagline">
              Pennsylvania carpenter serving the Lancaster area since 2025.
              Decks, pergolas, and mini barns built with perseverance,
              integrity, and steadfast workmanship.
            </p>
            <div className="footer-contact">
              <a className="footer-contact-link" href="tel:17177251461">(717) 725-1461</a>
              <a className="footer-contact-link" href="mailto:lancasteroutdoorcarpentry@gmail.com">
                lancasteroutdoorcarpentry@gmail.com
              </a>
            </div>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/lancaster.outdoor.carpentry/?utm_source=ig_web_button_share_sheet"
                className="footer-social"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="footer-column-title">Navigation</div>
            <div className="footer-links">
              <a href="#hero" className="footer-link">Home</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          {/* Services links */}
          <div>
            <div className="footer-column-title">Services</div>
            <div className="footer-links">
              <a href="#services" className="footer-link">Decks</a>
              <a href="#services" className="footer-link">Pergolas</a>
              <a href="#services" className="footer-link">Mini Barns</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {year} Lancaster Outdoor Carpentry. All rights reserved.
          </div>
          <div className="footer-built">
            <span className="footer-built-dot" />
            Perseverance. Integrity. Steadfastness.
          </div>
        </div>
        <div className="footer-credit">
          <a
            className="footer-credit-link"
            href="https://smoketownsoftware.com"
            target="_blank"
            rel="noreferrer"
          >
            Website by Smoketown Software Solutions
          </a>
        </div>
      </div>
    </footer>
  )
}
