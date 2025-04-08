'use client';
import React from 'react';
import Container from '../../_component/shared';
import Boy from "../../../../public/assets/home/boybag.png";
import Image from 'next/image';
import Line from "../../../../public/assets/home/line.png";
import { Button } from '@/app/_component/atom/button';
import Link from 'next/link';

const reports = {
  2024: "/../../../../../files/The Destiny Trust Mid-year Report 2024_.pdf",
};

// Function to open and download a file
const openAndDownloadFile = (fileUrl: string, fileName: string) => {
  const link = document.createElement('a');
  link.href = fileUrl; 
  link.download = fileName; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Impact = () => {
  return (
    <section className="bg-payment bg-[#FFB400]">
      <Container>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-[5rem] md:pt-[0]">
          <Image src={Boy} alt="Schoolboy" width={618} />
          <div className="md:w-[45%]">
            <Image src={Line} alt="line" className="pb-3 hidden md:block" />
            <p className="text-[40px] text-center md:text-left md:text-[40px] pb-3">
              Our Impact Reports
            </p>
            <p className="pb-3 text-center md:text-left">
              We celebrate the impact we make together and highlight
              opportunities to transform more lives.
            </p>
            <div className="flex flex-col items-center md:flex-row gap-5 py-4">
              {/* 2022 Button */}
              <Button
                className="border-2 border-black w-[200px] py-2"
                onClick={() =>
                  openAndDownloadFile(
                    reports[2024],
                    "2024-TDT-Impact-Report.pdf"
                  )
                }
              >
                2024 Impact Reports
              </Button>
              {/* 2023 Button */}
              <Link href="/impact-report-financial">
                <Button>View more</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Impact;
