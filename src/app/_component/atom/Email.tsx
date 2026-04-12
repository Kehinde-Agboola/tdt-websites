"use client";

import React, { useState } from "react";
import { supabase } from "../../../lib/supabase";

type EmailProps = {
  className?: string;
};

const Email = ({ className = "" }: EmailProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (!supabase) {
        alert("Service unavailable. Please try again later.");
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase
        .from("newsletter_subscriptions")
        .insert([{ email: email }]);

      if (error) throw error;

      console.log("Subscribed to newsletter");
      alert("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      console.error("Error subscribing: ", error);
      alert("There was an error subscribing. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className={className}>
      <form className="pt-4" onSubmit={handleSubmit}>
        <div className="relative">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none text-[#777777] px-6 py-3 w-full pr-28 border border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            aria-label="Subscribe to newsletter"
            className="bg-[#FFB400] absolute right-2 top-1/2 transform -translate-y-1/2 px-6 text-black py-2 "
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Email;
