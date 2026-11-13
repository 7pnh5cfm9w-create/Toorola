import { useState } from 'react';
import ToolField from '../components/ToolField.jsx';
import CopyButton from '../components/CopyButton.jsx';
import ClearButton from '../components/ClearButton.jsx';
import { encodeBase64, decodeBase64 } from '../utils/base64.js';

export default function Base64Tool() {
  const [input, setInput] = useState('');
  const output = input ? encodeBase64(input) : '';
  return (
    <div className="tool-body">
      <ToolField id="bi" label="Input" value={input} onChange={setInput} actions={<ClearButton onClick={() => setInput('')} />} />
      <ToolField id="bo" label="Base64" value={output} readOnly actions={<CopyButton text={output} />} />
    </div>
  );
}
