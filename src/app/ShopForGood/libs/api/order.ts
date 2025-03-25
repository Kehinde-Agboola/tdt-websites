import type { Order, OrderItem, ShippingAddress } from "../type";
import { clearCart } from "./cart";

// Mock orders data
const orders: Order[] = [
  {
    id: "HD8845",
    items: [
      {
        id: 1,
        productId: 1,
        name: "Kid Innovation Africa Hoodie",
        price: 5000,
        formattedPrice: "₦5,000",
        image: "/placeholder.svg?height=80&width=80",
        color: "Army Green",
        size: "XL",
        quantity: 2,
        deliveryDate: "2023-12-23",
      },
      {
        id: 2,
        productId: 2,
        name: "Kid Innovation Africa T-Shirt",
        price: 3500,
        formattedPrice: "₦3,500",
        image: "/placeholder.svg?height=80&width=80",
        color: "Black",
        size: "L",
        quantity: 1,
        deliveryDate: "2023-12-23",
      },
    ],
    subtotal: 13500,
    formattedSubtotal: "₦13,500",
    shipping: 3000,
    formattedShipping: "₦3,000",
    discount: 0,
    formattedDiscount: "₦0",
    total: 16500,
    formattedTotal: "₦16,500",
    shippingAddress: {
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      city: "Lagos",
      postalCode: "100001",
      country: "Nigeria",
      phone: "+234 813 800 2859",
    },
    paymentMethod: "Credit Card",
    status: "processing",
    createdAt: "2023-12-15T10:30:00Z",
  },
];

// Helper function to format price
const formatPrice = (price: number): string => {
  return `₦${price.toLocaleString()}`;
};

// Helper function to format date
const formatDeliveryDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  // Add ordinal suffix to day
  const suffix =
    day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
      ? "nd"
      : day === 3 || day === 23
      ? "rd"
      : "th";

  return `${day}${suffix} ${month}, ${year}`;
};

// API functions
export const getOrders = async (): Promise<Order[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [...orders];
};

export const getOrderById = async (orderId: string): Promise<Order> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const order = orders.find((o) => o.id === orderId);

  if (!order) {
    throw new Error(`Order with ID ${orderId} not found`);
  }

  return { ...order };
};

export const createOrder = async (
  items: OrderItem[],
  shippingAddress: ShippingAddress,
  paymentMethod: string
): Promise<Order> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Calculate totals
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 3000; // Fixed shipping cost
  const discount = 0; // No discount by default
  const total = subtotal + shipping - discount;

  // Generate a random order ID
  const orderId = `HD${Math.floor(1000 + Math.random() * 9000)}`;

  // Calculate delivery date (14 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 14);
  const formattedDeliveryDate = formatDeliveryDate(deliveryDate);

  // Create new order
  const newOrder: Order = {
    id: orderId,
    items: items.map((item) => ({
      ...item,
      deliveryDate: formattedDeliveryDate,
    })),
    subtotal,
    formattedSubtotal: formatPrice(subtotal),
    shipping,
    formattedShipping: formatPrice(shipping),
    discount,
    formattedDiscount: formatPrice(discount),
    total,
    formattedTotal: formatPrice(total),
    shippingAddress,
    paymentMethod,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  // Add to orders
  orders.unshift(newOrder);

  // Clear the cart after successful order
  await clearCart();

  return newOrder;
};

export const cancelOrder = async (orderId: string): Promise<Order> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400));

  const orderIndex = orders.findIndex((o) => o.id === orderId);

  if (orderIndex === -1) {
    throw new Error(`Order with ID ${orderId} not found`);
  }

  // Check if order can be cancelled
  if (
    orders[orderIndex].status === "shipped" ||
    orders[orderIndex].status === "delivered"
  ) {
    throw new Error(
      `Cannot cancel order with status: ${orders[orderIndex].status}`
    );
  }

  // Update order status
  orders[orderIndex] = {
    ...orders[orderIndex],
    status: "cancelled",
  };

  return { ...orders[orderIndex] };
};
