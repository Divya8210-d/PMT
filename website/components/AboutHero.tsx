"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, X } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
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
        <div className="grid grid-cols-3 items-center">
          <div className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide">
            Pinnacle
          </div>

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
            <Link href="/" className="font-semibold">Home</Link>
            <Link href="/products" className="opacity-90">Products</Link>
            <Link href="/about" className="opacity-90">About</Link>
            <Link href="/contact" className="opacity-90">Contact Us</Link>
          </nav>

          <div className="flex justify-end gap-2 sm:gap-4">
            <Link
              href="https://www.linkedin.com/company/pinnacle-depth-mine-management-services-pvt-ltd/"
              className="rounded-full p-2 bg-black/10 shadow-[inset_0_0_6px_rgba(255,255,255,0.25)]"
            >
              <Linkedin />
            </Link>
            <Link
              href=""
              className="rounded-full p-2 bg-black/10 shadow-[inset_0_0_6px_rgba(255,255,255,0.25)]"
            >
              <Instagram />
            </Link>
            <Link
              href=""
              className="rounded-full p-2 bg-black/10 shadow-[inset_0_0_6px_rgba(255,255,255,0.25)]"
            >
              <X />
            </Link>
          </div>
        </div>

        {/* CENTER TEXT */}
        <div className="flex flex-col pt-12 sm:pt-16 lg:pt-20 max-w-fit">
          <h1
            className="
              font-extrabold leading-none flex
              text-[64px] sm:text-[96px] md:text-[140px] lg:text-[182px]
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

          <p className="uppercase text-xl text-right w-full">
            US ANYTIME
          </p>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-10 md:gap-0 pb-4 sm:pb-6">
          
          {/* LEFT */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-xl sm:text-4xl font-semibold uppercase max-w-[530px]">
              People Behind the Performance
            </h3>
            <p className="text-lg max-w-[550px] opacity-90">
              PMT Bharat brings together expertise in mining operations,
              technology, and compliance to deliver results that matter—safely,
              consistently, and at scale.
            </p>
          </div>

          {/* RIGHT (empty placeholder) */}
          <div className="flex flex-col" />
        </div>
      </div>
    </section>
  );
}
