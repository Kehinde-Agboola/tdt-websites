"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
// import Header from "../../_components/Hero";
import ProductGrid from "../../_components/payment-method";
import { getProductById, getRelatedProducts } from "../../libs/api/product";
import { addToCart } from "../../libs/api/cart";
import { toggleWishlistItem, isInWishlist } from "../../libs/api/wishlist";
import type { Product, ProductVariant } from "../../libs/type";

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null
  );
  const [addingToCart, setAddingToCart] = useState(false);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await getProductById(productId);
        setProduct(productData);

        // Set default selected color and size
        if (productData.colors.length > 0) {
          setSelectedColor(productData.colors[0].name);
        }

        if (productData.sizes.length > 0) {
          setSelectedSize(productData.sizes[0].name);
        }

        // Check if product is in wishlist
        const inWishlist = await isInWishlist(productId);
        setIsFavorite(inWishlist);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  // Update selected variant when color or size changes
  useEffect(() => {
    if (product && selectedColor && selectedSize) {
      const variant = product.variants.find(
        (v) => v.color === selectedColor && v.size === selectedSize
      );
      setSelectedVariant(variant || null);
    }
  }, [product, selectedColor, selectedSize]);

  // Update current image when color changes
  useEffect(() => {
    if (product && selectedColor) {
      // Find the index of the image that corresponds to the selected color
      const colorIndex = product.colors.findIndex(
        (c) => c.name === selectedColor
      );
      if (colorIndex >= 0 && colorIndex < product.images.length) {
        setCurrentImageIndex(colorIndex);
      }
    }
  }, [product, selectedColor]);

  const handleToggleWishlist = async () => {
    if (!product) return;

    try {
      const result = await toggleWishlistItem(product.id);
      setIsFavorite(result.added);
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    }
  };

  const handleAddToCart = async () => {
    if (!product || !selectedVariant) return;

    try {
      setAddingToCart(true);
      await addToCart(product.id, selectedVariant.id, quantity);
      alert(`Added ${quantity} ${product.name} to cart!`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert(
        `Error: ${
          error instanceof Error ? error.message : "Could not add to cart"
        }`
      );
    } finally {
      setAddingToCart(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <main className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="bg-gray-200 h-4 rounded w-1/4 mb-6"></div>
            <div className="grid gap-8 mb-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="bg-gray-200 rounded-md aspect-square"></div>
                <div className="grid grid-cols-5 gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gray-200 rounded-md aspect-square"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-200 h-8 rounded w-3/4"></div>
                <div className="bg-gray-200 h-6 rounded w-1/4"></div>
                <div className="space-y-2">
                  <div className="bg-gray-200 h-4 rounded w-1/6"></div>
                  <div className="flex space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gray-200 h-8 rounded-full w-8"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-200 h-4 rounded w-1/6"></div>
                  <div className="flex flex-wrap gap-2">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gray-200 h-8 rounded-md w-10 px-3 py-1"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-200 h-20 rounded"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-white min-h-screen">
       
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
            <p className="text-gray-600 mb-6">
              The product you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link href="/shop">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      <main className="container mx-auto px-4 py-8">
        <div className="text-gray-500 text-sm mb-6">
          <Link href="/" className="hover:text-amber-400">
            Home
          </Link>{" "}
          /{" "}
          <Link
            href={`/shop/${product.category.toLowerCase()}`}
            className="hover:text-amber-400"
          >
            {product.category}
          </Link>{" "}
          {product.subcategory && (
            <>
              /{" "}
              <Link
                href={`/shop/${product.category.toLowerCase()}/${product.subcategory.toLowerCase()}`}
                className="hover:text-amber-400"
              >
                {product.subcategory}
              </Link>
            </>
          )}{" "}
          / <span>{product.name}</span>
        </div>

        <div className="grid gap-8 mb-16 md:grid-cols-2">
          <div className="space-y-4">
            {/* Main product image */}
            <div className="bg-gray-100 rounded-md aspect-square overflow-hidden">
              <Image
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${product.name} - ${selectedColor}`}
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`aspect-square bg-gray-100 rounded-md overflow-hidden ${
                    currentImageIndex === index ? "ring-2 ring-black" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-amber-600 text-sm font-medium">
                  {selectedColor}
                </p>
                <h1 className="text-2xl font-semibold">{product.name}</h1>
              </div>
              <button
                onClick={handleToggleWishlist}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label={
                  isFavorite ? "Remove from wishlist" : "Add to wishlist"
                }
              >
                <Heart
                  className={isFavorite ? "fill-amber-400 text-amber-400" : ""}
                  size={24}
                />
              </button>
            </div>

            <p className="text-2xl font-bold">
              {selectedVariant
                ? selectedVariant.formattedPrice
                : product.formattedPrice}
            </p>

            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      selectedColor === color.name
                        ? "ring-2 ring-offset-2 ring-black"
                        : ""
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Select ${color.name} color`}
                  >
                    {selectedColor === color.name && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    disabled={!size.inStock}
                    className={`px-3 py-1 border rounded-md min-w-[40px] text-center ${
                      !size.inStock
                        ? "border-gray-200 text-gray-300 cursor-not-allowed"
                        : selectedSize === size.name
                        ? "bg-black text-white border-black"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    aria-label={`Select size ${size.name}`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
              {selectedVariant && !selectedVariant.inStock && (
                <p className="text-red-500 text-sm mt-2">
                  This combination is out of stock
                </p>
              )}
            </div>

            <div>
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex border border-gray-300 h-8 justify-center rounded-l-md w-8 items-center"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <div className="flex border-b border-gray-300 border-t h-8 justify-center w-12 items-center">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex border border-gray-300 h-8 justify-center rounded-r-md w-8 items-center"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-gray-600 text-sm mb-6">
                {product.description}
              </p>

              <Button
                className="w-full py-6"
                onClick={handleAddToCart}
                disabled={
                  addingToCart || !selectedVariant || !selectedVariant.inStock
                }
              >
                {addingToCart ? "ADDING..." : "ADD TO CART"}
              </Button>
            </div>
          </div>
        </div>

        <RelatedProducts productId={product.id} />
      </main>

      <footer className="bg-black text-white pb-6 pt-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Be part of a better tommorow
            </h3>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 text-black px-4 py-2"
              />
              <Button className="bg-amber-400 text-black hover:bg-amber-500">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="border-gray-800 border-t text-center text-gray-400 text-sm pt-8">
            © 2021 The Destiny Trust. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Related Products Component
function RelatedProducts({ productId }: { productId: number }) {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setLoading(true);
        const products = await getRelatedProducts(productId);
        setRelatedProducts(products);
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [productId]);

  if (loading) {
    return (
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 rounded-md aspect-square"></div>
              <div className="mt-3">
                <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                <div className="bg-gray-200 h-4 rounded w-1/4 mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">You Might Also Like</h2>
      <ProductGrid onPaymentComplete={() => {}} />
    </section>
  );
}
