"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function OrderDetailsPage() {
  const orderDetails = {
    id: "#HD8845",
    date: "15th March, 2025",
    status: "Processing",
    items: [
      {
        id: 1,
        name: "The Kids Innovation Hoodie",
        price: "₦15,000",
        image: "/placeholder.svg?height=80&width=80",
        color: "Army Green",
        size: "XL",
        quantity: 1,
        deliveryDate: "23rd Dec, 2025",
      },
      {
        id: 2,
        name: "The Kids Innovation Hoodie",
        price: "₦15,000",
        image: "/placeholder.svg?height=80&width=80",
        color: "Army Green",
        size: "XL",
        quantity: 1,
        deliveryDate: "23rd Dec, 2025",
      },
    ],
    total: "₦50,000",
    shippingAddress: {
      name: "John Doe",
      address: "123 Main St, Anytown",
      city: "Lagos",
      country: "Nigeria",
      postalCode: "100001",
      phone: "+234 813 800 2859",
    },
    paymentMethod: "Credit Card",
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-black text-white">
        <div className="container flex justify-between items-center mx-auto px-4 py-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <img
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
                2
              </span>
            </Link>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-md shadow-sm mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Order Details</h1>
              <p className="text-gray-500">Your order will be with you soon</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500">
                Order Number:{" "}
                <span className="text-black font-medium">
                  {orderDetails.id}
                </span>
              </p>
              <p className="text-gray-500">
                Order Placement:{" "}
                <span className="text-black font-medium">
                  {orderDetails.date}
                </span>
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Items</th>
                  <th className="text-center py-3">Quantity</th>
                  <th className="text-center py-3">Price</th>
                  <th className="text-right py-3">Delivery Expected</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-gray-100 h-20 rounded-md w-20 mr-4 overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-500 text-sm">
                            {item.color} · {item.size}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4">
                      Qty: {item.quantity.toString().padStart(2, "0")}
                    </td>
                    <td className="text-center py-4">{item.price}</td>
                    <td className="text-right py-4">{item.deliveryDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between mt-6">
            <div className="flex space-x-4">
              <Button
                variant="outline"
                className="border-amber-400 text-amber-600"
              >
                Track Your Order
              </Button>
              <Button variant="outline" className="border-red-400 text-red-600">
                Cancel Order
              </Button>
            </div>
            <div className="text-right">
              <p className="text-gray-500">
                Total:{" "}
                <span className="text-black text-lg font-bold">
                  {orderDetails.total}
                </span>
              </p>
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

          <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-4">
            <div>
              <img
                src="/logo.svg"
                alt="The Destiny Trust"
                className="h-16 w-16 mb-4"
              />
              <p className="text-gray-400 text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur. Urna ornare pretium
                placerat nibh amet nulla consequat habitasse. Aliquam pretium
                quam sit diam etiam ac augue adipiscing. Viverra ut.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
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
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-amber-400 font-medium mb-4">Explore</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Get Involved
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Company services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Job opportunities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Creative people
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-amber-400 font-medium mb-4">Support</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About company
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Company services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Job opportunities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Creative people
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-amber-400 font-medium mb-4">Contact Us</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    info@destinytrust.org
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    +234 813 800 2859
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">
                    TDT Centre, 6, Brila F.M Road, Off Bola Tinubu Road, Bogije
                    Town, Ibeju-Lekki, Lagos
                  </span>
                </li>
              </ul>
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
