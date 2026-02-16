import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px" } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

/** Utility: returns className for a reveal-animated element */
export function revealClass(isVisible: boolean, delay?: number): string {
  const base = "transition-all duration-700 ease-out";
  const hidden = "opacity-0 translate-y-8";
  const visible = "opacity-100 translate-y-0";
  const delayStyle = delay ? `delay-[${delay}ms]` : "";
  return `${base} ${isVisible ? visible : hidden} ${delayStyle}`.trim();
}
