"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("direct-bank");

  const cartItems = [
    {
      id: 1,
      name: "The Kids Innovation Hoodie",
      price: "₦15,000",
      numericPrice: 15000,
      image: "/placeholder.svg?height=100&width=100",
      color: "Army Green",
      size: "XL",
      variant: "Long Sleeve",
      quantity: 1,
    },
    {
      id: 2,
      name: "The Kids Innovation Hoodie",
      price: "₦15,000",
      numericPrice: 15000,
      image: "/placeholder.svg?height=100&width=100",
      color: "Army Green",
      size: "XL",
      variant: "Long Sleeve",
      quantity: 1,
    },
    {
      id: 3,
      name: "The Kids Innovation Hoodie",
      price: "₦15,000",
      numericPrice: 15000,
      image: "/placeholder.svg?height=100&width=100",
      color: "Army Green",
      size: "XL",
      variant: "Long Sleeve",
      quantity: 1,
    },
  ];

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.numericPrice * item.quantity,
    0
  );
  const shipping = 3000;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="bg-white min-h-screen">
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-8">Checkout</h1>
        <p className="text-gray-500 mb-8">There are 3 products in your cart</p>

        <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First name*</Label>
                    <Input id="firstName" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name*</Label>
                    <Input id="lastName" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address*</Label>
                  <Input id="address" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="addressLine2">Address line 2</Label>
                  <Input id="addressLine2" className="mt-1" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="country">Country*</Label>
                    <div className="mt-1 relative">
                      <select
                        id="country"
                        className="border h-10 rounded-md w-full appearance-none pl-3 pr-10"
                      >
                        <option>Select a country</option>
                        <option>Nigeria</option>
                        <option>Ghana</option>
                        <option>Kenya</option>
                      </select>
                      <div className="flex absolute inset-y-0 items-center pointer-events-none px-2 right-0">
                        <svg
                          className="h-5 text-gray-400 w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M7 7l3 3 3-3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="city">City/Town*</Label>
                    <Input id="city" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="postcode">Postcode / ZIP*</Label>
                    <Input id="postcode" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone*</Label>
                    <Input id="phone" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="additionalInfo">Additional information</Label>
                  <textarea
                    id="additionalInfo"
                    rows={4}
                    className="border p-3 rounded-md w-full mt-1"
                    placeholder="Notes about your order, e.g. special delivery instructions"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <Checkbox id="createAccount" />
              <Label htmlFor="createAccount" className="text-sm ml-2">
                Create Account
              </Label>
            </div>

            <div className="flex items-center mb-8">
              <Checkbox id="shipDifferent" />
              <Label htmlFor="shipDifferent" className="text-sm ml-2">
                Ship to a different address?
              </Label>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                Apply Coupon to get discount!
              </h2>
              <div className="flex">
                <Input placeholder="Coupon code" className="rounded-r-none" />
                <Button className="bg-amber-400 rounded-l-none text-black hover:bg-amber-500">
                  Apply Code
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-md mb-8">
              <h2 className="text-xl font-semibold mb-4">Your Order</h2>

              <div className="mb-6">
                <div className="flex justify-between font-medium mb-2">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="flex border-t py-4">
                    <div className="flex-shrink-0 bg-gray-100 h-16 rounded-md w-16 mr-4 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-sm font-medium">{item.name}</h3>
                          <p className="text-gray-500 text-xs">
                            Army Green · XL · 1 × 36.00
                          </p>
                        </div>
                        <span className="font-medium">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6 space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Cost (+)</span>
                  <span>₦{shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount (-)</span>
                  <span>₦{discount.toLocaleString()}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between text-lg font-medium mb-6">
                <span>Total Payable</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Payment</h2>

              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-4"
              >
                <div
                  className={`flex items-center space-x-2 border p-4 rounded-md ${
                    paymentMethod === "direct-bank"
                      ? "border-amber-400 bg-amber-50"
                      : ""
                  }`}
                >
                  <RadioGroupItem value="direct-bank" id="direct-bank" />
                  <Label htmlFor="direct-bank" className="flex-1">
                    <div>
                      <span className="font-medium">Direct Bank Transfer</span>
                      {paymentMethod === "direct-bank" && (
                        <p className="text-gray-600 text-sm mt-2">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                      )}
                    </div>
                  </Label>
                </div>

                <div
                  className={`flex items-center space-x-2 border p-4 rounded-md ${
                    paymentMethod === "cash-delivery"
                      ? "border-amber-400 bg-amber-50"
                      : ""
                  }`}
                >
                  <RadioGroupItem value="cash-delivery" id="cash-delivery" />
                  <Label htmlFor="cash-delivery" className="flex-1">
                    <div>
                      <span className="font-medium">Cash on Delivery</span>
                      {paymentMethod === "cash-delivery" && (
                        <p className="text-gray-600 text-sm mt-2">
                          Pay with cash upon delivery. Please ensure you have
                          the exact amount as our delivery personnel may not
                          carry change.
                        </p>
                      )}
                    </div>
                  </Label>
                </div>

                <div
                  className={`flex items-center space-x-2 border p-4 rounded-md ${
                    paymentMethod === "online-gateway"
                      ? "border-amber-400 bg-amber-50"
                      : ""
                  }`}
                >
                  <RadioGroupItem value="online-gateway" id="online-gateway" />
                  <Label htmlFor="online-gateway" className="flex-1">
                    <div>
                      <span className="font-medium">Online Payment</span>
                      {paymentMethod === "online-gateway" && (
                        <div className="mt-2">
                          <p className="text-gray-600 text-sm mb-3">
                            Pay securely online. We accept the following payment
                            methods:
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex border p-2 rounded-md items-center space-x-2">
                              <input
                                type="radio"
                                id="card-payment"
                                name="card-type"
                                className="h-4 text-amber-400 w-4"
                              />
                              <label htmlFor="card-payment" className="text-sm">
                                Credit/Debit Card
                              </label>
                            </div>
                            <div className="flex border p-2 rounded-md items-center space-x-2">
                              <input
                                type="radio"
                                id="paypal-payment"
                                name="card-type"
                                className="h-4 text-amber-400 w-4"
                              />
                              <label
                                htmlFor="paypal-payment"
                                className="text-sm"
                              >
                                PayPal
                              </label>
                            </div>
                            <div className="flex border p-2 rounded-md items-center space-x-2">
                              <input
                                type="radio"
                                id="bank-payment"
                                name="card-type"
                                className="h-4 text-amber-400 w-4"
                              />
                              <label htmlFor="bank-payment" className="text-sm">
                                Bank Transfer
                              </label>
                            </div>
                            <div className="flex border p-2 rounded-md items-center space-x-2">
                              <input
                                type="radio"
                                id="mobile-payment"
                                name="card-type"
                                className="h-4 text-amber-400 w-4"
                              />
                              <label
                                htmlFor="mobile-payment"
                                className="text-sm"
                              >
                                Mobile Money
                              </label>
                            </div>
                          </div>

                          {/* Card details form that appears when credit card is selected */}
                          <div className="border-t mt-4 pt-3 space-y-3">
                            <div>
                              <Label htmlFor="card-number">Card Number</Label>
                              <Input
                                id="card-number"
                                placeholder="1234 5678 9012 3456"
                                className="mt-1"
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              <div className="col-span-2">
                                <Label htmlFor="expiry-date">Expiry Date</Label>
                                <Input
                                  id="expiry-date"
                                  placeholder="MM / YY"
                                  className="mt-1"
                                />
                              </div>
                              <div>
                                <Label htmlFor="cvv">CVV</Label>
                                <Input
                                  id="cvv"
                                  placeholder="123"
                                  className="mt-1"
                                />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="card-name">Name on Card</Label>
                              <Input
                                id="card-name"
                                placeholder="John Doe"
                                className="mt-1"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              <div className="flex justify-between items-center mb-8 mt-6">
                <div className="text-gray-500 text-sm">
                  Secured by SSL encryption
                </div>
                <div className="flex space-x-4">
                  <img
                    src="/placeholder.svg?height=30&width=40"
                    alt="Mastercard"
                    className="h-8"
                  />
                  <img
                    src="/placeholder.svg?height=30&width=40"
                    alt="Visa"
                    className="h-8"
                  />
                  <img
                    src="/placeholder.svg?height=30&width=40"
                    alt="PayPal"
                    className="h-8"
                  />
                </div>
              </div>

              <Button className="bg-amber-400 text-black w-full font-medium hover:bg-amber-500 py-6">
                Place an Order
              </Button>
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
