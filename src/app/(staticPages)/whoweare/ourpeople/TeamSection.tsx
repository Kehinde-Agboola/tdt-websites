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

  const MemberCard = ({
    member,
    className = "",
  }: {
    member: Member;
    className?: string;
  }) => (
    <motion.div
      className={`flex flex-col cursor-pointer touch-manipulation ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      onClick={() => setSelectedMember(member)}
    >
      <div className="relative group">
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 639px) 85vw, 280px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center pointer-events-none md:pointer-events-auto">
          <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Read More
          </span>
        </div>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-[#333333] mt-3 sm:mt-4 text-left hover:text-yellow-500 transition-colors duration-300">
        {member.name}
      </h3>
    </motion.div>
  );

  return (
    <section className="py-3 sm:py-8 max-w-7xl mx-auto w-full min-w-0 text-left">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {title}
          <span className="block w-16 h-1 bg-yellow-500 mt-2"></span>
        </h2>
      )}
      {paragraph && (
        <p className="mt-3 sm:mt-4 text-base md:text-lg max-w-full md:max-w-[68%] leading-relaxed text-gray-800">
          {paragraph}
        </p>
      )}
      
      {/* Mobile: horizontal snap slider */}
      <div
        className="mt-5 sm:hidden -mx-3"
        role="region"
        aria-label="Team members"
      >
        <div
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-3 pb-4 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {members.map((member, index) => (
            <MemberCard
              key={`m-${index}`}
              member={member}
              className="w-[min(85vw,280px)] shrink-0 snap-center"
            />
          ))}
        </div>
        <p className="px-3 text-center text-xs text-gray-500 md:hidden">
          Swipe sideways to see more
        </p>
      </div>

      {/* sm+: grid */}
      <div className="mt-5 sm:mt-8 hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 justify-items-center">
        {members.map((member, index) => (
          <MemberCard
            key={`d-${index}`}
            member={member}
            className="w-full max-w-[280px]"
          />
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
              className="relative bg-white rounded-xl sm:rounded-2xl max-w-5xl w-[min(100%,calc(100vw-1rem))] sm:w-[95%] md:w-full max-h-[min(92dvh,92vh)] overflow-y-auto overscroll-contain shadow-2xl mx-auto sm:mx-2 md:mx-4 mb-[env(safe-area-inset-bottom)]"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                aria-label="Close profile"
                onClick={() => setSelectedMember(null)}
                className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 bg-white rounded-full p-2.5 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 group touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content - Side by Side Layout */}
              <div className="p-4 pt-14 sm:pt-4 md:p-8">
                <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
                  {/* Left Side - Profile Image */}
                  <div className="md:col-span-2">
                    <div className="relative">
                      {/* Profile Image with Better Aspect Ratio */}
                      <div className="relative w-full aspect-[3/4] max-w-xs md:max-w-sm mx-auto">
                        <Image
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          width={400}
                          height={533}
                          className="object-cover rounded-xl shadow-lg w-full h-full"
                        />
                      </div>
                      
                      {/* Name and Role Card Overlay */}
                      <div className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl px-4 md:px-6 py-3 md:py-4 border border-gray-100 w-[90%] max-w-xs">
                        <h2 className="text-lg md:text-xl font-bold text-gray-800 text-center">{selectedMember.name}</h2>
                        <p className="text-yellow-600 font-medium text-center text-xs md:text-sm mt-1">{selectedMember.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="md:col-span-3 mt-12 md:mt-0 px-2 md:px-0">
                    {/* About Section */}
                    <div className="mb-6 md:mb-8">
                      <div className="flex items-center mb-4">
                        {/* <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div> */}
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">About</h3>
                      </div>
                      <p className="text-gray-700 text-justify leading-relaxed text-sm md:text-base">
                        {selectedMember.description}
                      </p>
                    </div>

               

                    
                  </div>
                </div>
              </div>

               
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
