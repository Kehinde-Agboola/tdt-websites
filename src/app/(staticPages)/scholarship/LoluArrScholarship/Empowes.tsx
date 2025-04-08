import React from 'react'
import Graduate from "../../../../../public/assets/scholarship/graduategirl.png"
import Image from 'next/image'
const Empowes = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-[40%] w-full">
        <Image
          src={Graduate}
          alt="a graduating girl"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-[60%] w-full bg-[#5F63C5] p-8 text-white">
        <p className="text-[16px] mb-4">ABOUT THE DESTINY TRUST</p>
        <h1 className="text-[22px] md:text-[32px] mb-4">
          Empowering Destinies with Education
        </h1>
        <div className="w-full text-justify">
          <p>
            <strong>The Henry Ofili Foundation</strong> Scholarship is
            coordinated by <strong>The Destiny Trust</strong>, a non-profit
            committed to the education, well-being, and empowerment of children
            and young people in vulnerable circumstances. The Trust aims at
            using education as a means of tangible empowerment for young people
            to break the cycle of multigenerational poverty.
          </p>
          <p className="my-4">
            98% of university undergraduates supported by
            <strong>The Destiny Trust</strong> are the first generation of
            undergraduates in their families. The Trust is bridging agelong
            education gaps and ensuring the socio-economic inclusion of more
            disadvantaged children, families, and communities. Since 2012, over
            20,000 children and young people have been reached with education
            opportunities across all levels with resounding stories of
            transformed  lives.
          </p>
        </div>
        <button className="px-6 py-2 bg-[#2D2D2D]">Learn More</button>
      </div>
    </section>
  );
}

export default Empowes