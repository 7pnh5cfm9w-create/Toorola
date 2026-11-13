export const CASE_MODES = [
  { value: 'upper', label: 'UPPERCASE' },
  { value: 'lower', label: 'lowercase' },
  { value: 'title', label: 'Title Case' },
  { value: 'sentence', label: 'Sentence case' },
];

const WORD_PATTERN = /[\p{L}\p{N}][\p{L}\p{M}\p{N}'’]*/gu;
const SMALL_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'nor',
  'of', 'on', 'or', 'per', 'the', 'to', 'vs', 'via',
]);

function capitalizeFirst(word) {
  const [first, ...rest] = Array.from(word);
  return first.toUpperCase() + rest.join('');
}

export function toUpperCase(text) { return text.toUpperCase(); }
export function toLowerCase(text) { return text.toLowerCase(); }

export function toTitleCase(text, { keepSmallWords = false } = {}) {
  const lower = text.toLowerCase();
  const wordCount = (lower.match(WORD_PATTERN) ?? []).length;
  let index = -1;
  return lower.replace(WORD_PATTERN, (word) => {
    index += 1;
    const isEdge = index === 0 || index === wordCount - 1;
    if (keepSmallWords && !isEdge && SMALL_WORDS.has(word)) return word;
    return capitalizeFirst(word);
  });
}

export function toSentenceCase(text) {
  return text.toLowerCase().replace(/(^\s*|[.!?…]["'”’)\]]*\s+|\n\s*)(\p{L})/gu, (_m, p, l) => p + l.toUpperCase());
}

export function convertCase(text, mode, options = {}) {
  switch (mode) {
    case 'upper': return toUpperCase(text);
    case 'lower': return toLowerCase(text);
    case 'title': return toTitleCase(text, options);
    case 'sentence': return toSentenceCase(text);
    default: return text;
  }
}
