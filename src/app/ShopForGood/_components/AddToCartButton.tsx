// components/AddToCartButton.tsx
"use client";
import { useCartStore } from "./cartStore";
import {Product} from "./cartStore"

export default function AddToCartButton({
  product,
}: {
  product: Product; 
}) {
  const addToCart = useCartStore((state) => state.addToCart);

  // Convert Product to CartItem by adding quantity
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1, // Default quantity
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full mt-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
    >
      Add to Cart
    </button>
  );
}
