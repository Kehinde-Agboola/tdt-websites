import PageHero from "@/app/_component/PageHero";
import Edu from "../../../../../public/assets/empower/empowerhero.png";

export default function Head() {
  return (
    <PageHero
      image={Edu}
      alt="Empowerment — young people building skills"
      layout="left"
      imageClassName="object-cover object-right md:object-center"
      priority
    >
      <div className="max-w-2xl text-white">
        <h1 className="font-heading text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Empowerment
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
          We believe every child deserves the opportunity to build a sustainable
          future. We empower young people through skills development, vocational
          training, and entrepreneurial support that prepares them for
          independence and self-reliance.
        </p>
      </div>
    </PageHero>
  );
}
