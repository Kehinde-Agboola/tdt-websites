"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Black from "../../../../public/assets/ecommerce/pictures/black.png"
import Blue from "../../../../public/assets/ecommerce/pictures/blue.png"
import NavyBlue from "../../../../public/assets/ecommerce/pictures/navyblue.png"
import Shirt from "../../../../public/assets/ecommerce/pictures/shirt.png"
import Bag from "../../../../public/assets/ecommerce/pictures/bag.png"
// Define types
interface Product {
  id: number;
  name: string;
  price: string;
  numericPrice: number;
  image: string | StaticImageData;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

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
  limit = 8,
  category,
}: TrendingItemsProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  // Mock products data - in a real app, this would come from an API
  const products: Product[] = [
    {
      id: 1,
      name: "Kid Innovation Africa Hoodie",
      price: "₦5,000",
      numericPrice: 5000,
      image: Black,
      category: "hoodie",
      isNew: true,
    },
    {
      id: 2,
      name: "Kid Innovation Africa Hoodie",
      price: "₦5,000",
      numericPrice: 5000,
      image: NavyBlue,
      category: "hoodie",
      isSale: true,
    },
    {
      id: 3,
      name: "Kid Innovation Africa Backpack",
      price: "₦5,000",
      numericPrice: 5000,
      image: Bag,
      category: "bags",
    },
    {
      id: 4,
      name: "Kid Innovation Africa T-Shirt",
      price: "₦5,000",
      numericPrice: 5000,
      image: Shirt,
      category: "t-shirts",
    },
    {
      id: 4,
      name: "Kid Innovation Africa T-Shirt",
      price: "₦5,000",
      numericPrice: 5000,
      image: Blue,
      category: "hoodie",
    },
    // Add more products as needed
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const filteredProducts = products
    .filter((product) => (category ? product.category === category : true))
    .filter((product) =>
      activeCategory === "all" ? true : product.category === activeCategory
    )
    .slice(0, limit);

  return (
    <section className="pb-12">
      <div className="container mx-auto px-4">

        {showFilters && (
          <div className="flex justify-center mb-8 space-x-4">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              className={
                activeCategory === "all"
                  ? "bg-black text-white hover:bg-black/90"
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
        )}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
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
                  <p className="font-medium mt-1">{product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {showViewAll && filteredProducts.length >= limit && (
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
