import { useParams, Link } from "react-router-dom";
import { 
  ChevronRight, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Heart, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  Star 
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/data/product";
import { shipping, returns } from "@/data/shipping-and-return";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { cn } from "@/lib/utils";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const product = products.find((p) => p.id === Number(id)) || products[0];
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product Not Found</div>;

  const handleAddToCart = () => {
    if (!product.availability) return;
    
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
    });
  };

  const handleToggleWishlist = () => {
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
    <div className="container-standard py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10 font-medium overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-bold">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Col: Gallery */}
        <div className="space-y-6">
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((img, i) => (
                <CarouselItem key={i}>
                  <div className="aspect-square bg-muted rounded-3xl overflow-hidden shadow-2xl shadow-primary/5">
                    <img
                      src={img}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="left-4 h-12 w-12 bg-white/50 backdrop-blur-sm border-none shadow-lg" />
              <CarouselNext className="right-4 h-12 w-12 bg-white/50 backdrop-blur-sm border-none shadow-lg" />
            </div>
          </Carousel>
          
          {/* Thumbnails */}
          <div className="flex gap-4 overflow-x-auto pb-4 pt-2">
            {product.images.map((img, i) => (
              <div 
                key={i} 
                className="h-24 w-24 rounded-xl overflow-hidden bg-muted border-2 border-primary cursor-pointer transition-all hover:scale-105"
              >
                <img src={img} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Info */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
                <Badge variant="outline" className="text-soft-sky font-black tracking-widest uppercase text-[10px]">
                    {product.productType}
                </Badge>
                {product.availability && (
                    <Badge className="bg-green-500/10 text-green-600 border-green-200/20 shadow-none capitalize">
                        In Stock
                    </Badge>
                )}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black text-deep-slate leading-tight tracking-tight">
                {product.title}
            </h1>

            <div className="flex items-center gap-6">
                <p className="text-3xl font-black text-primary">
                    ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(s => (
                        <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm font-bold text-muted-foreground ml-2">(15 Reviews)</span>
                </div>
            </div>
          </div>

          <Separator className="bg-border/50" />

          {/* Color/Options */}
          <div className="space-y-6">
            <div className="space-y-3">
                <p className="text-sm font-black text-deep-slate uppercase tracking-wider">Color: {product.color[0]}</p>
                <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full border-2 border-primary bg-[#f0f0f0] cursor-pointer" />
                    <div className="h-8 w-8 rounded-full border border-gray-200 bg-[#333] cursor-pointer" />
                </div>
            </div>

            <div className="space-y-3">
                <p className="text-sm font-black text-deep-slate uppercase tracking-wider">Quantity</p>
                <div className="flex items-center h-12 w-32 rounded-full border border-border bg-white px-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setQuantity(q => Math.max(1, q-1))}>
                        <Minus className="h-3 w-3" />
                    </Button>
                    <span className="flex-1 text-center font-black text-deep-slate">{quantity}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setQuantity(q => q+1)}>
                        <Plus className="h-3 w-3" />
                    </Button>
                </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="flex-[2] h-14 bg-primary text-primary-foreground font-black text-lg gap-3 rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              onClick={handleAddToCart}
              disabled={!product.availability}
            >
                <ShoppingCart className="h-5 w-5" />
                ADD TO CART - ${(product.price * quantity).toFixed(2)}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className={cn(
                "flex-1 h-14 rounded-full border-border font-bold uppercase tracking-wider transition-all",
                isFavorited ? "bg-primary text-white border-primary" : "text-deep-slate hover:bg-muted"
              )}
              onClick={handleToggleWishlist}
            >
                <Heart className={cn("h-5 w-5 mr-2", isFavorited && "fill-current")} />
                {isFavorited ? "Liked" : "Wishlist"}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border">
                <div className="p-2 bg-soft-sky/10 rounded-full">
                    <Truck className="h-5 w-5 text-soft-sky" />
                </div>
                <div>
                    <p className="text-xs font-black text-deep-slate">FREE SHIPPING</p>
                    <p className="text-[10px] text-muted-foreground font-medium">On orders over $99</p>
                </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border">
                <div className="p-2 bg-soft-sky/10 rounded-full">
                    <RotateCcw className="h-5 w-5 text-soft-sky" />
                </div>
                <div>
                    <p className="text-xs font-black text-deep-slate">30 DAYS RETURN</p>
                    <p className="text-[10px] text-muted-foreground font-medium">Hassle-free guarantee</p>
                </div>
            </div>
          </div>

          {/* Details Tabs */}
          <div className="mt-8">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full mb-6 bg-transparent border-b rounded-none px-0 h-12">
                <TabsTrigger value="description" className="uppercase font-black text-xs tracking-widest text-muted-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full bg-transparent shadow-none">Description</TabsTrigger>
                <TabsTrigger value="shipping" className="uppercase font-black text-xs tracking-widest text-muted-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full bg-transparent shadow-none">Shipping</TabsTrigger>
                <TabsTrigger value="returns" className="uppercase font-black text-xs tracking-widest text-muted-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full bg-transparent shadow-none">Returns</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="space-y-6 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-black text-deep-slate uppercase tracking-wider">Specifications</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between text-sm py-1 border-b border-muted">
                        <span className="text-muted-foreground">Material</span>
                        <span className="font-bold text-deep-slate">{product.description.material}</span>
                      </li>
                      <li className="flex justify-between text-sm py-1 border-b border-muted">
                        <span className="text-muted-foreground">Style</span>
                        <span className="font-bold text-deep-slate">{product.description.styles.join(", ")}</span>
                      </li>
                      <li className="flex justify-between text-sm py-1 border-b border-muted">
                        <span className="text-muted-foreground">Modeling</span>
                        <span className="font-bold text-deep-slate">{product.description.modeling}</span>
                      </li>
                      <li className="flex justify-between text-sm py-1 border-b border-muted">
                        <span className="text-muted-foreground">SKU</span>
                        <span className="font-bold text-deep-slate font-mono text-[10px]">{product.sku}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-black text-deep-slate uppercase tracking-wider">Key Details</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed italic">
                        {product.description.tip}
                    </p>
                    <div className="bg-ice-blue/30 p-4 rounded-xl text-xs font-medium text-deep-slate/80 border border-ice-blue/50">
                        {product.shippingInfo.description}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="shipping" className="pt-2">
                <div className="space-y-4">
                  <h4 className="text-lg font-black text-deep-slate uppercase tracking-tight">{shipping.title || "Shipping Information"}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed whitespace-pre-line">
                    {shipping.description}
                  </p>
                  <Separator className="bg-border/30 my-4" />
                  <div className="flex items-center gap-2 p-3 bg-soft-sky/5 rounded-lg border border-soft-sky/10">
                    <ShieldCheck className="h-4 w-4 text-soft-sky" />
                    <span className="text-xs font-bold text-soft-sky italic">Price protection & secure delivery available on this item</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="returns" className="pt-2">
                <div className="space-y-4">
                  <h4 className="text-lg font-black text-deep-slate uppercase tracking-tight">{returns.title}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed whitespace-pre-line">
                    {returns.description}
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Suggested Products Section */}
      <section className="mt-24 space-y-10">
        <div className="flex flex-col items-center text-center gap-2">
            <h2 className="text-3xl font-black text-deep-slate tracking-tight uppercase">You May Also Like</h2>
            <div className="h-1.5 w-20 bg-soft-sky rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...products, ...products].slice(0, 4).map((p, i) => (
                <div key={i} className="hover:-translate-y-2 transition-transform">
                    <Card className="overflow-hidden border-none shadow-none bg-transparent group">
                        <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-muted">
                            <img src={p.images[0]} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h3 className="font-bold text-deep-slate group-hover:text-primary transition-colors italic">{p.title}</h3>
                        <p className="text-primary font-black">${p.price}</p>
                    </Card>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
