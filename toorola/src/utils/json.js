export function processJson(rawText, action, indentUnit = '  ') {
  const text = rawText.replace(/^\uFEFF/, '');
  if (!text.trim()) return { ok: false, error: { message: 'Empty input', empty: true } };
  try {
    const parsed = JSON.parse(text);
    if (action === 'validate') return { ok: true, output: null };
    return { ok: true, output: JSON.stringify(parsed, null, action === 'minify' ? 0 : indentUnit) };
  } catch (err) {
    return { ok: false, error: { message: err.message } };
  }
}
