import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useKeyboardNavigation } from "../../../hooks/useKeyboardNavigation";
import { useSwipeNavigation } from "../../../hooks/useSwipeNavigation";

interface ScreenshotsCarouselProps {
  screenshots: string[];
  onOpenViewer: (index: number) => void;
  currentIndex: number;
  setCurrentIndex?: (index: number) => void;
  keyboardNavigationEnabled?: boolean;
}

const ScreenshotsCarousel: React.FC<ScreenshotsCarouselProps> = ({
  screenshots,
  onOpenViewer,
  currentIndex,
  setCurrentIndex,
  keyboardNavigationEnabled = true,
}) => {  

  // Previous screenshot
  const handlePrev = () => {
    if (setCurrentIndex) {
      setCurrentIndex(currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1);
    }
  };

  // Next screenshot
  const handleNext = () => {
    if (setCurrentIndex) {
      setCurrentIndex(currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1);
    }
  };

  // Select specific screenshot
  const handleSelect = (index: number) => {
    if (setCurrentIndex) setCurrentIndex(index);
  };

  // Centralized swipe navigation
  const { handleTouchStart, handleTouchEnd } = useSwipeNavigation(
    handlePrev,
    handleNext
  );

  // Centralized keyboard navigation
  useKeyboardNavigation({
    enabled: keyboardNavigationEnabled,
    onPrev: handlePrev,
    onNext: handleNext,    
  });    

  // If no screenshots, render nothing
  if (!screenshots || screenshots.length === 0) return null;

  return (
    <div
      className="mb-8 sm:mb-12 relative group"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Current Screenshot */}
      <div className="flex items-center justify-center">
        <img
          src={screenshots[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          className="rounded-lg object-contain w-full max-h-[250px] sm:max-h-[500px] cursor-pointer"
          onClick={() => onOpenViewer(currentIndex)}
        />
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        aria-label="Previous screenshot"
        className="toggle-navigation-btn absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-4 text-3xl sm:text-5xl min-w-10 min-h-10 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaChevronLeft className="w-6 h-6 sm:w-10 sm:h-10 hover:scale-125 transition-transform" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next screenshot"
        className="toggle-navigation-btn absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-4 text-3xl sm:text-5xl min-w-10 min-h-10 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaChevronRight className="w-6 h-6 sm:w-10 sm:h-10 hover:scale-125 transition-transform" />
      </button>
      {/* Indicators */}
      <div className="carousel-indicators flex justify-center gap-2 mt-8">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            aria-label={`Go to screenshot ${index + 1}`}
            className={`carousel-indicator aspect-square rounded-full w-2 sm:w-4 lg:w-6 border-2 transition-all duration-200
              ${index === currentIndex ? " active" : ""}
            `}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ScreenshotsCarousel;