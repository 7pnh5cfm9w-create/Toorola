export default function Section({ id, eyebrow, title, description, action, tone, children }) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      className={`section${tone === 'subtle' ? ' section--subtle' : ''}`}
      aria-labelledby={headingId}
    >
      <div className="container">
        <header className="section__header">
          <div>
            {eyebrow && <p className="eyebrow eyebrow--plain">{eyebrow}</p>}
            <h2 id={headingId} className="section__title">
              {title}
            </h2>
            {description && (
              <p className="section__desc" aria-live="polite">
                {description}
              </p>
            )}
          </div>
          {action}
        </header>
        {children}
      </div>
    </section>
  );
}