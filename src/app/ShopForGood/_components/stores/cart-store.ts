import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StaticImageData } from "next/image";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string | StaticImageData;
  color: string;
  size: string;
  quantity: number;
  category?: string;
  formattedPrice?: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  products: CartItem[];
  loading: boolean;
  error: string | null;
  totalPages: number; // Add total pages for pagination
  currentPage: number; // Track current page
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  fetchProducts: (params: {
    category?: string;
    page?: number;
    limit?: number;
    sort?: string;
  }) => Promise<void>;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      products: [],
      loading: false,
      error: null,
      totalPages: 1, 
      currentPage: 1, 

      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (i) => i.id === item.id && i.color === item.color && i.size === item.size
        );
        if (existingItem) {
          const updatedItems = currentItems.map((i) =>
            i.id === item.id && i.color === item.color && i.size === item.size
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          );
          set({
            items: updatedItems,
            totalItems: get().totalItems + item.quantity,
            totalPrice: get().totalPrice + item.price * item.quantity,
          });
        } else {
          set({
            items: [...currentItems, item],
            totalItems: get().totalItems + item.quantity,
            totalPrice: get().totalPrice + item.price * item.quantity,
          });
        }
      },

      removeItem: (id) => {
        const itemToRemove = get().items.find((item) => item.id === id);
        if (!itemToRemove) return;
        set({
          items: get().items.filter((item) => item.id !== id),
          totalItems: get().totalItems - itemToRemove.quantity,
          totalPrice: get().totalPrice - itemToRemove.price * itemToRemove.quantity,
        });
      },

      updateQuantity: (id, quantity) => {
        const currentItems = get().items;
        const itemToUpdate = currentItems.find((item) => item.id === id);
        if (!itemToUpdate || quantity < 1) return;
        const quantityDiff = quantity - itemToUpdate.quantity;
        set({
          items: currentItems.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
          totalItems: get().totalItems + quantityDiff,
          totalPrice: get().totalPrice + itemToUpdate.price * quantityDiff,
        });
      },

      clearCart: () => set({ items: [], totalItems: 0, totalPrice: 0 }),

      fetchProducts: async ({ category, page = 1, limit = 12, sort }) => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
          set({ error: "API URL is not defined", loading: false });
          return;
        }

        // Build query string
        const queryParams = new URLSearchParams({
          ...(category && { category }),
          page: page.toString(),
          limit: limit.toString(),
          ...(sort && { sort }),
        }).toString();

        const url = `${apiUrl}/backend/v1/items/in-stock?${queryParams}`;

        set({ loading: true, error: null });
        try {
          const response = await fetch(url);
          const data: unknown = await response.json();

          if (!response.ok) {
            if (response.status === 404) {
              set({
                products: [],
                loading: false,
                error: "No products found",
                totalPages: 1,
                currentPage: page,
              });
              return;
            }
            throw new Error(`Failed to fetch products: ${response.statusText}`);
          }

          // Assuming API returns { items: CartItem[], totalPages: number }
          const { items, totalPages } = data as { items: CartItem[]; totalPages: number };
          const formattedProducts = items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image || "/placeholder.svg?height=300&width=300",
            color: item.color || "N/A",
            size: item.size || "N/A",
            quantity: 0,
            category: item.category || "unknown",
            formattedPrice: item.formattedPrice || `₦${item.price.toLocaleString()}`,
            isNew: item.isNew || false,
            isSale: item.isSale || false,
          }));
          set({
            products: formattedProducts,
            loading: false,
            totalPages: totalPages || 1, // Fallback to 1 if not provided
            currentPage: page,
          });
        } catch (err) {
          set({ error: (err as Error).message, loading: false });
        }
      },
    }),
    { name: "cart-storage" }
  )
);