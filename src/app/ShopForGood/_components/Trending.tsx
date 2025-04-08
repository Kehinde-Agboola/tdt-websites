"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "../_components/stores/cart-store";

interface TrendingItemsProps {
  title?: string;
  description?: string;
  showFilters?: boolean;
  showViewAll?: boolean;
  limit?: number;
  category?: string;
}

export default function TrendingItems({
  showFilters = true,
  showViewAll = true,
  limit = 12, // Default matches API limit
  category,
}: TrendingItemsProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sort, setSort] = useState<string | undefined>(undefined); // e.g., "10" for price ascending

  const {
    products,
    loading,
    error,
    fetchProducts,
    addItem,
    totalPages,
    currentPage,
  } = useCartStore();

  useEffect(() => {
    fetchProducts({
      category: category || (activeCategory !== "all" ? activeCategory : undefined),
      page: currentPage,
      limit,
      sort,
    });
  }, [activeCategory, currentPage, sort, category, limit, fetchProducts]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      fetchProducts({
        category: category || (activeCategory !== "all" ? activeCategory : undefined),
        page: newPage,
        limit,
        sort,
      });
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  if (error && !products.length) {
    return (
      <p className="text-center text-gray-500">
        {error === "No products found" ? "No products available at the moment." : `Error: ${error}`}
      </p>
    );
  }

  return (
    <section className="pb-12">
      <div className="container mx-auto px-4">
        {showFilters && (
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex space-x-4">
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                className={
                  activeCategory === "all"
                    ? "bg-black(I have a problem here) text-white hover:bg-black/90"
                    : ""
                }
                onClick={() => setActiveCategory("all")}
              >
                All Category
              </Button>
              <Button
                variant={activeCategory === "t-shirts" ? "default" : "outline"}
                className={
                  activeCategory === "t-shirts"
                    ? "bg-black text-white hover:bg-black/90"
                    : ""
                }
                onClick={() => setActiveCategory("t-shirts")}
              >
                T-shirts
              </Button>
              <Button
                variant={activeCategory === "hoodie" ? "default" : "outline"}
                className={
                  activeCategory === "hoodie"
                    ? "bg-black text-white hover:bg-black/90"
                    : ""
                }
                onClick={() => setActiveCategory("hoodie")}
              >
                Hoodie
              </Button>
              <Button
                variant={activeCategory === "bags" ? "default" : "outline"}
                className={
                  activeCategory === "bags"
                    ? "bg-black text-white hover:bg-black/90"
                    : ""
                }
                onClick={() => setActiveCategory("bags")}
              >
                Bags
              </Button>
            </div>
            <div>
              <select
                value={sort || ""}
                onChange={(e) => setSort(e.target.value || undefined)}
                className="p-2 border rounded"
              >
                <option value="">Sort By</option>
                <option value="10">Price: Low to High</option>
                <option value="-10">Price: High to Low</option>
                {/* Add more sort options based on API support */}
              </select>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {products.map((product) => (
            <div key={`${product.id}-${product.color}-${product.size}`} className="group relative">
              <div className="bg-gray-100 rounded-md aspect-square overflow-hidden relative">
                <Link href={`ShopForGood/product/${product.id}`}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="h-full w-full duration-300 group-hover:scale-105 object-cover transition-transform"
                  />
                </Link>
                <button
                  className="bg-white/80 p-1.5 rounded-full absolute hover:bg-white right-2 top-2"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart
                    size={20}
                    className={
                      favorites.includes(product.id)
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-600"
                    }
                  />
                </button>
                {product.isNew && (
                  <span className="bg-black rounded text-white text-xs absolute left-2 px-2 py-1 top-2">
                    New
                  </span>
                )}
                {product.isSale && (
                  <span className="bg-red-500 rounded text-white text-xs absolute left-2 px-2 py-1 top-2">
                    Sale
                  </span>
                )}
              </div>
              <div className="mt-3">
                <Link
                  href={`ShopForGood/product/${product.id}`}
                  className="block"
                >
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="font-medium mt-1">{product.formattedPrice || `₦${product.price.toLocaleString()}`}</p>
                </Link>
                <Button
                  onClick={() => addItem({ ...product, quantity: 1 })}
                  className="mt-2 bg-blue-500 hover:bg-blue-600"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </Button>
            <span className="self-center">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        )}

        {showViewAll && products.length >= limit && (
          <div className="text-center mt-8">
            <Link href={`/products${category ? `?category=${category}` : ""}`}>
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}