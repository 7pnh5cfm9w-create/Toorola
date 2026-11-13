import SearchBar from './SearchBar.jsx';
import Icon from './Icon.jsx';
import { TOOLS } from '../data/tools.js';

const SUGGESTIONS = ['JSON', 'Password', 'Base64', 'URL', 'Words'];

const TRUST_POINTS = [
  { icon: 'lock', text: 'Runs in your browser' },
  { icon: 'zap', text: 'Instant results' },
  { icon: 'shield', text: 'No sign-up needed' },
];

export default function Hero({ query, onQueryChange }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <p className="eyebrow">
          <span className="eyebrow__dot" aria-hidden="true" />
          {TOOLS.length} free tools, ready to use
        </p>

        <h1 id="hero-title" className="hero__title">
          <span className="hero__line">Free Online Tools.</span>
          <span className="hero__line text-gradient">Simple. Fast. Powerful.</span>
        </h1>

        <p className="hero__lead">
          Everything runs locally in your browser, so your text, data and passwords never leave
          your device.
        </p>

        <SearchBar value={query} onChange={onQueryChange} />

        <div className="chips" aria-label="Suggested searches">
          <span className="chips__label">Try:</span>
          {SUGGESTIONS.map((term) => (
            <button key={term} type="button" className="chip" onClick={() => onQueryChange(term)}>
              {term}
            </button>
          ))}
        </div>

        <ul className="trust">
          {TRUST_POINTS.map((point) => (
            <li key={point.text}>
              <Icon name={point.icon} size={18} />
              {point.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}