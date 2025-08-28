/* app/about/page.tsx */
import {
  TbUsers,
  TbBox,
  TbDeviceMobileMessage,
  TbWorld,
  TbShieldCheck,
  TbUserCheck,
  TbCertificate,
  TbTruckDelivery,
  TbPhone,
  TbHelpCircle,
} from "react-icons/tb";

export const metadata = {
  title: "About APM | Alishan Packers & Movers",
  description:
    "About APM – Reliable packers and movers from Mumbai with PAN-India network, expert crew, quality packing, insurance support and dedicated move managers.",
};

type WhyCard = { icon: React.ComponentType<any>; title: string; desc: string };

const WHY: WhyCard[] = [
  {
    icon: TbUsers,
    title: "Expert Crew",
    desc: "Trained professionals with years of experience in safe packing and moving.",
  },
  {
    icon: TbBox,
    title: "Quality Materials",
    desc: "Bubble wrap, corrugated sheets, foam, wooden crates—multi-layer protection.",
  },
  {
    icon: TbDeviceMobileMessage,
    title: "Real-Time Updates",
    desc: "Live status & GPS style tracking throughout the journey.",
  },
  {
    icon: TbWorld,
    title: "PAN-India Network",
    desc: "150+ cities covered for door-to-door relocations across India.",
  },
  {
    icon: TbShieldCheck,
    title: "Insurance Support",
    desc: "Comprehensive transit insurance for complete peace of mind.",
  },
  {
    icon: TbUserCheck,
    title: "Dedicated Move Manager",
    desc: "Single point of contact from survey to final delivery.",
  },
];

const TIMELINE = [
  {
    year: "2015",
    title: "Started in Mumbai",
    desc: "Founded with a vision to make shifting transparent and reliable.",
  },
  {
    year: "2018",
    title: "Expanded to Maharashtra",
    desc: "Added Pune, Nashik and major cities with bigger logistics fleet.",
  },
  {
    year: "2020",
    title: "All India Network",
    desc: "Launched pan-India services covering 150+ cities nationwide.",
  },
  {
    year: "2024",
    title: "10K+ Happy Customers",
    desc: "Crossed 10,000 successful relocations with 4.8★ average rating.",
  },
];

const FAQS = [
  {
    q: "Site visit जरूरी है?",
    a: "Small moves के लिए phone survey काफी होता है; large/office moves पर free site visit कर देते हैं।",
  },
  {
    q: "Insurance कैसे मिलता है?",
    a: "Value declaration पर transit insurance arrange किया जाता है; policy copy आपको WhatsApp/Email मिलती है।",
  },
  {
    q: "Packing material क्या-क्या?",
    a: "5-layer system: bubble wrap, foam sheet, corrugated roll, stretch film, strong tape & labeled cartons.",
  },
  {
    q: "Delivery time?",
    a: "Local 24–48 hrs; intercity route/Distance पर depend करता है—tracking updates मिलते रहते हैं।",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO (Hindi line) */}
      <section
        className="relative isolate overflow-hidden"
        style={{ background: "linear-gradient(180deg,#d72638 0%,#c31f30 100%)" }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-center">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold">About APM</h1>
          <p className="mt-5 text-white/95 text-lg sm:text-xl max-w-4xl mx-auto">
            APM ने मुंबई से लेकर पूरे भारत में भरोसेमंद शिफ्टिंग संभव की है। हमारी टीम आपके सामान
            को अपने घर की तरह संभालती है।
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-14 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center">Why Choose APM?</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5"
              >
                <div className="grid h-16 w-16 place-items-center rounded-full bg-[#d72638] text-white">
                  <c.icon size={28} />
                </div>
                <h3 className="mt-4 text-2xl font-bold">{c.title}</h3>
                <p className="mt-3 text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="py-14 md:py-20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center">Our Journey</h2>
          <ol className="mt-12 space-y-8">
            {TIMELINE.map((t) => (
              <li key={t.year} className="flex items-start gap-5">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-[#d72638] text-white text-xl font-extrabold shrink-0">
                  {t.year}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{t.title}</h3>
                  <p className="mt-2 text-slate-600">{t.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CERTIFICATIONS / TRUST STRIP */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-black/5">
              <TbCertificate className="mx-auto text-[#d72638]" size={34} />
              <p className="mt-2 font-semibold">GST Registered</p>
              <p className="text-sm text-slate-600">Proper invoicing & e-way bill support</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-black/5">
              <TbTruckDelivery className="mx-auto text-[#d72638]" size={34} />
              <p className="mt-2 font-semibold">Verified Fleet</p>
              <p className="text-sm text-slate-600">GPS enabled vehicles & trained drivers</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-black/5">
              <TbShieldCheck className="mx-auto text-[#d72638]" size={34} />
              <p className="mt-2 font-semibold">Insured Moves</p>
              <p className="text-sm text-slate-600">Transit insurance assistance</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-black/5">
              <TbPhone className="mx-auto text-[#d72638]" size={34} />
              <p className="mt-2 font-semibold">Support 8 AM–9 PM</p>
              <p className="text-sm text-slate-600">Dedicated customer care</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center">FAQs</h2>
          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {FAQS.map((f, idx) => (
              <details
                key={idx}
                className="group px-5 sm:px-7 py-4 open:bg-slate-50 transition"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                  <span className="flex items-center gap-2">
                    <TbHelpCircle className="text-[#d72638]" /> {f.q}
                  </span>
                  <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
                </summary>
                <p className="mt-3 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="py-16 sm:py-20 text-center text-white"
        style={{ background: "linear-gradient(180deg,#d72638 0%,#c31f30 100%)" }}
      >
        <h3 className="text-3xl sm:text-4xl font-extrabold">Meet Your Move Manager</h3>
        <p className="mt-3 text-white/90 text-lg">
          Get personalized assistance for your relocation needs.
        </p>
        <a
          href="/#quote"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-[#d72638] hover:opacity-90 shadow"
        >
          Contact Now
        </a>
      </section>
    </main>
  );
}
