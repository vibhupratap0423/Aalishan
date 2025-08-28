export default function StatsStrip() {
  return (
    <section className="bg-[#d72638] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 py-12 text-center sm:grid-cols-3">
        <div>
          <p className="text-5xl font-extrabold">10K+</p>
          <p className="mt-2 text-white/90">Successful Moves</p>
        </div>
        <div>
          <p className="text-5xl font-extrabold">150+</p>
          <p className="mt-2 text-white/90">Cities Covered</p>
        </div>
        <div>
          <p className="text-5xl font-extrabold">4.8★</p>
          <p className="mt-2 text-white/90">Customer Rating</p>
        </div>
      </div>
    </section>
  );
}
