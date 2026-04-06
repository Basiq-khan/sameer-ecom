import { MessageCircle, ShieldCheck, Truck, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ_DATA = [
  {
    category: "Curation & Orders",
    icon: <ShoppingBag className="h-5 w-5" />,
    items: [
      { q: "How are the pieces curated?", a: "Every piece at Sameer Ecom is hand-selected by our master curators in New York and Paris, focusing on exceptional craftsmanship and ethical sourcing." },
      { q: "Do you offer custom commissions?", a: "Yes, our master artisans are available for bespoke creations. Please contact our Concierge for a private consultation." },
      { q: "Can I modify my order?", a: "Once an identity vault entry (order) is dispatched, modifications are restricted to maintain security. Contact us immediately for urgent changes." }
    ]
  },
  {
    category: "Logistics & Shipping",
    icon: <Truck className="h-5 w-5" />,
    items: [
      { q: "What is White Glove Shipping?", a: "It is our signature complimentary shipping service for any investment over $99, featuring temperature-controlled transit and fully insured delivery." },
      { q: "Do you provide international delivery?", a: "We currently deliver to over 45 countries worldwide. Customs and duties are calculated at the vault (checkout)." }
    ]
  },
  {
    category: "Assurance & Security",
    icon: <ShieldCheck className="h-5 w-5" />,
    items: [
      { q: "What is the Lifetime Warranty?", a: "We stand by our craftsmanship. Any structural defect in our pieces is covered by a lifetime repair guarantee." },
      { q: "Is my payment secure?", a: "Sameer Ecom uses high-grade SSL encryption and multi-factor identity verification to ensure your vault transactions are fully protected." }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="container-standard py-20 lg:py-32 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-6">
            <h1 className="text-5xl font-black text-deep-slate tracking-tight uppercase italic">Curator's Journal (FAQ)</h1>
            <p className="text-muted-foreground italic text-lg max-w-2xl mx-auto leading-relaxed">Explore our archives for answers to common inquiries regarding our craftsmanship, logistics, and identity security.</p>
        </div>

        <div className="space-y-12">
            {FAQ_DATA.map((cat, idx) => (
                <div key={idx} className="space-y-6">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <div className="h-10 w-10 bg-soft-sky/10 rounded-xl flex items-center justify-center text-soft-sky">
                            {cat.icon}
                        </div>
                        <h2 className="text-xl font-black text-deep-slate uppercase tracking-widest">{cat.category}</h2>
                    </div>
                    
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {cat.items.map((item, i) => (
                            <AccordionItem key={i} value={`item-${idx}-${i}`} className="border-none bg-white rounded-2xl shadow-lg ring-1 ring-black/5 px-6 overflow-hidden transition-all duration-300">
                                <AccordionTrigger className="hover:no-underline py-6">
                                    <span className="text-left font-bold text-deep-slate italic group flex items-start gap-4">
                                        <span className="text-primary opacity-50 shrink-0 font-black">Q.</span>
                                        {item.q}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6 pt-2">
                                    <p className="text-muted-foreground leading-relaxed italic text-sm pl-8">
                                        <span className="text-primary font-black opacity-30 mr-2 -ml-8">A.</span>
                                        {item.a}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            ))}
        </div>

        <div className="p-10 bg-deep-slate rounded-3xl text-white text-center space-y-6 group overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
            <div className="relative z-10 space-y-4">
                <MessageCircle className="h-10 w-10 text-soft-sky mx-auto" />
                <h3 className="text-2xl font-black text-white italic">Aura not found?</h3>
                <p className="text-white/60 italic max-w-md mx-auto text-sm leading-relaxed">If you cannot find your answer in our journal, our master curators are available via live chat or concierge email.</p>
                <div className="pt-4">
                    <Button variant="outline" className="bg-white text-deep-slate font-black text-[10px] uppercase tracking-widest hover:bg-soft-sky hover:text-white transition-all shadow-xl h-10 px-8">Consult Curator</Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
