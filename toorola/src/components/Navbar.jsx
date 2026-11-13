import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import Icon from './Icon.jsx';

const LINKS = [
  { href: '/#categories', label: 'Categories' },
  { href: '/#popular', label: 'Popular' },
  { href: '/#new', label: 'New' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Logo />

        <nav id="primary-nav" className="navbar__nav" aria-label="Main" data-open={open}>
          <ul className="navbar__links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />
          <a className="btn btn--primary navbar__cta" href="/#popular">
            Explore tools
          </a>
          <button
            type="button"
            className="icon-btn navbar__burger"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}