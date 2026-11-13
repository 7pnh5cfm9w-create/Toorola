import Icon from './Icon.jsx';
import Section from './Section.jsx';
import ToolGrid from './ToolGrid.jsx';
import { TOOLS, getCategory } from '../data/tools.js';

export default function ToolLayout({ tool, content, children }) {
  const category = getCategory(tool.category);
  return (
    <>
      <header className="tool-hero">
        <div className="container">
          <h1>{tool.name}</h1>
          <p>{content.lead}</p>
        </div>
      </header>
      <section className="container tool-stage">
        <div className="tool-panel">{children}</div>
      </section>
      <Section id="related" title="More free tools" tone="subtle">
        <ToolGrid tools={TOOLS.filter(t => t.slug !== tool.slug).slice(0, 3)} />
      </Section>
    </>
  );
}
