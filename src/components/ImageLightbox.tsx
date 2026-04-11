import { useEffect } from "react";

interface ImageLightboxProps {
  src: string | null;
  onClose: () => void;
}

const ImageLightbox = ({ src, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    if (!src) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className="luna-lightbox" onClick={onClose}>
      <button className="luna-lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <img src={src} alt="Enlarged view" className="luna-lightbox-img" onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export default ImageLightbox;