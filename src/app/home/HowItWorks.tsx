import { TbPhone, TbSearch, TbBox, TbTruckLoading, TbBolt, TbHome } from "react-icons/tb";

const steps = [
  { icon: TbPhone, title: "Call", sub: "Contact us for inquiry" },
  { icon: TbSearch, title: "Free Survey", sub: "Home visit & quote" },
  { icon: TbBox, title: "Smart Packing", sub: "Quality materials used" },
  { icon: TbTruckLoading, title: "Secure Loading", sub: "Careful handling" },
  { icon: TbBolt, title: "Fast Transit", sub: "Real-time tracking" },
  { icon: TbHome, title: "Careful Unloading", sub: "Safe delivery" },
];

export default function HowItWorks() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-4xl font-extrabold">How It Works</h2>
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-6">
          {steps.map(s => (
            <div key={s.title} className="flex flex-col items-center gap-3">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-[#d72638] text-white">
                <s.icon size={28} />
              </div>
              <p className="font-semibold">{s.title}</p>
              <p className="text-sm text-slate-600">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
