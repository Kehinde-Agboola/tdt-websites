"use client";
import Hero from "./_components/Hero";
import Banner from "./_components/Banner";
import Container from "../_component/shared";
import Bimpe from "./_components/Bimpe";
import ProductList from "./products/page";




const Page = () => {


  return (
    <main>
      <Hero />
      <Banner />
      <Container>
        <div className="pt-[4rem]">
          <h2 className="text-center text-[40px] mb-4">Trending Items</h2>
          <p className="text-center text-[#777777] mb-6 w-full md:w-[50%] mx-auto">
            Find everything you need to look and feel your best, and shop our
            latest trending fashion and lifestyle products.
          </p>
        </div>
        <ProductList />
      </Container>
      <Bimpe />
    </main>
  );
};

export default Page;
