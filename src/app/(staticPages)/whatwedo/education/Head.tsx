import PageHero from "@/app/_component/PageHero";
import Hero from "../../../../../public/assets/heos.png";
export default function Head() {
  return (
    <PageHero
      image={Hero}
      alt="Education — children learning"
      layout="left"
      imageClassName="object-cover object-right opacity-80 md:object-center md:opacity-85"
      priority
    >
      <div className="max-w-2xl text-white">
        <h1 className="font-heading text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Transforming Lives Through <span className="text-yellow">Education</span>
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
          Education is the foundation for breaking the cycle of poverty. We
          remove barriers to learning and create pathways that enable children
          not only to access school, but to stay, learn, and succeed.
        </p>
      </div>
    </PageHero>
  );
}
