import { useRef, useState } from 'react'
import 'altcha'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function Contact() {
  const formRef = useReveal()
  const infoRef = useReveal()
  const altchaRef = useRef(null)

  const [formData, setFormData] = useState(initialFormData)
  const [formStatus, setFormStatus] = useState({
    type: 'idle',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const resetAltcha = () => {
    altchaRef.current?.reset?.()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: 'idle', message: '' })

    const submittedForm = new FormData(e.currentTarget)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          website: submittedForm.get('website') || '',
          altcha: submittedForm.get('altcha') || '',
        }),
      })
      const result = await response.json().catch(() => null)

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || 'Unable to send your message right now.')
      }

      setFormData(initialFormData)
      resetAltcha()
      setFormStatus({
        type: 'success',
        message: 'Message sent. We will be in touch soon.',
      })
    } catch (error) {
      resetAltcha()
      setFormStatus({
        type: 'error',
        message: error instanceof Error
          ? error.message
          : 'Unable to send your message right now.',
      })
    } finally {
      setIsSubmitting(false)
    }
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
            and estimate. No pressure, no obligations, just a straightforward
            conversation about what you need.
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
                <a className="contact-detail-value" href="tel:17177251461">(717) 725-1461</a>
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
                <a className="contact-detail-value" href="mailto:lancasteroutdoorcarpentry@gmail.com">
                  lancasteroutdoorcarpentry@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Instagram</div>
                <a
                  className="contact-detail-value"
                  href="https://www.instagram.com/lancaster.outdoor.carpentry/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noreferrer"
                >
                  @lancaster.outdoor.carpentry
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form reveal" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex="-1"
              autoComplete="off"
            />
          </div>

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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="service">Service Needed</label>
              <input
                className="form-input"
                type="text"
                id="service"
                name="service"
                placeholder="e.g. Deck, pergola, or mini barn"
                value={formData.service}
                onChange={handleChange}
                disabled={isSubmitting}
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
              disabled={isSubmitting}
              required
            />
          </div>

          <div className="form-verification">
            <altcha-widget
              ref={altchaRef}
              challenge="/api/altcha"
              name="altcha"
              type="checkbox"
            ></altcha-widget>
          </div>

          <div
            className={`form-status form-status-${formStatus.type}`}
            aria-live="polite"
          >
            {formStatus.message}
          </div>

          <button type="submit" className="form-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}
