"use client";
import React, { useState, useMemo } from "react";
import { products } from "../_components/Products";
import ProductCard from "../_components/ProductCard";
import { StaticImageData } from "next/image";


const ProductList = () => {
  const [filter, setFilter] = useState<string>("All Category");

  const categories = ["All Category", "T-Shirts", "Hoodie", "Bags"];

  const filteredProducts = useMemo(() => {
    return filter === "All Category"
      ? products
      : products.filter((product) => product.category === filter);
  }, [filter]);

  return (
    <main>
      <div className="flex justify-start md:justify-center gap-4 mb-6 overflow-x-auto whitespace-nowrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-6 whitespace-nowrap ${
              filter === category
                ? "bg-black text-white"
                : "text-black border border-black"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-[4rem]">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              image={product.image}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default ProductList;
