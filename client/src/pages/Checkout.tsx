import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Header } from "@/components/Header";
import { CartSheet } from "@/components/CartSheet";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag, ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const [, setLocation] = useLocation();
  const [cartOpen, setCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const { cart, cartTotal, clearCart } = useCart();
  const { toast } = useToast();

  const shipping = 10;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleCheckout = () => {
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase. You'll receive a confirmation email soon.",
    });
    clearCart();
    setLocation("/");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header onCartClick={() => setCartOpen(true)} />
        <div className="flex-1 flex flex-col items-center justify-center py-16">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Add some products to continue to checkout
          </p>
          <Link href="/">
            <Button size="lg" data-testid="button-continue-shopping">
              Continue Shopping
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCartClick={() => setCartOpen(true)} />

      <main className="flex-1 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm" data-testid="button-back">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Shopping
              </Button>
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          {/* Order Summary */}
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.productId} className="flex gap-4" data-testid={`checkout-item-${item.productId}`}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md"
                    data-testid={`img-checkout-item-${item.productId}`}
                  />
                  <div className="flex-1">
                    <h3 className="font-medium" data-testid={`text-checkout-item-name-${item.productId}`}>
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold" data-testid={`text-checkout-item-price-${item.productId}`}>
                      ${(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Promo Code */}
          <Card className="p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Promo Code</h2>
            <div className="flex gap-2">
              <Input
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                data-testid="input-promo-code"
              />
              <Button variant="outline" data-testid="button-apply-promo">
                Apply
              </Button>
            </div>
          </Card>

          {/* Price Breakdown */}
          <Card className="p-6 mb-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span data-testid="text-subtotal">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span data-testid="text-shipping">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (8%)</span>
                <span data-testid="text-tax">${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Total</span>
                <span className="text-2xl font-bold" data-testid="text-total">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </Card>

          {/* Checkout Button */}
          <Button
            size="lg"
            className="w-full"
            onClick={handleCheckout}
            data-testid="button-place-order"
          >
            Place Order
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            By placing your order, you agree to our terms and conditions
          </p>
        </div>
      </main>

      <Footer />
      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </div>
  );
}
