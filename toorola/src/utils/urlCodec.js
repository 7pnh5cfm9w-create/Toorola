export class UrlCodecError extends Error {}

export function encodeUrl(text, { scope = 'component', plusForSpaces = false } = {}) {
  try {
    const encoded = scope === 'full' ? encodeURI(text) : encodeURIComponent(text);
    return plusForSpaces ? encoded.replace(/%20/g, '+') : encoded;
  } catch {
    throw new UrlCodecError('Invalid Unicode character.');
  }
}

export function decodeUrl(text, { scope = 'component', plusAsSpace = false } = {}) {
  const source = plusAsSpace ? text.replace(/\+/g, ' ') : text;
  try {
    return scope === 'full' ? decodeURI(source) : decodeURIComponent(source);
  } catch {
    throw new UrlCodecError('Invalid percent sequence.');
  }
}
