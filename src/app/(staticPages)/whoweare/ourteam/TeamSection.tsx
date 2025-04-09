"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Member = {
  name: string;
  role: string;
  description: string;
  image: string | StaticImageData;
};

type TeamSectionProps = {
  title?: string;
  members: Member[];
};

const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {title}
          <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-2"></span>
        </h2>
      )}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-8">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Image
              src={member.image}
              alt={member.name}
              className=" object-cover w-full h-[297px]"
            />
            <h3 className="text-lg font-semibold text-[#333333] mt-4">
              {member.name}
            </h3>
            <p className="text-sm text-[#333333] text-left">{member.role}</p>
            <p className="text-sm text-[#333333] mt-2 text-left">
              {member.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
