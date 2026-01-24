"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={services}
        direction="right"
        speed="slow"
      />
    </div>
  );
}


const services = [
  {
    heading: "India Market Entry AND Strategy",
    image: "/market.jpg",
  },
  {
    heading: "Technology Localisation & Adaptation",
    image: "/technology.jpg",
  },
  {
    heading: "DGMS & Statutory Approvals",
    image: "/approvals.png",
  },
  {
    heading: "Field Trials & Performance Validation",
    image: "/performance.jpg",
  },
  {
    heading: "After-Sales & Lifecycle Support",
    image: "",
  },
  {
    heading: "Partnership Models",
    image: "",
  },
];
