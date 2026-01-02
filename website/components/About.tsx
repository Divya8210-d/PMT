"use client";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------ MAIN COMPONENT ------------------------------ */
export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      /* ───────── TOP TEXT ───────── */
      tl.from(".abouttitletext", {
        x: -60,
        opacity: 0,
      });

      tl.from(
        ".abouttext",
        {
          x: 60,
          opacity: 0,
        },
        "<"
      );

      /* ───────── IMAGE FADE ───────── */
      tl.from(
        imageWrapperRef.current,
        {
          opacity: 0,
        },
        "-=0.3"
      );

      /* ───────── IMAGE SECTION CARDS ───────── */
      tl.from(
        ".image-card",
        {
          y: 60,
          opacity: 0,
          stagger: 0.2,
        },
        "-=0.2"
      );

      /* ───────── SECOND SECTION TITLE ───────── */
      tl.from(
        ".choosetitle",
        {
          x: -60,
          opacity: 0,
        },
        "-=0.3"
      );

      tl.from(
        ".choose",
        {
          x: 60,
          opacity: 0,
        },
        "<"
      );

      /* ───────── LEFT FEATURE CARDS ───────── */
      tl.from(
        ".aboutcard",
        {
          x: -60,
          opacity: 0,
          stagger: 0.2,
        },
        "-=0.2"
      );

      /* ───────── VIDEO INTERNAL CARDS ───────── */
      tl.from(
        ".video-card",
        {
          y: 60,
          opacity: 0,
          stagger: 0.2,
        },
        "-=0.2"
      );
    }, sectionRef);

    /* ───────── VIDEO PLAY / PAUSE ON SCROLL ───────── */
    ScrollTrigger.create({
      trigger: videoRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        if (!videoRef.current) return;
        self.direction === 1
          ? videoRef.current.play()
          : videoRef.current.pause();
      },
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-16 px-16 mx-auto space-y-24"
    >
      {/* ───────────────────────── TOP SECTION ───────────────────────── */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="abouttitletext text-5xl font-extrabold leading-tight">
            INNOVATION BUILT FOR <br />
            <span className="underline underline-offset-8 decoration-white">
              REAL-WORLD
            </span>{" "}
            MINING
          </h2>
        </div>

        <div className="flex items-center justify-end text-gray-200">
          <div className="max-w-sm text-right">
            <h4 className="abouttext tracking-[0.25em] text-lg font-bold mb-2 uppercase underline underline-offset-8 decoration-white">
              About Us
            </h4>
            <p className="abouttext text-md">
              PMT Bharat delivers technology-driven mining solutions and
              consulting services that enhance safety, efficiency, and
              regulatory compliance across India’s mining sector.
            </p>
          </div>
        </div>
      </div>

      {/* ───────────────────────── IMAGE GRID CONTENT ───────────────────────── */}
      <div
        ref={imageWrapperRef}
        className="relative rounded-3xl w-full min-h-[600px] flex items-center"
      >
        <Image
          src="/About.jpg"
          alt="Mining Machinery"
          fill
          priority
          className="object-cover object-center rounded-3xl"
        />

        <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>

        <div className="relative z-10 w-full h-full grid grid-rows-2 gap-28">
          <div className="flex justify-between items-start gap-6 p-6">
            <div className="image-card">
              <Card title="VISION">
                To develop a safe, efficient, and future-ready mining ecosystem
                in India by combining modern technology and strong industry
                partnerships that support long-term growth.
              </Card>
            </div>

            <div className="text-[24px] font-bold">PINNACLE</div>
          </div>

          <div className="flex justify-between items-end gap-6 p-6">
            <div className="image-card">
              <Card title="THE MISSION">
                To enable mining organizations with reliable technology, safety
                solutions, and expert guidance that improve efficiency,
                compliance, and workforce protection.
              </Card>
            </div>

            <div className="image-card">
              <Card title="OUR VALUE">
                We are guided by safety-first thinking, integrity in every
                engagement, practical innovation, and a long-term commitment to
                strengthening India’s mining industry.
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* ───────────────────────── SECOND SECTION ───────────────────────── */}
      <div className="space-y-14">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="choosetitle text-5xl font-bold leading-tight">
              WHAT SETS <br /> US APART
            </h2>
            <div className="w-16 h-[4px] bg-white mt-4"></div>
          </div>

          <div className="flex items-center justify-end">
            <div className="max-w-sm text-right">
              <h4 className="choose uppercase text-lg tracking-[0.25em] font-bold mb-2 underline underline-offset-8 decoration-white">
                why choose us
              </h4>
              <p className="choose text-gray-300 text-md">
                Our approach blends modern technology with hands-on experience to
                deliver measurable operational and safety outcomes tailored for
                India’s mining sector.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="aboutcard w-full md:w-[500px] space-y-10 flex-shrink-0">
            <FeatureCard title="INDUSTRY-FOCUSED EXPERTISE">
              We bring deep understanding of India’s mining conditions with
              on-ground experience, delivering practical solutions that work in
              real operations.
            </FeatureCard>

            <FeatureCard title="PRACTICAL, TECHNOLOGY-LED SOLUTIONS">
              We focus on measurable improvements — enhancing efficiency,
              visibility, safety, and decision-making without unnecessary
              complexity.
            </FeatureCard>
          </div>

          <div className="flex-1 relative rounded-4xl overflow-hidden min-h-[450px]">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              src="/whychoose.mp4"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 grid grid-rows-2 w-full h-full">
              <div className="flex items-start video-card">
                <div className="bg-black rounded-br-4xl px-6 py-8 w-[58%]">
                  <h3 className="text-xl font-bold mb-2">
                    SAFETY-DRIVEN ARCHITECTURE
                  </h3>
                  <p className="text-xl text-gray-300">
                    Safety is central to every solution we build — aligned with
                    Indian regulatory standards and global benchmarks.
                  </p>
                </div>
              </div>

              <div className="flex items-end justify-end video-card">
                <div className="bg-black rounded-tl-4xl px-6 py-8 w-[58%]">
                  <h3 className="text-xl font-bold mb-2">
                    TRUSTED PARTNERSHIP MODEL
                  </h3>
                  <p className="text-xl text-gray-300">
                    We work as long-term partners, offering transparent
                    engagement, reliable support, and long-lasting mining
                    technology collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ REUSABLE CARD ------------------------------ */
function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/5 p-10 rounded-2xl w-[360px] backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-3">
        <Image src="/VISION ICON.png" alt="icon" width={28} height={28} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-sm text-gray-200">{children}</p>
    </div>
  );
}

/* --------------------------- FEATURE CARD ---------------------------- */
function FeatureCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-md">
      <div className="flex items-center gap-3 mb-3">
        <Image src="/VISION ICON.png" alt="icon" width={28} height={28} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-xl text-gray-300 leading-relaxed">{children}</p>
    </div>
  );
}
