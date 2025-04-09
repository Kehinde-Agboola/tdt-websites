import type {
  Product,
  ProductColor,
  ProductSize,
  ProductVariant,
} from "../type";

// Helper function to format price
const formatPrice = (price: number): string => {
  return `₦${price.toLocaleString()}`;
};

// Define product colors
const productColors: ProductColor[] = [
  { name: "Army Green", hex: "#4B5320" },
  { name: "Black", hex: "#000000" },
  { name: "Navy", hex: "#000080" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Red", hex: "#FF0000" },
];

// Define product sizes
const productSizes: ProductSize[] = [
  { name: "XS", inStock: true },
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true },
  { name: "XXL", inStock: false },
];

// Generate variants for a product
const generateVariants = (
  productId: number,
  colors: string[],
  basePrices: { [key: string]: number }
): ProductVariant[] => {
  const variants: ProductVariant[] = [];
  let variantId = 1;

  colors.forEach((color) => {
    productSizes.forEach((size) => {
      const basePrice = basePrices[color] || basePrices["default"];
      // Add small price variation for different sizes
      const sizeMultiplier =
        size.name === "XS"
          ? 0.9
          : size.name === "S"
          ? 0.95
          : size.name === "L"
          ? 1.05
          : size.name === "XL"
          ? 1.1
          : size.name === "XXL"
          ? 1.15
          : 1;

      const price = Math.round(basePrice * sizeMultiplier);

      variants.push({
        id: productId * 100 + variantId,
        color,
        size: size.name,
        price,
        formattedPrice: formatPrice(price),
        inStock: size.inStock,
        inventory: Math.floor(Math.random() * 20) + 1, // Random inventory between 1-20
      });

      variantId++;
    });
  });

  return variants;
};

// Update the products array to use the new images
export const products: Product[] = [
  {
    id: 1,
    name: "Kid Innovation Africa Hoodie",
    slug: "kid-innovation-africa-hoodie",
    description:
      "All proceeds from this product will go towards supporting The Destiny Trust's mission to improve access to education. This comfortable hoodie is perfect for everyday wear and features our Kid Innovation Africa design.",
    category: "Clothing",
    subcategory: "Hoodie",
    price: 5000,
    formattedPrice: formatPrice(5000),
    images: [
      "/images/hoodie-green.png",
      "/images/hoodie-black.png",
      "/images/hoodie-navy.png",
    ],
    colors: [
      productColors[0], // Army Green
      productColors[1], // Black
      productColors[2], // Navy
    ],
    sizes: productSizes,
    variants: generateVariants(1, ["Army Green", "Black", "Navy"], {
      "Army Green": 5000,
      Black: 5000,
      Navy: 5200,
      default: 5000,
    }),
    isNew: true,
    featured: true,
    createdAt: "2023-06-01T00:00:00Z",
  },
  {
    id: 2,
    name: "Kid Innovation Africa T-Shirt",
    slug: "kid-innovation-africa-tshirt",
    description:
      "Support The Destiny Trust's mission with this comfortable and stylish t-shirt. Made from 100% cotton, it features our Kid Innovation Africa design on the front.",
    category: "Clothing",
    subcategory: "T-Shirt",
    price: 3500,
    formattedPrice: formatPrice(3500),
    images: [
      "/images/tshirt-green.png",
      "/images/tshirt-black.png",
      "/images/tshirt-blue.png",
      "/images/tshirt-red.png",
    ],
    colors: [
      productColors[0], // Army Green
      productColors[1], // Black
      productColors[3], // Blue
      productColors[4], // Red
    ],
    sizes: productSizes,
    variants: generateVariants(2, ["Army Green", "Black", "Blue", "Red"], {
      "Army Green": 3500,
      Black: 3500,
      Blue: 3500,
      Red: 3500,
      default: 3500,
    }),
    featured: true,
    createdAt: "2023-05-15T00:00:00Z",
  },
  {
    id: 3,
    name: "Kid Innovation Africa Backpack",
    slug: "kid-innovation-africa-backpack",
    description:
      "A durable and spacious backpack perfect for school or everyday use. Features multiple compartments and comfortable straps.",
    category: "Accessories",
    subcategory: "Bags",
    price: 7500,
    formattedPrice: formatPrice(7500),
    images: ["/images/backpack-black.png", "/images/backpack-blue.png"],
    colors: [
      productColors[1], // Black
      productColors[3], // Blue
    ],
    sizes: [{ name: "One Size", inStock: true }],
    variants: [
      {
        id: 301,
        color: "Black",
        size: "One Size",
        price: 7500,
        formattedPrice: formatPrice(7500),
        inStock: true,
        inventory: 15,
      },
      {
        id: 302,
        color: "Blue",
        size: "One Size",
        price: 7500,
        formattedPrice: formatPrice(7500),
        inStock: true,
        inventory: 10,
      },
    ],
    isSale: true,
    discount: 10,
    createdAt: "2023-04-20T00:00:00Z",
  },
  {
    id: 4,
    name: "Kid Innovation Africa Cap",
    slug: "kid-innovation-africa-cap",
    description:
      "A stylish and comfortable cap featuring our Kid Innovation Africa logo. One size fits most with an adjustable strap at the back.",
    category: "Accessories",
    subcategory: "Headwear",
    price: 2500,
    formattedPrice: formatPrice(2500),
    images: [
      "/images/cap-green.png",
      "/images/cap-black.png",
      "/images/cap-red.png",
    ],
    colors: [
      productColors[0], // Army Green
      productColors[1], // Black
      productColors[4], // Red
    ],
    sizes: [{ name: "One Size", inStock: true }],
    variants: [
      {
        id: 401,
        color: "Army Green",
        size: "One Size",
        price: 2500,
        formattedPrice: formatPrice(2500),
        inStock: true,
        inventory: 20,
      },
      {
        id: 402,
        color: "Black",
        size: "One Size",
        price: 2500,
        formattedPrice: formatPrice(2500),
        inStock: true,
        inventory: 25,
      },
      {
        id: 403,
        color: "Red",
        size: "One Size",
        price: 2500,
        formattedPrice: formatPrice(2500),
        inStock: true,
        inventory: 15,
      },
    ],
    isNew: true,
    createdAt: "2023-07-05T00:00:00Z",
  },
];

// API functions
export const getProducts = async (options?: {
  category?: string;
  subcategory?: string;
  featured?: boolean;
  isNew?: boolean;
  isSale?: boolean;
  limit?: number;
  sort?: "price_asc" | "price_desc" | "newest" | "featured";
}) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filteredProducts = [...products];

  // Apply filters
  if (options?.category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === options.category?.toLowerCase()
    );
  }

  if (options?.subcategory) {
    filteredProducts = filteredProducts.filter(
      (p) => p.subcategory?.toLowerCase() === options.subcategory?.toLowerCase()
    );
  }

  if (options?.featured !== undefined) {
    filteredProducts = filteredProducts.filter(
      (p) => p.featured === options.featured
    );
  }

  if (options?.isNew !== undefined) {
    filteredProducts = filteredProducts.filter(
      (p) => p.isNew === options.isNew
    );
  }

  if (options?.isSale !== undefined) {
    filteredProducts = filteredProducts.filter(
      (p) => p.isSale === options.isSale
    );
  }

  // Apply sorting
  if (options?.sort) {
    switch (options.sort) {
      case "price_asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filteredProducts.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "featured":
        filteredProducts.sort(
          (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        );
        break;
    }
  }

  // Apply limit
  if (options?.limit && options.limit > 0) {
    filteredProducts = filteredProducts.slice(0, options.limit);
  }

  return filteredProducts;
};

export const getProductById = async (id: number) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const product = products.find((p) => p.id === id);

  if (!product) {
    throw new Error(`Product with ID ${id} not found`);
  }

  return product;
};

export const getProductBySlug = async (slug: string) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    throw new Error(`Product with slug ${slug} not found`);
  }

  return product;
};

export const getRelatedProducts = async (productId: number, limit = 4) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400));

  const product = products.find((p) => p.id === productId);

  if (!product) {
    throw new Error(`Product with ID ${productId} not found`);
  }

  // Get products in the same category, excluding the current product
  let relatedProducts = products.filter(
    (p) =>
      p.id !== productId &&
      (p.category === product.category || p.subcategory === product.subcategory)
  );

  // If not enough related products, add some random products
  if (relatedProducts.length < limit) {
    const randomProducts = products
      .filter(
        (p) =>
          p.id !== productId && !relatedProducts.some((rp) => rp.id === p.id)
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, limit - relatedProducts.length);

    relatedProducts = [...relatedProducts, ...randomProducts];
  }

  // Limit the number of related products
  return relatedProducts.slice(0, limit);
};
