const data = [
  { name: "Priya Sharma", quote: "Excellent service! They packed everything carefully and delivered on time. Highly recommended for house shifting in Mumbai." },
  { name: "Rajesh Kumar", quote: "Professional team and transparent pricing. Our office relocation was completed without any damage. Great work APM!" },
  { name: "Amit Patel", quote: "Best packers and movers in Mumbai! They handled our 3BHK shift from Mumbai to Pune perfectly. Thank you team!" },
];

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-4xl font-extrabold">What Our Customers Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {data.map(t => (
            <figure key={t.name} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
              <div className="text-yellow-500">★★★★★</div>
              <blockquote className="mt-3 text-slate-700">{t.quote}</blockquote>
              <figcaption className="mt-4 font-semibold">– {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
