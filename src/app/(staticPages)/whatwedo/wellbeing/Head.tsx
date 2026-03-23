import PageHero from "@/app/_component/PageHero";
import Well from "../../../../../public/assets/care/wellbeing.jpg";

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
        <h1 className="font-heading text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Wellbeing
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
          We believe every child deserves a safe, nurturing environment where they
          can grow physically, emotionally, and mentally. Our comprehensive care
          programme ensures that children receive the shelter, nutrition,
          healthcare, and emotional support they need to thrive.
        </p>
      </div>
    </PageHero>
  );
}
