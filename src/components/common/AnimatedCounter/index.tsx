'use client';

import { useRef } from 'react';
import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from 'framer-motion';

type AnimatedCounterProps = {
  title?: string;
  from: number;
  to: number;
  duration?: number;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({
  title,
  from,
  to,
  duration = 1,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = String(from);

    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: duration,
      ease: 'easeOut',
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return (
    <div className="flex flex-col items-center z-[2]">
      <span
        className="text-[60px] font-bold tracking-[0.2rem] h-[90px]"
        ref={ref}
      />
      <span className="text-lg tracking-[5px]">{title}</span>
    </div>
  );
};

export default AnimatedCounter;
