import PageShell from '../components/PageShell.jsx';
import Section from '../components/Section.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function PrivacyPage() {
  useDocumentMeta({ title: 'Privacy Policy – Toolora', description: 'Privacy policy and data handling for Toolora.' });
  return (
    <PageShell>
      <header className="tool-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: November 2026</p>
        </div>
      </header>
      <section className="container tool-stage" style={{ paddingBottom: '48px' }}>
        <div className="tool-panel" style={{ display: 'grid', gap: '16px', lineHeight: '1.7' }}>
          <h2>1. Information We Collect</h2>
          <p>Toolora processes all data locally in your browser. We do not store or transmit your personal inputs, texts, or files to any external servers.</p>
          <h2>2. Cookies and Advertisements</h2>
          <p>We may use third-party advertising companies, such as Google AdSense, to serve ads when you visit our website. These companies may use cookies to serve ads based on your prior visits.</p>
          <h2>3. Contact Us</h2>
          <p>If you have any questions regarding this Privacy Policy, feel free to reach out.</p>
        </div>
      </section>
    </PageShell>
  );
}
