export const LENGTH_LIMITS = { min: 4, max: 128 };
const CHAR_SETS = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{}:;,.?',
};
const AMBIGUOUS = 'Il1O0o';

export function buildCharsets(options) {
  const enabled = [];
  if (options.lowercase) enabled.push(CHAR_SETS.lowercase);
  if (options.uppercase) enabled.push(CHAR_SETS.uppercase);
  if (options.numbers) enabled.push(CHAR_SETS.numbers);
  if (options.symbols) enabled.push(CHAR_SETS.symbols);
  return enabled.map((set) => options.excludeAmbiguous ? Array.from(set).filter((c) => !AMBIGUOUS.includes(c)).join('') : set).filter((s) => s.length > 0);
}

export function clampLength(value) {
  const num = Math.floor(Number(value));
  if (!Number.isFinite(num)) return LENGTH_LIMITS.min;
  return Math.min(LENGTH_LIMITS.max, Math.max(LENGTH_LIMITS.min, num));
}

function randomInt(max) {
  const limit = Math.floor(0x100000000 / max) * max;
  const buf = new Uint32Array(1);
  let val;
  do { crypto.getRandomValues(buf); val = buf[0]; } while (val >= limit);
  return val % max;
}

export function generatePassword(options) {
  const sets = buildCharsets(options);
  if (sets.length === 0) throw new Error('Select at least one.');
  const len = clampLength(options.length);
  const pool = sets.join('');
  const chars = sets.map((s) => s[randomInt(s.length)]);
  while (chars.length < len) chars.push(pool[randomInt(pool.length)]);
  for (let i = chars.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join('');
}

export function estimateEntropyBits(options) {
  const poolSize = buildCharsets(options).join('').length;
  if (poolSize === 0) return 0;
  return clampLength(options.length) * Math.log2(poolSize);
}

export function describeStrength(bits) {
  if (bits < 40) return { level: 1, label: 'Weak' };
  if (bits < 60) return { level: 2, label: 'Fair' };
  if (bits < 80) return { level: 3, label: 'Good' };
  if (bits < 110) return { level: 4, label: 'Strong' };
  return { level: 5, label: 'Excellent' };
}
