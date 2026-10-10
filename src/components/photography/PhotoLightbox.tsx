"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Photo } from "@/data/photos";

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
  }, [active]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function onCancel(event: Event) {
      event.preventDefault();
      setActive(null);
    }

    function onKey(event: KeyboardEvent) {
      if (active === null) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActive((active + 1) % photos.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActive((active - 1 + photos.length) % photos.length);
      }
    }

    dialog.addEventListener("cancel", onCancel);
    window.addEventListener("keydown", onKey);
    return () => {
      dialog.removeEventListener("cancel", onCancel);
      window.removeEventListener("keydown", onKey);
    };
  }, [active, photos.length]);

  const photo = active === null ? null : photos[active];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((item, index) => (
          <figure key={item.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              className="block w-full border border-stone text-left"
              aria-label={`View ${item.caption}`}
              onClick={() => setActive(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-auto w-full"
              />
            </button>
            <figcaption className="mt-2 text-sm leading-5 text-quiet">
              {item.caption}
              {item.location ? ` · ${item.location}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="m-auto w-[min(960px,calc(100vw-2rem))] border border-stone bg-porcelain p-4 text-ink backdrop:bg-ink/70"
        aria-labelledby="photo-dialog-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) setActive(null);
        }}
      >
        {photo ? (
          <div>
            <div className="flex items-start justify-between gap-4">
              <h2 id="photo-dialog-title" className="font-serif text-2xl">
                {photo.caption}
              </h2>
              <button
                type="button"
                className="border border-stone px-3 py-1.5 text-[11px] uppercase tracking-[0.16em]"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="mt-4 h-auto max-h-[70vh] w-full object-contain"
            />
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                className="border border-stone px-3 py-1.5 text-sm"
                onClick={() =>
                  setActive((current) =>
                    current === null ? 0 : (current - 1 + photos.length) % photos.length,
                  )
                }
              >
                Previous
              </button>
              <p className="text-sm text-quiet">
                {active! + 1} / {photos.length}
              </p>
              <button
                type="button"
                className="border border-stone px-3 py-1.5 text-sm"
                onClick={() =>
                  setActive((current) =>
                    current === null ? 0 : (current + 1) % photos.length,
                  )
                }
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
