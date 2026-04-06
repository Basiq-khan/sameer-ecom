export default function TopBar() {
  const message = "✨ FREE LUXURY SHIPPING ON ALL ORDERS OVER $99 ✨ 30-DAY HASSLE-FREE RETURNS ✨ NEW ARRIVALS: CRYSTAL TEARDROP COLLECTION ✨";
  
  return (
    <div className="relative w-full bg-[#1f2937] overflow-hidden py-2.5">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e7eef9] px-4">
          {message}
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e7eef9] px-4">
          {message}
        </span>
      </div>
    </div>
  );
}
