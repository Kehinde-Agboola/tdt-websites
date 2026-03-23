import Image, { type StaticImageData } from "next/image";
import clsx from "clsx";
import type { ReactNode } from "react";

export type PageHeroLayout = "home" | "center" | "left";

const CONTENT_SHELL: Record<PageHeroLayout, string> = {
  /** Matches home `Head.tsx`: copy anchored bottom on mobile, left/center on md+ */
  home: [
    "absolute inset-0 bottom-[40px] z-10 flex flex-col items-center justify-end px-6 pb-8 text-center",
    "md:bottom-0 md:items-start md:justify-center md:pb-0 md:pl-[4rem] md:text-left",
  ].join(" "),
  /** Centered title block (FAQs, simple landing heroes) */
  center: [
    "absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pb-10 text-center",
    "md:px-8 md:pb-12",
  ].join(" "),
  /** Left-aligned title + body (programme pages: Education, Wellbeing, etc.) */
  left: [
    "absolute inset-0 z-10 flex min-h-0 flex-col items-stretch justify-center px-4 py-14 sm:px-6 md:px-12 lg:pl-16",
    "text-left text-white",
  ].join(" "),
};

export type PageHeroProps = {
  image: StaticImageData | string;
  /** Optional mobile image (e.g. home uses `mobilebg.png`); defaults to `image` */
  mobileImage?: StaticImageData | string;
  alt: string;
  children: ReactNode;
  layout?: PageHeroLayout;
  /** Overlay: default matches home `bg-black/45` */
  overlayClassName?: string;
  /** Background image `object-*` classes */
  imageClassName?: string;
  mobileImageClassName?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Full-viewport hero shell aligned with the home hero (`_home/Head.tsx`):
 * `min-h-screen min-h-[100dvh]`, dark overlay, consistent content region.
 */
export default function PageHero({
  image,
  mobileImage,
  alt,
  children,
  layout = "home",
  overlayClassName = "bg-black/45",
  imageClassName = "object-cover object-center",
  mobileImageClassName,
  priority = false,
  className,
}: PageHeroProps) {
  const mobileSrc = mobileImage ?? image;
  const mobileImgClass = mobileImageClassName ?? imageClassName;

  const background = mobileImage ? (
    <>
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className={imageClassName}
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 md:hidden">
        <Image
          src={mobileSrc}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className={mobileImgClass}
          aria-hidden
        />
      </div>
    </>
  ) : (
    <div className="absolute inset-0">
      <Image
        src={image}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className={imageClassName}
        aria-hidden
      />
    </div>
  );

  return (
    <section
      className={clsx(
        "relative min-h-screen min-h-[100dvh] w-full overflow-hidden bg-black",
        className,
      )}
      aria-label={alt}
    >
      {background}
      <span className="sr-only">{alt}</span>

      <div className={clsx("absolute inset-0 z-[1]", overlayClassName)} aria-hidden />

      <div className={CONTENT_SHELL[layout]}>{children}</div>
    </section>
  );
}
