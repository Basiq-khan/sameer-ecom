import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, Truck, ShieldCheck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });

  const subtotal = totalPrice;
  const shipping = subtotal > 99 || subtotal === 0 ? 0 : 15;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsOrdered(true);
      clearCart();
    }, 1500);
  };

  if (isOrdered) {
    return (
      <div className="container-standard py-32 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
        <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-4xl font-black text-primary uppercase italic tracking-tight">Order Placed!</h1>
        <p className="text-muted-foreground mt-4 max-w-md italic">
          Thank you for your purchase, {formData.fullName}. Your order is being processed and will be delivered via Cash on Delivery.
        </p>
        <Link to="/" className="mt-10">
          <Button size="lg" className="h-14 px-10 bg-primary text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all">
            Return Home
          </Button>
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container-standard py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold">No items to checkout</h1>
        <Link to="/shop" className="mt-4 text-primary hover:underline">Go to shop</Link>
      </div>
    );
  }

  return (
    <div className="container-standard py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Checkout Form */}
        <div className="flex-1 space-y-10">
          <div className="space-y-4">
            <Link to="/cart" className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              <ArrowLeft className="h-3 w-3" />
              Back to Bag
            </Link>
            <h1 className="text-4xl font-black text-primary tracking-tight italic uppercase">Checkout</h1>
          </div>

          <form onSubmit={handlePlaceOrder} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-xs font-black uppercase tracking-widest">Full Name</Label>
                <Input 
                  id="fullName" 
                  name="fullName"
                  required 
                  placeholder="John Doe" 
                  className="h-12 border-muted-foreground/20 focus-visible:ring-primary"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest">Email Address</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  required 
                  placeholder="john@example.com" 
                  className="h-12 border-muted-foreground/20 focus-visible:ring-primary"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address" className="text-xs font-black uppercase tracking-widest">Shipping Address</Label>
                <Input 
                  id="address" 
                  name="address"
                  required 
                  placeholder="123 Street Name" 
                  className="h-12 border-muted-foreground/20 focus-visible:ring-primary"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="text-xs font-black uppercase tracking-widest">City</Label>
                <Input 
                  id="city" 
                  name="city"
                  required 
                  placeholder="New York" 
                  className="h-12 border-muted-foreground/20 focus-visible:ring-primary"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs font-black uppercase tracking-widest">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  required 
                  placeholder="+1 (555) 000-0000" 
                  className="h-12 border-muted-foreground/20 focus-visible:ring-primary"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary uppercase italic">Payment Method</h3>
              <div className="p-4 rounded-xl border-2 border-primary bg-primary/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-bold uppercase">Cash on Delivery (COD)</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-medium">Pay when you receive your order</p>
                  </div>
                </div>
                <div className="h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full h-16 bg-primary text-white text-lg font-black uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all shadow-xl">
              Place Order (${total.toFixed(2)})
            </Button>
          </form>
        </div>

        {/* Order Review */}
        <aside className="w-full lg:w-[400px] shrink-0">
          <div className="p-8 bg-muted/20 rounded-3xl border space-y-8">
            <h2 className="text-xl font-black text-primary tracking-tight uppercase">Review Order</h2>
            
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-16 w-12 rounded-md overflow-hidden bg-white border">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-primary truncate italic">{item.title}</p>
                    <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex justify-between text-sm font-medium">
                <span>Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span>Shipping</span>
                <span className="font-bold">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <span className="text-lg font-black text-primary uppercase">Total</span>
                <span className="text-2xl font-black text-primary">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <p className="text-[10px] font-bold uppercase opacity-50">Fast Delivery</p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                <p className="text-[10px] font-bold uppercase opacity-50">Secure Order</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
