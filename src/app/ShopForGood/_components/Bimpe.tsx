import React from 'react'
import Image from 'next/image';
import Bimp from "../../../../public/assets/ecommerce/Bimpe.png"
import Container from '@/app/_component/shared';

const Bimpe = () => {
  return (
    <section className="bg-payment bg-[#FFB400]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center pt-20 md:pt-0">
          <div className="">
            <h1 className='text-[32px] md:text-[64px]'>Make Bimpe Smile</h1>
          </div>
          <Image src={Bimp} alt="Bimpe's smile" width={518} />
        </div>
      </Container>
    </section>
  );
}

export default Bimpe