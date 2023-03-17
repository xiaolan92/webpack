import { useState, useEffect, MutableRefObject } from 'react';

type OptionsType = {
  threshold: number[];
  root: HTMLElement | null;
  rootMargin: string;
};

export const useIntersectionObserver = (ref: MutableRefObject<null>, options?: OptionsType) => {
  const [inView, setInView] = useState<boolean>(false);
  const io = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        setInView(true);
      }
    },
    {
      threshold: options?.threshold || [0.2],
      root: options?.root || null,
      rootMargin: options?.rootMargin || '0%'
    }
  );
  useEffect(() => {
    const iref = ref.current;
    if (iref) {
      io.observe(iref);
    }
    return () => {
      if (iref) {
        io.disconnect();
      }
    };
  });

  return [inView];
};
