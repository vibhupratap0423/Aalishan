import { TbMapPin, TbPhone, TbMail, TbClockHour9, TbBrandFacebook, TbBrandWhatsapp, TbBrandInstagram } from "react-icons/tb";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#d72638] text-white grid place-items-center font-bold">APM</div>
            <div className="leading-tight">
              <p className="font-semibold">ALISHAN PACKERS</p>
              <p className="text-xs text-slate-300">All India Transport Service</p>
            </div>
          </div>
          <p className="mt-4 text-slate-300">
            Professional packers and movers serving Mumbai and all India with reliable, safe, and transparent moving services.
          </p>
          <a href="#quote" className="mt-5 inline-block rounded-xl bg-[#d72638] px-5 py-3 font-semibold">
            Faster • Safer • Transparent
          </a>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-3 text-slate-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Our Services</h4>
          <ul className="space-y-3 text-slate-300">
            <li>House Shifting</li><li>Office Relocation</li><li>Car/Bike Transport</li>
            <li>Packing & Unpacking</li><li>Storage Solutions</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-2"><TbMapPin className="mt-1" /> Shop No. 347, Agra Road, Naik Nagar, Behind Sangam Hotel, Sion (W), Mumbai-400022</li>
            <li className="flex items-center gap-2"><TbPhone /> 9044536709 / 7208229344</li>
            <li className="flex items-center gap-2"><TbMail /> baseerkhan7586@gmail.com</li>
            <li className="flex items-center gap-2"><TbClockHour9 /> Mon-Sun: 8 AM - 9 PM</li>
          </ul>

          <div className="mt-4 flex gap-3">
            <a className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"><TbBrandFacebook /></a>
            <a className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"><TbBrandInstagram /></a>
            <a className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"><TbBrandWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-300">
        © 2024 Alishan Packers and Movers (APM). All rights reserved.
      </div>
    </footer>
  );
}
