"use client";

// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import PaymentMethods from "../../_components/payment-method";

export default function PaymentPage() {
  const router = useRouter();
  // Removed unused isProcessing state

  const handlePaymentComplete = () => {
    // Removed setIsProcessing as it is unused
    // Simulate payment processing
    setTimeout(() => {
      router.push("/order/HD8845");
    }, 1000);
  };

  const orderSummary = {
    subtotal: 45000,
    shipping: 3000,
    discount: 0,
    total: 48000,
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-black text-white">
        <div className="container flex justify-between items-center mx-auto px-4 py-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="The Destiny Trust"
                className="h-10 w-10"
              />
              <span className="font-semibold">THE DESTINY TRUST</span>
            </Link>
            <nav className="text-sm hidden items-center md:flex space-x-6">
              <Link href="#" className="hover:text-amber-400">
                Who We Are
              </Link>
              <Link href="#" className="hover:text-amber-400">
                What We Do
              </Link>
              <Link href="#" className="hover:text-amber-400">
                Our Projects
              </Link>
              <Link href="#" className="hover:text-amber-400">
                Scholarship
              </Link>
              <Link href="/shop" className="hover:text-amber-400">
                Shop For Good
              </Link>
            </nav>
          </div>
          <Button className="bg-amber-400 text-black hover:bg-amber-500">
            Donate Now
          </Button>
        </div>
      </header>

      <div className="bg-white border-b">
        <div className="container flex justify-between items-center mx-auto px-4 py-4">
          <nav className="flex text-sm items-center space-x-6">
            <Link href="/shop/men" className="hover:text-amber-400">
              Men
            </Link>
            <Link href="/shop/women" className="hover:text-amber-400">
              Women
            </Link>
            <Link href="/shop/kids" className="hover:text-amber-400">
              Kids
            </Link>
            <Link href="/shop/lifestyle" className="hover:text-amber-400">
              Lifestyle
            </Link>
            <Link href="/shop/accessories" className="hover:text-amber-400">
              Accessories
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
            <Link href="/cart" className="p-2 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <span className="flex bg-amber-400 h-4 justify-center rounded-full text-black text-xs w-4 -right-1 -top-1 absolute items-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-2 items-center mb-6">
          <Link href="/checkout" className="text-gray-500 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </Link>
          <h1 className="text-2xl font-semibold">Payment</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold mb-6">
                Select Payment Method
              </h2>
              <PaymentMethods onPaymentComplete={handlePaymentComplete} />
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-md shadow-sm sticky top-4">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              <div className="mb-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₦{orderSummary.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>₦{orderSummary.shipping.toLocaleString()}</span>
                </div>
                {orderSummary.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₦{orderSummary.discount.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="border-t mb-6 pt-3">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₦{orderSummary.total.toLocaleString()}</span>
                </div>
              </div>

              <div className="text-gray-500 text-xs space-y-2">
                <p>
                  By completing your purchase, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="text-amber-600 hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-amber-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p>
                  All proceeds from this purchase will support The Destiny
                  Trust&apos;s mission to improve access to education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white mt-16 pb-6 pt-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Be part of a better tommorow
            </h3>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 text-black px-4 py-2"
              />
              <Button className="bg-amber-400 text-black hover:bg-amber-500">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="border-gray-800 border-t text-center text-gray-400 text-sm pt-8">
            © 2021 The Destiny Trust. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
