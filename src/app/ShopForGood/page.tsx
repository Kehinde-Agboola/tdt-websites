'use client'
import React from "react";
import { useState } from "react";
import Hero from "./_components/Hero";
import Banner from "./_components/Banner";
import { products } from "./_components/Products";
import ProductCard from "./_components/ProductCard"
import Container from "../_component/shared";
import Bimpe from "./_components/Bimpe";
const page = () => {
  const [filter, setFilter] = useState<string>("All Category");
  const filteredProducts =
    filter === "All Category"
      ? products
      : products.filter((product) => product.category === filter);
  return (
    <main>
      <Hero />
      <Banner />
      <Container>
        <div className="pt-[4rem]">
          <h2 className="text-center text-[40px]  mb-4">Trending Items</h2>
          <p className="text-center text-[#777777] mb-6 w-full md:w-[50%] mx-auto">
            Find everything you need to look and feel your best, and shop our
            latest trending fashion and lifestyle products.
          </p>
          <div className="flex justify-start md:justify-center gap-4 mb-6 overflow-x-auto whitespace-nowrap">
            {["All Category", "T-Shirts", "Hoodie", "Bags"].map((category) => (
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
        </div>
        <div className=" grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-[4rem]">
          {filteredProducts.map((product: any) => {
            return <ProductCard data={product} />;
          })}
        </div>
      </Container>
      <Bimpe />
    </main>
  );
};

export default page;
