"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/app/_component/atom/button"
import Modal from "./Modal"
import VolunteerForm from "./volunteer"

type VolunteerFormProps = { onClose: () => void };
const VolunteerFormComponent = VolunteerForm as unknown as React.ComponentType<VolunteerFormProps>;

interface VolunteerButtonProps {
  className?: string
}
const VolunteerButton: React.FC<VolunteerButtonProps> = ({ className = "" }) => {
    const [isChildModalOpen, setIsChildModalOpen] = useState(false);
    
    const handleVolunteer = () => {
       setIsChildModalOpen(true);
    }
    return (
      <>
        <Button onClick={handleVolunteer} className={className}>
          Become a Volunteer
        </Button>
        <Modal
          title="Volunteer Form"
          maxWidth="2xl"
          isOpen={isChildModalOpen}
          onClose={() => setIsChildModalOpen(false)}
        >
          <VolunteerFormComponent onClose={() => setIsChildModalOpen(false)} />
        </Modal>
      </>
    );
}

export default VolunteerButton;