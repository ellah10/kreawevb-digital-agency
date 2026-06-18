import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 * Ajoute la classe `is-visible` sur l'élément ref quand il entre dans le viewport.
 *
 * @param {Object} options
 * @param {number} options.threshold  - % de visibilité avant déclenchement (défaut 0.15)
 * @param {string} options.rootMargin - marge autour du viewport (défaut '0px 0px -60px 0px')
 * @param {boolean} options.once     - ne déclenche qu'une fois (défaut true)
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove('is-visible');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}