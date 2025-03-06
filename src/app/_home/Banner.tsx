import React from 'react'
import Image from 'next/image';
// import Bag from "../../../../public/assets/ecommerce/destinytrustbag.png"
import Bag from "../../../public/assets/ecommerce/destinytrustbag.png"
import Container from '@/app/_component/shared';
const Banner = () => {
    return (
      <main className="bg-[#FFB4001A] py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image src={Bag} alt="The destiny trust bag" />
            <div className="w-full md:w-[35rem] text-center md:text-left">
              <p className="text-yellow font-bold">30% Of All Sales</p>
              <h1 className="text-[25px] md:text-[40px] ">
                New Summer Collections For Man’s Fashion.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
                amet molestie nunc. Vestibulum tempus justo et venenatis tempus.
                Nulla tincidunt,
              </p>
              <button className="py-2 px-6 border-2 border-yellow mt-4">
                View All Items
              </button>
            </div>
          </div>
        </Container>
      </main>
    );
}

export default Banner