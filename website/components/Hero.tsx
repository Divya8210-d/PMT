"use client"

import { Menu, X, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Placeholder icon components
const CloseIcon = () => <X />;

export default function HeroSection() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <section className="relative w-full h-auto md:h-screen overflow-hidden text-white">
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

      {/* MAIN WRAPPER */}
      <div
        className="
          relative z-20 
          px-6 sm:px-6 lg:px-10 py-6 
          flex flex-col justify-between gap-12    /* Mobile: Flex column with natural gap */
          md:gap-0                                /* Desktop: Remove flex gap */
          md:absolute md:inset-0                  /* Desktop: Absolute overlay */
          md:grid md:grid-rows-[auto_1fr_auto]    /* Desktop: Precise Grid */
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

            {/* HAMBURGER (Mobile) */}
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
            mt-4 md:mt-0            /* Minimal margin on mobile */
            flex-none md:flex-none
            md:justify-center       /* Center vertically on desktop */
          "
        >
          <h1
            className="
              font-extrabold flex flex-wrap 
              leading-[0.85] sm:leading-[0.9] md:leading-none
              text-[clamp(42px,12vw,80px)]
              md:text-[120px]
              lg:text-[182px]
            "
          >
            {"PINNACLE".split("").map((c, i) =>
              c === "C" ? (
                <span key={i} className="inline-block text-orange-500">{c}</span>
              ) : (
                <span key={i} className="inline-block">{c}</span>
              )
            )}
          </h1>

          <p
            className="
              text-[10px] sm:text-xs md:text-sm
              tracking-[0.2em] md:tracking-widest
              mt-2 sm:mt-1 md:mt-3
              text-left md:text-left

              opacity-95
              uppercase
            "
          >
            MINING TECHNOLOGIES PVT. LTD.
          </p>
        </div>

        {/* BOTTOM CONTENT */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-3
            items-start md:items-end
            gap-8 md:gap-0
            md:pb-6                /* Padding handled by parent flex gap on mobile */
            pb-8                   /* Extra padding at bottom for mobile */
          "
        >
          {/* LEFT: Description */}
          <div className="flex flex-col gap-4 order-1">
            <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold max-w-[530px] leading-tight">
              Smart Technology for Safer & Smarter Mining Operations
            </h3>

            <p className="text-sm sm:text-sm md:text-base lg:text-lg max-w-[550px] opacity-90 leading-relaxed text-gray-200">
              From intelligent safety systems to mining technology consulting,
              PMT Bharat enables efficient, compliant, and future-ready
              operations.
            </p>

            <Link
              href="/oems"
              className="
                bg-orange-500 hover:bg-orange-600 transition-colors
                px-4 py-2 
                rounded-full 
                text-sm md:text-base lg:text-lg font-semibold 
                w-fit flex gap-2 items-center mt-2
              "
            >
              Explore Services
              <Image
                src="/iconhero.png" 
                alt="icon"
                width={16}
                height={16}
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </Link>
          </div>

          {/* CENTER ARROW (Hidden on mobile) */}
          <div className="hidden md:flex justify-center order-2">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={36}
              height={36}
              className="md:w-10 lg:w-12 h-auto"
            />
          </div>

          {/* RIGHT BADGES */}
          <div className="flex flex-col gap-3 md:gap-4 items-start md:items-end order-3">
            <Badge text="Authorised Service Provider for OEM in India" />
            <Badge text="Authorised Service Provider for OEM in India" />
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
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

function Badge({ text }: { text: string }) {
  return (
    <div
      className="
        bg-black/40 px-3 py-2 md:px-5 md:py-3
        rounded-3xl flex items-center gap-3 md:gap-3
        text-xs md:text-sm max-w-full md:max-w-lg
        backdrop-blur-xs border border-white/30
      "
    >
      <Image
        src="/star.png"
        alt="star"
        width={16}
        height={16}
        className="w-4 h-4 md:w-6 md:h-6 flex-shrink-0"
      />
      <span className="line-clamp-2 leading-tight">{text}</span>
    </div>
  );
}