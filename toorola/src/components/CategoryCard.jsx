import Icon from './Icon.jsx';

export default function CategoryCard({ category, count, active, onSelect }) {
  return (
    <button
      type="button"
      className={`category-card${active ? ' is-active' : ''}`}
      onClick={() => onSelect(category.id)}
      aria-pressed={active}
    >
      <span className="category-card__icon">
        <Icon name={category.icon} size={24} />
      </span>
      <span className="category-card__body">
        <span className="category-card__name">{category.name}</span>
        <span className="category-card__desc">{category.description}</span>
      </span>
      <span className="category-card__count">
        {count} {count === 1 ? 'tool' : 'tools'}
      </span>
    </button>
  );
}