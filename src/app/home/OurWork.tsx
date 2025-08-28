"use client";

import { useMemo, useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight, HiXMark } from "react-icons/hi2";

/* ---------------------------------------------------
   Types & Sample Data (replace src with your images)
--------------------------------------------------- */
type Category = "House" | "Office" | "Vehicle" | "Storage";
type WorkItem = {
  src: string;
  alt: string;
  category: Category;
  caption?: string;
};

const DEFAULT_ITEMS: WorkItem[] = [
  // House
  { src: "/work/house1.png", alt: "2BHK packing - Sion, Mumbai", category: "House", caption: "2BHK full packing & move" },
  { src: "/work/house2.png", alt: "Wardrobe carton boxes", category: "House", caption: "Wardrobe boxes for clothes" },
  // Office
  { src: "/work/office1.png", alt: "Office IT packing", category: "Office", caption: "IT equipment anti-static packing" },
  { src: "/work/office2.png", alt: "Files/document handling", category: "Office", caption: "Files & record management" },
  // Vehicle
  { src: "/work/bike.png", alt: "Bike crating", category: "Vehicle", caption: "Bike wooden crating" },
  { src: "/work/car.png", alt: "Car carrier loading", category: "Vehicle", caption: "Car carrier - Mumbai → Pune" },
  // Storage
  { src: "/work/storage.png", alt: "Warehouse bay", category: "Storage", caption: "Secure storage bay" },
  { src: "/work/truck.png", alt: "On-time", category: "Storage", caption: "On-time delivery" },
];

/* ---------------------------------------------------
   Component
--------------------------------------------------- */
export default function OurWork({
  items = DEFAULT_ITEMS,
  title = "Our Work",
  subtitle = "Recent moves & projects delivered by APM",
}: {
  items?: WorkItem[];
  title?: string;
  subtitle?: string;
}) {
  const [active, setActive] = useState<"All" | Category>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  const categories: ("All" | Category)[] = useMemo(
    () => ["All", "House", "Office", "Vehicle", "Storage"],
    []
  );

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active, items]
  );

  const openLightbox = (indexInFiltered: number) => {
    const globalIndex = items.findIndex((it) => it === filtered[indexInFiltered]);
    setLbIndex(globalIndex >= 0 ? globalIndex : 0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const next = () => setLbIndex((i) => (i + 1) % items.length);
  const prev = () => setLbIndex((i) => (i - 1 + items.length) % items.length);

  // ESC to close, arrows to navigate
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  return (
    <section className="bg-white">
      {/* Header strip */}
      <div
        className="py-10 text-center text-white"
        style={{ background: "linear-gradient(180deg,#d72638 0%,#c31f30 100%)" }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2>
        <p className="mt-2 text-white/90">{subtitle}</p>
      </div>

      {/* Filters */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => {
            const activeChip = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition ring-1",
                  activeChip
                    ? "bg-[#d72638] text-white ring-[#d72638]"
                    : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((it, idx) => (
            <figure
              key={it.src + idx}
              className="group relative overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-black/5"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                {/* You can switch to next/image if you prefer */}
                <img
                  src={it.src}
                  alt={it.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              {/* Top-left category badge */}
              <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {it.category}
              </span>

              {/* Bottom caption + view */}
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                <span className="truncate text-sm">{it.caption || it.alt}</span>
                <button
                  onClick={() => openLightbox(idx)}
                  className="rounded-lg bg-white/90 px-3 py-1 text-xs font-semibold text-[#d72638] shadow hover:bg-white"
                >
                  View
                </button>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Note / CTA */}
        <div className="mt-8 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-black/5">

        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3">
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-lg bg-white/90 p-2 text-slate-900 hover:bg-white"
            aria-label="Close viewer"
          >
            <HiXMark size={22} />
          </button>

          <button
            onClick={prev}
            className="absolute left-3 md:left-6 rounded-full bg-white/90 p-2 text-slate-900 hover:bg-white"
            aria-label="Previous image"
          >
            <HiChevronLeft size={22} />
          </button>

          <div className="max-h-[85vh] w-full max-w-5xl">
            <img
              src={items[lbIndex].src}
              alt={items[lbIndex].alt}
              className="mx-auto max-h-[85vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <p className="mt-3 text-center text-sm text-white/90">
              {items[lbIndex].caption || items[lbIndex].alt}
            </p>
          </div>

          <button
            onClick={next}
            className="absolute right-3 md:right-6 rounded-full bg-white/90 p-2 text-slate-900 hover:bg-white"
            aria-label="Next image"
          >
            <HiChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  );
}
