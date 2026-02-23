import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  const formRef = useReveal()
  const infoRef = useReveal()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, wire this to an email service or form backend
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section className="contact section" id="contact">
      <div className="container contact-grid">
        <div className="contact-info reveal" ref={infoRef}>
          <div className="section-label">Get In Touch</div>
          <h2 className="section-heading">
            Let's Talk About<br />Your Project
          </h2>
          <p className="contact-text">
            Ready to start building? Reach out for a free consultation
            and estimate. No pressure, no obligations — just a
            straightforward conversation about what you need.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Phone</div>
                <div className="contact-detail-value">(555) 123-4567</div>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">info@davoninc.com</div>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Service Area</div>
                <div className="contact-detail-value">Greater Metro Area</div>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form reveal" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input
                className="form-input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="(555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="service">Service Needed</label>
              <input
                className="form-input"
                type="text"
                id="service"
                name="service"
                placeholder="e.g. Kitchen Renovation"
                value={formData.service}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Project Details</label>
            <textarea
              className="form-textarea"
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="form-submit">
            {submitted ? 'Message Sent!' : 'Send Message'}
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}
