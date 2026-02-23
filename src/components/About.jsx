import { useReveal } from '../hooks/useReveal'
import './About.css'

const values = [
  { text: 'Owner on every job', icon: <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/></svg> },
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
          <div className="about-image-block about-image-block-main reveal visible">
            <svg viewBox="0 0 24 24">
              <path d="M2 22h20M4 22V10l8-7 8 7v12M9 22v-6h6v6" />
            </svg>
          </div>
          <div className="about-accent-bar" />
          <div className="about-badge">
            <div className="about-badge-number">15+</div>
            <div className="about-badge-text">Years</div>
          </div>
        </div>

        <div className="about-content reveal" ref={contentRef}>
          <div className="section-label">About Davon Inc</div>
          <h2 className="section-heading">
            One Builder.<br />One Standard.
          </h2>
          <p className="about-text">
            Davon Inc is a one-man operation built on a simple principle:
            do the work right, every time. When you hire Davon Inc, you
            get the owner on the job — no subcontractors you've never met,
            no runaround, no surprises.
          </p>
          <p className="about-text">
            With over 15 years of hands-on experience in construction and
            renovation, every project receives the same focused attention
            and personal accountability. From the first conversation to
            the final walkthrough, it's one point of contact, one standard
            of quality.
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
