"use client";

import { supabase } from "../../../lib/supabase";
import React, { useState } from "react";
import { Button } from "@/app/_component/atom/button";
import { Send } from "lucide-react";
import { ModalSelect } from "./ModalSelect";

interface SponsorFormData {
  fullName: string;
  email: string;
  phone: string;
  numberOfChildren: number;
  preferredGender: string;
  preferredCareerDiscipline: string;
  duration: string;
  namedScholarship: string;
  scholarshipName: string;
  additionalInfo: string;
  customDiscussion: string;
}

interface SponsorChildFormProps {
  onClose: () => void;
}

const SponsorChildForm: React.FC<SponsorChildFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<SponsorFormData>({
    fullName: "",
    email: "",
    phone: "",
    numberOfChildren: 1,
    preferredGender: "",
    preferredCareerDiscipline: "",
    duration: "",
    namedScholarship: "",
    scholarshipName: "",
    additionalInfo: "",
    customDiscussion: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked ? value : "" }));
    } else if (type === "number") {
      setFormData((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      if (!supabase) {
        alert("Service unavailable. Please try again later.");
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase.from("sponsorship_submissions").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          number_of_children: formData.numberOfChildren,
          preferred_gender: formData.preferredGender,
          preferred_career_discipline: formData.preferredCareerDiscipline || null,
          duration: formData.duration,
          named_scholarship: formData.namedScholarship,
          scholarship_name: formData.scholarshipName,
          additional_info: formData.additionalInfo,
          custom_discussion: formData.customDiscussion,
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");
      // keep behavior: close modal after successful submission
      onClose();
    } catch (err) {
      console.error("Error submitting form:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900">Sponsor a Child</h2>

      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
          Thank you! Your sponsorship request has been submitted.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
          Something went wrong. Please try again.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="numberOfChildren" className="block text-sm font-medium text-gray-700 mb-1">Number of Children</label>
          <input
            id="numberOfChildren"
            name="numberOfChildren"
            type="number"
            min={1}
            value={formData.numberOfChildren}
            onChange={handleInputChange}
            className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="preferredGender" className="block text-sm font-medium text-gray-700 mb-1">Preferred Gender</label>
          <ModalSelect
            id="preferredGender"
            name="preferredGender"
            value={formData.preferredGender}
            onChange={handleInputChange}
          >
            <option value="">No preference</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </ModalSelect>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="preferredCareerDiscipline"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Preferred career discipline
          </label>
          <ModalSelect
            id="preferredCareerDiscipline"
            name="preferredCareerDiscipline"
            value={formData.preferredCareerDiscipline}
            onChange={handleInputChange}
          >
            <option value="">No preference</option>
            <option value="STEM">STEM (science, technology, engineering, math)</option>
            <option value="Medicine / health sciences">Medicine / health sciences</option>
            <option value="Arts & creative">Arts &amp; creative</option>
            <option value="Business / finance / entrepreneurship">
              Business / finance / entrepreneurship
            </option>
            <option value="Education / teaching">Education / teaching</option>
            <option value="Law / public policy">Law / public policy</option>
            <option value="Agriculture / environment">Agriculture / environment</option>
            <option value="Vocational / technical / trades">
              Vocational / technical / trades
            </option>
            <option value="Sports / athletics">Sports / athletics</option>
            <option value="Undecided / open">Undecided / open to exploration</option>
            <option value="Other">Other (describe below)</option>
          </ModalSelect>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
          <ModalSelect
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
          >
            <option value="">Select duration</option>
            <option value="One year">One year</option>
            <option value="Until completion of university education">Until completion of university education</option>
            <option value="Discuss">I&apos;d like to discuss</option>
          </ModalSelect>
        </div>

        <div>
          <label htmlFor="namedScholarship" className="block text-sm font-medium text-gray-700 mb-1">Named Scholarship?</label>
          <ModalSelect
            id="namedScholarship"
            name="namedScholarship"
            value={formData.namedScholarship}
            onChange={handleInputChange}
          >
            <option value="">No</option>
            <option value="Yes">Yes</option>
            <option value="More info">I&apos;d like more information</option>
          </ModalSelect>
        </div>
      </div>

      {formData.namedScholarship === "Yes" && (
        <div>
          <label htmlFor="scholarshipName" className="block text-sm font-medium text-gray-700 mb-1">Scholarship Name</label>
          <input
            id="scholarshipName"
            name="scholarshipName"
            value={formData.scholarshipName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
            placeholder="e.g., The John Smith Memorial Scholarship"
          />
        </div>
      )}

      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information (optional)</label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows={4}
          value={formData.additionalInfo}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB400] focus:border-transparent"
          placeholder="Tell us more about your sponsorship goals or any specific requests..."
        />
      </div>

      <div className="space-y-3">
        <button type="button" onClick={onClose} className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">Cancel</button>
        <Button type="submit" disabled={isSubmitting} className="w-full bg-[#FFB400] hover:bg-[#e0a800] text-black font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50" btnFlex={true} icon={<Send size={16} />}>
          {isSubmitting ? "Submitting..." : "Submit Sponsorship"}
        </Button>
      </div>
    </form>
  );
};

export default SponsorChildForm;
