"use client";

import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactCard";
import { Linkedin, Instagram, X,Menu } from "lucide-react";
import { useState } from "react";
const CloseIcon = () => <X />;

export default function ContactHero() {
   const [openMenu, setOpenMenu] = useState(false);
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/Contact.png"
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
        <div className="flex flex-col pt-10 sm:pt-18 lg:pt-16 max-w-fit">
          <h1
            className="
              font-extrabold leading-none flex
              text-[64px] sm:text-[96px] md:text-[140px] lg:text-[182px]
            "
          >
            {"CONTACT".split("").map((c, i) =>
              c === "A" ? (
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
            THAT WE PROVIDE
          </p>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-10 md:gap-0 pb-4 sm:pb-6">
          
          {/* LEFT */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <ContactForm />
          </div>

          <div />

          {/* RIGHT (empty for now) */}
          <div className="flex flex-col gap-4" >
             <Badge text="Email" detail="pinnacledepth@gmail.com"/>
         <Badge text="Phone" detail="+91 6200224594"/>
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




function Badge({ text ,detail }: { text: string ,detail:string }) {
  return (
    <div
      className="
        bg-black/40 px-4 sm:px-5 py-2 sm:py-3
        rounded-3xl flex items-center gap-2 sm:gap-3
        text-xs sm:text-sm max-w-xl
        backdrop-blur-xs border border-white/30
      "
    >
      <Image src="/star.png" alt="star" width={32} height={32} />
      <div className="flex flex-col ">
        <div>{text}</div>
        <div>{detail}</div>
        
        
      </div>
      
    </div>
  );
}



