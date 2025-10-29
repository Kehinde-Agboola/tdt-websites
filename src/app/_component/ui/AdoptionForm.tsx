"use client";

import React, { useState } from "react";
import { Button } from "@/app/_component/atom/button";
import { Send } from "lucide-react";
import { db } from "../../../lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

interface AdoptProjectFormProps {
  onClose: () => void;
}

const AdoptProjectForm: React.FC<AdoptProjectFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectTypes: [] as string[],
    otherProject: "",
    projectName: "",
    preferredLocation: "",
    supportType: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectOptions = [
    "A Children's Residential Home",
    "School Enrollment and Back-to-School",
    "A Learning Centre (Education Support)",
    "Technology/STEAM Programme",
    "School Feeding Support",
    "Healthcare Outreach",
    "Shelter Renovation or Construction",
    "Family Empowerment Programmes",
    "Scholarship Programme",
    "Other Community Projects",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        projectTypes: target.checked
          ? [...prev.projectTypes, value]
          : prev.projectTypes.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "project-adoption-submissions"), {
        ...formData,
        submittedAt: serverTimestamp(),
      });
      console.log("Form submitted to Firebase");
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-h-[70vh] overflow-y-auto">
      <div className="mb-6">
        <p className="text-gray-600">
          Support a residential home, learning centre, or strategic project that
          transforms lives. Please tell us how you&apos;d like to partner with us.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Your Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Your Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Project Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            What would you like to adopt or support?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {projectOptions.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  name="projectTypes"
                  value={option}
                  checked={formData.projectTypes.includes(option)}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#FFB400] focus:ring-[#FFB400] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>

          {formData.projectTypes.includes("Other Community Projects") && (
            <div className="mt-4">
              <label
                htmlFor="otherProject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Please specify other project
              </label>
              <input
                type="text"
                id="otherProject"
                name="otherProject"
                value={formData.otherProject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
                placeholder="Describe the project you'd like to support"
              />
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name of Project/Home (if known or specific)
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
              placeholder="e.g., Hope Children's Home, Lagos"
            />
          </div>
          <div>
            <label
              htmlFor="preferredLocation"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Preferred Location (if any)
            </label>
            <select
              id="preferredLocation"
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
            >
              <option value="">Select a location</option>
              <option value="Lagos">Lagos</option>
              <option value="Ibadan">Ibadan</option>
              <option value="Oyo">Oyo</option>
              <option value="Other">Other</option>
              <option value="No Preference">No Preference</option>
            </select>
          </div>
        </div>

        {/* Support Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How would you like to support?
          </label>
          <div className="space-y-2">
            {[
              "One-time donation",
              "Monthly commitment",
              "Annual commitment",
              "I'd like to discuss available options",
            ].map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="radio"
                  name="supportType"
                  value={type}
                  checked={formData.supportType === type}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#FFB400] focus:ring-[#FFB400] border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <label
            htmlFor="additionalInfo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Additional Information / Message (Optional)
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={4}
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
            placeholder="Tell us more about your goals, timeline, or any specific requirements..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
          <Button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#FFB400] hover:bg-[#e0a800] text-black px-6 py-2 transition-colors disabled:opacity-50"
            btnFlex={true}
            icon={<Send size={16} />}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdoptProjectForm;
