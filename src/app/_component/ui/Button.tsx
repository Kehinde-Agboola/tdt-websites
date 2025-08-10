"use client";

import React, { useState } from "react";
import { Button } from "@/app/_component/atom/button";
import Modal from "./Modal";
import SponsorChildForm from "./SponsorForm";
import AdoptProjectForm from "./AdoptionForm";

interface ActionButtonsProps {
  className?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ className = "" }) => {
  const [isChildModalOpen, setIsChildModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleSponsorChild = () => {
    setIsChildModalOpen(true);
  };

  const handleSponsorScholarship = () => {
    setIsProjectModalOpen(true);
  };

  return (
    <>
      <div className={`flex flex-col md:flex-row gap-4 justify-center ${className}`}>
        <Button
          onClick={handleSponsorScholarship}
          className="border-2 border-black w-full md:w-[238px] mx-auto md:py-2 py-4 hover:bg-black hover:text-white transition-colors"
        >
          Sponsor a Scholarship
        </Button>
        <Button
          onClick={handleSponsorChild}
          className="bg-black text-white w-full md:w-[187px] mx-auto md:py-2 py-4 hover:bg-gray-800 transition-colors"
        >
          Sponsor a Child
        </Button>
      </div>

      {/* Sponsor Child Modal */}
      <Modal
        isOpen={isChildModalOpen}
        onClose={() => setIsChildModalOpen(false)}
        title="Sponsor a Child or Endow a Scholarship"
        maxWidth="2xl"
      >
        <SponsorChildForm onClose={() => setIsChildModalOpen(false)} />
      </Modal>

      {/* Adopt Project Modal */}
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

export default ActionButtons;
