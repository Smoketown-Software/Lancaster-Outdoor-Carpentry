import locLogo from '../assets/loc-logo-transparent.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-heading reveal visible">
            Built <span className="accent">Right.</span><br />
            Built to <span className="accent">Last.</span>
          </h1>
          <p className="hero-description">
            Pennsylvania carpenter, serving the Lancaster area since 2025.
            Decks, pergolas, and mini barns built with perseverance,
            integrity, and steadfast attention to the details.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </a>
            <a href="#services" className="btn-secondary">
              Our Services
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-block hero-block-1" />
          <div className="hero-block hero-block-2" />
          <div className="hero-block hero-block-3" />
          <div className="hero-block hero-block-circle" />
          <div className="hero-block-center">
            <img className="hero-block-center-logo" src={locLogo} alt="" aria-hidden="true" />
            <div className="hero-block-center-text">Lancaster Area Since 2025</div>
          </div>
        </div>
      </div>
    </section>
  )
}
