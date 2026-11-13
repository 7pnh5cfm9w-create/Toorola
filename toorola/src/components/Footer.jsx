import Logo from './Logo.jsx';
import { TOOLS, getToolPath } from '../data/tools.js';

const EXPLORE_LINKS = [
  { href: '/#categories', label: 'Categories' },
  { href: '/#popular', label: 'Popular tools' },
  { href: '/#new', label: 'Recently added' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p className="footer__blurb">
              Free online tools that are simple, fast and powerful. Everything runs in your
              browser.
            </p>
          </div>

          <nav aria-label="Tools">
            <h2 className="footer__heading">Tools</h2>
            <ul className="footer__list">
              {TOOLS.map((tool) => (
                <li key={tool.slug}>
                  <a href={getToolPath(tool)}>{tool.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explore">
            <h2 className="footer__heading">Explore</h2>
            <ul className="footer__list">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Toolora. All rights reserved.</p>
          <p>Free tools. No sign-up. Processed locally in your browser.</p>
        </div>
      </div>
    </footer>
  );
}