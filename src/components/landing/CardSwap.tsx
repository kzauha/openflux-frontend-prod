import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef, useCallback } from 'react';
import gsap from 'gsap';

export const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { customClass?: string }>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 will-change-transform [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform-style:preserve-3d] ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
    />
  )
);
Card.displayName = 'Card';

const makeSlot = (i: number, distX: number, distY: number, total: number) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement | null, slot: ReturnType<typeof makeSlot>, skew: number) => {
  if (!el) return;
  gsap.set(el, {
    x: slot.x, y: slot.y, z: slot.z,
    xPercent: -50, yPercent: -50,
    skewY: skew, transformOrigin: 'center center',
    zIndex: slot.zIndex, force3D: true,
  });
};

interface CardSwapProps {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  scrollTriggered?: boolean;
  onCardClick?: (index: number) => void;
  skewAmount?: number;
  easing?: 'elastic' | 'smooth';
  children: React.ReactNode;
}

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500, height = 400,
  cardDistance = 60, verticalDistance = 70,
  delay = 5000, pauseOnHover = false,
  scrollTriggered = false,
  onCardClick, skewAmount = 6, easing = 'elastic',
  children,
}) => {
  const config =
    easing === 'elastic'
      ? { ease: 'elastic.out(0.6,0.9)', durDrop: 1.4, durMove: 1.4, durReturn: 1.4, promoteOverlap: 0.9, returnDelay: 0.05 }
      : { ease: 'power1.inOut', durDrop: 0.8, durMove: 0.8, durReturn: 0.8, promoteOverlap: 0.45, returnDelay: 0.2 };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr.length]);
  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>();
  const container = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const swap = useCallback(() => {
    if (order.current.length < 2 || isAnimating.current) return;
    isAnimating.current = true;
    const [front, ...rest] = order.current;
    const elFront = refs[front].current;
    if (!elFront) { isAnimating.current = false; return; }
    const tl = gsap.timeline({ onComplete: () => { isAnimating.current = false; } });
    tlRef.current = tl;

    tl.to(elFront, { y: '+=500', duration: config.durDrop, ease: config.ease });
    tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);

    rest.forEach((idx, i) => {
      const el = refs[idx].current;
      if (!el) return;
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
      tl.set(el, { zIndex: slot.zIndex }, 'promote');
      tl.to(el, { x: slot.x, y: slot.y, z: slot.z, duration: config.durMove, ease: config.ease }, `promote+=${i * 0.15}`);
    });

    const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
    tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
    tl.call(() => { gsap.set(elFront, { zIndex: backSlot.zIndex }); }, undefined, 'return');
    tl.to(elFront, { x: backSlot.x, y: backSlot.y, z: backSlot.z, duration: config.durReturn, ease: config.ease }, 'return');
    tl.call(() => { order.current = [...rest, front]; });
  }, [refs, cardDistance, verticalDistance, config]);

  useEffect(() => {
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, refs.length), skewAmount));

    // Auto-cycle and Hover management
    const node = container.current;
    if (!scrollTriggered) {
      intervalRef.current = window.setInterval(swap, delay);
    }

    const pause = () => { tlRef.current?.pause(); clearInterval(intervalRef.current); };
    const resume = () => { tlRef.current?.play(); if (!scrollTriggered) intervalRef.current = window.setInterval(swap, delay); };

    if (node && pauseOnHover) {
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
    }

    return () => {
      if (node && pauseOnHover) {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
      }
      clearInterval(intervalRef.current);
    };
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, scrollTriggered, swap, refs]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child as React.ReactElement<any>, {
          key: i, ref: refs[i],
          style: { width, height, ...(((child as React.ReactElement<any>).props as any).style ?? {}) },
          onClick: (e: React.MouseEvent) => {
            ((child as React.ReactElement<any>).props as any).onClick?.(e);
            onCardClick?.(i);
          },
        })
      : child
  );

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 translate-x-[5%] translate-y-[20%] origin-bottom-right overflow-visible md:scale-100 max-md:scale-75 max-sm:scale-[0.55]"
      style={{ width, height, perspective: 1200 }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
