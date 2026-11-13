import Icon from './Icon.jsx';

export default function StatusMessage({ type = 'success', title, children }) {
  return (
    <div className={`status status--${type}`}>
      <Icon name={type === 'error' ? 'alert' : 'check-circle'} size={20} />
      <div className="status__body">
        {title && <p className="status__title">{title}</p>}
        {children}
      </div>
    </div>
  );
}
