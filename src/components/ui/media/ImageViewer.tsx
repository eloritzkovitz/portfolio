import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageViewerProps {
  show: boolean;
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  show,
  images,
  initialIndex = 0,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Reset index when viewer is opened or initialIndex changes
  useEffect(() => {
    if (show) setCurrentIndex(initialIndex);
  }, [show, initialIndex]);

  // Keyboard navigation (Esc, Left, Right)
  useEffect(() => {
    if (!show) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft" && currentIndex > 0) {
        setCurrentIndex((i) => i - 1);
      } else if (event.key === "ArrowRight" && currentIndex < images.length - 1) {
        setCurrentIndex((i) => i + 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [show, currentIndex, images.length, onClose]);

  if (!show) return null;

  // Previous image
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  // Next image
  const handleNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
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
          <img
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className="max-h-[60vh] sm:max-h-[80vh] max-w-[90vw] object-contain"
          />
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            {/* Previous Button */}
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

            {/* Next Button */}
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
      </div>
    </div>
  );
};

export default ImageViewer;