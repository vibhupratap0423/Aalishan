"use client";

export default function TopBar() {
  return (
    <div className="w-full bg-[#d72638] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 text-[14px]">
        <div className="flex items-center gap-3">
          <span>9044536709 / 7208229344 / 8779773584 </span>
          <span className="hidden md:inline-block">•</span>
          <span className="hidden md:inline-block">baseerkhan7586@gmail.com</span>
        </div>
        <div className="hidden sm:block">Mon-Sun: 8 AM - 9 PM</div>
      </div>
    </div>
  );
}
