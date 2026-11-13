export default function Checkbox({ label, checked, onChange, disabled = false }) {
  return (
    <label className={`check${disabled ? ' is-disabled' : ''}`}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={(e) => onChange(e.target.checked)} />
      <span>{label}</span>
    </label>
  );
}
