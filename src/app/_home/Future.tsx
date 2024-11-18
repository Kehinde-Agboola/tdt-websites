import React from 'react'
import Container from '../_component/shared'
import future from "@/assets/home/future.png"
import Image from 'next/image'

const Future = () => {
  return (
    <section className="bg-[#F9F9F9] my-[5rem] py-[5rem]">
      <Container>
        <div>
          <p className="pb-10 w-full md:w-[90%] ml-auto text-right text-[25px] md:text-[34px] xl:text-[64px] font-400">
            A future where more children prosper because we care.
          </p>
        </div>
       
        <Image
          src={future}
          alt="children-with-the-desting-trust-bag"
          width={1280}
          height={568}
        />
      </Container>
    </section>
  );
}

export default Future