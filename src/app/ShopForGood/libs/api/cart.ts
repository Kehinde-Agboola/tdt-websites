import type { Cart, CartItem } from "../type";
import { getProductById } from "./product";

// Mock cart data
let cart: Cart = {
  items: [],
  subtotal: 0,
  formattedSubtotal: "₦0",
  shipping: 3000,
  formattedShipping: "₦3,000",
  discount: 0,
  formattedDiscount: "₦0",
  total: 0,
  formattedTotal: "₦0",
};

// Helper function to format price
const formatPrice = (price: number): string => {
  return `₦${price.toLocaleString()}`;
};

// Helper function to recalculate cart totals
const recalculateCart = () => {
  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + cart.shipping - cart.discount;

  cart = {
    ...cart,
    subtotal,
    formattedSubtotal: formatPrice(subtotal),
    total,
    formattedTotal: formatPrice(total),
  };

  return cart;
};

// API functions
export const getCart = async (): Promise<Cart> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));
  return { ...cart };
};

export const addToCart = async (
  productId: number,
  variantId: number,
  quantity = 1
): Promise<Cart> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  try {
    const product = await getProductById(productId);
    interface Variant {
      id: number;
      price: number;
      formattedPrice: string;
      inStock: boolean;
      inventory: number;
      color: string;
      size: string;
    }

    const variant: Variant | undefined = product.variants.find((v: Variant) => v.id === variantId);

    if (!variant) {
      throw new Error(
        `Variant with ID ${variantId} not found for product ${productId}`
      );
    }

    if (!variant.inStock || variant.inventory < quantity) {
      throw new Error(
        `Not enough inventory for product ${product.name} in ${variant.color}, ${variant.size}`
      );
    }

    // Check if the item already exists in the cart
    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId === productId && item.variantId === variantId
    );

    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item if it doesn't exist
      const newItem: CartItem = {
        id: Date.now(), // Generate a unique ID
        productId,
        variantId,
        name: product.name,
        price: variant.price,
        formattedPrice: variant.formattedPrice,
        image: product.images[0],
        color: variant.color,
        size: variant.size,
        quantity,
      };

      cart.items.push(newItem);
    }

    return recalculateCart();
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const updateCartItemQuantity = async (
  itemId: number,
  quantity: number
): Promise<Cart> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  const itemIndex = cart.items.findIndex((item) => item.id === itemId);

  if (itemIndex === -1) {
    throw new Error(`Cart item with ID ${itemId} not found`);
  }

  if (quantity <= 0) {
    // Remove item if quantity is 0 or negative
    cart.items = cart.items.filter((item) => item.id !== itemId);
  } else {
    // Update quantity
    cart.items[itemIndex].quantity = quantity;
  }

  return recalculateCart();
};

export const removeCartItem = async (itemId: number): Promise<Cart> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  cart.items = cart.items.filter((item) => item.id !== itemId);

  return recalculateCart();
};

export const clearCart = async (): Promise<Cart> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  cart.items = [];

  return recalculateCart();
};

export const applyDiscount = async (code: string): Promise<Cart> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Mock discount codes
  const discountCodes = {
    WELCOME10: { type: "percentage", value: 10 },
    SAVE20: { type: "percentage", value: 20 },
    FREESHIP: { type: "shipping", value: 3000 },
    FLAT5000: { type: "fixed", value: 5000 },
  };

  const discountCode = discountCodes[code as keyof typeof discountCodes];

  if (!discountCode) {
    throw new Error(`Invalid discount code: ${code}`);
  }

  let discount = 0;

  if (discountCode.type === "percentage") {
    discount = Math.round(cart.subtotal * (discountCode.value / 100));
  } else if (discountCode.type === "fixed") {
    discount = Math.min(discountCode.value, cart.subtotal);
  } else if (discountCode.type === "shipping") {
    discount = Math.min(discountCode.value, cart.shipping);
  }

  cart.discount = discount;
  cart.formattedDiscount = formatPrice(discount);

  return recalculateCart();
};
