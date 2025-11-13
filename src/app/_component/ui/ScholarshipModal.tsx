"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
// import { Button } from "@/app/_component/atom/button";
import { ExternalLink, Calendar, Users, Award } from "lucide-react";

interface ScholarshipData {
  imgSrc: string | StaticImageData;
  heading: string;
  text: string;
  fullDescription?: string;
  eligibility?: string[];
  benefits?: string[];
  applicationDeadline?: string;
  contactEmail?: string;
  website?: string;
}

interface ScholarshipModalProps {
  scholarship: ScholarshipData;
}

const ScholarshipModal: React.FC<ScholarshipModalProps> = ({ scholarship }) => {
  return (
    <div>
      <div className="max-w-2xl mx-auto space-y-6 p-6 bg-white rounded-lg shadow-md">
        {/* Header with Image */}
  <div className="flex flex-col sm:flex-row gap-4 items-start border-b border-gray-200 pb-6">
          <div className="flex-shrink-0">
            <Image
              src={scholarship.imgSrc}
              alt={scholarship.heading}
              width={80}
              height={80}
              className="object-cover rounded-lg border border-gray-200"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {scholarship.heading}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {scholarship.fullDescription || scholarship.text}
            </p>
          </div>
        </div>

        {/* Eligibility Criteria */}
        {scholarship.eligibility && (
          <div className="border border-yellow-200 bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-yellow" />
              <h4 className="font-semibold text-yellow">
                Eligibility Criteria
              </h4>
            </div>
            <ul className="space-y-2">
              {scholarship.eligibility.map((criteria, index) => (
                <li
                  key={index}
                  className="text-sm text-yellow-800 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-yellow rounded-full mt-2 flex-shrink-0" />
                  {criteria}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits */}
        {scholarship.benefits && (
          <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-green-600" />
              <h4 className="font-semibold text-green-900">
                Scholarship Benefits
              </h4>
            </div>
            <ul className="space-y-2">
              {scholarship.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="text-sm text-green-800 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Application Deadline */}
        {scholarship.applicationDeadline && (
          <div className="border border-yellow-200 bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-yellow-600" />
              <h4 className="font-semibold text-yellow-900">
                Application Deadline
              </h4>
            </div>
            <p className="text-sm text-yellow-800">
              {scholarship.applicationDeadline}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 pt-4 border-t border-gray-200">
          {/* Apply Now - use anchor when website exists */}
          <a
            href={scholarship.website ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#FFB400] hover:bg-[#e0a800] text-black px-6 py-3 transition-colors rounded-lg"
            aria-label="Apply Now"
          >
            Apply Now
            <ExternalLink size={16} />
          </a>

          {scholarship.contactEmail && (
            <a
              href={`mailto:${scholarship.contactEmail}`}
              className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg"
              aria-label="Contact via email"
            >
              Contact Us
            </a>
          )}
        </div>

        {/* Website Link */}
        {scholarship.website && (
          <div className="text-center pt-2">
            <a
              href={scholarship.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFB400] hover:text-[#e0a800] text-sm underline inline-flex items-center gap-1"
            >
              Visit Official Website
              <ExternalLink size={14} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScholarshipModal;
