import { VolunteerFormData, FormErrors } from "./types/modalTypes";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[\d\s\-\(\)]{10,}$/;

export const validateVolunteerForm = (data: VolunteerFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.fullName?.trim()) {
    errors.fullName = "Full name is required";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters";
  }

  if (!data.email?.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  if (data.phone?.trim() && !PHONE_REGEX.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!data.message?.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (data.message.trim().length > 500) {
    errors.message = "Message must be less than 500 characters";
  }

  return errors;
};

export const hasFormErrors = (errors: FormErrors) => Object.keys(errors).length > 0;
export const clearFieldError = (errors: FormErrors, field: string) => {
  const copy = { ...errors };
  delete copy[field];
  return copy;
};