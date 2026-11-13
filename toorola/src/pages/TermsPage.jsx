import PageShell from '../components/PageShell.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function TermsPage() {
  useDocumentMeta({ title: 'Terms of Service – Toolora', description: 'Terms of service for using Toolora.' });
  return (
    <PageShell>
      <header className="tool-hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Last updated: November 2026</p>
        </div>
      </header>
      <section className="container tool-stage" style={{ paddingBottom: '48px' }}>
        <div className="tool-panel" style={{ display: 'grid', gap: '16px', lineHeight: '1.7' }}>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Toolora, you agree to comply with and be bound by these Terms of Service.</p>
          <h2>2. Use of Tools</h2>
          <p>All tools provided on Toolora are free for personal and commercial use. You are responsible for ensuring the outputs meet your requirements.</p>
          <h2>3. Limitation of Liability</h2>
          <p>Toolora is provided on an "as is" basis without warranties of any kind.</p>
        </div>
      </section>
    </PageShell>
  );
}
