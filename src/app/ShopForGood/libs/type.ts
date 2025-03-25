// Product Types
export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductSize {
  name: string;
  inStock: boolean;
}

export interface ProductVariant {
  id: number;
  color: string;
  size: string;
  price: number;
  formattedPrice: string;
  inStock: boolean;
  inventory: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  subcategory?: string;
  price: number;
  formattedPrice: string;
  images: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  variants: ProductVariant[];
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
  tags?: string[];
  featured?: boolean;
  createdAt: string;
}

// Cart Types
export interface CartItem {
  id: number;
  productId: number;
  variantId: number;
  name: string;
  price: number;
  formattedPrice: string;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  formattedSubtotal: string;
  shipping: number;
  formattedShipping: string;
  discount: number;
  formattedDiscount: string;
  total: number;
  formattedTotal: string;
}

// Order Types
export interface OrderItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  formattedPrice: string;
  image: string;
  color: string;
  size: string;
  quantity: number;
  deliveryDate: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  addressLine2?: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface Order {
  id: string;
  customerId?: string;
  items: OrderItem[];
  subtotal: number;
  formattedSubtotal: string;
  shipping: number;
  formattedShipping: string;
  discount: number;
  formattedDiscount: string;
  total: number;
  formattedTotal: string;
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
}

// Wishlist Types
export interface WishlistItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  formattedPrice: string;
  image: string;
  category: string;
}
