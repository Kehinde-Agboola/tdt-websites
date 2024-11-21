import React from 'react'
import Container from '../_component/shared'
import { Button } from '../_component/atom/button';
const Community = () => {
  return (
    <section className="bg-community bg-cover bg-no-repeat bg-center h-screen w-full">
      <Container>
        <div className="flex flex-col justify-center text-center pt-[4rem]">
          <p className="text-[40px] md:text-[64px] font-[400]">
            Join Our <span className="text-yellow">Community</span>
          </p>
          <p className='w-full md:w-[682px] mx-auto'>
            It takes a community to raise a child. Be part of the caring
            community donating to give hope to children.
          </p>
          <Button className='mt-4 bg-black text-white w-[224px] mx-auto py-2'>Become a Volunteer</Button>
        </div>
      </Container>
    </section>
  );
}

export default Community