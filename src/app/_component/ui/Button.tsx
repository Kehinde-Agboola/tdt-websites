"use client";

import React, { useState } from "react";
import { Button } from "@/app/_component/atom/button";
import Modal from "./Modal";
import SponsorChildForm from "./SponsorForm";
import AdoptProjectForm from "./AdoptionForm";

interface ActionButtonsProps {
  className?: string;
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
        title="Adopt a Home or Project"
        maxWidth="2xl"
      >
        <AdoptProjectForm onClose={() => setIsProjectModalOpen(false)} />
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
        title="Sponsor a Child or Endow a Scholarship"
        maxWidth="2xl"
      >
        <SponsorChildForm onClose={() => setIsChildModalOpen(false)} />
      </Modal>
    </>
  );
};

// Combined component for convenience
const ActionButtons: React.FC<ActionButtonsProps> = ({ className = "" }) => {
  return (
    <>
      <div className={`flex flex-col md:flex-row gap-4 justify-center ${className}`}>
        <SponsorScholarshipButton />
        <SponsorChildButton />
      </div>
    </>
  );
};

export default ActionButtons;
