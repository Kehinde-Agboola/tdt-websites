import React from 'react'
import Pic1 from "../../../public/assets/home/pic1.png"
import Pic2 from "../../../public/assets/home/pic2.png";
import Pic3 from "../../../public/assets/home/pic3.png";
import Pic4 from "../../../public/assets/home/pic4.png";
import Container from "@/app/_component/shared"
import { Button } from '../_component/atom/button'
import Image from 'next/image'
const Empower = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2  sm:grid-cols-4 w-full">
        <Image src={Pic1} alt="school children" objectFit="cover" />
        <Image src={Pic2} alt="school children" objectFit="cover" />
        <Image src={Pic3} alt="school children" objectFit="cover" />
        <Image src={Pic4} alt="school children" objectFit="cover" />
      </div>
      <section className="bg-payment bg-cover bg-no-repeat bg-yellow py-[4rem]">
        <Container>
          <section className="flex flex-col md:flex-row justify-center md:justify-between ">
            <p className="text-[40px] font-[400]">Empower Their Dreams</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center ">
              <Button className="border-2 border-black w-full md:w-[238px] mx-auto md:py-2 py-4">
                Sponsor a Scholarship
              </Button>
              <Button className="bg-black text-white w-full md:w-[187px] mx-auto md:py-2 py-4">
                Sponsor a Child
              </Button>
            </div>
          </section>
        </Container>
      </section>
    </section>
  );
}

export default Empower