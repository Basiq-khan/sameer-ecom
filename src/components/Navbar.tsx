import { Link } from "react-router-dom";
import { ShoppingBag, User, Menu, ChevronRight, Heart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetTitle,
  SheetHeader
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const SHOP_CATEGORIES = [
  {
    title: "Categories",
    items: ["Electronics", "Home & Garden", "Health & Beauty", "Sports & Fashion"],
  },
  {
    title: "Trending",
    items: ["Best Sellers", "New Arrivals", "Flash Sales", "Gift Ideas"],
  },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wide flex h-16 items-center justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tight text-primary uppercase italic">
              CUBICUS<span className="text-muted-foreground/50">STORE</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + " font-black text-[11px] uppercase tracking-widest"}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              {/* SHOP WITH SUBMENU */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-black text-[11px] uppercase tracking-widest">Marketplace</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white border border-border shadow-2xl rounded-xl">
                    {SHOP_CATEGORIES.map((cat) => (
                      <li key={cat.title} className="space-y-3">
                        <h4 className="text-xs font-black text-primary uppercase tracking-widest border-b pb-2">{cat.title}</h4>
                        <div className="grid gap-2">
                          {cat.items.map((item) => (
                            <Link 
                              key={item} 
                              to="/shop" 
                              className="text-[13px] text-muted-foreground hover:text-primary hover:font-bold transition-all flex items-center gap-2 group"
                            >
                              <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              {item}
                            </Link>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + " font-black text-[11px] uppercase tracking-widest"}>
                    Our Story
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + " font-black text-[11px] uppercase tracking-widest"}>
                    Support
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-1 sm:gap-3">
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="text-primary/70 hover:text-primary transition-colors">
                <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/wishlist">
            <Button variant="ghost" size="icon" className="relative text-primary/70 hover:text-primary transition-colors">
              <Heart className="h-5 w-5" />
              {totalWishlistItems > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] text-white font-black">
                  {totalWishlistItems}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative text-primary/70 hover:text-primary transition-colors">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] text-white font-black">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {/* MOBILE HAMBURGER MENU */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 p-0 text-primary ml-1">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l">
                <SheetHeader className="text-left border-b pb-6">
                  <SheetTitle className="text-lg font-black text-primary tracking-widest uppercase">CUBICUS STORE</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-6">
                  <Link to="/" className="text-xl font-black text-primary hover:text-primary">HOME</Link>
                  <Separator />
                  <div className="space-y-4">
                    <p className="text-xs font-black text-muted-foreground/50 tracking-[0.2em] uppercase">Marketplace</p>
                    <div className="flex flex-col gap-3 pl-2">
                        {SHOP_CATEGORIES[0].items.map(m => (
                            <Link key={m} to="/shop" className="text-sm font-bold text-muted-foreground hover:text-primary">{m}</Link>
                        ))}
                    </div>
                  </div>
                  <Separator />
                  <Link to="/about" className="text-xl font-black text-primary hover:text-primary">OUR STORY</Link>
                  <Link to="/contact" className="text-xl font-black text-primary hover:text-primary">SUPPORT</Link>
                  <Link to="/cart" className="text-xl font-black text-primary hover:text-primary flex items-center justify-between">
                    MY BAG
                    <Badge className="bg-primary text-white border-none rounded-full">{totalItems}</Badge>
                  </Link>
                  
                  <div className="mt-auto pt-10">
                    <Link to="/profile">
                        <Button className="w-full h-12 bg-primary text-white font-bold rounded-xl shadow-lg">
                        Member Access
                        </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
