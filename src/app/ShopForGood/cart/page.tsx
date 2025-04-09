"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
// import Header from "@/components/header"
import { useCartStore } from "../_components/stores/cart-store"
import { useWishlistStore, type WishlistItem } from "../_components/stores/wishlist-store"
import ProductGrid from "../_components/product-grid"

export default function CartPage() {
  const { items: cartItems, totalItems, totalPrice, removeItem, updateQuantity } = useCartStore()
  const { addItem: addToWishlist } = useWishlistStore()

  const handleMoveToWishlist = (item: { id: number; name: string; price: number; image: string; category?: string; }) => {
    const wishlistItem: WishlistItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category || "Hoodie", // Default category if not available
    }

    addToWishlist(wishlistItem)
    removeItem(item.id)
  }

  const shipping = 3000
  const total = totalPrice + shipping

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">
          Your Cart ({totalItems})
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-md shadow-sm flex gap-4"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-500 text-sm">
                          ₦{item.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleMoveToWishlist(item)}
                          className="text-gray-400 hover:text-amber-400"
                        >
                          <Heart size={18} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="mt-2 text-sm text-gray-500">
                      <p>Size: {item.size}</p>
                      <p>Color: {item.color}</p>
                    </div>

                    <div className="mt-4 flex items-center">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="px-2 py-1 text-gray-500 hover:text-black"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 text-gray-500 hover:text-black"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-8 rounded-md shadow-sm text-center">
                <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-4">
                  Looks like you haven&apos;t added any items to your cart yet.
                </p>
                <Link href="/ShopForGood">
                  <Button variant="default">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            )}
          </div>

          <div>
            <div className="bg-white p-6 rounded-md shadow-sm sticky top-4">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₦{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Estimated Delivery & Handling
                  </span>
                  <span>₦{shipping.toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t pt-3 mb-6">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>

              <Button
                variant="default"
                className="w-full mb-3"
                disabled={cartItems.length === 0}
                asChild
              >
                <Link href="/ShopForGood/checkout">Checkout Now</Link>
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <Link href="/ShopForGood/shop/men">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">You Might Also Like</h2>
          <ProductGrid />
        </section>
      </main>

    
    </div>
  );
}

