"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  alt: string;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onGoToImage: (index: number) => void;
}

export default function ImageModal({
  isOpen,
  images,
  currentIndex,
  alt,
  onClose,
  onPrevious,
  onNext,
  onGoToImage,
}: ImageModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && images.length > 1) {
        onPrevious();
      } else if (e.key === "ArrowRight" && images.length > 1) {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, images.length, onClose, onPrevious, onNext]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-interactive-hover/50 backdrop-blur-sm animate-modalFadeIn"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-background-secondary hover:text-background-primary text-3xl font-bold transition-colors duration-300 z-10"
        aria-label="Close modal"
      >
        <i className="fas fa-times"></i>
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-4 text-background-secondary hover:text-background-primary text-2xl transition-colors duration-300 z-10"
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 text-background-secondary hover:text-background-primary text-2xl transition-colors duration-300 z-10"
            aria-label="Next image"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}

      <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-8 animate-modalScaleIn">
        {images[currentIndex] && (
          <Image
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            width={1920}
            height={1080}
            className="max-w-full max-h-full object-contain"
            sizes="90vw"
          />
        )}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                onGoToImage(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-background-secondary"
                  : "w-2 bg-background-secondary/50 hover:bg-background-secondary/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
