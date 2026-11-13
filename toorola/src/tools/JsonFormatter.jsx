import { useState } from 'react';
import ToolField from '../components/ToolField.jsx';
import CopyButton from '../components/CopyButton.jsx';
import ClearButton from '../components/ClearButton.jsx';
import { processJson } from '../utils/json.js';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  function run(action) {
    const res = processJson(input, action);
    if (res.ok) setOutput(res.output);
  }
  return (
    <div className="tool-body">
      <button onClick={() => run('format')}>Format</button>
      <div className="tool-grid">
        <ToolField id="ji" label="Input" value={input} onChange={setInput} actions={<ClearButton onClick={() => setInput('')} />} />
        <ToolField id="jo" label="Output" value={output} readOnly actions={<CopyButton text={output} />} />
      </div>
    </div>
  );
}
