import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="container-standard py-20 lg:py-32 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex flex-col lg:flex-row gap-20">
        
        {/* Contact Information Sidebar */}
        <div className="flex-1 space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-black text-deep-slate italic leading-tight tracking-tight uppercase">Support Center</h1>
            <p className="text-muted-foreground italic text-lg max-w-lg">"Your journey with Cubicus Store is a commitment to quality. Our dedicated experts are here to assist you with every request."</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[
                { icon: <Phone className="h-6 w-6 text-soft-sky" />, title: "Voice Call", detail: "+1 239 516 4440" },
                { icon: <Mail className="h-6 w-6 text-soft-sky" />, title: "Secure Email", detail: "info@shopcubicus.com" },
                { icon: <MapPin className="h-6 w-6 text-soft-sky" />, title: "Identity Vault", detail: "1766 Rue Goyer Laval, H7T-1M5 Quebec, Canada" },
                { icon: <Clock className="h-6 w-6 text-soft-sky" />, title: "Available Hours", detail: "Mon - Sat: 10AM - 8PM EST" }
            ].map((c, i) => (
                <div key={i} className="flex gap-4 group">
                    <div className="h-12 w-12 bg-muted rounded-xl flex items-center justify-center shrink-0 ring-1 ring-black/5 transition-transform group-hover:scale-110">
                        {c.icon}
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-sm font-black text-deep-slate uppercase tracking-widest">{c.title}</h4>
                        <p className="text-sm text-muted-foreground italic leading-relaxed">{c.detail}</p>
                    </div>
                </div>
            ))}
          </div>

          <div className="p-8 bg-soft-sky/5 rounded-3xl border-2 border-dashed border-soft-sky/20 flex flex-col sm:flex-row items-center gap-6 group">
            <div className="h-16 w-16 bg-white rounded-2xl shadow-xl flex items-center justify-center shrink-0 rotate-3 transition-transform group-hover:rotate-0">
                <MessageSquare className="h-8 w-8 text-soft-sky" />
            </div>
            <div className="space-y-1">
                <h4 className="text-xl font-black text-deep-slate italic">Live Consultation</h4>
                <p className="text-xs text-muted-foreground italic max-w-xs leading-relaxed">Our master curation experts are available for via high-definition video call for private viewing sessions.</p>
            </div>
            <Button variant="outline" className="h-10 px-6 rounded-lg text-[10px] font-black uppercase tracking-widest border-2 shrink-0">Inquire Session</Button>
          </div>
        </div>

        {/* Contact Form Section */}
        <aside className="w-full lg:w-[450px] shrink-0">
          <div className="p-10 bg-white rounded-3xl shadow-2xl shadow-primary/5 ring-1 ring-black/5 space-y-8">
            <h2 className="text-2xl font-black text-deep-slate tracking-tight uppercase italic">Secure Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Identity Name</label>
                  <Input 
                    placeholder="E.g. Sameer Khan" 
                    className="h-12 bg-muted/30 border-none rounded-xl focus-visible:ring-primary/20 text-sm font-medium italic" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Secure Email</label>
                  <Input 
                    placeholder="hello@aura.com" 
                    className="h-12 bg-muted/30 border-none rounded-xl focus-visible:ring-primary/20 text-sm font-medium italic" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Theme of Interest</label>
                <Input 
                  placeholder="Custom Engagement, Editorial Series, etc." 
                  className="h-12 bg-muted/30 border-none rounded-xl focus-visible:ring-primary/20 text-sm font-medium italic" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Message Content</label>
                <textarea 
                  placeholder="How can our artisans assist you?" 
                  className="min-h-[150px] w-full p-4 bg-muted/30 border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-sm font-medium italic resize-none outline-none transition-all" 
                />
              </div>
              <Button className="w-full h-14 bg-deep-slate text-white text-lg font-black uppercase tracking-widest rounded-xl hover:bg-black transition-all shadow-xl group">
                    Dispatch Inquiry
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}
