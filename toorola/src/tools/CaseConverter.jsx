import { useMemo, useState } from 'react';
import ToolField from '../components/ToolField.jsx';
import SegmentedControl from '../components/SegmentedControl.jsx';
import CopyButton from '../components/CopyButton.jsx';
import ClearButton from '../components/ClearButton.jsx';
import { CASE_MODES, convertCase } from '../utils/caseConvert.js';

export default function CaseConverter() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState('upper');
  const output = useMemo(() => convertCase(text, mode), [text, mode]);
  return (
    <div className="tool-body">
      <SegmentedControl label="Mode" options={CASE_MODES} value={mode} onChange={setMode} />
      <div className="tool-grid">
        <ToolField id="in" label="Input" value={text} onChange={setText} actions={<ClearButton onClick={() => setText('')} disabled={!text} />} />
        <ToolField id="out" label="Output" value={output} readOnly actions={<CopyButton text={output} />} />
      </div>
    </div>
  );
}
