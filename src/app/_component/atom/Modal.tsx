import React, { useEffect, useRef } from "react";

const ModalForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const researchOptions = [
    "What might you be interested to research about?",
    "What might you be interested to research about?",
    "What might you be interested to research about?",
    "What might you be interested to research about?",
    "What might you be interested to research about?",
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
        ref={modalRef}
        tabIndex={-1}
      >
        <button
          className="text-black hover:text-gray-800 absolute top-4 right-4"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2
          id="modal-title"
          className="text-lg font-medium text-center text-black"
        >
          Personal Information
        </h2>
        <p className="text-sm text-black text-center mt-1">
          Please complete the following required field to collaborate on
          research on accelerated education.
        </p>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-[#333333]">
                First Name*
              </label>
              <input
                type="text"
                placeholder="Joe"
                className="w-full mt-1 p-1.5 border rounded-md focus:outline-none focus:ring focus:ring-yellow"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#333333]">
                Last Name*
              </label>
              <input
                type="text"
                placeholder="Ducan"
                className="w-full mt-1 p-1.5 border rounded-md focus:outline-none focus:ring focus:ring-yellow"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div>
              <label className="block text-sm font-medium text-[#333333]">
                Phone Number*
              </label>
              <input
                type="tel"
                placeholder="Input"
                className="w-full mt-1 p-1.5 border rounded-md focus:outline-none focus:ring focus:ring-yellow"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#333333]">
                Email*
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                className="w-full mt-1 p-1.5 border rounded-md focus:outline-none focus:ring focus:ring-yellow"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-[#333333]">
              Research Interests
            </label>
            <div className="mt-2 space-y-1 text-[#333333]">
              {researchOptions.map((option, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    color="white"
                    id={`option-${index}`}
                    className="mr-2"
                  />
                  <label htmlFor={`option-${index}`} className="text-sm">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-black">
              Describe your research interest
            </label>
            <textarea
              placeholder="Input"
              rows={3}
              className="w-full mt-1 p-1.5 border rounded-md focus:outline-none focus:ring focus:ring-yellow text-[#333333]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-yellow text-black py-2 px-4 rounded focus:outline-none focus:ring focus:ring-yellow-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
