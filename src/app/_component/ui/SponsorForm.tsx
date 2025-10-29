"use client";

import React, { useState } from "react";
import { Button } from "@/app/_component/atom/button";
import { Send } from "lucide-react";
import { db } from "../../../lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

interface SponsorChildFormProps {
  onClose: () => void;
}

const SponsorChildForm: React.FC<SponsorChildFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    numberOfChildren: 1,
    preferredGender: "",
    duration: "",
    namedScholarship: "",
    scholarshipName: "",
    additionalInfo: "",
    customDiscussion: "", // Added property
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
        [name]: target.checked ? value : "",
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
      await addDoc(collection(db, "sponsorship-submissions"), {
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
          Join us in transforming lives through education and care. Please fill
          out the form below to indicate your interest.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 px-4">
        {/* Your Details Section */}
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

        {/* Sponsorship Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Sponsorship Details
          </h3>

          {/* Number of Children */}
          <div className="mb-4">
            <label
              htmlFor="numberOfChildren"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Number of Children You Want to Sponsor
            </label>
            <input
              type="number"
              id="numberOfChildren"
              name="numberOfChildren"
              min="1"
              max="100"
              value={formData.numberOfChildren}
              onChange={handleInputChange}
              className="w-full md:w-32 px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
            />
          </div>

          {/* Custom Sponsorship Discussion */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alternative Sponsorship Options
            </label>
            <div className="bg-gray-50 p-4 rounded-md">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="customDiscussion"
                  value="yes"
                  checked={formData.customDiscussion === "yes"}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#FFB400] focus:ring-[#FFB400] border-gray-300 mt-0.5"
                />
                <div className="ml-3">
                  <span className="text-sm font-medium text-gray-900">
                    I&apos;d prefer to discuss a sponsorship arrangements
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Preferred Gender */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Gender of Child(ren)
            </label>
            <div className="space-y-2">
              {["Male", "Female", "No Preference"].map((gender) => (
                <label key={gender} className="flex items-center">
                  <input
                    type="radio"
                    name="preferredGender"
                    value={gender}
                    checked={formData.preferredGender === gender}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#FFB400] focus:ring-[#FFB400] border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{gender}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration of Sponsorship
            </label>
            <div className="space-y-2">
              {[
                "One year",
                "Until completion of university education",
                "I'd like to discuss this",
              ].map((duration) => (
                <label key={duration} className="flex items-center">
                  <input
                    type="radio"
                    name="duration"
                    value={duration}
                    checked={formData.duration === duration}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#FFB400] focus:ring-[#FFB400] border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{duration}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Named Scholarship */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Would you like to endow a named scholarship (e.g., in memory or
              honour of someone)?
            </label>
            <div className="space-y-2">
              {["Yes", "No", "I'd like more information"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="namedScholarship"
                    value={option}
                    checked={formData.namedScholarship === option}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#FFB400] focus:ring-[#FFB400] border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Scholarship Name */}
          {formData.namedScholarship === "Yes" && (
            <div className="mb-4">
              <label
                htmlFor="scholarshipName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                What would you like the scholarship to be called?
              </label>
              <input
                type="text"
                id="scholarshipName"
                name="scholarshipName"
                value={formData.scholarshipName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
                placeholder="e.g., The John Smith Memorial Scholarship"
              />
            </div>
          )}

          {/* Additional Information */}
          <div className="mb-6">
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
              className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
              placeholder="Tell us more about your sponsorship goals or any specific requests..."
            />
          </div>
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

export default SponsorChildForm;
