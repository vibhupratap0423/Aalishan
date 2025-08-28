import { TbHome, TbBuildingSkyscraper, TbCar, TbBox, TbArchive } from "react-icons/tb";

const cards = [
  { icon: TbHome, title: "House Shifting", desc: "Complete home relocation with expert packing and safe transportation of all household items." },
  { icon: TbBuildingSkyscraper, title: "Office Relocation", desc: "Professional office moving with minimal downtime and IT equipment care." },
  { icon: TbCar, title: "Car/Bike Transport", desc: "Safe vehicle transportation with door-to-door delivery across India." },
  { icon: TbBox, title: "Packing/Unpacking", desc: "Quality materials with careful packing and unpacking services." },
  { icon: TbArchive, title: "Safe Storage", desc: "Secure warehousing with CCTV monitoring and climate control facilities." },
];

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-20 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-4xl font-extrabold">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(c => (
            <div key={c.title} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
              <c.icon size={42} className="text-[#d72638]" />
              <h3 className="mt-4 text-2xl font-bold">{c.title}</h3>
              <p className="mt-3 text-slate-600">{c.desc}</p>
              <a href="/services" className="mt-5 inline-flex items-center font-semibold text-[#d72638] hover:underline">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
