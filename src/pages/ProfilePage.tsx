import { 
  User, 
  MapPin, 
  ShoppingBag, 
  CreditCard, 
  Settings, 
  LogOut, 
  ChevronRight,
  Package,
  Star,
  Clock,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Mock User Data
const USER = {
  name: "Sameer Khan",
  email: "sameer.khan@designer.com",
  tier: "Platinum Collector",
  joined: "March 2024",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sameer"
};

const ORDERS = [
  { id: "#SK-10029", date: "2024-04-01", total: 432.50, status: "Shipped", item: "Natural Pearl Stud Earrings" },
  { id: "#SK-10028", date: "2024-03-24", total: 89.99, status: "Delivered", item: "Geometric Hexagon Drop Earrings" }
];

export default function ProfilePage() {
  return (
    <div className="container-standard py-16 lg:py-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Sidebar Profile Navigation */}
        <aside className="w-full lg:w-80 shrink-0 space-y-10">
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-2xl shadow-primary/5 ring-1 ring-black/5 scale-100 transition-transform active:scale-95 duration-500">
            <div className="h-24 w-24 rounded-full overflow-hidden ring-4 ring-soft-sky bg-muted mb-4 p-1 shadow-inner">
                <img src={USER.avatar} alt="Avatar" className="h-full w-full object-cover" />
            </div>
            <h2 className="text-xl font-black text-deep-slate italic tracking-tight">{USER.name}</h2>
            <p className="text-[10px] font-black text-soft-sky uppercase tracking-[0.2em] mt-1">{USER.tier}</p>
            <Badge variant="outline" className="mt-4 text-[9px] font-bold border-muted-foreground/30 px-3 py-0.5 uppercase tracking-widest text-muted-foreground">Joined {USER.joined}</Badge>
          </div>

          <nav className="space-y-2">
            {[
              { icon: <ShoppingBag className="h-4 w-4" />, label: "Bag Gallery", active: true },
              { icon: <Package className="h-4 w-4" />, label: "Order History" },
              { icon: <Heart className="h-4 w-4" />, label: "Wishlist Vault" },
              { icon: <MapPin className="h-4 w-4" />, label: "Residences" },
              { icon: <CreditCard className="h-4 w-4" />, label: "Vault Cards" },
              { icon: <Settings className="h-4 w-4" />, label: "Preferences" },
              { icon: <LogOut className="h-4 w-4" />, label: "Sign Out", danger: true },
            ].map((item) => (
              <button 
                key={item.label}
                className={cn(
                  "w-full flex items-center justify-between p-4 rounded-xl transition-all group",
                  item.active ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105" : "hover:bg-muted/40 text-deep-slate/80 hover:text-primary"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn("transition-colors", item.danger && "text-destructive group-hover:text-destructive")}>
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest">{item.label}</span>
                </div>
                <ChevronRight className={cn("h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1", item.active && "opacity-100")} />
              </button>
            ))}
          </nav>
        </aside>

        {/* Profile Content Main Area */}
        <main className="flex-1 space-y-12">
          
          {/* Welcome Cards Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-3xl shadow-xl shadow-primary/5 ring-1 ring-black/5 overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                    <Star className="h-20 w-20 text-soft-sky" fill="currentColor" />
                </div>
                <div className="relative z-10 space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-soft-sky">Collector Status</p>
                    <h3 className="text-3xl font-black text-deep-slate italic">Elite Rewards</h3>
                    <p className="text-xs text-muted-foreground italic leading-relaxed">Exclusive access to limited-edition drops and priority concierge assistance active for your account.</p>
                    <Button variant="outline" size="sm" className="h-9 px-6 rounded-lg text-[10px] font-black uppercase tracking-widest border-2">Redeem Benefits</Button>
                </div>
            </div>
            
            <div className="p-8 bg-white rounded-3xl shadow-xl shadow-primary/5 ring-1 ring-black/5 overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                    <Clock className="h-20 w-20 text-soft-sky" />
                </div>
                <div className="relative z-10 space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-soft-sky">Recent Activity</p>
                    <h3 className="text-3xl font-black text-deep-slate italic">Active Orders</h3>
                    <p className="text-xs text-muted-foreground italic leading-relaxed">Your order <span className="text-primary font-bold">#SK-10029</span> has been dispatched to the courier.</p>
                    <Button variant="outline" size="sm" className="h-9 px-6 rounded-lg text-[10px] font-black uppercase tracking-widest border-2">Track Arrival</Button>
                </div>
            </div>
          </div>

          {/* Recent Orders Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
                <h2 className="text-2xl font-black text-deep-slate uppercase italic tracking-tight">Order Journal</h2>
                <Button variant="link" className="text-[10px] font-black text-soft-sky uppercase tracking-widest p-0 h-auto">View All Archives</Button>
            </div>

            <div className="space-y-4">
                {ORDERS.map((order) => (
                    <div key={order.id} className="p-6 bg-white rounded-2xl shadow-lg ring-1 ring-black/5 hover:ring-primary/20 transition-all flex flex-col md:flex-row items-center justify-between gap-6 group">
                        <div className="flex items-center gap-6 w-full md:w-auto">
                            <div className="h-12 w-12 bg-muted rounded-xl flex items-center justify-center shrink-0">
                                <Package className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <div className="space-y-0.5">
                                <h4 className="text-sm font-bold text-deep-slate uppercase tracking-wider">{order.item}</h4>
                                <p className="text-[11px] text-muted-foreground italic">{order.id} · Dispatched {order.date}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-between w-full md:w-auto md:gap-10">
                            <div className="text-right">
                                <p className="text-lg font-black text-deep-slate">${order.total.toFixed(2)}</p>
                                <p className="text-[9px] font-black text-soft-sky uppercase tracking-widest">{order.status}</p>
                            </div>
                            <Button variant="ghost" size="icon" className="h-10 w-10 text-deep-slate hover:text-primary hover:bg-muted/50 rounded-full border border-transparent hover:border-border">
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Security Banner */}
          <div className="p-6 bg-deep-slate rounded-3xl text-white flex items-center justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/10 translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
            <div className="relative z-10 flex items-center gap-4">
                <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <User className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                    <h5 className="text-[11px] font-black uppercase tracking-widest leading-none">Identity Security</h5>
                    <p className="text-xs text-white/60 italic leading-none">Multi-factor vault protection is actively monitoring your profile.</p>
                </div>
            </div>
            <Button size="sm" className="relative z-10 bg-white text-deep-slate font-black text-[9px] uppercase tracking-widest hover:bg-soft-sky hover:text-white transition-all shadow-xl">Manage Security</Button>
          </div>

        </main>
      </div>
    </div>
  );
}
