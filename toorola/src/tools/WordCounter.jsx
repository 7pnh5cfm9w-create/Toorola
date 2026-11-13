import { useDeferredValue, useMemo, useState } from 'react';
import ToolField from '../components/ToolField.jsx';
import CopyButton from '../components/CopyButton.jsx';
import ClearButton from '../components/ClearButton.jsx';
import { computeTextStats } from '../utils/textStats.js';

export default function WordCounter() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  const stats = useMemo(() => computeTextStats(deferredText), [deferredText]);
  return (
    <div className="tool-body">
      <ToolField id="wc" label="Your text" value={text} onChange={setText} rows={12} actions={<ClearButton onClick={() => setText('')} disabled={!text} />} />
      <p>Words: {stats.words} | Characters: {stats.characters}</p>
      <CopyButton text={text} label="Copy stats" />
    </div>
  );
}
