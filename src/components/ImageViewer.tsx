import React, { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageViewerProps {
  show: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  show,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  // Esc key functionality
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (show) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, onClose]);
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      {/* Modal Content */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="t-button absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-2xl sm:text-4xl lg:text-4xl hover:text-gray-300 focus:outline-none"
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
              onClick={onPrev}
              className={`t-button absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-4xl lg:text-6xl hover:text-gray-300 ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === 0}
            >
              <FaChevronLeft />
            </button>

            {/* Next Button */}
            <button
              onClick={onNext}
              className={`t-button absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-4xl lg:text-6xl hover:text-gray-300 ${
                currentIndex === images.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentIndex === images.length - 1}
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
