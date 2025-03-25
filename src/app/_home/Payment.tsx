'use client'
import React, { useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { Button } from "../_component/atom/button";

const Payment = () => {
  const [amount, setAmount] = useState("1000"); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d+$/.test(value) || value === "") {
      setAmount(value);
    }
  };

  return (
    <main>
      <section className="bg-payment h-[50vh] max-w-6xl mx-auto absolute top-[43rem] left-0 right-0 bottom-0 bg-cover bg-no-repeat bg-[#FFB400] text-center p-[2rem] xl:pt-[.9rem]">
        <h1 className="text-[25px] xl:text-[32px]">
          <span className="font-bold">Your Giving, Their Hope,</span> Our
          Collective Future.
        </h1>
        <p className="w-full md:max-w-[40rem] mx-auto py-3 pb-4 text-sm">
          We can collectively ignite hope. By extending a helping hand to
          disadvantaged children, we building a brighter, more inclusive and
          safer future. Start giving. It’s safe and easy
        </p>
        <form className="flex flex-col md:flex-row md:justify-center items-center pt-16 gap-6">
          <div className="flex relative">
            <input
             
              className="bg-[#FFB400] outline-none w-[187px] block py-4 placeholder:text-black text-center border-4 border-black"
              placeholder="Enter Amount"
              value={amount} 
              onChange={handleInputChange} 
            />
            <TbCurrencyNaira className="absolute top-4 left-3" size={30} />
          </div>
          <a
            href={`https://paystack.com/pay/ie-pg23h4p?amount=${amount}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type={"button"}
              className="bg-black block text-white w-[187px] px-5 py-4 border-4 border-black"
            >
              Donate
            </Button>
          </a>
        </form>
      </section>
    </main>
  );
};

export default Payment;
