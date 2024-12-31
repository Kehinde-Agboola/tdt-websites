"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/app/_component/shared";

// Reports Data
const reports = [
  {
    year: 2024,
    title: "2024 Mid-year Report",
    file: "/../../../../../files/The Destiny Trust Mid-year Report 2024_.pdf",
  },
  {
    year: 2023,
    title: "2023 Annual Report",
    file: "../../../../../files/TDT 2023 Annual Report.pdf",
  },
  {
    year: 2022,
    title: "2022 Annual Report",
    file: "../../../../../files/TDT 2022 Annual Report.pdf",
  },
  {
    year: 2022,
    title: "2022 Impact Story",
    file: "../../../../../files/The Destiny Trust Impact Report 2022.pdf",
  },
  {
    year: 2021,
    title: "2021 Impact Story",
    file: "../../../../../files/2021 Destiny Trust Impact Report.pdf",
  },
  {
    year: 2020,
    title: "Financials",
    file: "../../../../../files/2020 TDT Financials.pdf",
  },
  {
    year: 2020,
    title: "2020 Impact Story",
    file: "../../../../../files/2020 TDT Financials.pdf",
  },
  {
    year: 2019,
    title: "Financials",
    file: "../../../../../files/2019 TDT Financials.pdf",
  },
  {
    year: 2019,
    title: "2019 Impact Story",
    file: "../../../../../files/2019 TDT Impact Report.pdf",
  },
  {
    year: 2018,
    title: "Financials",
    file: "../../../../../files/2018 TDT Financials.pdf",
  },
  {
    year: 2018,
    title: "2018 Impact Story",
    file: "../../../../../files/2018 TDT Impact Report.pdf",
  },
  {
    year: 2017,
    title: "Financials",
    file: "../../../../../files/2017 TDT Financials.pdf",
  },
  {
    year: 2016,
    title: "Financials",
    file: "../../../../../files/2016 TDT Financials.pdf",
  },
  {
    year: 2015,
    title: "Financials",
    file: "../../../../../files/2015 TDT Financials.pdf",
  },
  {
    year: 2014,
    title: "Financials",
    file: "../../../../../files/2014 TDT Financials.pdf",
  },
  {
    year: 2013,
    title: "Financials",
    file: "../../../../../files/2013 TDT Financials.pdf",
  },
  {
    year: 2012,
    title: "Financials",
    file: "../../../../../files/2012 TDT Financials.pdf",
  },
];

const FinancialReports = () => {
  return (
    <Container>
    <section className="my-[4rem]">
                 {/* Heading */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold text-center text-gray-800 mb-8"
      >
        Financial & Impact Reports
      </motion.h2>

      {/* Grid of Reports */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reports.map((report, index) => (
          <motion.a
            key={index}
            href={report.file}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            }}
            className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm flex flex-col justify-between cursor-pointer"
          >
            {/* Year */}
            <div className="text-gray-700 text-sm font-medium mb-2">
              {report.year}
            </div>

            {/* Title */}
            <div className="text-gray-900 text-lg font-semibold mb-4 flex items-center">
              {report.title}
              <span className="ml-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded">
                .pdf
              </span>
            </div>

            {/* Download Button */}
            <a
              href={report.file}
              download
              className="text-blue-600 hover:text-blue-800 font-medium self-start"
              onClick={(e) => e.stopPropagation()} // Prevents link conflict
            >
              Download
            </a>
          </motion.a>
        ))}
      </div>
</section>
    </Container>
  );
};

export default FinancialReports;
