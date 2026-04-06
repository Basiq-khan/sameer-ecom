import { Link } from "react-router-dom";
import { ShoppingBag, User, Menu, ChevronRight } from "lucide-react";
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

const SHOP_CATEGORIES = [
  {
    title: "Materials",
    items: ["Sterling Silver", "14K Gold", "Rose Gold", "Platinum"],
  },
  {
    title: "By Type",
    items: ["Earrings", "Necklaces", "Pendants", "Rings"],
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wide flex h-16 items-center justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tight text-deep-slate uppercase italic">
              SAMEER<span className="text-soft-sky">ECOM</span>
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
                <NavigationMenuTrigger className="font-black text-[11px] uppercase tracking-widest">Shop All</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white border border-border shadow-2xl rounded-xl">
                    {SHOP_CATEGORIES.map((cat) => (
                      <li key={cat.title} className="space-y-3">
                        <h4 className="text-xs font-black text-deep-slate uppercase tracking-widest border-b pb-2">{cat.title}</h4>
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
                    Editorial
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + " font-black text-[11px] uppercase tracking-widest"}>
                    Concierge
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-1 sm:gap-3">
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="text-deep-slate/70 hover:text-primary transition-colors">
                <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative text-deep-slate/70 hover:text-primary transition-colors">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] text-white font-black">
                2
              </span>
            </Button>
          </Link>

          {/* MOBILE HAMBURGER MENU */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 p-0 text-deep-slate ml-1">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l">
                <SheetHeader className="text-left border-b pb-6">
                  <SheetTitle className="text-lg font-black text-deep-slate tracking-widest uppercase">Navigation</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-6">
                  <Link to="/" className="text-xl font-black text-deep-slate hover:text-primary">HOME</Link>
                  <Separator />
                  <div className="space-y-4">
                    <p className="text-xs font-black text-soft-sky tracking-[0.2em] uppercase">Collections</p>
                    <div className="flex flex-col gap-3 pl-2">
                        {SHOP_CATEGORIES[0].items.map(m => (
                            <Link key={m} to="/shop" className="text-sm font-bold text-muted-foreground hover:text-deep-slate">{m}</Link>
                        ))}
                    </div>
                  </div>
                  <Separator />
                  <Link to="/about" className="text-xl font-black text-deep-slate hover:text-primary">EDITORIAL</Link>
                  <Link to="/contact" className="text-xl font-black text-deep-slate hover:text-primary">CONCIERGE</Link>
                  <Link to="/cart" className="text-xl font-black text-deep-slate hover:text-primary flex items-center justify-between">
                    MY BAG
                    <Badge className="bg-primary text-white border-none rounded-full">2</Badge>
                  </Link>
                  
                  <div className="mt-auto pt-10">
                    <Link to="/profile">
                        <Button className="w-full h-12 bg-deep-slate text-white font-bold rounded-xl shadow-lg">
                        Identity Vault
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
