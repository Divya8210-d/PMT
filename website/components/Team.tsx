import Image from "next/image";
import TeamCard from "./TeamCard";

const FOUNDERS = [
  {
    name: "SANTU KUMAR",
    role: "HEAD OF OPERATION",
    imageSrc: "/aboutteam.png",
    linkedinUrl: "https://www.linkedin.com/in/santu-kumar-santu-047abb19b/",
  },

];
const TEAM_MEMBERS = [
  {
    name: "DIVYANSHU CHOUBEY",
    role: "FULL STACK DEVELOPER ",
    imageSrc: "/aboutteam.png",
    linkedinUrl: "https://www.linkedin.com/in/divyanshu8210/",
  },
  {
    name: "HIYANSHU GUPTA",
    role: "UI/UX DESIGNER",
    imageSrc: "/aboutteam.png",
    linkedinUrl: "https://www.linkedin.com/in/hiyanshu-gupta-9b33aa320/",
  },
  {
    name: "ALOK KUMAR",
    role: "APP DEVELOPER",
    imageSrc: "/aboutteam.png",
    linkedinUrl: "https://www.linkedin.com/in/alok-kumar-3953a1321/",
  },
  {
    name: "JINAY JAIN",
    role: "ROBOTICS DOMAIN INTERN",
    imageSrc: "/aboutteam.png",
    linkedinUrl: "https://www.linkedin.com/in/jinay-jain-/",
  },
];
const BUSINESS_DEVELOPMENT_TEAM = [
  {
    name: "SIDDHI SEN",
    role: "BUSINESS DEVELOPMENT INTERN",
    imageSrc: "/aboutteam.png",
    linkedinUrl: "https://www.linkedin.com/in/siddhisen/",
  },
];

export default function Team() {
  return (
    <section className="bg-black px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* ───────────────────────── ORIGINAL CONTENT START ───────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <div>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            THE PMT<br />
            <span className="text-orange-500">BHARAT TEAM</span>
          </h2>
        </div>

        <div className="flex items-center justify-start md:justify-end text-gray-200">
          <div className="max-w-xs md:max-w-sm text-left md:text-right">
            <h4 className="abouttext tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm font-bold mb-2 uppercase underline underline-offset-8 decoration-white">
              OEM Services
            </h4>
            <p className="abouttext text-xs sm:text-sm md:text-base">
              <span className="font-bold">
                PMT – Pinnacle Mining Technology Pvt. Ltd.
              </span>
              provides higher productivity, safer operations, and lower lifecycle cost
              per tonne.
            </p>
          </div>
        </div>
      </div>

      {/* LARGE IMAGE */}
      <div className="relative rounded-2xl sm:rounded-3xl w-full min-h-[350px] sm:min-h-[450px] md:min-h-[600px] flex items-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 mb-16 sm:mb-20 md:mb-24">
        <Image
          src="/aboutteam.png"
          alt="Mining Machinery"
          fill
          priority
          className="object-cover object-center rounded-2xl sm:rounded-3xl"
        />
        <div className="absolute inset-0 bg-black/20 rounded-2xl sm:rounded-3xl"></div>
      </div>
      {/* ───────────────────────── ORIGINAL CONTENT END ───────────────────────── */}

      {/* ───────────────────────── FOUNDERS START ───────────────────────── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-none w-full text-center">
          Our <span className="text-orange-500">Founders</span>
        </h2>
        {/* Optional decorative line */}
        {/* Optional decorative line */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14">
        {FOUNDERS.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            imageSrc={member.imageSrc}
            linkedinUrl={member.linkedinUrl}
          />
        ))}
      </div>
      {/* ───────────────────────── FOUNDERS END ───────────────────────── */}

      {/* ───────────────────────── TECH TEAM START ───────────────────────── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 mt-20 gap-6">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-none w-full text-center">
          Our <span className="text-orange-500 w-full text-center">Tech Team</span>
        </h2>
        {/* Optional decorative line */}
        {/* Optional decorative line */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14">
        {TEAM_MEMBERS.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            imageSrc={member.imageSrc}
            linkedinUrl={member.linkedinUrl}
          />
        ))}
      </div>
      {/* ───────────────────────── TECH TEAM END ───────────────────────── */}


      {/* ───────────────────────── BUSINESS DEVELOPMENT TEAM START ───────────────────────── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 mt-20 gap-6">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-none">
          Our <span className="text-orange-500">  Business Development Team</span>
        </h2>
        {/* Optional decorative line */}
        {/* Optional decorative line */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14">
        {BUSINESS_DEVELOPMENT_TEAM.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            imageSrc={member.imageSrc}
            linkedinUrl={member.linkedinUrl}
          />
        ))}
      </div>
      {/* ───────────────────────── BUSINESS DEVELOPMENT TEAM END ───────────────────────── */}
    </section>
  );
}