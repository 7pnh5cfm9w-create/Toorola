import Icon from './Icon.jsx';
import { getCategory, getToolPath } from '../data/tools.js';

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export default function ToolCard({ tool, showDate = false }) {
  const category = getCategory(tool.category);

  return (
    <a className="tool-card" href={getToolPath(tool)}>
      <span className="tool-card__icon">
        <Icon name={tool.icon} size={24} />
      </span>

      <span className="tool-card__body">
        <span className="tool-card__title">{tool.name}</span>
        <span className="tool-card__desc">{tool.description}</span>
      </span>

      <span className="tool-card__meta">
        <span className="tool-card__meta-left">
          <span className="badge">{category?.name}</span>
          {showDate && <span>Added {dateFormatter.format(new Date(`${tool.addedAt}T00:00:00`))}</span>}
        </span>
        <Icon name="arrow-right" size={18} className="tool-card__arrow" />
      </span>
    </a>
  );
}