
import React from "react";
import Container from "@/app/_component/shared";
const Volunteer = () => {
  return (
    <section className="bg-yellow">
      <Container>
        <div className="text-black py-8 px-6 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl md:text-[44px] font-bold mb-4">
            Join Our Volunteers
          </h2>
          <div className="w-full md:w-[40rem] text-center md:text-right">
            <p className="text-sm  mb-6">
              Become a part of our dynamic and innovative family. We are looking
              for passionate individuals who want to make an impact in people’s
              lives. Together, we can achieve greatness.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Become a Volunteer
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Volunteer;
