import { useEffect } from 'react';

/**
 * Hook to trigger organic, tranquil scroll-reveal transitions ("慢慢显现出来")
 * as text, headers, and section elements scroll into the viewport.
 */
export function useScrollReveal(dependencies: unknown[] = []) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Fallback if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
      document
        .querySelectorAll('.reveal-on-scroll, .reveal-text-soft, [data-reveal]')
        .forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.reveal-on-scroll:not(.is-visible), .reveal-text-soft:not(.is-visible), [data-reveal]:not(.is-visible)'
      );

      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // If element is already in initial view (above the fold), reveal gently with slight cascade
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setTimeout(() => {
            el.classList.add('is-visible');
          }, 40 + index * 30);
        } else {
          observer.observe(el);
        }
      });
    };

    const frameId = requestAnimationFrame(() => {
      observeElements();
    });

    // Secondary pass to ensure images/layout settled elements are observed
    const timer1 = setTimeout(observeElements, 150);
    const timer2 = setTimeout(observeElements, 500);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer1);
      clearTimeout(timer2);
      observer.disconnect();
    };
  }, dependencies);
}
