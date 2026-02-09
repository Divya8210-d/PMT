"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, X, Menu } from "lucide-react";
import { useState } from "react";
const CloseIcon = () => <X />;

export default function AboutHero() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/About.png"
        alt="Service Hero Image"
        fill
        priority
        className="absolute inset-0 object-cover"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* MAIN GRID */}
      <div className="absolute inset-0 z-20 grid grid-rows-[auto_1fr_auto] px-4 sm:px-6 lg:px-10 py-4 sm:py-6">

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
                href="https://www.linkedin.com/company/pmt-bharat/?viewAsMember=true"
                className="rounded-full p-3 bg-white/10"
              >
                <Linkedin />
              </Link>
              <Link href="https://www.instagram.com/pmt_bharat/" className="rounded-full p-3 bg-white/10">
                <Instagram />
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
        <div className="flex flex-col pt-8 sm:pt-12 md:pt-16 lg:pt-20 max-w-full lg:max-w-fit">
          <h1
            className="
              font-extrabold leading-none flex flex-wrap
              text-[40px] xs:text-[52px] sm:text-[80px] md:text-[120px] lg:text-[182px]
            "
          >
            {"ABOUT".split("").map((c, i) =>
              c === "U" ? (
                <span key={i} className="inline-block text-orange-500">
                  {c}
                </span>
              ) : (
                <span key={i} className="inline-block">
                  {c}
                </span>
              )
            )}
          </h1>

          <p className="uppercase text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-xl text-right w-full">
            US ANYTIME
          </p>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-6 sm:gap-8 md:gap-0 pb-2 sm:pb-4 lg:pb-6">

          {/* LEFT */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h3 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase max-w-[530px] leading-tight">
              People Behind the Performance
            </h3>
            <p className="text-[10px] sm:text-sm md:text-base lg:text-lg max-w-[550px] opacity-90 leading-relaxed">
              PMT Bharat brings together expertise in mining operations,
              technology, and compliance to deliver results that matter—safely,
              consistently, and at scale.
            </p>
          </div>

          {/* RIGHT (empty placeholder) */}
          <div className="flex flex-col" />
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
                href="https://www.linkedin.com/company/pmt-bharat/?viewAsMember=true"
                className="rounded-full p-3 bg-white/10"
              >
                <Linkedin />
              </Link>
              <Link href="https://www.instagram.com/pmt_bharat/" className="rounded-full p-3 bg-white/10">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
