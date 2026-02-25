
import React, { useState } from "react";

interface GalleryModalProps {
  images: string[];
  onClose: () => void;
  initialIndex?: number;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ images, onClose, initialIndex = 0 }) => {
  const [current, setCurrent] = useState(initialIndex);
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  if (!images.length) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative flex flex-col items-center">
        <button
          className="absolute top-2 left-2 text-lg font-bold text-gray-700 hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex items-center gap-4">
          <button onClick={prev} className="text-2xl px-2 py-1">&#8592;</button>
          <img
            src={images[current]}
            alt={`صورة المنتج ${current + 1}`}
            className="w-80 h-80 object-contain rounded shadow"
          />
          <button onClick={next} className="text-2xl px-2 py-1">&#8594;</button>
        </div>
        <div className="flex gap-1 mt-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="thumb"
              className={`w-10 h-10 object-cover rounded border-2 ${i === current ? "border-blue-600" : "border-transparent"}`}
              style={{ cursor: "pointer" }}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
