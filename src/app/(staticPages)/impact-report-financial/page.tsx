"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/app/_component/shared";
import PDFBookViewer from "@/app/_component/ui/PDFBookViewer";
import { Eye, Download } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";

// Reports Data
const reports = [
  {
    year: 2025,
    title: "2025 Impact Report",
    file: "/files/The Destiny Trust Mid-year Report 2024_.pdf",
  },
  {
    year: 2024,
    title: "2024 Mid-year Report",
    file: "/files/The Destiny Trust Mid-year Report 2024_.pdf",
  },
  {
    year: 2023,
    title: "2023 Annual Report",
    file: "/files/TDT 2023 Annual Report.pdf",
  },
  {
    year: 2022,
    title: "2022 Annual Report",
    file: "/files/TDT 2022 Annual Report.pdf",
  },
  {
    year: 2022,
    title: "2022 Impact Story",
    file: "/files/The Destiny Trust Impact Report 2022.pdf",
  },
  {
    year: 2021,
    title: "2021 Impact Story",
    file: "/files/2021 Destiny Trust Impact Report.pdf",
  },
  {
    year: 2020,
    title: "Financials",
    file: "/files/2020 TDT Financials.pdf",
  },
  {
    year: 2020,
    title: "2020 Impact Story",
    file: "/files/2020 TDT Financials.pdf",
  },
  {
    year: 2019,
    title: "Financials",
    file: "/files/2019 TDT Financials.pdf",
  },
  {
    year: 2019,
    title: "2019 Impact Story",
    file: "/files/2019 TDT Impact Report.pdf",
  },
  {
    year: 2018,
    title: "Financials",
    file: "/files/2018 TDT Financials.pdf",
  },
  {
    year: 2018,
    title: "2018 Impact Story",
    file: "/files/2018 TDT Impact Report.pdf",
  },
  {
    year: 2017,
    title: "Financials",
    file: "/files/2017 TDT Financials.pdf",
  },
  {
    year: 2016,
    title: "Financials",
    file: "/files/2016 TDT Financials.pdf",
  },
  {
    year: 2015,
    title: "Financials",
    file: "/files/2015 TDT Financials.pdf",
  },
  {
    year: 2014,
    title: "Financials",
    file: "/files/2014 TDT Financials.pdf",
  },
  {
    year: 2013,
    title: "Financials",
    file: "/files/2013 TDT Financials.pdf",
  },
  {
    year: 2012,
    title: "Financials",
    file: "/files/2012 TDT Financials.pdf",
  },
];

const FinancialReports = () => {
  const [selectedReport, setSelectedReport] = useState<{
    title: string;
    file: string;
  } | null>(null);
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false);

  const openPDFViewer = (report: { title: string; file: string }) => {
    setSelectedReport(report);
    setIsPDFViewerOpen(true);
  };

  const closePDFViewer = () => {
    setIsPDFViewerOpen(false);
    setSelectedReport(null);
  };

  const handleDownload = (report: { title: string; file: string }, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the viewer when downloading
    const link = document.createElement('a');
    link.href = report.file;
    link.download = `${report.title}.pdf`;
    link.click();
  };
  return (
    <Container>
      <AnimatedSection as="section" className="my-10 px-0 sm:my-14 md:my-16">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8 grid gap-4 rounded-2xl bg-[#FFF8E5] p-5 sm:p-6 md:grid-cols-2"
        >
          <div className="rounded-xl border border-[#F4D27A] bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9A6B00]">
              Policy
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              TDT Child Safeguarding Policy
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Read how we protect children across our programmes, centres, and
              partnerships.
            </p>
            <Link
              href="/child-safeguarding-policy"
              className="mt-5 inline-flex rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              View policy
            </Link>
          </div>

          <div className="rounded-xl border border-[#F4D27A] bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9A6B00]">
              Featured report
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              2025 Impact Report
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Open the latest impact report from The Destiny Trust.
            </p>
            <button
              type="button"
              onClick={() =>
                openPDFViewer({
                  title: "2025 Impact Report",
                  file: "/files/The Destiny Trust Mid-year Report 2024_.pdf",
                })
              }
              className="mt-5 inline-flex rounded-full bg-[#FFB400] px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-[#e0a800]"
            >
              Read report
            </button>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="font-heading mb-6 text-center text-2xl font-bold text-gray-800 sm:mb-8 sm:text-3xl"
        >
          Financial & Impact Reports
        </motion.h2>

        {/* Grid of Reports */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reports.map((report, index) => (
            <motion.div
              key={`${report.year}-${report.title}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
              }}
              className="group flex cursor-pointer flex-col justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
            >
              {/* Year */}
              <div className="mb-2 text-sm font-medium text-gray-700">
                {report.year}
              </div>

              {/* Title */}
              <div className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                {report.title}
                <span className="ml-2 rounded bg-yellow-400 px-2 py-1 text-xs text-white">
                  .pdf
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => openPDFViewer(report)}
                  className="flex flex-1 items-center justify-center gap-2 rounded bg-[#FFB400] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#e0a800]"
                >
                  <Eye size={16} />
                  Read
                </button>
                <button
                  onClick={(e) => handleDownload(report, e)}
                  className="flex items-center justify-center rounded border border-gray-300 px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50"
                  title="Download PDF"
                >
                  <Download size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PDF Book Viewer Modal */}
        {selectedReport && (
          <PDFBookViewer
            isOpen={isPDFViewerOpen}
            onClose={closePDFViewer}
            pdfUrl={selectedReport.file}
            title={selectedReport.title}
          />
        )}
      </AnimatedSection>
    </Container>
  );
};

export default FinancialReports;
