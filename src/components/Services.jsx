import { useRevealStagger } from '../hooks/useReveal'
import './Services.css'

const services = [
  {
    title: 'Renovations',
    description:
      'Complete interior and exterior renovations. Kitchen remodels, bathroom upgrades, and whole-home transformations delivered with precision.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 21h18M9 21V9l-3 3V21M15 21V9l3 3v9M9 9l3-6 3 6" />
      </svg>
    ),
  },
  {
    title: 'New Builds',
    description:
      'Ground-up residential and light commercial construction. From foundation to finish, every phase handled with care and accountability.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 21V10l8-7 8 7v11H4zM9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Structural Work',
    description:
      'Framing, load-bearing modifications, and structural repairs. The backbone of every solid build, executed with engineering discipline.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 4h16v16H4zM4 12h16M12 4v16" />
      </svg>
    ),
  },
  {
    title: 'Concrete & Masonry',
    description:
      'Foundations, driveways, retaining walls, and flatwork. Durable surfaces built to withstand the test of time.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="0" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
  },
  {
    title: 'Decks & Outdoor',
    description:
      'Custom decks, pergolas, fencing, and outdoor living spaces. Extending your home with functional outdoor areas built to endure.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M2 22h20M4 22V12M20 22V12M2 12l10-9 10 9M8 22v-4h8v4" />
      </svg>
    ),
  },
  {
    title: 'Repairs & Maintenance',
    description:
      'From minor fixes to major repairs. Dependable service for keeping your property sound, safe, and well-maintained.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94L6.73 20.2a2 2 0 01-2.83-2.83l6.73-6.73A6 6 0 016.3 2.63l3.77 3.77" />
      </svg>
    ),
  },
]

export default function Services() {
  const gridRef = useRevealStagger()

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-header">
          <div className="section-label">What We Do</div>
          <h2 className="section-heading">
            Built with Purpose,<br />Delivered with Pride
          </h2>
          <p className="services-description">
            Every project gets the same commitment — careful planning,
            quality materials, and hands-on craftsmanship from start to finish.
          </p>
        </div>

        <div className="services-grid reveal-stagger" ref={gridRef}>
          {services.map((service, i) => (
            <div className="service-card reveal" key={service.title}>
              <span className="service-number">0{i + 1}</span>
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
