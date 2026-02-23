import { useReveal } from '../hooks/useReveal'
import './Hero.css'

export default function Hero() {
  const headingRef = useReveal()
  const statsRef = useReveal()

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-label" ref={headingRef}>
            Construction &amp; Building Services
          </div>
          <h1 className="hero-heading reveal visible">
            Built <span className="accent">Right.</span><br />
            Built to <span className="accent">Last.</span>
          </h1>
          <p className="hero-description">
            Quality craftsmanship and dependable service for residential
            and commercial construction projects. One builder, one standard
            of excellence.
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

          <div className="hero-stats" ref={statsRef}>
            <div className="reveal visible">
              <div className="hero-stat-value">15+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="reveal visible">
              <div className="hero-stat-value">200+</div>
              <div className="hero-stat-label">Projects Completed</div>
            </div>
            <div className="reveal visible">
              <div className="hero-stat-value">100%</div>
              <div className="hero-stat-label">Owner-Operated</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-block hero-block-1" />
          <div className="hero-block hero-block-2" />
          <div className="hero-block hero-block-3" />
          <div className="hero-block hero-block-circle" />
          <div className="hero-block-center">
            <div className="hero-block-center-number">D</div>
            <div className="hero-block-center-text">Since 2011</div>
          </div>
        </div>
      </div>
    </section>
  )
}
