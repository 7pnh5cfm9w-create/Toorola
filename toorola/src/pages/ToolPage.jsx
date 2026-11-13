import { Suspense } from 'react';
import PageShell from '../components/PageShell.jsx';
import ToolLayout from '../components/ToolLayout.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import { TOOLS } from '../data/tools.js';
import { TOOL_CONTENT } from '../data/toolContent.js';
import { TOOL_COMPONENTS } from '../tools/index.js';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function ToolPage({ slug }) {
  useDocumentMeta({ title: 'Toolora', description: 'Free tools' });
  const tool = TOOLS.find((item) => item.slug === slug);
  const content = TOOL_CONTENT[slug];
  const ToolComponent = TOOL_COMPONENTS[slug];
  if (!tool || !content || !ToolComponent) return <NotFoundPage />;
  return (
    <PageShell>
      <ToolLayout tool={tool} content={content}>
        <Suspense fallback={<div>Loading...</div>}>
          <ToolComponent />
        </Suspense>
      </ToolLayout>
    </PageShell>
  );
}
