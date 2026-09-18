"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { galleryImages, galleryCategories, GalleryImage } from "@/lib/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <>
      <div className="gallery-filters">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            className={`chip${active === cat ? " chip-active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map((img, i) => (
          <Reveal as="up" delay={(i % 6) * 60} key={img.id}>
            <button
              className={`gallery-tile${img.tall ? " gallery-tile-tall" : ""}`}
              style={{ background: img.gradient }}
              onClick={() => setLightbox(img)}
              aria-label={`Open image: ${img.title}`}
            >
              <span className="gallery-tile-label">{img.title}</span>
            </button>
          </Reveal>
        ))}
      </div>

      {lightbox && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image" style={{ background: lightbox.gradient }} />
            <div className="lightbox-caption">
              <strong>{lightbox.title}</strong>
              <span>{lightbox.category}</span>
            </div>
            <button
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
