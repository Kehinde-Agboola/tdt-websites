"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
// import Header from "@/components/header";
import { useWishlistStore } from "../_components/stores/wishlist-store";
import { useCartStore, type CartItem } from "../_components/stores/cart-store";

export default function WishlistPage() {
  const { items: wishlistItems, removeItem } = useWishlistStore();
  const { addItem: addToCart } = useCartStore();

  const handleAddToCart = (item: { id: number; name: string; price: number; image: string }) => {
    const cartItem: CartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      color: "Default", // Since wishlist items might not have color
      size: "M", // Default size
      quantity: 1,
    };

    addToCart(cartItem);
    removeItem(item.id); // Remove from wishlist after adding to cart
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <Header /> */}

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">
          Your Wishlist ({wishlistItems.length})
        </h1>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-md shadow-sm">
                <div className="bg-gray-100 rounded-md aspect-square overflow-hidden relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-white/80 p-1.5 rounded-full absolute hover:bg-white right-2 top-2"
                  >
                    <Trash2 size={18} className="text-red-500" />
                  </button>
                </div>
                <div className="mt-3">
                  <Link href={`/product/${item.id}`} className="block">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="font-medium mt-1">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </Link>
                  <Button
                    className="w-full mt-3"
                    onClick={() => handleAddToCart(item)}
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-md shadow-sm text-center">
            <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-4">Save items you love for later.</p>
            <Button variant="default" asChild>
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        )}
      </main>

      <footer className="bg-black text-white mt-16 pb-6 pt-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Be part of a better tommorow
            </h3>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 text-black px-4 py-2"
              />
              <Button variant="default">Subscribe</Button>
            </div>
          </div>

          <div className="border-gray-800 border-t text-center text-gray-400 text-sm pt-8">
            © 2021 The Destiny Trust. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
