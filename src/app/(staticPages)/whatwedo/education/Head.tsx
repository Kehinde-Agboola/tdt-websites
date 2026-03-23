import PageHero from "@/app/_component/PageHero";
import Edu from "../../../../../public/assets/edu/hero.png";

export default function Head() {
  return (
    <PageHero
      image={Edu}
      alt="Education — children learning"
      layout="left"
      imageClassName="object-cover object-right md:object-center"
      priority
    >
      <div className="max-w-2xl text-white">
        <h1 className="font-heading text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Education
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
          Education is the foundation of our work. We believe that every child
          deserves a chance to learn, grow, and thrive, regardless of their
          circumstances. Through our programmes, we provide access to quality
          education, support for out-of-school children, and digital learning
          opportunities for those who need them most.
        </p>
      </div>
    </PageHero>
  );
}
