import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LazyImage from "./LazyImage";
import { useKeyboardNavigation } from "../../../hooks/useKeyboardNavigation";
import { useSwipeNavigation } from "../../../hooks/useSwipeNavigation";

interface ImageViewerProps {
  show: boolean;
  images: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  onClose: () => void;
  keyboardNavigationEnabled?: boolean;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  show,
  images,
  currentIndex,
  setCurrentIndex,
  onClose,
}) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";  

  // Previous image
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  // Next image
  const handleNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  // Centralized swipe navigation
  const { handleTouchStart, handleTouchEnd } = useSwipeNavigation(
    handlePrev,
    handleNext,
    isRTL
  );

  // Centralized keyboard navigation
  useKeyboardNavigation({
    enabled: show,
    onPrev: handlePrev,
    onNext: handleNext,
    onClose,
    canPrev: currentIndex > 0,
    canNext: currentIndex < images.length - 1,
    blockAtEdges: true,
    isRTL
  });

  // If not showing, render nothing
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="t-button absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-2xl sm:text-4xl lg:text-4xl hover:text-gray-300 focus:outline-none"
          aria-label="Close image viewer"
        >
          ✕
        </button>

        {/* Image Viewer */}
        <div className="flex items-center justify-center w-full h-full px-2 sm:px-4">
          <LazyImage
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className="max-h-[60vh] sm:max-h-[80vh] max-w-[90vw] object-contain"          
          />
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            {/* In RTL, swap button positions and icons */}
            {isRTL ? (
              <>
                {/* Next Button (on the left in RTL) */}
                <button
                  onClick={handleNext}
                  className={`t-button absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-4xl lg:text-6xl hover:text-gray-300 ${
                    currentIndex === images.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={currentIndex === images.length - 1}
                  aria-label="Next image"
                >
                  <FaChevronLeft />
                </button>
                {/* Previous Button (on the right in RTL) */}
                <button
                  onClick={handlePrev}
                  className={`t-button absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-4xl lg:text-6xl hover:text-gray-300 ${
                    currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={currentIndex === 0}
                  aria-label="Previous image"
                >
                  <FaChevronRight />
                </button>
              </>
            ) : (
              <>
                {/* Previous Button (on the left in LTR) */}
                <button
                  onClick={handlePrev}
                  className={`t-button absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-4xl lg:text-6xl hover:text-gray-300 ${
                    currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={currentIndex === 0}
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>
                {/* Next Button (on the right in LTR) */}
                <button
                  onClick={handleNext}
                  className={`t-button absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-4xl lg:text-6xl hover:text-gray-300 ${
                    currentIndex === images.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={currentIndex === images.length - 1}
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ImageViewer;
