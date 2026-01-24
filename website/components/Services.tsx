import Link from "next/link"
import { InfiniteMovingCardsDemo } from "./ServicesCards";



export default function Services() {
  return (
    <section className="bg-black text-white py-20 px-16">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="abouttitletext text-5xl font-extrabold leading-tight">
            SOLUTION <br />
            <span className="underline underline-offset-8 text-orange-500">
              WE DELIVER
            </span>

          </h2>
        </div>

        <div className="flex items-center justify-end text-gray-200">
          <div className="max-w-sm text-right">
            <h4 className="abouttext tracking-[0.25em] text-lg font-bold mb-2 uppercase underline underline-offset-8 decoration-white">
              OUR SERVICES
            </h4>
            <p className="abouttext text-md">
             PMT delivers end-to-end underground mining solutions, acting as an execution and problem-solving partner for both global OEMs and mine owners. Our services are designed around real mining challenges, Indian operating conditions, and measurable underground outcomes.
            </p>
          </div>
        </div>
      </div>
      
      <div><InfiniteMovingCardsDemo/></div>

      <div><Link href="/services" className="text-left  underline decoration-white text-xl">View all</Link></div>

    </section>
  );
}
