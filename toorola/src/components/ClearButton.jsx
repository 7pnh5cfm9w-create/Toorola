import Icon from './Icon.jsx';

export default function ClearButton({ onClick, disabled = false }) {
  return (
    <button type="button" className="btn btn--ghost btn--sm" onClick={onClick} disabled={disabled}>
      <Icon name="trash" size={16} /> Clear
    </button>
  );
}
