import { ADS } from '../config/site.js';

/**
 * A reserved, clearly labelled space for a future Google AdSense unit.
 * It does NOT load any ad code and shows no fake ads.
 *
 * When AdSense approves your site, the <ins class="adsbygoogle"> tag goes
 * inside this component, and nothing else in the layout has to change.
 *
 * format: 'leaderboard' (wide banner), 'rectangle', or 'in-article'
 */
export default function AdSlot({ id, format = 'leaderboard' }) {
  if (!ADS.showPlaceholders) return null;

  return (
    <aside className={`ad-slot ad-slot--${format}`} data-ad-slot={id} aria-label="Advertisement">
      <span className="ad-slot__label">Advertisement</span>
      <span className="ad-slot__hint">Reserved ad space · {id}</span>
    </aside>
  );
}