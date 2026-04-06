import { ArrowRight, Star, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 pb-32 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover scale-105 brightness-[0.65]"
          alt="Jewellery Craftsmanship"
        />
        <div className="relative z-10 text-center space-y-6 px-4">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-soft-sky">Our Heritage</p>
          <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tight">The Art of Elegance</h1>
          <p className="text-white/80 max-w-xl mx-auto italic text-lg leading-relaxed">"Craftsmanship is the heartbeat of every piece we create, a silent promise of beauty that transcends time."</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container-standard grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
            <div className="space-y-4">
                <h2 className="text-4xl font-black text-deep-slate italic">A Legacy of Light</h2>
                <div className="h-1.5 w-24 bg-soft-sky rounded-full" />
            </div>
            <p className="text-muted-foreground leading-relaxed italic text-lg text-justify">
                Founded in the pursuit of perfection, Sameer Ecom is more than a boutique — it is a sanctuary for those who appreciate the finer details of existence. Our journey began with a simple belief: that jewellery should not just be worn, but lived in.
            </p>
            <p className="text-muted-foreground leading-relaxed italic text-lg text-justify">
                Each gemstone is hand-selected, and every curve is meticulously carved by master artisans who have dedicated their lives to the mastery of precious metals. From the minimalist teardrop to the ornate cameo, our collection is an editorial on grace.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                    <p className="text-3xl font-black text-primary italic">25+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-soft-sky">Master Artisans</p>
                </div>
                <div className="space-y-2">
                    <p className="text-3xl font-black text-primary italic">100%</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-soft-sky">Ethically Sourced</p>
                </div>
            </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-2xl">
            <img 
                src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?q=80&w=2069&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Artisan at work" 
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>
      </section>

      {/* Values Banner */}
      <section className="bg-deep-slate py-24 text-white">
        <div className="container-standard grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
                { icon: <Star className="h-10 w-10 text-soft-sky mx-auto" />, title: "Timeless Design", desc: "Aesthetic directions that remain relevant across generations." },
                { icon: <Heart className="h-10 w-10 text-soft-sky mx-auto" />, title: "Soulful Spirit", desc: "Jewellery with an aura of mindfulness and spiritual depth." },
                { icon: <ShieldCheck className="h-10 w-10 text-soft-sky mx-auto" />, title: "Pure Assurance", desc: "Lifetime warranty on the craftsmanship of every vault entry." }
            ].map((v, i) => (
                <div key={i} className="space-y-4 px-4 group">
                    <div className="transition-transform duration-500 group-hover:scale-110">{v.icon}</div>
                    <h3 className="text-xl font-black italic">{v.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed italic">{v.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Editorial CTA */}
      <section className="container-standard text-center space-y-10">
        <div className="space-y-4">
            <h2 className="text-5xl font-black text-deep-slate italic tracking-tight">Write Your Story</h2>
            <p className="text-muted-foreground italic max-w-lg mx-auto">Explore our curated collections and find the piece that speaks to your unique identity.</p>
        </div>
        <Link to="/shop">
            <Button size="lg" className="h-16 px-12 bg-deep-slate text-white text-lg font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-2xl group">
                Begin Exploring
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
        </Link>
      </section>
    </div>
  );
}
