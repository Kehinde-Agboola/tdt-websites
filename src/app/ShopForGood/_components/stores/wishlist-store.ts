import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface WishlistItem {
  id: number
  name: string
  price: number
  image: string
  category: string
}

interface WishlistStore {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: number) => void
  toggleItem: (item: WishlistItem) => void
  isInWishlist: (id: number) => boolean
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const currentItems = get().items
        const existingItem = currentItems.find((i) => i.id === item.id)

        if (!existingItem) {
          set({ items: [...currentItems, item] })
        }
      },

      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) })
      },

      toggleItem: (item) => {
        const currentItems = get().items
        const existingItem = currentItems.find((i) => i.id === item.id)

        if (existingItem) {
          set({ items: currentItems.filter((i) => i.id !== item.id) })
        } else {
          set({ items: [...currentItems, item] })
        }
      },

      isInWishlist: (id) => {
        return get().items.some((item) => item.id === id)
      },
    }),
    {
      name: "wishlist-storage",
    },
  ),
)

