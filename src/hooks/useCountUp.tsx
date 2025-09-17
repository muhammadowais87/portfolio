import { useState, useEffect, useRef } from 'react';

export const useCountUp = (
  end: number,
  duration: number = 2000,
  start: number = 0,
  trigger: boolean = false
) => {
  const [count, setCount] = useState(start);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!trigger || isComplete) return;

    const startTime = Date.now();
    const difference = end - start;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentCount = Math.round(start + difference * easeOutExpo);
      setCount(currentCount);

      if (progress === 1) {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, start, trigger, isComplete]);

  return count;
};

export const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};