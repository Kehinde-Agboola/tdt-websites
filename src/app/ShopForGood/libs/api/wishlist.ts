import type { WishlistItem } from "../type"
import { getProductById } from "./product"

// Mock wishlist data
let wishlistItems: WishlistItem[] = []

// API functions
export const getWishlist = async (): Promise<WishlistItem[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))
  return [...wishlistItems]
}

export const addToWishlist = async (productId: number): Promise<WishlistItem[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  try {
    // Check if item already exists in wishlist
    const existingItem = wishlistItems.find((item) => item.productId === productId)

    if (existingItem) {
      return [...wishlistItems]
    }

    const product = await getProductById(productId)

    const newItem: WishlistItem = {
      id: Date.now(), // Generate a unique ID
      productId: product.id,
      name: product.name,
      price: product.price,
      formattedPrice: product.formattedPrice,
      image: product.images[0],
      category: product.category,
    }

    wishlistItems = [...wishlistItems, newItem]

    return [...wishlistItems]
  } catch (error) {
    console.error("Error adding to wishlist:", error)
    throw error
  }
}

export const removeFromWishlist = async (itemId: number): Promise<WishlistItem[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  wishlistItems = wishlistItems.filter((item) => item.id !== itemId)

  return [...wishlistItems]
}

export const toggleWishlistItem = async (productId: number): Promise<{ items: WishlistItem[]; added: boolean }> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Check if item already exists in wishlist
  const existingItemIndex = wishlistItems.findIndex((item) => item.productId === productId)

  if (existingItemIndex >= 0) {
    // Remove item if it exists
    wishlistItems = wishlistItems.filter((item) => item.productId !== productId)
    return { items: [...wishlistItems], added: false }
  } else {
    // Add item if it doesn't exist
    try {
      const product = await getProductById(productId)

      const newItem: WishlistItem = {
        id: Date.now(), // Generate a unique ID
        productId: product.id,
        name: product.name,
        price: product.price,
        formattedPrice: product.formattedPrice,
        image: product.images[0],
        category: product.category,
      }

      wishlistItems = [...wishlistItems, newItem]

      return { items: [...wishlistItems], added: true }
    } catch (error) {
      console.error("Error adding to wishlist:", error)
      throw error
    }
  }
}

export const isInWishlist = async (productId: number): Promise<boolean> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return wishlistItems.some((item) => item.productId === productId)
}

export const clearWishlist = async (): Promise<WishlistItem[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  wishlistItems = []

  return []
}

