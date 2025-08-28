'use client';

import React, { useEffect, useState } from 'react';

/* ----- Service tabs + Looking For options ----- */
type ServiceKey = keyof typeof LOOKING_FOR;

const SERVICES: { key: ServiceKey; label: string; icon: string }[] = [
  { key: 'domestic', label: 'Domestic Moving', icon: '🚚' },
  { key: 'international', label: 'International Moving', icon: '✈️' },
  { key: 'car', label: 'Car Moving', icon: '🚗' },
  { key: 'storage', label: 'Secure Storage', icon: '🏬' },
  { key: 'office', label: 'Office Moving', icon: '📦' },
  { key: 'commercial', label: 'Commercial Moving', icon: '🏭' },
];

const LOOKING_FOR = {
  domestic: ['1 RHK', '1 BHK', '2 BHK', '3 BHK', 'Villa / Independent House'],
  international: ['Door-to-Door', 'Shared Container (LCL)', 'Full Container (FCL)', 'Air Cargo'],
  car: ['Bike / Scooter', 'Hatchback', 'Sedan', 'SUV', 'Luxury / Premium'],
  storage: ['Short-term (≤ 1 month)', 'Long-term (1+ month)', 'Household Storage', 'Office Inventory'],
  office: ['Small Office (≤10 seats)', 'Medium (10-30)', 'Large (30+)', 'IT/Server Heavy'],
  commercial: ['Retail Store', 'Showroom', 'Warehouse', 'Factory / Industrial'],
} as const;

export default function ContactUsPage() {
  const [service, setService] = useState(SERVICES[0]);

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    // detailed address is optional; we'll keep it to capture pickup detail
    address: '',
    fromCity: '',
    toCity: '',
    date: '',
    lookingFor: LOOKING_FOR[SERVICES[0].key][0],
    shiftSize: 'Light' as 'Light' | 'Heavy',
    message: '',
  });

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('opacity-100', 'translate-y-0');
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // service बदलते ही lookingFor reset करें
  useEffect(() => {
    setForm((f) => ({ ...f, lookingFor: LOOKING_FOR[service.key][0] }));
  }, [service.key]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // APM primary number (international format) — DO NOT CHANGE
    const businessPhoneNumber = '+917208229344';

    const fullMessage = `Hello,

I'm interested in booking your Packers & Movers service.

Service: ${service.label}
Looking For: ${form.lookingFor}
Shift Size: ${form.shiftSize}

Name: ${form.fullName}
Phone: ${form.phone}
Email: ${form.email}
Pickup Address / From: ${form.fromCity || form.address}
Destination (To): ${form.toCity}
Move Date: ${form.date || '-'}

Additional Message:
${form.message}

Please get in touch. Thank you!`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${businessPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section
        className="w-full text-center text-white py-12 sm:py-16 fade-up opacity-0 translate-y-6 transition-all duration-700"
        style={{ background: 'linear-gradient(180deg,#d72638 0%,#c31f30 100%)' }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold">Contact APM</h1>
        <p className="mt-3 text-white/95 max-w-2xl mx-auto px-6">
          Fast & Safe Packers and Movers in Mumbai - Get a free quote for home, office, vehicle transport or storage.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto text-left mb-8 px-6 fade-up opacity-0 translate-y-6 transition-all duration-700">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#d72638]">Tell us about your move</h2>
        <p className="text-gray-700 max-w-3xl">
          Fill the form and our move manager will call you back with a transparent estimate. We operate 8 AM - 9 PM, all days.
        </p>
      </section>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <section className="max-w-6xl mx-auto rounded-2xl border border-red-200 bg-[#fff6f6] px-6 sm:px-10 py-10 md:p-14 space-y-7 fade-up opacity-0 translate-y-6 transition-all duration-700">
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
                    'min-w-[180px] rounded-xl px-4 py-3 text-left shadow-sm ring-1 transition',
                    active ? 'bg-white ring-[#d72638] text-[#d72638]' : 'bg-white ring-slate-200 text-slate-700 hover:ring-slate-300',
                  ].join(' ')}
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
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Get a free <span className="text-[#d72638]">{service.label}</span> quote
          </h3>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} />
            <FormField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
            <FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
          </div>

          {/* Row 2 — From / To / Date */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              label="From City / Pickup Address"
              name="fromCity"
              value={form.fromCity}
              onChange={handleChange}
              placeholder="e.g., Sion, Mumbai"
            />
            <FormField label="To City" name="toCity" value={form.toCity} onChange={handleChange} placeholder="e.g., Pune" />
            <FormField label="Move Date" name="date" type="date" value={form.date} onChange={handleChange} />
          </div>

          {/* Row 3 — Looking For / Shift Size / Submit */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5">
              <label className="block mb-1 text-base font-medium">Looking For</label>
              <select
                name="lookingFor"
                value={form.lookingFor}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:ring-2 focus:ring-[#d72638]/30 focus:border-[#d72638] transition"
                required
              >
                {LOOKING_FOR[service.key].map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-4">
              <label className="block mb-1 text-base font-medium">Shift Size</label>
              <div className="inline-flex rounded-lg ring-1 ring-slate-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, shiftSize: 'Light' }))}
                  className={[
                    'px-4 py-2 text-sm font-semibold transition',
                    form.shiftSize === 'Light' ? 'bg-[#d72638] text-white' : 'bg-white text-slate-700 hover:bg-slate-50',
                  ].join(' ')}
                >
                  Light
                </button>
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, shiftSize: 'Heavy' }))}
                  className={[
                    'px-4 py-2 text-sm font-semibold transition',
                    form.shiftSize === 'Heavy' ? 'bg-[#d72638] text-white' : 'bg-white text-slate-700 hover:bg-slate-50',
                  ].join(' ')}
                >
                  Heavy
                </button>
              </div>
            </div>

            <div className="md:col-span-3 flex md:items-end">
              <button
                type="submit"
                className="w-full md:w-auto rounded-xl bg-[#d72638] px-8 py-3 font-semibold text-white shadow hover:bg-[#b41928]"
              >
                Send via WhatsApp
              </button>
            </div>
          </div>

          {/* Message box */}
          <div>
            <label className="block mb-1 text-base font-medium">Additional Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Share floor/lift info, special items, timing preference, etc."
              className="w-full px-5 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 resize-none focus:ring-2 focus:ring-[#d72638]/30 focus:border-[#d72638] transition"
            />
          </div>
        </section>
      </form>

      <section className="max-w-6xl mx-auto px-6 py-10 fade-up opacity-0 translate-y-6 transition-all duration-700">
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 sm:p-8">
          <h3 className="text-xl font-bold">Need quick help?</h3>
          <p className="mt-2 text-gray-700">
            Call us at <a className="text-[#d72638] font-semibold" href="tel:9044536709">9044536709</a> /{' '}
            <a className="text-[#d72638] font-semibold" href="tel:7208229344">7208229344</a> or email{' '}
            <a className="text-[#d72638] font-semibold" href="mailto:baseerkhan7586@gmail.com">baseerkhan7586@gmail.com</a>
          </p>
        </div>
      </section>

      <style jsx>{`
        .fade-up {
          will-change: transform, opacity;
        }
      `}</style>
    </main>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormField({ label, name, value, onChange, type = 'text', placeholder }: FormFieldProps) {
  return (
    <div>
      <label className="block mb-1 text-base font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder ?? `Enter ${label}`}
        className="w-full px-5 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:ring-2 focus:ring-[#d72638]/30 focus:border-[#d72638] transition"
        required
      />
    </div>
  );
}
