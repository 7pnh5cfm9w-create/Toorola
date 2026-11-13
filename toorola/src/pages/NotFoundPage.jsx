import PageShell from '../components/PageShell.jsx';

export default function NotFoundPage() {
  return (
    <PageShell>
      <div className="container not-found">
        <h1>Page not found</h1>
        <a href="/">Back to homepage</a>
      </div>
    </PageShell>
  );
}
