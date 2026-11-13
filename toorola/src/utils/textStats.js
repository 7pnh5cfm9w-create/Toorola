const READING_WORDS_PER_MINUTE = 238;
const SPEAKING_WORDS_PER_MINUTE = 150;
const HAS_LETTER_OR_NUMBER = /[\p{L}\p{N}]/u;
const SENTENCE_PATTERN = /[^\n]+?(?:[.!?…]+["'”’»)\]]*(?=\s|$)|[。！？]+["'”’」』）)\]]*|$)/gm;

export function countCharacters(text) {
  return Array.from(text).length;
}

export function countWords(text) {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter((token) => HAS_LETTER_OR_NUMBER.test(token)).length;
}

export function countSentences(text) {
  const matches = text.match(SENTENCE_PATTERN);
  if (!matches) return 0;
  return matches.filter((sentence) => HAS_LETTER_OR_NUMBER.test(sentence)).length;
}

export function countParagraphs(text) {
  return text.split(/\r?\n/).filter((line) => line.trim() !== '').length;
}

export function computeTextStats(text) {
  const words = countWords(text);
  return {
    words,
    characters: countCharacters(text),
    charactersNoSpaces: countCharacters(text.replace(/\s/g, '')),
    sentences: countSentences(text),
    paragraphs: countParagraphs(text),
    readingMinutes: words / READING_WORDS_PER_MINUTE,
    speakingMinutes: words / SPEAKING_WORDS_PER_MINUTE,
  };
}

export function formatDuration(minutes) {
  const totalSeconds = Math.round(minutes * 60);
  if (totalSeconds <= 0) return '0 sec';
  if (totalSeconds < 60) return `${totalSeconds} sec`;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (totalMinutes < 60) {
    return seconds === 0 ? `${totalMinutes} min` : `${totalMinutes} min ${seconds} sec`;
  }
  const hours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;
  return remainingMinutes === 0 ? `${hours} h` : `${hours} h ${remainingMinutes} min`;
}
