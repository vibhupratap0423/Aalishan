import { TbTruckDelivery, TbShield, TbBox, TbClock, TbCurrencyRupee } from "react-icons/tb";

const items = [
  { icon: TbTruckDelivery, label: "Same-Day Pickup" },
  { icon: TbShield, label: "Transit Insurance" },
  { icon: TbBox, label: "5-Layer Packing" },
  { icon: TbClock, label: "On-Time Delivery" },
  { icon: TbCurrencyRupee, label: "Transparent Pricing" },
];

export default function FeaturesRow() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 py-10 text-center sm:grid-cols-3 md:grid-cols-5">
          {items.map(it => (
            <div key={it.label} className="flex flex-col items-center gap-3">
              <it.icon size={38} className="text-[#d72638]" />
              <p className="font-semibold">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
