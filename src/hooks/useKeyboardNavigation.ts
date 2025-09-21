import { useEffect } from "react";

type KeyboardNavOptions = {
  enabled?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  onClose?: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  blockAtEdges?: boolean;
  isRTL?: boolean;
};

export function useKeyboardNavigation({
  enabled = true,
  onPrev,
  onNext,
  onClose,
  canPrev = true,
  canNext = true,
  blockAtEdges = false,
  isRTL = false,
}: KeyboardNavOptions) {
  useEffect(() => {
    if (!enabled) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      const isLeft = event.key === "ArrowLeft";
      const isRight = event.key === "ArrowRight";
      const isEscape = event.key === "Escape";
      const relevant = isLeft || isRight || isEscape;
      if (!relevant) return;

      // Swap left/right for RTL
      const prevKey = isRTL ? isRight : isLeft;
      const nextKey = isRTL ? isLeft : isRight;

      if (blockAtEdges) {
        if ((prevKey && !canPrev) || (nextKey && !canNext)) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
      } else {
        event.preventDefault();
        event.stopPropagation();
      }

      if (isEscape && onClose) {
        onClose();
      } else if (prevKey && onPrev && canPrev) {
        onPrev();
      } else if (nextKey && onNext && canNext) {
        onNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [enabled, onPrev, onNext, onClose, canPrev, canNext, blockAtEdges, isRTL]);
}