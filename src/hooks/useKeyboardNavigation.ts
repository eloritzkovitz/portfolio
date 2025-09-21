import { useEffect } from "react";

type KeyboardNavOptions = {
  enabled?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  onClose?: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  blockAtEdges?: boolean;
};

export function useKeyboardNavigation({
  enabled = true,
  onPrev,
  onNext,
  onClose,
  canPrev = true,
  canNext = true,
  blockAtEdges = false,
}: KeyboardNavOptions) {
  useEffect(() => {
    if (!enabled) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      const isLeft = event.key === "ArrowLeft";
      const isRight = event.key === "ArrowRight";
      const isEscape = event.key === "Escape";
      const relevant = isLeft || isRight || isEscape;
      if (!relevant) return;

      if (blockAtEdges) {
        // Block event at edges so carousel doesn't move
        if ((isLeft && !canPrev) || (isRight && !canNext)) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        // If not at edge, allow bubbling for sync
      } else {
        // Always block for handled keys
        event.preventDefault();
        event.stopPropagation();
      }

      if (isEscape && onClose) {
        onClose();
      } else if (isLeft && onPrev && canPrev) {
        onPrev();
      } else if (isRight && onNext && canNext) {
        onNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [enabled, onPrev, onNext, onClose, canPrev, canNext, blockAtEdges]);
}