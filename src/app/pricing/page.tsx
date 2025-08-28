"use client";

import {
  TbCheck,
  TbX,
  TbStar,
  TbAlertTriangle,
  TbPlus,
} from "react-icons/tb";

export default function PricingPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section
        className="py-16 sm:py-20 text-center text-white"
        style={{ background: "linear-gradient(180deg,#d72638 0%,#c31f30 100%)" }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Transparent Pricing
        </h1>
        <p className="mt-3 text-white/90 text-lg">
          No hidden charges, clear pricing for all services
        </p>
      </section>

      {/* PLANS */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 grid gap-6 md:grid-cols-3">
          <Plan
            title="Starter"
            subtitle="Perfect for 1BHK Local Moves"
            price="From ₹8,000"
            note="*Within Mumbai"
            features={[
              ["Professional packing", true],
              ["Loading & unloading", true],
              ["Local transportation", true],
              ["Basic insurance", true],
              ["Unpacking service", false],
            ]}
            cta="Choose Starter"
          />

          <Plan
            title="Standard"
            subtitle="2/3BHK or Intercity Moves"
            price="From ₹15,000"
            note="*Mumbai to other cities"
            features={[
              ["Professional packing", true],
              ["Loading & unloading", true],
              ["Intercity transportation", true],
              ["Insurance assistance", true],
              ["Unpacking service", true],
            ]}
            popular
            cta="Choose Standard"
          />

          <Plan
            title="Premium"
            subtitle="Villa/Office/Custom Moves"
            price="Custom Quote"
            note="*Based on requirements"
            features={[
              ["Dedicated move manager", true],
              ["Priority transit", true],
              ["Premium packing materials", true],
              ["Complete insurance", true],
              ["Setup & arrangement", true],
            ]}
            cta="Get Custom Quote"
          />
        </div>

        <p className="mx-auto mt-6 max-w-5xl px-4 text-center text-sm text-slate-500">
          *Final price varies by inventory volume, distance, floors, lift
          availability, packing materials and add-ons. Get an accurate quote
          with a quick survey call.
        </p>
      </section>

      {/* INCLUDED VS ADDITIONAL */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-extrabold mb-8">
            What&apos;s Included vs Additional
          </h2>

          <div className="grid overflow-hidden rounded-2xl bg-white shadow ring-1 ring-black/5 md:grid-cols-2">
            {/* Included */}
            <div className="p-8">
              <h3 className="text-2xl font-extrabold text-emerald-600">
                ✓ Included in All Plans
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Professional packing materials",
                  "Loading & unloading",
                  "Transportation",
                  "Basic insurance",
                  "Real-time tracking",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 text-emerald-600">
                      <TbCheck />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional */}
            <div className="border-t border-slate-100 p-8 md:border-l md:border-t-0">
              <h3 className="flex items-center gap-2 text-2xl font-extrabold text-orange-600">
                <TbAlertTriangle /> Additional Charges
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Toll charges (actual)",
                  "Parking charges",
                  "Staircase charges (above 2nd floor)",
                  "Extended storage",
                  "Premium insurance",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 text-orange-600">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING FAQS */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-extrabold mb-8">
            Pricing FAQs
          </h2>

          <div className="space-y-4">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:bg-slate-50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
                  {f.q}
                  <span className="rounded-full border border-slate-300 p-1 text-slate-500 transition group-open:rotate-45">
                    <TbPlus />
                  </span>
                </summary>
                <p className="mt-3 text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* --------------------------- Subcomponents --------------------------- */

type PlanProps = {
  title: string;
  subtitle: string;
  price: string;
  note?: string;
  features: [string, boolean][];
  cta: string;
  popular?: boolean;
};

function Plan({
  title,
  subtitle,
  price,
  note,
  features,
  cta,
  popular,
}: PlanProps) {
  return (
    <div
      className={`relative rounded-3xl bg-white p-7 shadow-xl ring-1 ${
        popular
          ? "ring-[#d72638]/60"
          : "ring-slate-200"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#d72638] px-4 py-1 text-sm font-semibold text-white shadow">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-extrabold text-slate-900">{title}</h3>
      <p className="mt-1 text-slate-500">{subtitle}</p>

      <div className="mt-6">
        <div className="text-4xl font-extrabold text-[#d72638]">{price}</div>
        {note ? <p className="text-sm text-slate-500 mt-1">{note}</p> : null}
      </div>

      <ul className="mt-6 space-y-3">
        {features.map(([label, ok]) => (
          <li key={label} className="flex items-start gap-3">
            {ok ? (
              <span className="mt-1 text-emerald-600">
                <TbCheck />
              </span>
            ) : (
              <span className="mt-1 text-slate-400">
                <TbX />
              </span>
            )}
            <span className={ok ? "" : "text-slate-400"}>{label}</span>
          </li>
        ))}
      </ul>

      <button className="mt-7 w-full rounded-xl bg-[#d72638] px-6 py-3 font-semibold text-white hover:bg-[#b41928]">
        {cta}
      </button>

      {popular && (
        <div className="mt-3 flex items-center justify-center gap-1 text-sm text-amber-600">
          <TbStar /> Best value for 2/3BHK
        </div>
      )}
    </div>
  );
}

/* ------------------------------ Data ------------------------------ */

const FAQS = [
  {
    q: "How is the final price calculated?",
    a: "Final price depends on volume of goods, distance, packing materials needed, and additional services. We keep it transparent and share a breakup.",
  },
  {
    q: "Is home survey necessary for pricing?",
    a: "Yes, for accurate pricing we recommend a free home survey. However, we can provide approximate estimates from your inventory list or a short video.",
  },
  {
    q: "How long does packing take?",
    a: "1BHK: 4-6 hours, 2BHK: 6-8 hours, 3BHK: 8-10 hours. Office moves depend on size and equipment.",
  },
  {
    q: "What's the delivery time for intercity moves?",
    a: "Mumbai to Delhi: 3-5 days, Mumbai to Bangalore: 4-6 days, Mumbai to Chennai: 5-7 days. Depends on route & load.",
  },
  {
    q: "Do you have insurance coverage?",
    a: "Yes, we provide basic transit insurance. Premium insurance with higher coverage is available at additional cost.",
  },
];
