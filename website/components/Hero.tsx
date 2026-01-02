"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const navref = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const badgesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const letters = titleRef.current!.querySelectorAll("span");

    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1 },
    });

    tl.from(navref.current, { y: -40, opacity: 0 })
      .from(letters, { y: 140, opacity: 0, stagger: 0.08 }, "-=0.4")
      .from(subtitleRef.current, { y: 30, opacity: 0 }, "-=0.6")
      .from(leftRef.current, { y: 60, opacity: 0 }, "-=0.6")
      .from(arrowRef.current, { scale: 0, opacity: 0 }, "-=0.7")
      .from(badgesRef.current!.children, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
      }, "-=0.6");
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* BACKGROUND VIDEO */}
      <video
        src="/herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* MAIN GRID */}
      <div className="absolute inset-0 z-20 grid grid-rows-[auto_1fr_auto] px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
        
        {/* TOP BAR */}
        <div className="grid grid-cols-3 items-center">
          <div className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide">
            Pinnacle
          </div>

          <nav
            ref={navref}
            className="
              hidden md:flex justify-center gap-6 lg:gap-10
              text-xs lg:text-sm font-medium
              px-6 lg:px-8 py-3 lg:py-4
              rounded-full backdrop-blur-xs
              border border-white/30
              shadow-[inset_0_0_6px_rgba(255,255,255,0.25)]
            "
          >
            <a className="font-semibold">Home</a>
            <a className="opacity-90">Services</a>
            <a className="opacity-90">Insights</a>
            <a className="opacity-90">About</a>
            <a className="opacity-90">Contact Us</a>
          </nav>

          <div className="flex justify-end gap-2 sm:gap-4 text-sm sm:text-base">
            {["In", "X", "IG"].map((t) => (
              <div
                key={t}
                className="size-8 sm:size-9 flex items-center justify-center rounded-full backdrop-blur-xs border border-white/30"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* CENTER TEXT */}
        <div className="flex flex-col pt-12 sm:pt-16 lg:pt-20 max-w-full lg:max-w-3xl">
          <h1
            ref={titleRef}
            className="
              font-extrabold leading-none flex
              text-[64px] sm:text-[96px] md:text-[140px] lg:text-[182px]
            "
          >
            {"PINACLE".split("").map((c, i) => (
              <span key={i} className="inline-block">{c}</span>
            ))}
          </h1>

          <p
            ref={subtitleRef}
            className="text-xs sm:text-sm tracking-widest mt-2 sm:mt-3 text-right"
          >
            MINING TECHNOLOGIES PVT. LTD.
          </p>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-10 md:gap-0 pb-4 sm:pb-6">
          
          {/* LEFT */}
          <div ref={leftRef} className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-lg sm:text-xl font-semibold max-w-[330px]">
              Smart Technology for Safer & Smarter Mining Operations
            </h3>
            <p className="text-xs sm:text-sm max-w-[350px] opacity-90">
              From intelligent safety systems to mining technology consulting,
              PMT Bharat enables efficient, compliant, and future-ready operations.
            </p>
            <button className="bg-orange-500 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold w-fit flex gap-2">
              Explore Services
              <Image src="/iconhero.png" alt="icon" width={24} height={24} />
            </button>
          </div>

          {/* CENTER ARROW */}
          <div ref={arrowRef} className="hidden md:flex justify-center">
            <Image src="/arrow.png" alt="arrow" width={48} height={48} />
          </div>

          {/* RIGHT BADGES */}
          <div ref={badgesRef} className="flex flex-col gap-3 sm:gap-4 items-start md:items-end">
            <Badge text="Authorised Service Provider for OEM in India" />
            <Badge text="Authorised Service Provider for OEM in India" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <div className="
      bg-black/40 px-4 sm:px-5 py-2 sm:py-3
      rounded-3xl flex items-center gap-2 sm:gap-3
      text-xs sm:text-sm max-w-xl
      backdrop-blur-xs border border-white/30
    ">
      <Image src="/star.png" alt="star" width={24} height={24} />
      {text}
    </div>
  );
}
