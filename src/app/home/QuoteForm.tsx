"use client";

import { useEffect, useState } from "react";

type Service = {
  key: keyof typeof LOOKING_FOR;
  label: string;
  icon: string;
};

const SERVICES: Service[] = [
  { key: "domestic", label: "Domestic Moving", icon: "🚚" },
  { key: "international", label: "International Moving", icon: "✈️" },
  { key: "car", label: "Car Moving", icon: "🚗" },
  { key: "storage", label: "Secure Storage", icon: "🏬" },
  { key: "office", label: "Office Moving", icon: "📦" },
  { key: "commercial", label: "Commercial Moving", icon: "🏭" },
];

/** Options for the “Looking For” field per service */
const LOOKING_FOR = {
  domestic: ["1 RHK", "1 BHK", "2 BHK", "3 BHK", "Villa / Independent House"],
  international: ["Door-to-Door", "Shared Container (LCL)", "Full Container (FCL)", "Air Cargo"],
  car: ["Bike / Scooter", "Hatchback", "Sedan", "SUV", "Luxury / Premium"],
  storage: ["Short-term (≤ 1 month)", "Long-term (1+ month)", "Household Storage", "Office Inventory"],
  office: ["Small Office (≤10 seats)", "Medium (10–30)", "Large (30+)", "IT/Server Heavy"],
  commercial: ["Retail Store", "Showroom", "Warehouse", "Factory / Industrial"],
} as const;

export default function QuoteForm() {
  const [service, setService] = useState<Service>(SERVICES[0]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    from: "",
    to: "",
    date: "",
    shiftSize: "Light" as "Light" | "Heavy",
    lookingFor: LOOKING_FOR[SERVICES[0].key][0], // default first option
  });

  // जब service बदले तो lookingFor को उस service की पहली option पर सेट करें
  useEffect(() => {
    const first = LOOKING_FOR[service.key][0] ?? "";
    setForm((f) => ({ ...f, lookingFor: first }));
  }, [service.key]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // APM WhatsApp number (unchanged)
    const businessPhoneNumber = "+917208229344";

    const fullMessage = `Hello,

Quick Quote request from APM website.

Service: ${service.label}
Looking For: ${form.lookingFor}
Shift Size: ${form.shiftSize}

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
From: ${form.from}
To: ${form.to}
Move Date: ${form.date || "-"}

Please get in touch. Thank you!`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${businessPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div id="quote" className="mx-auto max-w-6xl rounded-2xl bg-white p-6 md:p-8 shadow-md ring-1 ring-black/5">
      {/* Service Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {SERVICES.map((s) => {
          const active = s.key === service.key;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => setService(s)}
              aria-pressed={active}
              className={[
                "min-w-[180px] rounded-xl px-4 py-3 text-left shadow-sm ring-1 transition",
                active ? "bg-white ring-[#d72638] text-[#d72638]" : "bg-white ring-slate-200 text-slate-700 hover:ring-slate-300",
              ].join(" ")}
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">{s.icon}</span>
                <span className="font-semibold">{s.label}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Title */}
      <h2 className="mt-6 mb-4 text-2xl md:text-3xl font-extrabold">
        Get a free <span className="text-[#d72638]">{service.label}</span> quote
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-12">
        {/* Row 1 */}
        <input
          name="name"
          placeholder="Full Name*"
          value={form.name}
          onChange={onChange}
          required
          className="md:col-span-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#d72638] focus:ring-2 focus:ring-[#d72638]/20"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Mobile No*"
          value={form.phone}
          onChange={onChange}
          required
          className="md:col-span-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#d72638] focus:ring-2 focus:ring-[#d72638]/20"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Id*"
          value={form.email}
          onChange={onChange}
          required
          className="md:col-span-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#d72638] focus:ring-2 focus:ring-[#d72638]/20"
        />

        {/* Row 2 — From, To, Date */}
        <input
          name="from"
          placeholder="From*"
          value={form.from}
          onChange={onChange}
          required
          className="md:col-span-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#d72638] focus:ring-2 focus:ring-[#d72638]/20"
        />
        <input
          name="to"
          placeholder="To*"
          value={form.to}
          onChange={onChange}
          required
          className="md:col-span-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#d72638] focus:ring-2 focus:ring-[#d72638]/20"
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={onChange}
          required
          className="md:col-span-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#d72638] focus:ring-2 focus:ring-[#d72638]/20"
        />

        {/* Row 3 — Looking For / Shift Size / Submit */}
        <select
          name="lookingFor"
          value={form.lookingFor}
          onChange={onChange}
          required
          className="md:col-span-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none bg-white focus:border-[#d72638] focus:ring-2 focus:ring-[#d72638]/20"
        >
          {LOOKING_FOR[service.key].map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <div className="md:col-span-4 flex items-center gap-3">
          <span className="font-medium text-slate-700">Shift Size:</span>
          <div className="inline-flex rounded-lg ring-1 ring-slate-200 overflow-hidden">
            <button
              type="button"
              onClick={() => setForm((f) => ({ ...f, shiftSize: "Light" }))}
              className={[
                "px-4 py-2 text-sm font-semibold transition",
                form.shiftSize === "Light" ? "bg-[#d72638] text-white" : "bg-white text-slate-700 hover:bg-slate-50",
              ].join(" ")}
            >
              Light
            </button>
            <button
              type="button"
              onClick={() => setForm((f) => ({ ...f, shiftSize: "Heavy" }))}
              className={[
                "px-4 py-2 text-sm font-semibold transition",
                form.shiftSize === "Heavy" ? "bg-[#d72638] text-white" : "bg-white text-slate-700 hover:bg-slate-50",
              ].join(" ")}
            >
              Heavy
            </button>
          </div>
        </div>

        <div className="md:col-span-4 flex md:justify-end">
          <button
            type="submit"
            className="w-full md:w-auto rounded-xl bg-[#d72638] px-8 py-3 font-semibold text-white shadow hover:bg-[#b41928]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
