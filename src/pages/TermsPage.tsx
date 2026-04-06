import { FileText, ChevronRight } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="container-standard py-20 lg:py-32 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-6">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-soft-sky">Legal Agreement</p>
            <h1 className="text-5xl font-black text-deep-slate italic tracking-tight uppercase">Boutique Terms</h1>
            <p className="text-muted-foreground italic text-lg max-w-2xl leading-relaxed">"Our terms of service outline the mutual respect between our master curators and our patrons, ensuring clear standards for your luxury experience."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
                { title: "Vault Eligibility", desc: "Patrons must be at least 18 years of age and provide a valid identity entry (email/name) to establish a collector's profile." },
                { title: "Curation Rights", desc: "All designs, editorial photography, and brand identity elements are the exclusive intellectual property of Sameer Ecom Jewellery." },
                { title: "Return Protocol", desc: "Unworn pieces in original vault packaging may be returned for a digital credit or full refund within 30 days of arrival." },
                { title: "Limitation of Aura", desc: "Sameer Ecom provides an exceptional boutique experience, but we are not liable for external courier delay beyond our control." }
            ].map((t, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl shadow-xl shadow-primary/5 ring-1 ring-black/5 space-y-4 hover:ring-primary/20 transition-all">
                    <h3 className="text-xl font-black text-deep-slate uppercase tracking-tight italic">{t.title}</h3>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">{t.desc}</p>
                </div>
            ))}
        </div>

        <div className="p-8 bg-muted/20 rounded-3xl border border-dashed flex items-center justify-between group">
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-white rounded-xl shadow-xl flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-soft-sky" />
                </div>
                <div className="space-y-1">
                    <h5 className="text-sm font-black text-deep-slate uppercase tracking-widest">Inquiries regarding Terms</h5>
                    <p className="text-xs text-muted-foreground italic leading-none">Our legal curators are available at legal@aura.com</p>
                </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground opacity-30 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
}
