import Icon from './Icon.jsx';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard.js';

export default function CopyButton({ text, label = 'Copy' }) {
  const { copied, failed, copy } = useCopyToClipboard();
  return (
    <button type="button" className={`btn btn--ghost btn--sm${copied ? ' is-copied' : ''}`} onClick={() => copy(text)} disabled={!text}>
      <Icon name={copied ? 'check' : 'copy'} size={16} />
      <span>{copied ? 'Copied!' : failed ? 'Failed' : label}</span>
    </button>
  );
}
