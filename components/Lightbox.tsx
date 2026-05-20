"use client";

import { useEffect } from "react";

type Item = { src: string; alt: string };

export default function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext
}: {
  items: Item[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onPrev, onNext]);

  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 font-mono text-[11px] uppercase tracking-[0.22em] text-white/80 hover:text-white"
      >
        close ×
      </button>

      <span className="absolute left-5 top-5 z-10 font-mono text-[11px] uppercase tracking-[0.22em] text-white/60">
        {index + 1} / {items.length}
      </span>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous"
            className="absolute left-5 top-1/2 z-10 -translate-y-1/2 font-mono text-2xl text-white/70 hover:text-white"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next"
            className="absolute right-5 top-1/2 z-10 -translate-y-1/2 font-mono text-2xl text-white/70 hover:text-white"
          >
            ›
          </button>
        </>
      )}

      <div
        className="relative max-h-[90vh] max-w-[92vw] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {}
        <img
          src={item.src}
          alt={item.alt}
          className="block max-h-[90vh] w-auto max-w-[92vw] object-contain"
        />
      </div>
    </div>
  );
}
