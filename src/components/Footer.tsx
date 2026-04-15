import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, Camera, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-4 lg:px-8 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tight text-white">
              CUBICUS<span className="text-muted-foreground">STORE</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Your gateway to the world's trending products. From tech gadgets to eco-friendly home goods, we source the best from Alibaba's global marketplace.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white border-0">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white border-0">
                <Camera className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white border-0">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-gray-400 hover:text-white transition-colors">Shop All</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="h-5 w-5 text-soft-sky" />
                123 Luxury Lane, New York, NY 10001
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-5 w-5 text-soft-sky" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-5 w-5 text-soft-sky" />
                hello@cubicus.store
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-sm text-gray-400">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex flex-col gap-3">
              <Input
                placeholder="Enter your email"
                className="bg-white/5 border-white/10 text-white focus-visible:ring-soft-sky"
              />
              <Button variant="secondary" className="w-full font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© 2024 CUBICUS STORE. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/shipping" className="hover:text-white">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
