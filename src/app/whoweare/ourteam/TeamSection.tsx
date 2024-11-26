import Image, { StaticImageData } from "next/image";
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
  return (
    <section className="py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ">
              {title}
              </h2>
      <div className="my-6"> <hr /></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-6">
        {members.map((member, index) => (
          <div
            key={index}
          
          >
            <Image
              src={member.image}
            alt={member.name}
              className=" object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600">{member.role}</p>
            <p className="text-sm text-gray-500 mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
