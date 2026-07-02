import './ScriptureQuote.css'

export default function ScriptureQuote() {
  return (
    <section className="scripture-quote" aria-labelledby="scripture-quote-text">
      <div className="container">
        <figure className="scripture-quote-panel">
          <div className="scripture-quote-mark" aria-hidden="true">"</div>
          <blockquote id="scripture-quote-text" className="scripture-quote-text">
            Whatever you do, work at it with all your heart,
            as working for the Lord, not for human masters.
          </blockquote>
          <figcaption className="scripture-quote-reference">
            Colossians 3:23
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
