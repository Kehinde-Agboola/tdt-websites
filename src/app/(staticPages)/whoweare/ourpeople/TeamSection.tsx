"use client";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Member = {
  name: string;
  role: string;
  description: string;
  image: string | StaticImageData;
};

type TeamSectionProps = {
  title?: string;
  members: Member[];
  paragraph?: string
};

const TeamSection: React.FC<TeamSectionProps> = ({ title, members, paragraph }) => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {title}
          <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-2"></span>
        </h2>
      )}
      {paragraph && (
        <p className="mt-4 text-base md:text-lg max-w-[100%] md:max-w-[68%]">
          {paragraph}
        </p>
      )}
      
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-8">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            onClick={() => setSelectedMember(member)}
          >
            <div className="relative group">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={297}
                className="object-cover w-full h-[297px] rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read More
                </span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#333333] mt-4 hover:text-yellow-500 transition-colors duration-300">
              {member.name}
            </h3>
            {/* <p className="text-sm text-[#333333] text-left">{member.role}</p>
            <p className="text-sm text-[#333333] mt-2 text-left line-clamp-2">
              {member.description}
            </p> */}
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setSelectedMember(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl mx-4"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content - Side by Side Layout */}
              <div className="p-8">
                <div className="grid md:grid-cols-5 gap-8 items-start">
                  {/* Left Side - Profile Image */}
                  <div className="md:col-span-2">
                    <div className="relative">
                      {/* Profile Image with Better Aspect Ratio */}
                      <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
                        <Image
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          width={400}
                          height={533}
                          className="object-cover rounded-xl shadow-lg w-full h-full"
                        />
                      </div>
                      
                      {/* Name and Role Card Overlay */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl px-6 py-4 border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 text-center">{selectedMember.name}</h2>
                        <p className="text-yellow-600 font-medium text-center text-sm mt-1">{selectedMember.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="md:col-span-3 mt-8 md:mt-0">
                    {/* About Section */}
                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        {/* <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div> */}
                        <h3 className="text-2xl font-semibold text-gray-800">About</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {selectedMember.description}
                      </p>
                    </div>

                    {/* Role & Impact Section */}
                    {/* <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800">Leadership & Impact</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        As {selectedMember.role}, {selectedMember.name} plays a pivotal role in driving our organization&apos;s mission forward, ensuring we deliver transformative results for the communities we serve across Nigeria.
                      </p>
                    </div> */}

                    {/* Key Qualities */}
                    {/* <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </div>
                        Key Strengths
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                          <span className="text-sm font-medium text-gray-700">Leadership</span>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                          <span className="text-sm font-medium text-gray-700">Innovation</span>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                          <span className="text-sm font-medium text-gray-700">Strategy</span>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                          <span className="text-sm font-medium text-gray-700">Community Focus</span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

                {/* Contact Section */}
                {/* <div className="mt-6 flex gap-4">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                    Contact
                  </button>
              
                </div> */}
              {/* </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
