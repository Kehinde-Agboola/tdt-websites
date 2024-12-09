import Image, { StaticImageData } from "next/image";
import Latest from "../../../public/assets/home/latest.png"
import Container from "../_component/shared";
type BoxProps = {
  imgSrc: string | StaticImageData;
  title: string;
    author: string;
    date: string;
    description: string;
  buttonText: string;
};

const Card = ({ title, author, date, description, imgSrc }: BoxProps) => (
  <div className=" overflow-hidden">
    <div className="relative w-full h-60">
      <Image src={imgSrc} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="pt-4">
      <h3 className="text-lg font-[500] text-[18px] text-[#232323]">{title}</h3>
      <p className="text-sm text-[#333333] mb-2 py-4">
        {author} • {date}
      </p>
      <p className="text-sm text-[#333333] mb-4">{description}</p>
      <button className="bg-[#FFB400] text-black py-2 px-4">Read More</button>
    </div>
  </div>
);

const Blog = () => {
  const articles = [
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    // Add more articles as needed
  ];

  return (
    <div className="py-10 bg-[#F4F4F4]">
      <Container>
        <h2 className="text-2xl font-bold text-center mb-6">
          The <span className="text-yellow-500">Lastest</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card buttonText={""} key={index} {...article} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
