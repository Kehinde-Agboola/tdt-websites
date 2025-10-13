import React, { useCallback, useEffect, useState } from "react";
import { ModalState, FormErrors, ApiResponse } from "./types/modalTypes";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeModal]);

  return { isOpen, openModal, closeModal };
}

export function useFormModal<T extends Record<string, unknown>>(
  initialData: T,
  validateForm: (d: T) => FormErrors,
  submitCallback: (d: T) => Promise<ApiResponse>
) {
  const [formData, setFormData] = useState<T>(initialData);
  const [modalState, setModalState] = useState<ModalState>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((p) => ({ ...p, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => {
          const copy = { ...prev };
          delete copy[name];
          return copy;
        });
      }
    },
    [errors]
  );

  const isFormValid = useCallback(() => {
    const validationErrors = validateForm(formData);
    return Object.keys(validationErrors).length === 0;
  }, [formData, validateForm]);

  const submitForm = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      setErrors({});
      setModalState("submitting");
      try {
        const res = await submitCallback(formData);
        if (res.success) {
          setModalState("submitted");
          setSubmitMessage(res.message);
          setTimeout(() => {
            setModalState("idle");
            setFormData(initialData);
            setSubmitMessage("");
          }, 3000);
        } else {
          setModalState("error");
          setSubmitMessage(res.message || "An error occurred");
        }
      } catch {
        setModalState("error");
        setSubmitMessage("Network error. Please try again.");
      }
    },
    [formData, initialData, submitCallback, validateForm]
  );

  const resetForm = useCallback(() => {
    setFormData(initialData);
    setErrors({});
    setModalState("idle");
    setSubmitMessage("");
  }, [initialData]);

  return {
    formData,
    modalState,
    errors,
    submitMessage,
    handleInputChange,
    submitForm,
    isFormValid,
    resetForm,
  };
}