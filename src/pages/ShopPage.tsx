import { useState, useMemo } from "react";
import { Filter, ChevronDown, ListFilter, Grid2X2, SortDesc, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product";

const MATERIALS = ["Gold", "Silver", "Platinum", "Diamond", "Pearl", "Sapphire", "Titanium", "Ruby"];
const STYLES = ["Classic", "Modern", "Vintage", "Minimalist", "Bridal", "Luxury", "Everyday", "Statement"];
const CATEGORIES = ["Rings", "Necklaces", "Earrings", "Bracelets", "Watches"];

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high">("featured");
  const [viewLayout, setViewLayout] = useState<"grid" | "list">("grid");

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const resetFilters = () => {
    setSelectedMaterials([]);
    setSelectedCategories([]);
    setSelectedStyles([]);
    setPriceRange([0, 500]);
  };

  // FILTERING LOGIC
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      // Category Filter
      if (selectedCategories.length > 0) {
        const matchesCategory = selectedCategories.some(c => 
            c === "All" || product.productType === c || product.title.includes(c.slice(0, -1)) // rough plural to singular match
        );
        if (!matchesCategory) return false;
      }
      
      // Material Filter
      if (selectedMaterials.length > 0) {
        const productMaterial = product.description.material.toLowerCase();
        const matchesMaterial = selectedMaterials.some(m => productMaterial.includes(m.toLowerCase()));
        if (!matchesMaterial) return false;
      }
      // Style Filter
      if (selectedStyles.length > 0) {
        const matchesStyle = selectedStyles.some(s => product.description.styles.includes(s));
        if (!matchesStyle) return false;
      }
      // Price Filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }
      return true;
    });

    // Sorting Logic
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategories, selectedMaterials, selectedStyles, priceRange, sortBy]);

  return (
    <div className="container-standard py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar - Desktop & Mobile */}
        <aside className="w-full lg:w-72 shrink-0 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black tracking-tight text-deep-slate uppercase flex items-center gap-2">
              <Filter className="h-5 w-5 text-soft-sky" />
              Filters
            </h2>
            {(selectedMaterials.length > 0 || selectedCategories.length > 0 || selectedStyles.length > 0 || priceRange[0] !== 0 || priceRange[1] !== 500) && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-auto p-0 text-xs text-soft-sky font-bold hover:bg-transparent hover:underline flex items-center gap-1" 
                onClick={resetFilters}
              >
                <X className="h-3 w-3" />
                RESET ALL
              </Button>
            )}
          </div>

          <Separator className="bg-border/50" />

          {/* Active Filter Badges */}
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map(c => (
                <Badge key={c} className="bg-soft-sky/10 text-soft-sky hover:bg-soft-sky/20 border-none rounded-full px-3 py-1 text-[10px] font-bold">
                    {c} <X className="ml-1 h-2.5 w-2.5 cursor-pointer" onClick={() => toggleCategory(c)} />
                </Badge>
            ))}
            {selectedMaterials.map(m => (
                <Badge key={m} className="bg-primary/10 text-primary hover:bg-primary/20 border-none rounded-full px-3 py-1 text-[10px] font-bold">
                    {m} <X className="ml-1 h-2.5 w-2.5 cursor-pointer" onClick={() => toggleMaterial(m)} />
                </Badge>
            ))}
          </div>

          <Accordion type="multiple" defaultValue={["categories", "price", "materials", "styles"]} className="w-full">
            <AccordionItem value="categories" className="border-b-0 pb-4">
              <AccordionTrigger className="hover:no-underline py-2 font-bold text-deep-slate uppercase tracking-wider text-sm">
                Categories
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <div className="space-y-3">
                  {CATEGORIES.map((cat) => (
                    <div key={cat} className="flex items-center space-x-3">
                      <Checkbox
                        id={`cat-${cat}`}
                        checked={selectedCategories.includes(cat)}
                        onCheckedChange={() => toggleCategory(cat)}
                      />
                      <label htmlFor={`cat-${cat}`} className={cn("text-sm cursor-pointer transition-colors", selectedCategories.includes(cat) ? "text-primary font-bold" : "text-foreground/70")}>{cat}</label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="price" className="border-b-0 pb-4">
              <AccordionTrigger className="hover:no-underline py-2 font-bold text-deep-slate uppercase tracking-wider text-sm">
                Price Range
              </AccordionTrigger>
              <AccordionContent className="pt-6 px-2">
                <Slider
                  defaultValue={[0, 500]}
                  max={500}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-6"
                />
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 bg-muted rounded-md p-2 text-center text-xs font-bold text-deep-slate border">
                    ${priceRange[0]}
                  </div>
                  <Separator className="w-4 bg-muted-foreground/30" />
                  <div className="flex-1 bg-muted rounded-md p-2 text-center text-xs font-bold text-deep-slate border">
                    ${priceRange[1]}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="materials" className="border-b-0 pb-4">
              <AccordionTrigger className="hover:no-underline py-2 font-bold text-deep-slate uppercase tracking-wider text-sm">
                Material
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <div className="space-y-3">
                  {MATERIALS.map((mat) => (
                    <div key={mat} className="flex items-center space-x-3">
                      <Checkbox
                        id={`mat-${mat}`}
                        checked={selectedMaterials.includes(mat)}
                        onCheckedChange={() => toggleMaterial(mat)}
                      />
                      <label htmlFor={`mat-${mat}`} className={cn("text-sm cursor-pointer transition-colors", selectedMaterials.includes(mat) ? "text-primary font-bold" : "text-foreground/70")}>{mat}</label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="styles" className="border-b-0 pb-4">
              <AccordionTrigger className="hover:no-underline py-2 font-bold text-deep-slate uppercase tracking-wider text-sm">
                Styles
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {STYLES.map((style) => (
                    <Badge 
                      key={style} 
                      variant={selectedStyles.includes(style) ? "default" : "outline"}
                      className={cn(
                        "rounded-md font-black uppercase tracking-widest text-[9px] cursor-pointer transition-all px-2.5 py-1.5 border-2", 
                        selectedStyles.includes(style) 
                          ? "bg-soft-sky text-white border-soft-sky hover:bg-soft-sky/90" 
                          : "bg-white text-deep-slate border-border/40 hover:border-soft-sky/50 hover:text-soft-sky"
                      )}
                      onClick={() => toggleStyle(style)}
                    >
                      {style}
                    </Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Header Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b gap-4">
            <div>
                <h1 className="text-4xl font-black text-deep-slate tracking-tight uppercase italic">SHOP ALL</h1>
                <p className="text-xs text-muted-foreground font-bold mt-1 uppercase tracking-widest">{filteredProducts.length} Piece{filteredProducts.length !== 1 ? 's' : ''} Discovered</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center bg-muted rounded-lg p-1.5 gap-1 border">
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className={cn("h-8 w-8 shadow-sm border transition-all", viewLayout === "grid" ? "bg-white text-deep-slate" : "text-muted-foreground bg-transparent border-transparent")}
                    onClick={() => setViewLayout("grid")}
                >
                    <Grid2X2 className="h-4 w-4" />
                </Button>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className={cn("h-8 w-8 shadow-sm border transition-all", viewLayout === "list" ? "bg-white text-deep-slate" : "text-muted-foreground bg-transparent border-transparent")}
                    onClick={() => setViewLayout("list")}
                >
                    <ListFilter className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative group">
                <Button 
                    variant="outline" 
                    className="gap-2 font-black text-[10px] uppercase h-10 px-4 border-input shadow-sm tracking-widest min-w-[160px] justify-between"
                >
                    <SortDesc className="h-4 w-4" />
                    SORT: {sortBy.replace('-', ' ')}
                    <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
                </Button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border border-border/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
                    {[
                        { id: 'featured', label: 'FEATURED' },
                        { id: 'price-low', label: 'PRICE: LOW TO HIGH' },
                        { id: 'price-high', label: 'PRICE: HIGH TO LOW' }
                    ].map((opt) => (
                        <button
                            key={opt.id}
                            className={cn(
                                "w-full px-4 py-3 text-left text-[10px] font-black uppercase tracking-widest hover:bg-muted transition-colors border-b last:border-0",
                                sortBy === opt.id ? "text-primary bg-primary/5" : "text-deep-slate"
                            )}
                            onClick={() => setSortBy(opt.id as any)}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className={cn(
                "grid gap-y-12 gap-x-8",
                viewLayout === "grid" 
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" 
                  : "grid-cols-1 max-w-4xl"
            )}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} layout={viewLayout} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center bg-muted/20 rounded-3xl border border-dashed">
                <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-6">
                    <X className="h-8 w-8 text-muted-foreground opacity-50" />
                </div>
                <h3 className="text-xl font-bold text-deep-slate italic">No products found</h3>
                <p className="text-muted-foreground max-w-xs mt-2 text-sm italic">"The future belongs to those who believe in the beauty of their dreams." - Adjust your filters to find what you need.</p>
                <Button variant="link" className="mt-6 text-primary font-black uppercase tracking-widest text-xs" onClick={resetFilters}>
                    Clear all filters
                </Button>
            </div>
          )}

          {/* Pagination Placeholder */}
          {filteredProducts.length > 0 && (
            <div className="mt-20 flex items-center justify-center gap-2">
                {[1, 2, 3, "...", 12].map((p, i) => (
                <Button
                    key={i}
                    variant={i === 0 ? "default" : "outline"}
                    className={cn("h-10 w-10 p-0 font-black text-xs", i === 0 && "bg-deep-slate text-white shadow-xl")}
                >
                    {p}
                </Button>
                ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
