import Image from "next/image";
import Edu from "../../../../../public/assets/edu/hero.png";

export default function Head() {
  return (
    <section className="relative w-full min-h-[min(100dvh,900px)] overflow-hidden bg-black">
      <Image
        src={Edu}
        alt="Education hero — children learning"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right sm:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent sm:from-black/70 sm:via-black/35" />
      <div className="relative z-10 flex min-h-[min(100dvh,900px)] items-center px-4 py-16 sm:px-6 md:px-12 lg:pl-16">
        <div className="max-w-2xl text-left text-white">
          <h1 className="font-heading text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Education
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
            Education is the foundation of our work. We believe that every child
            deserves a chance to learn, grow, and thrive, regardless of their
            circumstances. Through our programmes, we provide access to
            quality education, support for out-of-school children, and
            digital learning opportunities for those who need them most.
          </p>
        </div>
      </div>
    </section>
  );
}
