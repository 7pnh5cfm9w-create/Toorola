import { useState } from 'react';
import CopyButton from '../components/CopyButton.jsx';
import { generatePassword } from '../utils/password.js';

export default function PasswordGenerator() {
  const [password, setPassword] = useState(() => generatePassword({ length: 16, lowercase: true, uppercase: true, numbers: true, symbols: true }));
  return (
    <div className="tool-body">
      <output className="pw-display">{password}</output>
      <button onClick={() => setPassword(generatePassword({ length: 16, lowercase: true, uppercase: true, numbers: true, symbols: true }))}>Generate</button>
      <CopyButton text={password} />
    </div>
  );
}
