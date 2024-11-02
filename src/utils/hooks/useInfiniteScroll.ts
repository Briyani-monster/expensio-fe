import { useCallback, useEffect, useRef, useState, RefCallback } from "react";

/**
 * Run given callback at the end of a scrollable view
 *
 * @param {Function} scrolled  Callback
 * @param {IntersectionObserverInit} observerOption configure IntersectionObserver API
 *
 * @returns React.Ref for the last scroll item
 *
 * Important
 *  1. Keeping the browser DevTool open on the side, breaks the functionality -
 *        the IntersectionObserver never gets triggered.
 *      Workaround - Use the DevTool in detached (in a separate window) mode.
 *
 */
export function useInfiniteScroll(
  scrolled: () => void = () => {},
  observerOption: IntersectionObserverInit = { root: null, threshold: 0.5 },
): RefCallback<Element | null> {
  const [observer] = useState<IntersectionObserver>(
    new IntersectionObserver((entries) => {
      const target = entries[0];

      if (target.isIntersecting) {
        scrolled();
      }
    }, observerOption),
  );

  const handleRefChange = useCallback<RefCallback<Element | null>>(
    (node) => {
      const hasIOSupport = !!window.IntersectionObserver;
      if (!hasIOSupport || !node) return;

      observer.observe(node);

      return () => {
        if (node) {
          observer.unobserve(node);
        }
      };
    },
    [observer], // Include observer in the dependency array
  );

  return handleRefChange;
}

export default useInfiniteScroll;
