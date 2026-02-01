"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, X,Menu } from "lucide-react";
import { useState } from "react";

const CloseIcon = () => <X />;

export default function ServicesHero() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <section className="relative w-full h-auto md:h-screen overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/Services.png"
        alt="Service Hero Image"
        fill
        priority
        className="absolute inset-0 object-cover"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* MAIN GRID WRAPPER */}
      <div 
        className="
          relative z-20 
          px-4 sm:px-6 lg:px-10 py-6 
          flex flex-col justify-between gap-10     /* Mobile: Flow vertically with gaps */
          md:gap-0                                 /* Desktop: Reset gap */
          md:absolute md:inset-0                   /* Desktop: Absolute overlay */
          md:grid md:grid-rows-[auto_1fr_auto]     /* Desktop: Original Grid */
        "
      >
        
        {/* TOP BAR */}
        <div
          className="
            flex items-center justify-between
            md:grid md:grid-cols-3 md:items-center
          "
        >
          {/* LOGO */}
          <div className="text-xl sm:text-xl lg:text-2xl font-semibold tracking-wide">
            Pinnacle
          </div>

          {/* DESKTOP NAV */}
          <nav
            className="
              hidden md:flex justify-center gap-6 lg:gap-10
              text-xs lg:text-sm font-medium
              px-6 lg:px-8 py-3 lg:py-4
              rounded-full backdrop-blur-xs
              border border-white/30
              shadow-[inset_0_0_6px_rgba(255,255,255,0.25)]
            "
          >
            <Link href="/" className="font-semibold">
              Home
            </Link>
            <Link href="/oems" className="opacity-90">
              Services
            </Link>
            <Link href="/about" className="opacity-90">
              About
            </Link>
            <Link href="/contact" className="opacity-90">
              Contact Us
            </Link>
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex justify-end items-center gap-2 sm:gap-4 md:gap-2">
            {/* SOCIAL ICONS (Desktop) */}
            <div className="hidden md:flex gap-2 sm:gap-4">
              <Link
                href="https://www.linkedin.com/company/pinnacle-depth-mine-management-services-pvt-ltd/"
                className="rounded-full p-2 bg-black/10 shadow-[inset_0_0_6px_rgba(255,255,255,0.25)]"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href=""
                className="rounded-full p-2 bg-black/10 shadow-[inset_0_0_6px_rgba(255,255,255,0.25)]"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href=""
                className="rounded-full p-2 bg-black/10 shadow-[inset_0_0_6px_rgba(255,255,255,0.25)]"
              >
                <X size={18} />
              </Link>
            </div>
              <button
              onClick={() => setOpenMenu(true)}
              className="
                md:hidden
                rounded-full p-2
                bg-black/10
                shadow-[inset_0_0_6px_rgba(255,255,255,0.25)]
              "
              aria-label="Open menu"
            >
              <Menu />
            </button>

          </div>
        </div>

       
        

        {/* CENTER TEXT */}
        <div 
          className="
            flex flex-col 
            mt-6 md:mt-0 
            md:pt-16 lg:pt-20 
            max-w-fit
          "
        >
          <h1
            className="
              font-extrabold leading-none flex flex-wrap
              text-[40px] xs:text-[52px] sm:text-[80px] md:text-[120px] lg:text-[182px]
            "
          >
            {"SERVICES".split("").map((c, i) =>
              c === "C" ? (
                <span key={i} className="inline-block text-orange-500">{c}</span>
              ) : (
                <span key={i} className="inline-block">{c}</span>
              )
            )}
          </h1>
          <p className="uppercase text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-xl text-left md:text-right w-full tracking-widest">
            THAT WE PROVIDE
          </p>
        </div>

        {/* BOTTOM CONTENT */}
        <div 
          className="
            grid grid-cols-1 md:grid-cols-3 
            items-start md:items-end 
            gap-8 md:gap-0 
            pb-8 md:pb-6
          "
        >
          
          {/* LEFT: Description */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold max-w-[380px] leading-tight">
              Solutions and Services Built for Modern Mining Operations
            </h3>
            <p className="text-[10px] sm:text-sm md:text-base lg:text-base max-w-[350px] opacity-90 leading-relaxed">
              From strategy and localisation to deployment and training, we support
              mining organizations with practical solutions that improve safety,
              efficiency, and compliance.
            </p>
          </div>

          {/* MIDDLE SPACER (Hidden on mobile) */}
          <div className="hidden md:block" />
  

          {/* RIGHT STATS */}
          <div 
            className="
              flex flex-col 
              gap-3 sm:gap-4 
              md:flex-row md:gap-2 
              items-start md:items-end 
              justify-start md:justify-end
            "
          >
            <StatCard value="10+" title="TECHNOLOGIES" text="To become India’s most trusted" />
            <StatCard value="10+" title="TECHNOLOGIES" text="To become India’s most trusted" />
            <StatCard value="10+" title="TECHNOLOGIES" text="To become India’s most trusted" />
          </div>
        </div>
      </div>
       {openMenu && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md md:hidden">
          <div className="w-full h-full px-6 py-6 flex flex-col">
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold tracking-wide">
                Pinnacle
              </div>

              <button
                onClick={() => setOpenMenu(false)}
                className="rounded-full p-2 bg-white/10"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-6 text-lg font-semibold">
              <Link href="/" onClick={() => setOpenMenu(false)}>
                Home
              </Link>
              <Link href="/oems" onClick={() => setOpenMenu(false)}>
                Services
              </Link>
              <Link href="/about" onClick={() => setOpenMenu(false)}>
                About
              </Link>
              <Link href="/contact" onClick={() => setOpenMenu(false)}>
                Contact Us
              </Link>
            </div>

            <div className="mt-auto flex gap-4 pt-10">
              <Link
                href="https://www.linkedin.com/company/pinnacle-depth-mine-management-services-pvt-ltd/"
                className="rounded-full p-3 bg-white/10"
              >
                <Linkedin />
              </Link>
              <Link href="" className="rounded-full p-3 bg-white/10">
                <Instagram />
              </Link>
              <Link href="" className="rounded-full p-3 bg-white/10">
                <X />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function StatCard({
  value,
  title,
  text,
}: {
  value: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        relative
        w-full sm:w-[260px]      /* Mobile: Full width, Small screens+: Fixed width */
        h-auto min-h-[180px] sm:h-[220px] /* Responsive height */
        rounded-[28px]
        border border-white
        bg-black/10
        flex flex-col
        items-start
        justify-between
        p-6
        text-left
      "
    >
      <div className="absolute top-4 left-4">
        <Image src="/icons.png" alt="icon" width={25} height={25} />
      </div>

      <div className="mt-8">
        <h3 className="text-4xl sm:text-5xl font-extrabold leading-none text-white">
          {value}
        </h3>
        <p className="mt-2 text-xs sm:text-sm tracking-widest uppercase text-white/90">
          {title}
        </p>
      </div>

      <p className="text-xs sm:text-sm text-white/85 leading-snug max-w-[200px]">
        {text}
      </p>
    </div>
  );
}