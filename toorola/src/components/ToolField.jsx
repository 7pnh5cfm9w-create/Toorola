export default function ToolField({ id, label, value, onChange, readOnly = false, placeholder, rows = 10, mono = false, actions }) {
  return (
    <div className="field">
      <div className="field__head">
        <label className="field__label" htmlFor={id}>{label}</label>
        {actions && <div className="field__actions">{actions}</div>}
      </div>
      <textarea id={id} className={`textarea${mono ? ' textarea--mono' : ''}`} value={value} onChange={readOnly ? undefined : (e) => onChange(e.target.value)} readOnly={readOnly} placeholder={placeholder} rows={rows} />
    </div>
  );
}
