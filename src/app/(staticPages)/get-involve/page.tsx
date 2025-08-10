"use client";

import React from 'react';
// import Image from 'next/image';
import Container from '../../_component/shared';
// import InvolveHero from "../../../../public/assets/involve.png";
import { Button } from '@/app/_component/atom/button';
import { 
  Heart, 
  Users, 
  Handshake, 
  UserPlus, 
  Share2, 
  Phone, 
  Mail, 
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  ExternalLink,
  Copy,
  CreditCard
} from 'lucide-react';
import { useState } from 'react';
import ActionButtons from '../../_component/ui/Button';

const GetInvolvedPage = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const bankAccounts = [
    {
      currency: "NGN",
      account: "0124940702",
      bank: "GT Bank Plc"
    },
    {
      currency: "USD",
      account: "0468035746",
      bank: "GT Bank Plc"
    },
    {
      currency: "GBP", 
      account: "0468035753",
      bank: "GT Bank Plc"
    },
    {
      currency: "EUR",
      account: "0468035760", 
      bank: "GT Bank Plc"
    }
  ];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(type);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const phoneNumbers = [
    "+2348034651702",
    "+2348055163786", 
    "+2348095825538"
  ];

  const locations = [
    {
      city: "Lagos",
      address: "TDT Centre, 6, Brilla F.M Road, Off Bola Tinubu Road, Bogije Town, Ibeju-Lekki, Lagos"
    },
    {
      city: "Ibadan", 
      address: "9, Kunle Abass Street, off Soun Ajagungbade Avenue, New Bodija, Ibadan"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        {/* <Image
          src={InvolveHero}
          alt="Get Involved"
          fill
          className="object-cover object-center"
        /> */}
        <div className="absolute inset-0 bg-black/50" />
        
        <Container>
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Join us to Create a <span className="text-[#FFB400]">Better Future</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl">
                Partner with us to give every child the chance to learn, grow, and thrive—through 
                education, shelter, care, and empowerment. Your support makes lasting impact possible.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ways to Make a Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose how you&rsquo;d like to contribute to our mission of transforming children&apos;s lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Give */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FFB400] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Give</h3>
              <p className="text-gray-600 text-center mb-6">
                Make a direct donation to support our programs and initiatives
              </p>
              
              {/* Bank Accounts */}
              <div className="space-y-3 mb-6">
                <p className="font-semibold text-sm text-gray-700">Bank Details:</p>
                {bankAccounts.map((account, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded flex items-center justify-between">
                    <div className="text-sm">
                      <p className="font-medium">{account.currency}: {account.account}</p>
                      <p className="text-gray-500">{account.bank}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(account.account, account.currency)}
                      className="p-2 hover:bg-gray-200 rounded transition-colors"
                    >
                      {copiedAccount === account.currency ? (
                        <span className="text-green-600 text-xs">Copied!</span>
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              <a 
                href="https://paystack.com/pay/1000Hands"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FFB400] hover:bg-[#e0a800] text-black py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                Pay Online
              </a>
            </div>

            {/* Sponsor a Child */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FFB400] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Sponsor a Child</h3>
              <p className="text-gray-600 text-center mb-6">
                Be a child&apos;s hero! Make a one-off or recurring donation to support a child through school.
              </p>
              <div className="flex justify-center">
                <ActionButtons />
              </div>
            </div>

            {/* Be our Partner */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FFB400] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Be our Partner</h3>
              <p className="text-gray-600 text-center mb-6">
                Let&apos;s work with you to make an impact. We are flexible and always willing to collaborate to grow and sustain causes of mutual interest.
              </p>
              <Button className="w-full bg-[#FFB400] hover:bg-[#e0a800] text-black py-2 transition-colors">
                Partner with Us
              </Button>
            </div>

            {/* Volunteer */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FFB400] rounded-full flex items-center justify-center mb-6 mx-auto">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Volunteer</h3>
              <p className="text-gray-600 text-center mb-6">
                Join our amazing volunteers to make a difference. Share your time, skills, and passion with us.
              </p>
              <Button className="w-full bg-[#FFB400] hover:bg-[#e0a800] text-black py-2 transition-colors">
                Apply Here
              </Button>
            </div>

            {/* Spread the Cause */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-[#FFB400] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Spread the Cause</h3>
              <p className="text-gray-600 text-center mb-6">
                Tell someone about our work. Pitch our initiatives as CSR to your organisation.
              </p>
              <Button className="w-full bg-[#FFB400] hover:bg-[#e0a800] text-black py-2 transition-colors">
                Share Our Mission
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect with Us
            </h2>
            <p className="text-lg text-gray-600">
              Get in touch and let&apos;s start making a difference together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFB400] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone Numbers</h3>
                  <div className="space-y-1">
                    {phoneNumbers.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone}`}
                        className="block text-gray-600 hover:text-[#FFB400] transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email & Website */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFB400] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email & Website</h3>
                  <div className="space-y-1">
                    <a
                      href="mailto:info@destinytrust.org"
                      className="block text-gray-600 hover:text-[#FFB400] transition-colors"
                    >
                      info@destinytrust.org
                    </a>
                    <a
                      href="https://www.destinytrust.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-[#FFB400] transition-colors"
                    >
                      www.destinytrust.org
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFB400] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Our Locations</h3>
                  <div className="space-y-4">
                    {locations.map((location, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-[#FFB400]">{location.city}:</h4>
                        <p className="text-gray-600">{location.address}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-bold text-lg mb-6 text-center">Be Social</h3>
              <p className="text-gray-600 text-center mb-6">
                Follow us on social media for updates and inspiration
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://twitter.com/TheDestinyTrust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://facebook.com/TheDestinyTrust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://instagram.com/TheDestinyTrust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                @TheDestinyTrust
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default GetInvolvedPage;