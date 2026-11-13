import { useEffect, useMemo, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import CategoryCard from '../components/CategoryCard.jsx';
import ToolGrid from '../components/ToolGrid.jsx';
import AdSlot from '../components/AdSlot.jsx';
import Footer from '../components/Footer.jsx';
import {
  CATEGORIES,
  countByCategory,
  getCategory,
  getPopularTools,
  getRecentTools,
  searchTools,
} from '../data/tools.js';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [categoryId, setCategoryId] = useState(null);

  const results = useMemo(() => searchTools(query, categoryId), [query, categoryId]);
  const isFiltering = query.trim() !== '' || categoryId !== null;
  const popularTools = useMemo(() => getPopularTools(), []);
  const recentTools = useMemo(() => getRecentTools(3), []);

  const toggleCategory = (id) => setCategoryId((current) => (current === id ? null : id));

  const clearFilters = () => {
    setQuery('');
    setCategoryId(null);
  };

  // When a category is picked, bring the results into view
  useEffect(() => {
    if (!categoryId) return;
    const el = document.getElementById('results');
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }, [categoryId]);

  const resultsTitle = categoryId ? getCategory(categoryId).name : 'Search results';
  const resultsSummary = `${results.length} ${results.length === 1 ? 'tool' : 'tools'} found${
    query.trim() ? ` for “${query.trim()}”` : ''
  }`;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />

      <main id="main">
        <Hero query={query} onQueryChange={setQuery} />

        {isFiltering && (
          <Section
            id="results"
            title={resultsTitle}
            description={resultsSummary}
            action={
              <button type="button" className="btn btn--ghost" onClick={clearFilters}>
                Clear filters
              </button>
            }
          >
            {results.length > 0 ? (
              <ToolGrid tools={results} />
            ) : (
              <div className="results__empty">
                <strong>No tools match your search</strong>
                Try a different keyword, or browse the categories below.
              </div>
            )}
          </Section>
        )}

        <Section
          id="categories"
          eyebrow="Browse"
          title="Find the right tool by category"
          description="Pick a category to see every tool inside it."
          tone="subtle"
        >
          <ul className="grid grid--categories">
            {CATEGORIES.map((category) => (
              <li key={category.id}>
                <CategoryCard
                  category={category}
                  count={countByCategory(category.id)}
                  active={categoryId === category.id}
                  onSelect={toggleCategory}
                />
              </li>
            ))}
          </ul>
        </Section>

        <div className="container ad-wrap">
          <AdSlot id="home-top" format="leaderboard" />
        </div>

        <Section
          id="popular"
          eyebrow="Most useful"
          title="Popular tools"
          description="The tools people reach for every day."
        >
          <ToolGrid tools={popularTools} />
        </Section>

        <Section
          id="new"
          eyebrow="Fresh"
          title="Recently added"
          description="The newest additions to Toolora."
          tone="subtle"
        >
          <ToolGrid tools={recentTools} showDate />
        </Section>

        <div className="container ad-wrap">
          <AdSlot id="home-bottom" format="leaderboard" />
        </div>
      </main>

      <Footer />
    </>
  );
}