'use client'
import React from 'react'
import Container from '@/app/_component/shared'
import Search from './Search';
import Cart from "../../../../public/assets/ecommerce/carts.png"
import Image from 'next/image';
const Hero = () => {
  return (
    <main className="bg-[#F4F4F4] pt-[4rem]">
      <Container>
        <section className="flex flex-col md:flex-row items-center ">
          <div className="w-full md:w-1/2">
            <h1 className="text-[40px] md:text-[64px]">
              Shop For <span className="text-yellow">Good</span>
            </h1>
            <p>
              Buying our items means more than just getting a product; it means
              changing a child's life. Our goal is to give underprivileged
              children care, education, and housing, and every item sold on our
              website helps us achieve this goal.
            </p>
            <Search />
          </div>
          <div className="w-full md:w-1/2">
            <Image src={Cart} alt="carts with cartoons" className="block mx-auto" />
          </div>
        </section>
      </Container>
    </main>
  );
}

export default Hero