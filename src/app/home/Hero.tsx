"use client";

import { useEffect, useState } from "react";

const slides = ["/hero1.png", "/hero2.png", "/hero3.png"];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI(p => (p + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden" style={{background:"linear-gradient(180deg,#d72638 0%,#c31f30 100%)"}}>
      {/* bg slider */}
      <div className="absolute inset-0 -z-10">
        {slides.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${i===idx ? "opacity-50" : "opacity-0"}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl">
          <h1 className="text-white text-4xl/[1.15] font-extrabold sm:text-5xl md:text-6xl">
            Fast & Safe Packers and <br/> Movers in Mumbai
          </h1>
          <p className="mt-6 text-white/90 text-lg">
            Home, Office, Vehicle & Storage - All India Transport Service
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#quote" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-white text-[#d72638] hover:opacity-90 shadow">
              Get Free Quote
            </a>
            <a href="tel:9044536709" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-black text-white border border-white/80 hover:bg-white hover:text-[#d72638]">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
