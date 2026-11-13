const CHUNK_SIZE = 0x8000;
export class Base64Error extends Error {}

export function encodeBase64(text, { urlSafe = false } = {}) {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (let i = 0; i < bytes.length; i += CHUNK_SIZE) {
    binary += String.fromCharCode(...bytes.subarray(i, i + CHUNK_SIZE));
  }
  const encoded = btoa(binary);
  if (!urlSafe) return encoded;
  return encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function decodeBase64(input) {
  const cleaned = input.replace(/\s+/g, '');
  if (!cleaned) return '';
  if (!/^[A-Za-z0-9+/_-]*={0,2}$/.test(cleaned)) throw new Base64Error('Invalid Base64 characters.');
  let normalized = cleaned.replace(/-/g, '+').replace(/_/g, '/');
  normalized += '='.repeat((4 - (normalized.length % 4)) % 4);
  let binary;
  try { binary = atob(normalized); } catch { throw new Base64Error('Could not decode Base64.'); }
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
}
