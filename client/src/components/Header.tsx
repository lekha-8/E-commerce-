import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";

interface HeaderProps {
  onSearchChange?: (query: string) => void;
  onCartClick: () => void;
}

export function Header({ onSearchChange, onCartClick }: HeaderProps) {
  const [location] = useLocation();
  const { cartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: "All Products", path: "/" },
    { name: "Electronics", path: "/?category=Electronics" },
    { name: "Fashion", path: "/?category=Fashion" },
    { name: "Home & Living", path: "/?category=Home & Living" },
  ];

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearchChange?.(value);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <span className="text-2xl font-bold text-primary hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer">
              ShopHub
            </span>
          </Link>

          {/* Desktop Navigation & Search */}
          <div className="hidden md:flex items-center gap-6 flex-1 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                data-testid="input-search"
              />
            </div>
          </div>

          {/* Desktop Category Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={category.path} data-testid={`link-category-${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <span className="text-sm font-medium text-foreground/80 hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer transition-colors">
                  {category.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Cart Button */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={onCartClick}
            data-testid="button-cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                data-testid="badge-cart-count"
              >
                {cartCount}
              </Badge>
            )}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    data-testid="input-search-mobile"
                  />
                </div>
                <nav className="flex flex-col gap-2">
                  {categories.map((category) => (
                    <Link key={category.name} href={category.path}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid={`link-mobile-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {category.name}
                      </Button>
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
