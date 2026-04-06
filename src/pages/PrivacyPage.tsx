import { ShieldCheck, ChevronRight } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="container-standard py-20 lg:py-32 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-6">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-soft-sky">Identity Security</p>
            <h1 className="text-5xl font-black text-deep-slate italic tracking-tight uppercase">Privacy Charter</h1>
            <p className="text-muted-foreground italic text-lg max-w-2xl leading-relaxed">"Your privacy is our most precious vault. We protect your identity as meticulously as we curate our collections."</p>
        </div>

        <div className="space-y-10 prose prose-slate max-w-none prose-p:italic prose-h2:font-black prose-h2:italic prose-h2:text-deep-slate prose-h2:uppercase prose-h2:tracking-widest prose-h2:text-2xl prose-h3:font-black prose-h3:italic">
          <section className="space-y-4">
            <h2 className="flex items-center gap-3">
              <span className="h-2.5 w-10 bg-soft-sky rounded-full" />
              1. Identity Collection
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
                When you enter our vault (site) or create a collector profile, we collect essential identity details such as your name, email, and shipping residences. This is used solely to curate your refined experience and ensure secure delivery of your investments.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="flex items-center gap-3">
              <span className="h-2.5 w-10 bg-soft-sky rounded-full" />
              2. Vault Protection
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
                We employ high-grade SSL encryption and multi-factor verification to guard against unauthorized access to your identity. We never sell, trade, or expose your information to external parties without your explicit consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="flex items-center gap-3">
              <span className="h-2.5 w-10 bg-soft-sky rounded-full" />
              3. Artisan Cookies
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
                Our platform uses minimal, essential cookies to remember your preferences and curation bag selections. These digital signatures help us tailor the boutique's aura to your unique tastes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="flex items-center gap-3">
              <span className="h-2.5 w-10 bg-soft-sky rounded-full" />
              4. Secure Disposals
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
                You have the right to request the complete erasure of your identity from our archives at any time. Our concierge will facilitate this request within 48 hours to ensure your privacy is restored.
            </p>
          </section>
        </div>

        <div className="p-8 bg-muted/20 rounded-3xl border border-dashed flex items-center justify-between group">
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-white rounded-xl shadow-xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-6 w-6 text-soft-sky" />
                </div>
                <div className="space-y-1">
                    <h5 className="text-sm font-black text-deep-slate uppercase tracking-widest">Inquiries regarding Privacy</h5>
                    <p className="text-xs text-muted-foreground italic leading-none">Our security experts are available to clarify our charter at security@aura.com</p>
                </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground opacity-30 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
}
