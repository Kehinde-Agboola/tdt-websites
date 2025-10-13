export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  [key: string]: unknown;
}

export interface FormErrors {
  [key: string]: string;
}

export type ModalState = "idle" | "submitting" | "submitted" | "error";

export interface ApiResponse {
  success: boolean;
  message: string;
}