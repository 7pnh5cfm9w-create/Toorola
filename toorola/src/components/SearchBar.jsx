import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';

export default function SearchBar({ value, onChange }) {
  const inputRef = useRef(null);

  // Press "/" anywhere on the page to jump to the search box
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = e.target;
      const isTyping =
        el instanceof HTMLElement &&
        (el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName));
      if (isTyping) return;
      e.preventDefault();
      inputRef.current?.focus();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="tool-search" className="sr-only">
        Search tools
      </label>
      <Icon name="search" size={22} className="search__icon" />
      <input
        ref={inputRef}
        id="tool-search"
        className="search__input"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Escape' && onChange('')}
        placeholder="Search tools, e.g. “JSON” or “password”"
        autoComplete="off"
        spellCheck="false"
      />
      {value ? (
        <button
          type="button"
          className="search__clear"
          aria-label="Clear search"
          onClick={() => {
            onChange('');
            inputRef.current?.focus();
          }}
        >
          <Icon name="x" size={18} />
        </button>
      ) : (
        <kbd className="search__kbd" aria-hidden="true">
          /
        </kbd>
      )}
    </form>
  );
}