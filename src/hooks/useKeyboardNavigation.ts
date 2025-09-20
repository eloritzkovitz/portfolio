import { useEffect } from "react";

type KeyboardNavOptions = {
  enabled?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  onClose?: () => void;
  canPrev?: boolean;
  canNext?: boolean;
};

export function useKeyboardNavigation({
  enabled = true,
  onPrev,
  onNext,
  onClose,
  canPrev = true,
  canNext = true,
}: KeyboardNavOptions) {
  useEffect(() => {
    if (!enabled) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onClose) {
        onClose();
      } else if (event.key === "ArrowLeft" && onPrev && canPrev) {
        onPrev();
      } else if (event.key === "ArrowRight" && onNext && canNext) {
        onNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, onPrev, onNext, onClose, canPrev, canNext]);
}