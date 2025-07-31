import React from 'react'
import Image from 'next/image';
import Bag from "../../../../public/assets/ecommerce/bags.png"
// import Bag from "../../../../public/assets/ecommerce/destinytrustbag.png"
// import Bag from "../../../../public/assets/ecommerce/destinytrustbag.png"
import Container from '@/app/_component/shared';
const Banner = () => {
    return (
      <Container>
        <main className="bg-yellow bg-payment pt-8 my-[8rem]">
          <div className="flex flex-col md:flex-row  justify-between items-center ">
            <Image src={Bag} alt="The destiny trust bag" className="w-[30%]" />
            <div className="w-full md:w-[35rem] text-center md:text-left">
              <p className="text-white font-bold">
                30% Of All Sales To Children
              </p>
              <h1 className="text-[25px] md:text-[40px] ">Shop For Good</h1>
              <p>
                Discover beautifully crafted wears, bags, and lifestyle
                accessories made with love by our children and low-income women.
                Every purchase directly supports a child’s education and future.
              </p>
              <p className='pt-4'>Shop with purpose. Give hope.</p>
              <button className="py-2 px-6 border-2 border-black mt-4">
                Start Shopping
              </button>
            </div>
          </div>
        </main>
      </Container>
    );
}

export default Banner