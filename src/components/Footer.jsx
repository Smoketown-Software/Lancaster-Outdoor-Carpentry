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
              <span className="footer-logo-mark">D</span>
              <span>DAVON INC</span>
            </div>
            <p className="footer-tagline">
              Quality construction and building services.
              One man, one standard: built right.
            </p>
            <div className="footer-socials">
              {/* Facebook */}
              <a href="#" className="footer-social" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="footer-social" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="footer-social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
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
              <a href="#services" className="footer-link">Renovations</a>
              <a href="#services" className="footer-link">New Builds</a>
              <a href="#services" className="footer-link">Structural Work</a>
              <a href="#services" className="footer-link">Concrete &amp; Masonry</a>
              <a href="#services" className="footer-link">Decks &amp; Outdoor</a>
              <a href="#services" className="footer-link">Repairs</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {year} Davon Inc. All rights reserved.
          </div>
          <div className="footer-built">
            <span className="footer-built-dot" />
            Built with purpose
          </div>
        </div>
      </div>
    </footer>
  )
}
