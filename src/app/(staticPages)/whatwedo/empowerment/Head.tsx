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
        {/* <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFB400] sm:text-sm">
          EMPOWERMENT SECTION
        </p> */}
        <h1 className="font-heading text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          <span className="text-yellow">Empowering</span> Children and Families to Thrive
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
          We equip children and families with the skills and support needed to
          move beyond survival and build sustainable futures.
        </p>
      </div>
    </PageHero>
  );
}
