export default function TopBar() {
  const message = "🌎 GLOBAL SHIPPING ON ALL ORDERS ✨ 30-DAY HASSLE-FREE RETURNS ✨ TRENDING TECH & LIFESTYLE ESSENTIALS ✨ 24/7 CUSTOMER SUPPORT 🌎";

  return (
    <div className="relative w-full bg-primary overflow-hidden py-2.5">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white px-4">
          {message}
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white px-4">
          {message}
        </span>
      </div>
    </div>
  );
}
