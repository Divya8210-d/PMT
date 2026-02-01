import Link from "next/link";
import { InfiniteMovingCardsDemo } from "./ServicesCards";

export default function Services() {
  return (
    <section className="bg-black text-white py-10 sm:py-12 md:py-16 lg:py-20 px-6 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-8 md:gap-10 lg:gap-12">
        {/* Left: Title */}
        <div>
          <h2 className="abouttitletext text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            SOLUTION <br />
            <span className="underline underline-offset-8 text-orange-500">
              WE DELIVER
            </span>
          </h2>
        </div>

        {/* Right: Description */}
        <div className="flex items-center justify-start md:justify-end text-gray-200">
          <div className="w-full md:max-w-sm text-left md:text-right">
            <h4 className="abouttext tracking-[0.2em] sm:tracking-[0.25em] text-sm sm:text-sm font-bold mb-3 uppercase underline underline-offset-8 decoration-white">
              OUR SERVICES
            </h4>
            <p className="abouttext text-sm sm:text-sm md:text-base leading-relaxed">
              PMT delivers end-to-end underground mining solutions, acting as an
              execution and problem-solving partner for both global OEMs and mine
              owners. Our services are designed around real mining challenges,
              Indian operating conditions, and measurable underground outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section - Added overflow-hidden for mobile safety */}
      <div className="mt-10 sm:mt-12 md:mt-16 w-full relative">
        <InfiniteMovingCardsDemo />
      </div>

      {/* Bottom Link */}
      <div className="mt-10 sm:mt-10 md:mt-12">
        <Link
          href="/oems"
          className="text-left underline decoration-white text-sm sm:text-sm md:text-base lg:text-lg hover:text-orange-500 transition-colors font-medium"
        >
          View all
        </Link>
      </div>
    </section>
  );
}