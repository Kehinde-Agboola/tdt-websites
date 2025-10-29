"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiCheck } from "react-icons/fi";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  enquiry: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  enquiry?: string;
}

const ENQUIRY_OPTIONS = [
  { value: "general", label: "General Inquiry" },
  { value: "volunteer", label: "Volunteer Opportunities" },
  { value: "donation", label: "Donation Information" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

export default function VolunteerForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    enquiry: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.enquiry) {
      newErrors.enquiry = "Please select an enquiry type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);

      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          enquiry: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleEnquirySelect = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      enquiry: value,
    }));
    setIsDropdownOpen(false);
    if (errors.enquiry) {
      setErrors((prev) => ({
        ...prev,
        enquiry: undefined,
      }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const selectedOption = ENQUIRY_OPTIONS.find(
    (opt) => opt.value === formData.enquiry
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl p-4 sm:p-6 md:p-8">
        {/* Success Message */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 p-4 bg-yellow border border-yellow text-white rounded-lg text-sm sm:text-base"
            >
              <div className="flex items-center gap-2">
                <FiCheck className="w-5 h-5 flex-shrink-0" />
                <span>Thank you! Your form has been submitted successfully.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-4 sm:space-y-6">
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="Full Name *"
              className={`w-full px-3 sm:px-4 py-3 sm:py-4 border ${
                errors.fullName ? "border-red-500" : "border-yellow"
              } rounded-lg outline-none text-black placeholder-gray-500 text-sm sm:text-base focus:ring-2 focus:ring-yellow focus:border-transparent transition-all`}
            />
            {errors.fullName && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-xs sm:text-sm text-red-500"
              >
                {errors.fullName}
              </motion.p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="Email *"
              className={`w-full px-3 sm:px-4 py-3 sm:py-4 border ${
                errors.email ? "border-red-500" : "border-yellow"
              } rounded-lg outline-none text-black placeholder-gray-500 text-sm sm:text-base focus:ring-2 focus:ring-yellow focus:border-transparent transition-all`}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-xs sm:text-sm text-red-500"
              >
                {errors.email}
              </motion.p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="Phone"
              className="w-full px-3 sm:px-4 py-3 sm:py-4 outline-none border border-yellow rounded-lg text-black placeholder-gray-500 text-sm sm:text-base focus:ring-2 focus:ring-yellow focus:border-transparent transition-all"
            />
          </div>

          {/* Custom Dropdown for Enquiry */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full px-3 sm:px-4 py-3 sm:py-4 border ${
                errors.enquiry ? "border-red-500" : "border-yellow"
              } rounded-lg outline-none text-black bg-white text-left text-sm sm:text-base focus:ring-2 focus:ring-yellow focus:border-transparent transition-all flex items-center justify-between`}
            >
              <span className={selectedOption ? "text-black" : "text-gray-500"}>
                {selectedOption ? selectedOption.label : "Enquiry"}
              </span>
              <FiChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <>
                  {/* Backdrop for mobile */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsDropdownOpen(false)}
                    className="fixed inset-0 z-10 bg-black/20 sm:hidden"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto"
                  >
                    {ENQUIRY_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleEnquirySelect(option.value)}
                        className={`w-full px-3 sm:px-4 py-3 text-left hover:bg-yellow/20 focus:bg-yellow/20 focus:outline-none text-black border-b border-gray-100 last:border-b-0 text-sm sm:text-base transition-colors ${
                          formData.enquiry === option.value
                            ? "bg-yellow/10 font-medium"
                            : ""
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option.label}</span>
                          {formData.enquiry === option.value && (
                            <FiCheck className="w-4 h-4 text-yellow flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {errors.enquiry && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-xs sm:text-sm text-red-500"
              >
                {errors.enquiry}
              </motion.p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={6}
              className="w-full px-3 sm:px-4 py-3 sm:py-4 outline-none border border-yellow rounded-lg text-black placeholder-gray-500 resize-none text-sm sm:text-base focus:ring-2 focus:ring-yellow focus:border-transparent transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-12 sm:px-20 py-3 sm:py-4 bg-yellow hover:bg-yellow-400 text-black font-semibold rounded-full transition-all duration-200 tracking-wider text-sm sm:text-base shadow-md hover:shadow-lg"
            >
              SUBMIT
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
