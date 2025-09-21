import { useRef } from "react";

type SwipeCallback = () => void;

export function useSwipeNavigation(
  onPrev: SwipeCallback,
  onNext: SwipeCallback,
  isRTL: boolean = false
) {
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const touchEnd = e.changedTouches[0].clientX;
      const swipeDistance = touchStartX.current - touchEnd;
      if (!isRTL) {
        // LTR: swipe left = next, swipe right = prev
        if (swipeDistance > 50) {
          onNext();
        } else if (swipeDistance < -50) {
          onPrev();
        }
      } else {
        // RTL: swipe left = prev, swipe right = next
        if (swipeDistance > 50) {
          onPrev();
        } else if (swipeDistance < -50) {
          onNext();
        }
      }
    }
    touchStartX.current = null;
  };

  return { handleTouchStart, handleTouchEnd };
}