import { Truck, ChevronRight, Package, MapPin, ShieldCheck, Clock } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="container-standard py-20 lg:py-32 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-6">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-soft-sky">Logistics & Arrival</p>
            <h1 className="text-5xl font-black text-deep-slate italic tracking-tight uppercase">White Glove Protocols</h1>
            <p className="text-muted-foreground italic text-lg max-w-2xl leading-relaxed">"The final chapter of your curation is its graceful arrival. Our shipping is a silent service, designed for peace of mind."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
                { 
                    icon: <Truck className="h-6 w-6 text-soft-sky" />, 
                    title: "Investment Delivery", 
                    desc: "Complementary White Glove delivery on all investments over $99. International shipments are fully insured." 
                },
                { 
                    icon: <Clock className="h-6 w-6 text-soft-sky" />, 
                    title: "Arrival Timeline", 
                    desc: "Standard concierge preparation takes 24-48 hours. Domestic arrival is expected 3-5 business days from dispatch." 
                },
                { 
                    icon: <MapPin className="h-6 w-6 text-soft-sky" />, 
                    title: "Global Residences", 
                    desc: "We serve over 45 international luxury destinations. Specific duties and taxes are curated at the point of checkout." 
                },
                { 
                    icon: <ShieldCheck className="h-6 w-6 text-soft-sky" />, 
                    title: "Secure Packaging", 
                    desc: "Every piece arrives in our signature velvet-lined vault packaging, designed to protect and present with grace." 
                }
            ].map((s, i) => (
                <div key={i} className="flex gap-6 group">
                    <div className="h-16 w-16 bg-muted rounded-3xl flex items-center justify-center shrink-0 ring-1 ring-black/5 transition-transform group-hover:scale-110">
                        {s.icon}
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-black text-deep-slate uppercase tracking-tight italic">{s.title}</h4>
                        <p className="text-sm text-muted-foreground italic leading-relaxed">{s.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="p-8 bg-muted/20 rounded-3xl border border-dashed flex items-center justify-between group">
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-white rounded-xl shadow-xl flex items-center justify-center shrink-0">
                    <Package className="h-6 w-6 text-soft-sky" />
                </div>
                <div className="space-y-1">
                    <h5 className="text-sm font-black text-deep-slate uppercase tracking-widest">Inquiries regarding Arrival</h5>
                    <p className="text-xs text-muted-foreground italic leading-none">Our logistics curators are available at logistics@aura.com</p>
                </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground opacity-30 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
}
