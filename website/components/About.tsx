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
      // Only run complex ScrollTrigger animations on larger screens to improve mobile performance
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;

      if (isDesktop) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 20%",
            scrub: true,
          },
        });

        tl.from(".abouttitletext", { x: -60, opacity: 0 });
        tl.from(".abouttext", { x: 60, opacity: 0 }, "<");
        tl.from(imageWrapperRef.current, { opacity: 0 }, "-=0.3");
        tl.from(".image-card", { y: 60, opacity: 0, stagger: 0.2 }, "-=0.2");
        tl.from(".choosetitle", { x: -60, opacity: 0 }, "-=0.3");
        tl.from(".choose", { x: 60, opacity: 0 }, "<");
        tl.from(".aboutcard", { x: -60, opacity: 0, stagger: 0.2 }, "-=0.2");
        tl.from(".video-card", { y: 60, opacity: 0, stagger: 0.2 }, "-=0.2");
      }
    }, sectionRef);

    // Keep video autoplay trigger on all devices
    ScrollTrigger.create({
      trigger: videoRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        if (!videoRef.current) return;
        self.direction === 1 ? videoRef.current.play() : videoRef.current.pause();
      },
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white w-full overflow-hidden py-10 sm:py-16 md:py-20 px-6 sm:px-10 md:px-16 mx-auto space-y-16 md:space-y-24"
    >
      {/* ───────────────────────── TOP SECTION ───────────────────────── */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-6">
        <div>
          <h2 className="abouttitletext text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            INNOVATION BUILT FOR <br />
            <span className="underline underline-offset-8 decoration-white">
              REAL-WORLD
            </span>{" "}
            MINING
          </h2>
        </div>

        <div className="flex items-center justify-start md:justify-end text-gray-200">
          <div className="max-w-md md:max-w-sm text-left md:text-right">
            <h4 className="abouttext tracking-[0.25em] text-sm sm:text-base md:text-lg font-bold mb-3 uppercase underline underline-offset-8 decoration-white">
              About Us
            </h4>
            <p className="abouttext text-sm sm:text-base md:text-md leading-relaxed">
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
        className="relative rounded-2xl sm:rounded-3xl w-full min-h-[600px] sm:min-h-[500px] md:min-h-[600px] flex flex-col md:block"
      >
        <Image
          src="/About.jpg"
          alt="Mining Machinery"
          fill
          priority
          className="object-cover object-center rounded-2xl sm:rounded-3xl"
        />

        <div className="absolute inset-0 bg-black/40 rounded-2xl sm:rounded-3xl"></div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 gap-6">
          {/* Top Row: Card + Title */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="image-card w-full md:w-auto">
              <Card title="VISION">
                To develop a safe, efficient, and future-ready mining ecosystem
                in India by combining modern technology and strong industry
                partnerships that support long-term growth.
              </Card>
            </div>
            {/* Desktop: Title Top Right, Mobile: Hidden or moved */}
            <div className="hidden md:block text-2xl font-bold tracking-widest">
              PINNACLE
            </div>
          </div>

          {/* Bottom Row: Two Cards */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 w-full">
            <div className="image-card w-full md:w-auto">
              <Card title="THE MISSION">
                To enable mining organizations with reliable technology, safety
                solutions, and expert guidance that improve efficiency,
                compliance, and workforce protection.
              </Card>
            </div>

            <div className="image-card w-full md:w-auto">
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
      <div className="space-y-10 md:space-y-14">
        {/* Header */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <h2 className="choosetitle text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              WHAT SETS <br /> US APART
            </h2>
            <div className="w-16 h-[3px] sm:h-[4px] bg-white mt-4"></div>
          </div>

          <div className="flex items-center justify-start md:justify-end">
            <div className="max-w-md md:max-w-sm text-left md:text-right">
              <h4 className="choose uppercase text-xs sm:text-sm font-bold mb-2 underline underline-offset-8 decoration-white tracking-[0.2em]">
                why choose us
              </h4>
              <p className="choose text-gray-300 text-sm sm:text-base leading-relaxed">
                Our approach blends modern technology with hands-on experience to
                deliver measurable operational and safety outcomes tailored for
                India’s mining sector.
              </p>
            </div>
          </div>
        </div>

        {/* Features + Video */}
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          {/* Left Features */}
          <div className="aboutcard w-full lg:w-[450px] space-y-8 flex-shrink-0">
            <FeatureCard title="INDUSTRY-FOCUSED EXPERTISE">
              We bring deep understanding of India's mining conditions with
              on-ground experience, delivering practical solutions that work in
              real operations.
            </FeatureCard>

            <FeatureCard title="PRACTICAL, TECHNOLOGY-LED SOLUTIONS">
              We focus on measurable improvements — enhancing efficiency,
              visibility, safety, and decision-making without unnecessary
              complexity.
            </FeatureCard>
          </div>

          {/* Right Video Section */}
          <div className="flex-1 relative rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden min-h-[500px] md:min-h-[450px]">
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

            <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 sm:p-6 gap-4">
              {/* Top Card */}
              <div className="video-card flex justify-start">
                <div className="bg-black/90 backdrop-blur-md rounded-br-3xl md:rounded-br-4xl p-6 sm:p-8 w-full sm:w-[85%] md:w-[60%] border-l-4 border-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                    SAFETY-DRIVEN ARCHITECTURE
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Safety is central to every solution we build — aligned with
                    Indian regulatory standards and global benchmarks.
                  </p>
                </div>
              </div>

              {/* Bottom Card */}
              <div className="video-card flex justify-end">
                <div className="bg-black/90 backdrop-blur-md rounded-tl-3xl md:rounded-tl-4xl p-6 sm:p-8 w-full sm:w-[85%] md:w-[60%] border-r-4 border-white text-right">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                    TRUSTED PARTNERSHIP MODEL
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
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
    <div className="bg-white/10 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl w-full md:max-w-[360px] backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-6 h-6 sm:w-7 sm:h-7 relative flex-shrink-0">
           <Image 
             src="/VISION ICON.png" 
             alt="icon" 
             fill
             className="object-contain"
           />
        </div>
        <h3 className="text-base sm:text-lg font-bold text-white">{title}</h3>
      </div>
      <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
        {children}
      </p>
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
    <div className="w-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-6 h-6 sm:w-7 sm:h-7 relative flex-shrink-0">
           <Image 
             src="/VISION ICON.png" 
             alt="icon" 
             fill
             className="object-contain"
           />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed border-l-2 border-white/30 pl-4">
        {children}
      </p>
    </div>
  );
}