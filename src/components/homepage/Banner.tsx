import Image from "next/image";
import bannerImage from "@/assets/banner.png";

export default function Banner() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-6 overflow-hidden rounded-2xl border border-[#252a34] bg-[#15171d] px-6 py-10 sm:px-10 lg:min-h-[420px] lg:grid-cols-[1.3fr_0.7fr] lg:px-14">
          <div>
            <p className="mb-5 text-xs font-bold tracking-[0.18em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>

            <h1 className="font-heading max-w-3xl text-4xl font-extrabold uppercase leading-[0.98] text-white sm:text-5xl lg:text-6xl">
              Train with intent. Log every set.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <a
              href="#library"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600]"
            >
              <span aria-hidden="true"></span>
              BROWSE WORKOUTS
            </a>
          </div>

          <div className="relative mx-auto h-56 w-full max-w-sm sm:h-72 lg:h-[340px]">
            <Image
              src={bannerImage}
              alt="Athlete using gym equipment"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 35vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}