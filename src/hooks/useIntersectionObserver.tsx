import { useEffect, useState } from 'react';

type UseIntersectionObserverHookProps = {
  ref: React.MutableRefObject<any>;
  threshold: number;
};

const useIntersectionObserver = ({
  ref,
  threshold,
}: UseIntersectionObserverHookProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);

      if (entry.isIntersecting && observer) {
        observer.disconnect();
      }
    };

    if (ref.current) {
      observer = new IntersectionObserver(handleIntersection, { threshold });
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref, threshold]);

  return isIntersecting;
};

export default useIntersectionObserver;
