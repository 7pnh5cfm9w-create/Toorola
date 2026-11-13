import { useCallback, useEffect, useRef, useState } from 'react';

export function useCopyToClipboard(resetAfterMs = 2000) {
  const [status, setStatus] = useState('idle');
  const timer = useRef(null);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(async (text) => {
    if (!text) return false;
    let copied = false;
    try { await navigator.clipboard.writeText(text); copied = true; } catch { copied = false; }
    setStatus(copied ? 'copied' : 'failed');
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus('idle'), resetAfterMs);
    return copied;
  }, [resetAfterMs]);

  return { copied: status === 'copied', failed: status === 'failed', copy };
}
