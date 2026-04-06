import { Link } from "react-router-dom";
import { ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product";

const HERO_SLIDES = [
  {
    title: "Luxury Jewellery Collection",
    subtitle: "Where Elegance Meets Timeless Craftsmanship",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
    cta: "Shop Now",
  },
  {
    title: "Minimalist Elegance",
    subtitle: "Discover Our New Teardrop Series",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2070&auto=format&fit=crop",
    cta: "View Collection",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative w-full">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {HERO_SLIDES.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[85vh] w-full overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover brightness-75 scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-deep-slate/80 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 top-0 flex items-center px-4 md:px-16 lg:px-24">
                    <div className="max-w-2xl space-y-8">
                      <div className="space-y-4">
                        <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1]">
                          {slide.title}
                        </h1>
                        <p className="text-lg font-medium text-white md:text-xl max-w-lg">
                          {slide.subtitle}
                        </p>
                      </div>
                      <Link to="/shop">
                        <Button size="lg" className="h-14 px-8 text-lg font-bold bg-white text-deep-slate hover:bg-ice-blue transition-all group">
                          {slide.cta}
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-8 right-16 flex gap-4">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/10 text-white hover:bg-white/20 border-white/20" />
            <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/10 text-white hover:bg-white/20 border-white/20" />
          </div>
        </Carousel>
      </section>

      {/* Stats/Features Banner */}
      <section className="container-standard">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-2xl bg-white p-8 shadow-xl shadow-primary/5 border">
          {[
            { icon: <Truck className="h-8 w-8 text-soft-sky" />, title: "Free Shipping", desc: "On orders over $99" },
            { icon: <ShieldCheck className="h-8 w-8 text-soft-sky" />, title: "Secure Checkout", desc: "100% protected payments" },
            { icon: <Star className="h-8 w-8 text-soft-sky" />, title: "Premium Quality", desc: "Handcrafted with love" }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              {feature.icon}
              <h3 className="font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="container-standard">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-3xl font-black tracking-tight text-deep-slate md:text-4xl">
                NEW ARRIVALS
              </h2>
              <div className="h-1.5 w-24 bg-soft-sky rounded-full" />
            </div>
            <Link to="/shop">
              <Button variant="ghost" className="gap-2 font-bold text-primary group">
                Browse All Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner Section */}
      <section className="container-standard">
        <div className="relative h-[400px] w-full overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1573408339375-f9ad8603af7e?q=80&w=2070&auto=format&fit=crop"
            alt="Promotion"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-deep-slate/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 gap-6">
            <Badge className="bg-white text-deep-slate font-black text-sm px-4 py-1">LIMITED TIME OFFER</Badge>
            <h2 className="text-5xl font-black text-white md:text-7xl">SALE 50% OFF</h2>
            <p className="max-w-md text-white italic text-lg">
              "Elegance is the only beauty that never fades." - Audrey Hepburn
            </p>
            <Link to="/shop">
              <Button size="lg" className="h-14 px-10 bg-white text-deep-slate hover:bg-ice-blue font-bold text-lg shadow-xl transition-all hover:scale-105">
                Redeem Offer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
