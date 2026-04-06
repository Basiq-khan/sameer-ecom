import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/product";

// Mock data for initial cart view
const MOCK_CART = [
  { ...products[0], quantity: 1 },
  { ...products[1], quantity: 2 },
];

export default function CartPage() {
  const subtotal = MOCK_CART.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 99 ? 0 : 15;
  const total = subtotal + shipping;

  if (MOCK_CART.length === 0) {
    return (
      <div className="container-standard py-32 flex flex-col items-center justify-center text-center">
        <div className="h-24 w-24 bg-muted/30 rounded-full flex items-center justify-center mb-8">
            <ShoppingBag className="h-10 w-10 text-muted-foreground opacity-30" />
        </div>
        <h1 className="text-4xl font-black text-deep-slate uppercase italic tracking-tight">Your bag is empty</h1>
        <p className="text-muted-foreground mt-4 max-w-md italic">"True luxury is unexpected, but not having your favorite piece is simply unacceptable."</p>
        <Link to="/shop" className="mt-10">
          <Button size="lg" className="h-14 px-10 bg-deep-slate text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all">
            Explore Collections
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container-standard py-16 lg:py-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Cart Items List */}
        <div className="flex-1 space-y-10">
          <div className="border-b pb-6 flex items-baseline justify-between">
            <h1 className="text-4xl font-black text-deep-slate tracking-tight italic uppercase">Shopping Bag</h1>
            <p className="text-sm text-soft-sky font-bold uppercase tracking-widest">{MOCK_CART.length} Designer Pieces</p>
          </div>

          <div className="space-y-8">
            {MOCK_CART.map((item) => (
              <div key={item.id} className="flex gap-6 group relative">
                <Link to={`/product/${item.id}`} className="block h-32 w-24 sm:h-48 sm:w-36 flex-shrink-0 overflow-hidden rounded-xl bg-muted ring-1 ring-black/5 hover:ring-primary/20 transition-all duration-500">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between py-1">
                  <div className="flex justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-soft-sky">{item.productType}</p>
                      <Link to={`/product/${item.id}`} className="text-lg font-bold text-deep-slate hover:text-primary transition-colors line-clamp-1 italic">{item.title}</Link>
                      <p className="text-xs text-muted-foreground font-medium italic">SKU: {item.sku}</p>
                    </div>
                    <p className="text-lg font-black text-deep-slate whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-muted/30 rounded-lg p-1 border">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-deep-slate hover:text-primary"><Minus className="h-3 w-3" /></Button>
                        <span className="w-8 text-center text-sm font-black">{item.quantity}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-deep-slate hover:text-primary"><Plus className="h-3 w-3" /></Button>
                    </div>
                    <Button variant="ghost" size="sm" className="h-auto p-0 text-xs font-bold text-destructive/70 hover:text-destructive hover:bg-transparent flex items-center gap-1.5 uppercase tracking-widest">
                      <Trash2 className="h-3.5 w-3.5" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 border-t">
            <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-2xl border border-dashed text-deep-slate/70">
                <Truck className="h-5 w-5 text-soft-sky" />
                <p className="text-xs font-bold uppercase tracking-widest leading-none">Complimentary Concierge Shipping</p>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-2xl border border-dashed text-deep-slate/70">
                <ShieldCheck className="h-5 w-5 text-soft-sky" />
                <p className="text-xs font-bold uppercase tracking-widest leading-none">2-Year International Craftsmanship Warranty</p>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <aside className="w-full lg:w-[400px] shrink-0">
          <div className="sticky top-32 p-8 bg-white rounded-3xl shadow-2xl shadow-primary/5 ring-1 ring-black/5 space-y-8">
            <h2 className="text-xl font-black text-deep-slate tracking-tight uppercase">Order Essence</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-medium text-muted-foreground italic">
                <span>Value of Craft</span>
                <span className="text-deep-slate font-bold not-italic">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-muted-foreground italic">
                <span>White Glove Shipping</span>
                <span className="text-deep-slate font-bold not-italic">{shipping === 0 ? "Complimentary" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-muted-foreground italic">
                <span>Estimated Sales Tax</span>
                <span className="text-deep-slate font-bold not-italic">$0.00</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between items-baseline">
                <span className="text-lg font-black text-deep-slate uppercase tracking-tight">Total Investment</span>
                <span className="text-3xl font-black text-primary">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4">
                <Button className="w-full h-14 bg-deep-slate text-white text-lg font-black uppercase tracking-widest rounded-xl hover:bg-black transition-all shadow-xl group">
                    Proceed to Vault
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Link to="/shop" className="block text-center text-xs font-black text-soft-sky uppercase tracking-[0.2em] hover:text-primary transition-colors">
                    Continue Exploring
                </Link>
            </div>

            {/* Payment Icons Placeholder */}
            <div className="flex items-center justify-center gap-4 opacity-30 invert">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3 w-auto" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 w-auto" alt="Mastercard" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 w-auto" alt="Paypal" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
