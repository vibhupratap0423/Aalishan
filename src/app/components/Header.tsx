"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3, HiXMark } from "react-icons/hi2";

const nav = [
  { label: "Home", href: "/#" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  const cleanHref = (href.replace(/#.*/, "") || "/").trim();
  const cleanPath = (pathname || "/").trim();
  return cleanPath === cleanHref;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#d72638] text-white grid place-items-center font-bold">APM</div>
          <div className="leading-tight">
            <p className="font-semibold text-blue-900">ALISHAN PACKERS</p>
            <p className="text-xs text-red-800">All India Transport Service</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {nav.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link
                key={n.label}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "rounded-lg px-3 py-2 font-medium transition",
                  active ? "bg-[#d72638] text-white shadow-sm" : "text-slate-700 hover:text-[#d72638]",
                ].join(" ")}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle — icon color made RED for visibility */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-lg p-2 ring-1 ring-slate-200 text-[#d72638]"
          aria-label="Toggle menu"
        >
          {open ? <HiXMark size={22} /> : <HiBars3 size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-slate-50">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-2 py-3">
            {nav.map((n) => {
              const active = isActive(pathname, n.href);
              return (
                <Link
                  key={n.label}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "rounded-lg px-2 py-2 font-medium transition",
                    active ? "bg-[#d72638] text-white" : "text-slate-900 hover:bg-slate-100",
                  ].join(" ")}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
