import React from 'react'
import Container from '../_component/shared';
import Boy from "@/assets/home/boybag.png"
import Image from 'next/image';
import Line from "@/assets/home/line.png"
import { Button } from '../_component/atom/button';
const Impact = () => {
  return (
    <section className="bg-payment bg-[#FFB400]">
      <Container>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-[5rem] md:pt-[0]">
          <Image src={Boy} alt="Schoolboy" width={618} />
          <div className="md:w-[45%]">
            <Image src={Line} alt="line" className="pb-3 hidden md:block" />
            <p className="text-[40px] text-center md:text-left  md:text-[40px] pb-3">
              Our Impact Reports
            </p>
            <p className="pb-3 text-center md:text-left">
              We celebrate the impact we make together and highlighting
              opportunities to transform more lives
            </p>
            <div className="flex flex-col items-center  md:flex-row gap-5 py-4">
              <Button className="border-2 border-black w-[160px] py-2">
                2022
              </Button>
              <Button className="border-2 border-black w-[160px] py-2">
                2023
              </Button>
              <Button className="bg-black w-[160px] text-white py-2">
                2024
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Impact