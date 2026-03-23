"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SlidePicture from "../../../../public/assets/ecommerce/shop.png";
export default function ShopForGoodPage() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => setAnimationStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Continuous Animation */}
      <div className="absolute inset-0 animate-background-pan">
        <Image
          src="/shopbg.png"
          alt="Shop for Good Background"
          fill
          className="object-cover scale-110 animate-slow-zoom"
          priority
        />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-yellow-50/20 animate-gradient-shift"></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-float-1"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-orange-300/20 rounded-full animate-float-2"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-yellow-300/15 rounded-full animate-float-3"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-orange-400/25 rounded-full animate-float-4"></div>
      </div>

      {/* Continuously Floating "Coming Soon" Badges */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {animationStarted && (
          <>
            {/* Badge 1 - Continuous Float */}
            <div className="absolute top-8 left-4 sm:top-16 sm:left-16 md:left-32 animate-continuous-float-1">
              <div className="bg-white border-2 border-yellow-400 rounded-full px-3 py-1 text-xs md:text-sm font-medium shadow-lg hover:shadow-xl transition-shadow animate-pulse-glow">
                coming soon
              </div>
            </div>

            {/* Badge 2 - Diagonal Movement */}
            <div className="absolute top-16 right-4 sm:top-20 sm:right-32 md:right-48 animate-diagonal-float">
              <div className="bg-black text-white rounded-full px-3 py-1 text-xs md:text-sm font-medium shadow-lg animate-rotate-slow">
                coming soon
              </div>
            </div>

            {/* Badge 3 - Circular Motion */}
            <div className="absolute top-24 left-8 sm:top-32 md:top-40 sm:left-32 md:left-48 animate-circular-motion">
              <div className="bg-white border-2 border-yellow-400 rounded-full px-3 py-1 text-xs md:text-sm font-medium shadow-lg animate-bounce-soft">
                coming soon
              </div>
            </div>

            {/* Badge 4 - Wave Motion */}
            <div className="absolute top-20 right-4 sm:top-28 md:top-32 sm:right-16 md:right-32 animate-wave-motion">
              <div className="bg-black text-white rounded-full px-3 py-1 text-xs md:text-sm font-medium shadow-lg animate-scale-pulse">
                coming soon
              </div>
            </div>

            {/* Badge 5 - Pendulum Motion */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 animate-pendulum">
              <div className="bg-white border-2 border-yellow-400 rounded-full px-3 py-1 text-xs md:text-sm font-medium shadow-lg animate-glow-pulse">
                coming soon
              </div>
            </div>

            {/* Badge 6 - Spiral Motion */}
            <div className="absolute top-36 left-4 sm:top-44 sm:left-20 animate-spiral-motion">
              <div className="bg-black text-white rounded-full px-3 py-1 text-xs md:text-sm font-medium shadow-lg animate-wobble">
                coming soon
              </div>
            </div>

            {/* Badge 7 - Figure 8 Motion */}
            <div className="absolute bottom-24 right-6 sm:bottom-32 sm:right-24 animate-figure-eight">
              <div className="bg-yellow-400 border-2 border-black rounded-full px-3 py-1 text-xs md:text-sm font-medium shadow-lg animate-spin-slow">
                coming soon
              </div>
            </div>
          </>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left Content with Text Animations */}
          <div className="space-y-6 relative animate-slide-in-left">
            <div className="relative">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold relative">
                <span className="text-yellow animate-text-glow-yellow inline-block animate-bounce-gentle">
                  Shop
                </span>{" "}
                <span className="text-black animate-text-shadow inline-block animate-sway">
                  for Good
                </span>
              </h1>

              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 animate-expand-width"></div>
            </div>

            <p className="text-base md:text-lg text-gray-700 max-w-md leading-relaxed animate-fade-in-up opacity-0 animation-delay-500">
              Imagine if every purchase lit up a child&apos;s world with hope;
              if every choice turned consumption into compassion. Don&apos;t
              miss launch day. Join the list now.
            </p>

            <div className="animate-fade-in-up opacity-0 animation-delay-1000">
              <Button className="bg-yellow hover:bg-yellow-500 text-black  px-6 md:px-8 py-3  shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-button-pulse">
                Join the List Now
              </Button>
            </div>
          </div>

          {/* Right side - Interactive floating elements */}
          <div className="relative flex items-center justify-center animate-slide-in-right">
            <Image
              src={SlidePicture}
              alt="Shop for Good illustration"
              priority
              className="h-auto w-full max-w-full object-contain"
              width={1900}
              height={1900}
            /> 
            <div className="w-full h-full flex items-center justify-center relative">
              {/* Floating Interactive Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-400/40 rounded-full animate-orbit-1"></div>
                <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-orange-400/40 rounded-full animate-orbit-2"></div>
                <div className="absolute bottom-1/4 left-1/2 w-10 h-10 bg-yellow-300/30 rounded-full animate-orbit-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continuous Particle Effect */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-yellow-400/20 rounded-full animate-particle-${
              (i % 4) + 1
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}