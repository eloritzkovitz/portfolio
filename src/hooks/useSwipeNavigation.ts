import { useRef } from "react";

type SwipeCallback = () => void;

export function useSwipeNavigation(onPrev: SwipeCallback, onNext: SwipeCallback) {
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const touchEnd = e.changedTouches[0].clientX;
      const swipeDistance = touchStartX.current - touchEnd;
      if (swipeDistance > 50) {
        onNext();
      } else if (swipeDistance < -50) {
        onPrev();
      }
    }
    touchStartX.current = null;
  };

  return { handleTouchStart, handleTouchEnd };
}