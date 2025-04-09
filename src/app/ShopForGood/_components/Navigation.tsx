"use client";

import Link from "next/link";
import { ShoppingCart, Heart, Search } from "lucide-react";
import { useCartStore } from "../_components/stores/cart-store";
import { useWishlistStore } from "../_components/stores/wishlist-store";

export default function Navigation() {
  const { totalItems: cartItemsCount } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();

  return (
    <div className="border-b bg-white sticky top-20 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <nav className="flex items-center space-x-6 text-sm">
          <Link href="/ShopForGood/shop/men" className="hover:text-amber-400">
            Men
          </Link>
          <Link href="/ShopForGood/shop/women" className="hover:text-amber-400">
            Women
          </Link>
          <Link href="/ShopForGood/shop/kids" className="hover:text-amber-400">
            Kids
          </Link>
          <Link
            href="/ShopForGood/shop/lifestyle"
            className="hover:text-amber-400"
          >
            Lifestyle
          </Link>
          <Link
            href="/ShopForGood/shop/accessories"
            className="hover:text-amber-400"
          >
            Accessories
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <Search size={20} />
          </button>
          <Link href="/ShopForGood/wishlist" className="p-2 relative">
            <Heart size={20} />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </Link>
          <Link href="/ShopForGood/cart" className="p-2 relative">
            <ShoppingCart size={20} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
