import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item: any) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
    removeFromWishlist(item.id);
  };

  if (wishlist.length === 0) {
    return (
      <div className="container-standard py-32 flex flex-col items-center justify-center text-center">
        <div className="h-24 w-24 bg-primary/5 rounded-full flex items-center justify-center mb-8">
            <Heart className="h-10 w-10 text-primary opacity-30" />
        </div>
        <h1 className="text-4xl font-black text-primary uppercase italic tracking-tight">Wishlist is empty</h1>
        <p className="text-muted-foreground mt-4 max-w-md italic">"Found nothing to love? Our newest arrivals might just change your mind."</p>
        <Link to="/shop" className="mt-10">
          <Button size="lg" className="h-14 px-10 bg-primary text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all">
            Browse Favorites
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container-standard py-16 lg:py-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex flex-col gap-10">
        <div className="border-b pb-6 flex items-baseline justify-between">
            <h1 className="text-4xl font-black text-primary tracking-tight italic uppercase">My Wishlist</h1>
            <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">{wishlist.length} Items Saved</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishlist.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-3xl border overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2">
              <Link to={`/product/${item.id}`} className="block aspect-[4/5] overflow-hidden bg-muted">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </Link>
              
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">{item.productType}</p>
                  <Link to={`/product/${item.id}`} className="block text-lg font-bold text-primary hover:underline line-clamp-1 italic">{item.title}</Link>
                  <p className="text-xl font-black text-primary">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 h-11 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-all"
                    onClick={() => handleMoveToCart(item)}
                  >
                    <ShoppingCart className="h-3.5 w-3.5 mr-2" />
                    Add to Bag
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-11 w-11 rounded-xl text-destructive hover:bg-destructive/5"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-10 border-t flex justify-center">
            <Link to="/shop">
                <Button variant="ghost" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                    Continue Shopping
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}
