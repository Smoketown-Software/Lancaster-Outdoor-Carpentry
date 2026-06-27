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
          <div className="hero-photo-accent hero-photo-accent-top" />
          <figure className="hero-photo-frame">
            <img
              src="/lancaster-deck-before-after.jpg"
              alt="Elevated wood deck and railing built on the back of a Lancaster area home"
              className="hero-photo"
            />
            <figcaption className="hero-photo-caption">
              <span>Recent Deck Rebuild</span>
              <strong>Lancaster Area</strong>
            </figcaption>
          </figure>
          <div className="hero-photo-accent hero-photo-accent-bottom" />
        </div>
      </div>
    </section>
  )
}
