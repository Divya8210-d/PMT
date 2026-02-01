"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 max-w-7xl mx-auto w-full">
      {/* CARD 1: Large Pink Card */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-orange-800 min-h-[300px] sm:min-h-[400px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Orchestrating the Next Digital Renaissance
          </h2>
          <p className="mt-3 sm:mt-4 text-left text-sm sm:text-base text-neutral-200">
            We are currently deep in the lab, engineering a constellation of 
            groundbreaking projects that push the boundaries of design. 
            The future is loading...
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      {/* CARD 2: Small Card */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] sm:min-h-[350px]">
        <h2 className="max-w-80 text-left text-balance text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Stealth Mode: Engaged
        </h2>
        <p className="mt-3 sm:mt-4 max-w-[26rem] text-left text-sm sm:text-base text-neutral-200">
          Great things take time. We are finalizing a series of game-changing 
          updates that will soon redefine your expectations. Watch this space.
        </p>
      </WobbleCard>

      {/* CARD 3: Large Blue Card */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Prepare to Witness a Paradigm Shift
          </h2>
          <p className="mt-3 sm:mt-4 max-w-[26rem] text-left text-sm sm:text-base text-neutral-200">
            Our roadmap is set, and the destination is extraordinary. We are 
            putting the finishing touches on a suite of projects that will 
            establish new industry standards.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}