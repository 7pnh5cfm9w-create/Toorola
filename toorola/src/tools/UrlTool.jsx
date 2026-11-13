import { useState } from 'react';
import ToolField from '../components/ToolField.jsx';
import CopyButton from '../components/CopyButton.jsx';
import ClearButton from '../components/ClearButton.jsx';
import { encodeUrl } from '../utils/urlCodec.js';

export default function UrlTool() {
  const [input, setInput] = useState('');
  const output = input ? encodeUrl(input) : '';
  return (
    <div className="tool-body">
      <ToolField id="ui" label="Input" value={input} onChange={setInput} actions={<ClearButton onClick={() => setInput('')} />} />
      <ToolField id="uo" label="Output" value={output} readOnly actions={<CopyButton text={output} />} />
    </div>
  );
}
