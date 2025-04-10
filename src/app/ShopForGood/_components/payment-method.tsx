"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PaymentMethodsProps {
  onPaymentComplete?: () => void;
}

export default function PaymentMethods({
  onPaymentComplete,
}: PaymentMethodsProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      if (onPaymentComplete) {
        onPaymentComplete();
      }
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="button"
          onClick={() => setPaymentMethod("card")}
          className={`flex-1 p-4 border rounded-md flex flex-col items-center justify-center gap-2 transition-colors ${
            paymentMethod === "card"
              ? "border-amber-400 bg-amber-50"
              : "hover:bg-gray-50"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>
          <span className="text-sm font-medium">Credit Card</span>
        </button>

        <button
          type="button"
          onClick={() => setPaymentMethod("paypal")}
          className={`flex-1 p-4 border rounded-md flex flex-col items-center justify-center gap-2 transition-colors ${
            paymentMethod === "paypal"
              ? "border-amber-400 bg-amber-50"
              : "hover:bg-gray-50"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 11c4.17 0 7.2-1.45 8.57-4.38.25-.53.43-1.12.43-1.62 0-1.56-1.37-3-3-3H6c-.77 0-1.35.38-1.68 1L2 11" />
            <path d="M13.5 11H6c-.77 0-1.35.38-1.68 1l-2.32 6 .23.45c.34.62.97 1.05 1.67 1.05h7.1c.7 0 1.33-.43 1.67-1.05l1.83-4.5" />
            <path d="M18.06 11.5c3.06 0 5.44-1.54 6.44-4.38.23-.63.35-1.33.35-2 0-2.22-1.84-4.12-4.07-4.12h-7.06c-.77 0-1.35.38-1.68 1l-2.04 5" />
            <path d="M13.5 11h-1.68c-.77 0-1.35.38-1.68 1l-2.32 6 .23.45c.34.62.97 1.05 1.67 1.05h7.1c.7 0 1.33-.43 1.67-1.05l1.83-4.5" />
          </svg>
          <span className="text-sm font-medium">PayPal</span>
        </button>

        <button
          type="button"
          onClick={() => setPaymentMethod("bank")}
          className={`flex-1 p-4 border rounded-md flex flex-col items-center justify-center gap-2 transition-colors ${
            paymentMethod === "bank"
              ? "border-amber-400 bg-amber-50"
              : "hover:bg-gray-50"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-6 9 6" />
            <path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9" />
            <path d="M3 19h18" />
            <path d="M9 13v6" />
            <path d="M15 13v6" />
          </svg>
          <span className="text-sm font-medium">Bank Transfer</span>
        </button>
      </div>

      {paymentMethod === "card" && (
        <form
          onSubmit={handlePaymentSubmit}
          className="space-y-4 border rounded-md p-4"
        >
          <div>
            <Label htmlFor="card-number">Card Number</Label>
            <Input
              id="card-number"
              placeholder="1234 5678 9012 3456"
              value={cardDetails.number}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, number: e.target.value })
              }
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input
                id="expiry"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, expiry: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                placeholder="123"
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="name">Name on Card</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={cardDetails.name}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, name: e.target.value })
              }
              required
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="text-xs text-gray-500">Secure payment</span>
            </div>
            <div className="flex gap-2">
              <Image
                src="/placeholder.svg?height=24&width=36"
                alt="Visa"
                className="h-6"
              />
              <Image
                src="/placeholder.svg?height=24&width=36"
                alt="Mastercard"
                className="h-6"
              />
              <Image
                src="/placeholder.svg?height=24&width=36"
                alt="Amex"
                className="h-6"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-black"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </Button>
        </form>
      )}

      {paymentMethod === "paypal" && (
        <div className="border rounded-md p-4 text-center">
          <p className="mb-4 text-sm text-gray-600">
            You will be redirected to PayPal to complete your purchase securely.
          </p>
          <Button
            onClick={handlePaymentSubmit}
            className="bg-[#0070ba] hover:bg-[#005ea6] text-white"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay with PayPal"}
          </Button>
        </div>
      )}

      {paymentMethod === "bank" && (
        <div className="border rounded-md p-4">
          <p className="mb-4 text-sm text-gray-600">
            Please use the following information to make a bank transfer:
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Bank Name:</span>
              <span className="text-sm">First Bank of Nigeria</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Account Name:</span>
              <span className="text-sm">The Destiny Trust</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Account Number:</span>
              <span className="text-sm">0123456789</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Reference:</span>
              <span className="text-sm">Order #HD8845</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Please include your order number as reference. Your order will be
            processed once payment is confirmed.
          </p>
          <Button
            onClick={handlePaymentSubmit}
            className="w-full bg-amber-400 hover:bg-amber-500 text-black"
            disabled={isProcessing}
          >
            {isProcessing ? "Confirming..." : "I've Made the Transfer"}
          </Button>
        </div>
      )}
    </div>
  );
}
