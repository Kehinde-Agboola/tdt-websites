"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/app/_component/shared";
import PDFBookViewer from "@/app/_component/ui/PDFBookViewer";
import { Eye, Download } from "lucide-react";

// Reports Data
const reports = [
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
    <section className="my-10 px-0 sm:my-14 md:my-16">
                 {/* Heading */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="font-heading text-2xl font-bold text-center text-gray-800 mb-6 sm:text-3xl sm:mb-8"
      >
        Financial & Impact Reports
      </motion.h2>

      {/* Grid of Reports */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reports.map((report, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            }}
            className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm flex flex-col justify-between cursor-pointer group"
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

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => openPDFViewer(report)}
                className="flex-1 bg-[#FFB400] hover:bg-[#e0a800] text-black px-4 py-2 rounded transition-colors flex items-center justify-center gap-2 text-sm font-medium"
              >
                <Eye size={16} />
                Read
              </button>
              <button
                onClick={(e) => handleDownload(report, e)}
                className="px-3 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded transition-colors flex items-center justify-center"
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
</section>
    </Container>
  );
};

export default FinancialReports;
