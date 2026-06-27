import { useReveal } from '../hooks/useReveal'
import './About.css'

const values = [
  { text: 'Honest, upfront pricing', icon: <svg viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
  { text: 'Quality materials', icon: <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
  { text: 'Clean, organized sites', icon: <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4zM4 12h16M12 4v16"/></svg> },
]

export default function About() {
  const contentRef = useReveal()
  const visualRef = useReveal()

  return (
    <section className="about section" id="about">
      <div className="container about-grid">
        <div className="about-visual" ref={visualRef}>
          <div className="about-media-frame reveal visible">
            <video
              className="about-video"
              aria-label="Lancaster Outdoor Carpentry project work video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src="/lancaster-carpentry-process.mp4" type="video/mp4" />
            </video>
            <div className="about-media-label">On-Site Craftsmanship</div>
          </div>
          <div className="about-accent-bar" />
        </div>

        <div className="about-content reveal" ref={contentRef}>
          <div className="section-label">About Lancaster Outdoor Carpentry</div>
          <h2 className="section-heading">
            Built with Care.<br />Finished to Last.
          </h2>
          <p className="about-text">
            Lancaster Outdoor Carpentry is built on a simple principle:
            do the work right, every time. Every project is approached with
            clear communication, dependable scheduling, and careful attention
            to the details that make outdoor spaces last.
          </p>
          <p className="about-text">
            From the first conversation to the final walkthrough, the focus
            stays on practical planning, quality materials, and craftsmanship
            that feels solid long after the work is complete.
          </p>

          <div className="about-values">
            {values.map((v) => (
              <div className="about-value" key={v.text}>
                <div className="about-value-icon">{v.icon}</div>
                <div className="about-value-text">{v.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
