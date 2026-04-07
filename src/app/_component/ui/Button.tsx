"use client";

import React, { useState } from "react";
import { Button } from "@/app/_component/atom/button";
import Modal from "./Modal";
import SponsorChildForm from "./SponsorForm";

/** Shared by both sponsor CTAs */
const SPONSOR_MODAL_TITLE = "Sponsor a Child or Endow a Scholarship";

interface ActionButtonsProps {
  className?: string;
  /** Full-width stacked buttons for narrow cards (e.g. get-involve grid) */
  layout?: "default" | "stacked";
}

// Export individual button components for flexible usage
export const SponsorScholarshipButton: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsProjectModalOpen(true)}
        className={`border-2 border-black w-full md:w-[238px] mx-auto md:py-2 py-4 hover:bg-black hover:text-white transition-colors ${className}`}
      >
        Sponsor a Scholarship
      </Button>
      <Modal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        title={SPONSOR_MODAL_TITLE}
        maxWidth="2xl"
      >
        <SponsorChildForm onClose={() => setIsProjectModalOpen(false)} />
      </Modal>
    </>
  );
};

export const SponsorChildButton: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [isChildModalOpen, setIsChildModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsChildModalOpen(true)}
        className={`bg-black text-white w-full md:w-[187px] mx-auto md:py-2 py-4 hover:bg-gray-800 transition-colors ${className}`}
      >
        Sponsor a Child
      </Button>
      <Modal
        isOpen={isChildModalOpen}
        onClose={() => setIsChildModalOpen(false)}
        title={SPONSOR_MODAL_TITLE}
        maxWidth="2xl"
      >
        <SponsorChildForm onClose={() => setIsChildModalOpen(false)} />
      </Modal>
    </>
  );
};

const stackedChildPrimary =
  "!w-full !max-w-none !min-h-[48px] rounded-md border-0 !bg-[#FFB400] !py-3 !text-black px-4 font-medium shadow-sm transition-colors hover:!bg-[#e0a800] hover:!text-black";

const stackedScholarshipSecondary =
  "!w-full !max-w-none !min-h-[48px] rounded-md !border-2 !border-gray-200 !bg-white !py-3 !text-gray-900 px-4 font-medium shadow-sm transition-colors hover:!bg-gray-50";

// Combined component for convenience
const ActionButtons: React.FC<ActionButtonsProps> = ({
  className = "",
  layout = "default",
}) => {
  if (layout === "stacked") {
    return (
      <div
        className={`flex w-full flex-col gap-3 ${className}`}
      >
        <SponsorChildButton className={stackedChildPrimary} />
        <SponsorScholarshipButton className={stackedScholarshipSecondary} />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col gap-4 justify-center md:flex-row ${className}`}
    >
      <SponsorScholarshipButton />
      <SponsorChildButton />
    </div>
  );
};

export default ActionButtons;
