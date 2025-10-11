"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { VolunteerFormData } from "./types/modalTypes";
import { validateVolunteerForm } from "./modalUtils";
import { useFormModal } from "./useModal";


const initialFormData: VolunteerFormData = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const VolunteerForm: React.FC = () => {
  const {
    formData,
    modalState,
    errors,
    submitMessage,
    handleInputChange,
    submitForm,
    isFormValid,
  } = useFormModal(
    initialFormData,
    validateVolunteerForm,
    // Simulate successful submit for now; replace with real implementation later
    async (_data: VolunteerFormData) => {
      try {
        await new Promise((res) => setTimeout(res, 800));
        return { success: true, message: "Thank you for signing up as a volunteer!" };
      } catch (err) {
        return { success: false, message: "Submission failed. Please try again." };
      }
    }
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
          Fill the form below
        </h2>
      </div>

      {/* Success State */}
      {modalState === "submitted" && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-8 mb-8 bg-green-50 rounded-lg border border-green-200"
        >
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <FiUser className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">{submitMessage}</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 max-w-xs mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3 }}
              className="bg-green-600 h-2 rounded-full"
            />
          </div>
        </motion.div>
      )}

      {/* Form */}
      {modalState !== "submitted" && (
        <form onSubmit={submitForm} className="space-y-6" noValidate>
          {/* Full Name */}
          <div className="space-y-2">
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name *"
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400 bg-gray-50"
                required
              />
            </div>
            {errors.fullName && <p className="text-sm text-red-600 ml-2">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email *"
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400 bg-gray-50"
                required
              />
            </div>
            {errors.email && <p className="text-sm text-red-600 ml-2">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400 bg-gray-50"
              />
            </div>
            {errors.phone && <p className="text-sm text-red-600 ml-2">{errors.phone}</p>}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400 bg-gray-50 resize-none"
              />
            </div>
            {errors.message && <p className="text-sm text-red-600 ml-2">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <motion.button
              type="submit"
              disabled={!isFormValid() || modalState === "submitting"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full max-w-xs mx-auto block px-8 py-4 bg-yellow text-black font-semibold rounded-full hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-lg"
            >
              {modalState === "submitting" ? "SUBMITTING..." : "SUBMIT"}
            </motion.button>
          </div>

          {/* Error State */}
          {modalState === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"
            >
              <p className="text-sm text-red-600 text-center">{submitMessage}</p>
            </motion.div>
          )}
        </form>
      )}
    </div>
  );
};

export default VolunteerForm;