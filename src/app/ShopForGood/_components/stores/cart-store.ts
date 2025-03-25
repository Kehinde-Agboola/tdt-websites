import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  color: string
  size: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (item) => {
        const currentItems = get().items
        const existingItem = currentItems.find(
          (i) => i.id === item.id && i.color === item.color && i.size === item.size,
        )

        if (existingItem) {
          // Update quantity if item already exists
          const updatedItems = currentItems.map((i) =>
            i.id === item.id && i.color === item.color && i.size === item.size
              ? { ...i, quantity: i.quantity + item.quantity }
              : i,
          )

          set({
            items: updatedItems,
            totalItems: get().totalItems + item.quantity,
            totalPrice: get().totalPrice + item.price * item.quantity,
          })
        } else {
          // Add new item
          set({
            items: [...currentItems, item],
            totalItems: get().totalItems + item.quantity,
            totalPrice: get().totalPrice + item.price * item.quantity,
          })
        }
      },

      removeItem: (id) => {
        const itemToRemove = get().items.find((item) => item.id === id)
        if (!itemToRemove) return

        set({
          items: get().items.filter((item) => item.id !== id),
          totalItems: get().totalItems - itemToRemove.quantity,
          totalPrice: get().totalPrice - itemToRemove.price * itemToRemove.quantity,
        })
      },

      updateQuantity: (id, quantity) => {
        const currentItems = get().items
        const itemToUpdate = currentItems.find((item) => item.id === id)

        if (!itemToUpdate) return

        const quantityDiff = quantity - itemToUpdate.quantity

        set({
          items: currentItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
          totalItems: get().totalItems + quantityDiff,
          totalPrice: get().totalPrice + itemToUpdate.price * quantityDiff,
        })
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        })
      },
    }),
    {
      name: "cart-storage",
    },
  ),
)

