import PageHero from "@/app/_component/PageHero";
import Well from "../../../../../public/assets/care/carem.png";

export default function Head() {
  return (
    <PageHero
      image={Well}
      alt="Wellbeing — children in care"
      layout="left"
      imageClassName="object-cover object-right md:object-center"
      priority
    >
      <div className="max-w-2xl text-white">
        {/* <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFB400] sm:text-sm">
          CARE SECTION
        </p> */}
        <h1 className="font-heading text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          <span className="text-yellow">Care</span> That Makes Learning Possible
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
          We provide the stability children need to learn—through safe shelter,
          healthcare, nutrition, and protection. Because education cannot thrive
          where survival is uncertain.
        </p>
      </div>
    </PageHero>
  );
}
