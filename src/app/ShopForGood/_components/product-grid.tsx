"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import {
  useWishlistStore,
  type WishlistItem,
} from "../_components/stores/wishlist-store";
import { useCartStore } from "../_components/stores/cart-store";

export default function ProductGrid() {
  const { toggleItem, isInWishlist } = useWishlistStore();
  const { products, loading, error, fetchProducts, addItem } = useCartStore();

  useEffect(() => {
    if (!products.length && !loading) {
      fetchProducts();
    }
  }, [products, loading, fetchProducts]);

  const handleToggleWishlist = (product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
  }) => {
    const wishlistItem: WishlistItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    };
    toggleItem(wishlistItem);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={`${product.id}-${product.color}-${product.size}`}
          className="group relative"
        >
          <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-md">
            <Link href={`/ShopForGood/product/${product.id}`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <button
              className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white"
              onClick={() =>
                handleToggleWishlist({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  category: product.category || "Unknown",
                })
              }
            >
              <Heart
                size={20}
                className={
                  isInWishlist(product.id)
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-600"
                }
              />
            </button>
          </div>
          <div className="mt-3">
            <Link href={`/ShopForGood/product/${product.id}`} className="block">
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="mt-1 font-medium">{product.formattedPrice}</p>
            </Link>
            <button
              onClick={() => addItem({ ...product, quantity: 1 })}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
