import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    images: string[];
    availability: boolean;
    productType: string;
    color?: string[];
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.availability) return;
    
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      productType: product.productType,
    });
  };

  const isFavorited = isInWishlist(product.id);

  return (
    <Card className="group relative border-none bg-transparent p-0 transition-all duration-500 hover:shadow-none translate-y-0 hover:-translate-y-2">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden rounded-2xl bg-ice-blue ring-1 ring-black/5 group-hover:ring-primary/20 transition-all duration-500">
        {/* Main Product Image */}
        <img
          src={product.images[0]}
          alt={product.title}
          className={`h-full w-full object-cover transition-all duration-1000 ease-in-out ${product.images.length > 1 ? 'group-hover:opacity-0 group-hover:scale-110' : 'group-hover:scale-110'}`}
        />

        {/* Hover Image (if exists) */}
        {product.images.length > 1 && (
          <img
            src={product.images[1]}
            alt={`${product.title} alternate`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100"
          />
        )}

        {/* Overlay Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {!product.availability ? (
            <Badge variant="outline" className="bg-destructive text-white border-none text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg">
              SOLD OUT
            </Badge>
          ) : (
            product.id % 2 === 0 && (
              <Badge variant="outline" className="bg-soft-sky text-white border-none text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg">
                HOT
              </Badge>
            )
          )}
        </div>

        {/* Quick Action Side Buttons */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 z-30 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-75">
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
                "h-9 w-9 rounded-full bg-white/95 backdrop-blur-md shadow-xl transition-all ring-1 ring-black/5",
                isFavorited ? "bg-primary text-white" : "text-deep-slate hover:bg-primary hover:text-white"
            )}
            onClick={handleToggleWishlist}
          >
            <Heart className={cn("h-4 w-4", isFavorited && "fill-current")} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 rounded-full bg-white/95 backdrop-blur-md shadow-xl text-deep-slate hover:bg-primary hover:text-white transition-all ring-1 ring-black/5"
            onClick={handleAddToCart}
            disabled={!product.availability}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick View Button (Slide Up) */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30 hidden sm:block">
          <div className="bg-white/90 backdrop-blur-lg rounded-xl p-3 shadow-2xl flex items-center justify-between gap-3 border border-white/50">
            <span className="text-[10px] font-black uppercase tracking-widest text-deep-slate truncate">QUICK VIEW</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0" />
          </div>
        </div>
      </Link>

      <div className="px-5 pb-5 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-soft-sky">
            {product.productType}
          </p>
          {/* Color Swatches */}
          {product.color && (
            <div className="flex gap-1">
              {product.color.slice(0, 3).map((c) => (
                <div
                  key={c}
                  title={c}
                  className="h-2 w-2 rounded-full border border-black/10 ring-1 ring-transparent hover:ring-primary/50 transition-all cursor-crosshair shadow-sm"
                  style={{ backgroundColor: c.toLowerCase().replace(' ', '') }}
                />
              ))}
            </div>
          )}
        </div>

        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-xl font-bold text-deep-slate leading-tight transition-colors hover:text-primary line-clamp-1 italic tracking-tight">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-baseline gap-2 pt-1">
          <p className="text-2xl font-black text-deep-slate">
            ${product.price.toFixed(2)}
          </p>
          {/* Fake "Sales" Price for luxury feel */}
          <p className="text-[11px] text-muted-foreground line-through opacity-50 font-medium">
            ${(product.price * 1.2).toFixed(2)}
          </p>
        </div>
      </div>
    </Card>
  );
}
