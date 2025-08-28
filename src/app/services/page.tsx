"use client";

import Link from "next/link";
import {
  TbShield,
  TbDog,
  TbPiano,
  TbBarcode,
  TbBox,
  TbDeviceFloppy,
} from "react-icons/tb";

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section
        className="py-16 sm:py-20 text-center text-white"
        style={{ background: "linear-gradient(180deg,#d72638 0%,#c31f30 100%)" }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold">Our Services</h1>
        <p className="mt-4 text-white/90 text-lg">
          Complete relocation solutions for all your moving needs
        </p>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-4">
          {/* Home Shifting */}
          <ServiceRow
            emoji="🏠"
            title="Home Shifting"
            desc="Complete household relocation with expert care"
            includes={[
              "5-layer protective packing",
              "Furniture dismantle & assembly",
              "Wardrobe boxes for clothes",
              "Fragile item special care",
              "Loading & unloading",
            ]}
            faq={[
              ["How long does packing take?", "1-2 BHK: 4–8 hrs, 3 BHK: 8–10 hrs"],
              ["Do you pack everything?", "Yes, from clothes to kitchen items"],
            ]}
            cta="Get Quote for Home Shifting"
          />

          {/* Office Relocation */}
          <ServiceRow
            emoji="🏢"
            title="Office Relocation"
            desc="Professional office moving with minimal downtime"
            includes={[
              "IT equipment special care",
              "Weekend/after-hours moves",
              "File & document handling",
              "Furniture reassembly",
              "Minimal business disruption",
            ]}
            faq={[
              ["Can you move on weekends?", "Yes, we offer flexible timing"],
              ["How do you handle IT equipment?", "Anti-static packing & careful handling"],
            ]}
            cta="Get Quote for Office Move"
            reverse
          />

          {/* Vehicle Transport */}
          <ServiceRow
            emoji="🚗"
            title="Vehicle Transport"
            desc="Safe car and bike transportation across India"
            includes={[
              "Bike wooden crating",
              "Car carrier transportation",
              "Door-to-door pickup/delivery",
              "Insurance coverage",
              "Real-time tracking",
            ]}
            faq={[
              ["How long for Mumbai to Delhi?", "Approx. 3–5 days for delivery"],
              ["Is insurance mandatory?", "Recommended for valuable vehicles"],
            ]}
            cta="Get Quote for Vehicle Transport"
          />

          {/* Storage */}
          <ServiceRow
            emoji="🏬"
            title="Storage & Warehousing"
            desc="Secure storage solutions with flexible plans"
            includes={[
              "24/7 CCTV monitoring",
              "Climate-controlled facility",
              "Weekly/monthly plans",
              "Easy access system",
              "Inventory management",
            ]}
            faq={[
              ["Minimum storage period?", "1 week minimum, flexible plans"],
              ["Can I access my items?", "Yes, with prior appointment"],
            ]}
            cta="Get Quote for Storage"
            reverse
          />
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-extrabold">Additional Services</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-black/5 text-center">
              <TbShield className="mx-auto text-[#d72638]" size={34} />
              <h3 className="mt-3 text-xl font-bold">Transit Insurance</h3>
              <p className="mt-2 text-slate-600">
                Comprehensive coverage for your valuable items during transportation.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-black/5 text-center">
              <TbDog className="mx-auto text-[#d72638]" size={34} />
              <h3 className="mt-3 text-xl font-bold">Pet & Plant Moving</h3>
              <p className="mt-2 text-slate-600">
                Special care for your pets and plants during relocation.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-black/5 text-center">
              <TbPiano className="mx-auto text-[#d72638]" size={34} />
              <h3 className="mt-3 text-xl font-bold">Heavy Items</h3>
              <p className="mt-2 text-slate-600">
                Piano, safe and other heavy items moved with special equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY STRIP */}
      <section
        className="py-14 sm:py-20 text-center text-white"
        style={{ background: "linear-gradient(180deg,#d72638 0%,#c31f30 100%)" }}
      >
        <h2 className="text-3xl font-extrabold">Safety First Approach</h2>
        <p className="mt-2 text-white/90 text-lg">
          Barcode inventory system + sealed cartons for complete security
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-8 text-white/95">
          <div className="flex items-center gap-2">
            <TbBarcode /> Barcode Tracking
          </div>
          <div className="flex items-center gap-2">
            <TbBox /> Sealed Cartons
          </div>
          <div className="flex items-center gap-2">
            <TbDeviceFloppy /> Digital Inventory
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------ Sub Component ------------------ */
type Props = {
  emoji: string;
  title: string;
  desc: string;
  includes: string[];
  faq: [string, string][];
  cta: string;
  reverse?: boolean;
};

function ServiceRow({ emoji, title, desc, includes, faq, cta, reverse }: Props) {
  return (
    <div className="grid gap-0 overflow-hidden rounded-2xl bg-white shadow ring-1 ring-black/5 md:grid-cols-2">
      <div
        className={`p-8 text-white ${reverse ? "order-last md:order-first" : ""}`}
        style={{ background: "linear-gradient(180deg,#d72638 0%,#c31f30 100%)" }}
      >
        <div className="text-5xl">{emoji}</div>
        <h3 className="mt-3 text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-white/90">{desc}</p>
      </div>

      <div className="p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-semibold">✓ What's Included:</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
              {includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>

            {/* Link to Contact page with selected plan in query */}
            <Link
              href={`/contact?plan=${encodeURIComponent(title)}`}
              className="mt-4 inline-block rounded-lg bg-[#d72638] px-5 py-2 font-semibold text-white hover:bg-[#b41f2b]"
            >
              {cta}
            </Link>
          </div>

          <div>
            <h4 className="font-semibold">❓ Quick FAQ:</h4>
            <ul className="mt-2 space-y-2 text-slate-700">
              {faq.map(([q, a]) => (
                <li key={q}>
                  <p className="font-medium">Q: {q}</p>
                  <p className="text-sm">A: {a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
