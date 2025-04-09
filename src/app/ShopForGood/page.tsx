"use client";
import Hero from "./_components/Hero";
import Banner from "./_components/Banner";
import Container from "../_component/shared";
import Bimpe from "./_components/Bimpe";
import Trending from "./_components/Trending"




const Page = () => {


  return (
    <main>
      {/* <Navigation/> */}
      <Hero />
      <Banner />
      <Container>
        <div className="pt-[4rem]">
          <h2 className="text-[40px] text-center mb-4">Trending Items</h2>
          <p className="text-[#777777] text-center w-full mb-6 md:w-[50%] mx-auto">
            Find everything you need to look and feel your best, and shop our
            latest trending fashion and lifestyle products.
          </p>
        </div>
        <Trending /> 
        {/* <ProductList /> */}
      </Container>
      <Bimpe />
    </main>
  );
};

export default Page;
