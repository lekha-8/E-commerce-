import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-card mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/?category=Electronics">
                  <span className="hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer inline-block">
                    Electronics
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/?category=Fashion">
                  <span className="hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer inline-block">
                    Fashion
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/?category=Home & Living">
                  <span className="hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer inline-block">
                    Home & Living
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer inline-block">
                  Our Story
                </span>
              </li>
              <li>
                <span className="hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer inline-block">
                  Careers
                </span>
              </li>
              <li>
                <span className="hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer inline-block">
                  Sustainability
                </span>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer inline-block">
                  Contact Us
                </span>
              </li>
              <li>
                <span className="hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer inline-block">
                  Shipping & Returns
                </span>
              </li>
              <li>
                <span className="hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer inline-block">
                  FAQ
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex gap-2">
              <Input placeholder="Email address" type="email" data-testid="input-newsletter" />
              <Button data-testid="button-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Social & Payment */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" data-testid="button-social-facebook">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" data-testid="button-social-twitter">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" data-testid="button-social-instagram">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" data-testid="button-social-youtube">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 ShopHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
