import { useRevealStagger } from '../hooks/useReveal'
import './Services.css'

const services = [
  {
    title: 'Decks',
    description:
      'Custom deck builds, replacements, railings, and stairs designed for everyday outdoor living.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 18h18M5 14h14M7 10h10M6 18v3M12 18v3M18 18v3M4 14l3-4M20 14l-3-4" />
      </svg>
    ),
  },
  {
    title: 'Pergolas',
    description:
      'Freestanding and attached pergolas built with clean lines, sturdy framing, and shade-ready details.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 6h18M5 3h2M11 3h2M17 3h2M5 6v15M19 6v15M8 10h8M8 14h8M8 18h8" />
      </svg>
    ),
  },
  {
    title: 'Mini Barns',
    description:
      'Durable mini barns and storage buildings planned for practical access, weather protection, and long-term use.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 21V9l8-6 8 6v12H4zM8 21v-7h8v7M8 11h8M10 17h4M4 9h16" />
      </svg>
    ),
  },
]

export default function Services() {
  const gridRef = useRevealStagger()

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-intro">
          <div className="services-header">
            <div className="section-label">What We Do</div>
            <h2 className="section-heading">
              Decks, Pergolas,<br />Mini Barns
            </h2>
            <p className="services-description">
              Outdoor structures built with careful planning, quality materials,
              and hands-on craftsmanship.
            </p>
          </div>

          <figure className="services-feature">
            <img
              className="services-feature-image"
              src="/porch-roof-carpentry.jpg"
              alt="Custom wood porch roof framing over a brick home entryway"
            />
            <figcaption className="services-feature-caption">
              <span>Porch Roof Framing</span>
              <strong>Exterior Carpentry</strong>
            </figcaption>
          </figure>
        </div>

        <div className="services-grid reveal-stagger" ref={gridRef}>
          {services.map((service) => (
            <div className="service-card reveal" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
