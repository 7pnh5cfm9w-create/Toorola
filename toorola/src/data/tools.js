// Single source of truth for every tool and category on the site.
// Adding a tool later = adding one object to TOOLS.

export const CATEGORIES = [
  { id: 'text', name: 'Text Tools', description: 'Count, clean and transform your writing.', icon: 'type' },
  { id: 'developer', name: 'Developer Tools', description: 'Format, encode and decode data in one click.', icon: 'code' },
  { id: 'security', name: 'Security Tools', description: 'Generate strong credentials, locally.', icon: 'shield' },
];

export const TOOLS = [
  {
    slug: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, sentences and paragraphs instantly.',
    category: 'text',
    icon: 'type',
    popular: true,
    addedAt: '2026-11-05',
    keywords: ['count', 'characters', 'sentences', 'paragraphs', 'text', 'length'],
  },
  {
    slug: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text to uppercase, lowercase or title case in one click.',
    category: 'text',
    icon: 'case',
    popular: true,
    addedAt: '2026-11-06',
    keywords: ['uppercase', 'lowercase', 'title case', 'capitalize', 'text'],
  },
  {
    slug: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, beautify and validate JSON with clear error messages.',
    category: 'developer',
    icon: 'braces',
    popular: true,
    addedAt: '2026-11-08',
    keywords: ['json', 'format', 'beautify', 'validate', 'prettify', 'minify'],
  },
  {
    slug: 'base64-encoder-decoder',
    name: 'Base64 Encoder & Decoder',
    description: 'Encode text to Base64 or decode it back, right in your browser.',
    category: 'developer',
    icon: 'binary',
    popular: false,
    addedAt: '2026-11-09',
    keywords: ['base64', 'encode', 'decode', 'encoder', 'decoder'],
  },
  {
    slug: 'url-encoder-decoder',
    name: 'URL Encoder & Decoder',
    description: 'Encode or decode URLs and query strings safely.',
    category: 'developer',
    icon: 'link',
    popular: false,
    addedAt: '2026-11-10',
    keywords: ['url', 'encode', 'decode', 'percent', 'query string', 'link'],
  },
  {
    slug: 'password-generator',
    name: 'Password Generator',
    description: 'Generate strong, random passwords with custom length and characters.',
    category: 'security',
    icon: 'key',
    popular: false,
    addedAt: '2026-11-12',
    keywords: ['password', 'generator', 'random', 'secure', 'strong'],
  },
];

export const getToolPath = (tool) => `/tools/${tool.slug}`;

export const getCategory = (id) => CATEGORIES.find((c) => c.id === id);

export const countByCategory = (categoryId) =>
  TOOLS.filter((t) => t.category === categoryId).length;

// "Popular" is hand-picked for now. Real usage data can replace this later.
export const getPopularTools = () => TOOLS.filter((t) => t.popular);

export const getRecentTools = (limit = 3) =>
  [...TOOLS].sort((a, b) => b.addedAt.localeCompare(a.addedAt)).slice(0, limit);

// Every word typed must appear somewhere in the tool's name, description,
// category or keywords. Optionally restricted to one category.
export function searchTools(query = '', categoryId = null) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);

  return TOOLS.filter((tool) => {
    if (categoryId && tool.category !== categoryId) return false;
    if (terms.length === 0) return true;

    const haystack = [
      tool.name,
      tool.description,
      getCategory(tool.category)?.name ?? '',
      ...tool.keywords,
    ]
      .join(' ')
      .toLowerCase();

    return terms.every((term) => haystack.includes(term));
  });
}