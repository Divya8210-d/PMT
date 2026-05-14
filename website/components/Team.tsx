import Image from "next/image";
import TeamCard from "./TeamCard";

const FOUNDERS = [
  {
    name: "Mr. Akhshat Sri Mohan",
    role: "CEO",
    imageSrc: "/AKSHAT.jpeg",
   
    description: "Visionary Leader with 10+ years of vast experience in Fiber Network & Software Planning — pioneering digital transformation in the energy sector.",
  },
  {
    name: "Mr. Mrigendra R. Tripathi",
    role: "CBDO",
    imageSrc: "/TRIPATHI.jpeg",
   
    description: "Expert in Strategy & Business Development — orchestrating TerraForge's global expansion, partnerships, and market penetration across emerging industrial economies.",
  },

];
const TEAM_MEMBERS = [
  {
    name: "DIVYANSHU CHOUBEY",
    role: "MARKETING HEAD ",
    imageSrc: "/divyanshu.jpeg",
   
   
  },
  {
    name: "HIYANSHU GUPTA",
    role: "SYSTEM ENGINEER",
    imageSrc: "/hiyanshu.png",
   

  },
  {
    name: "ALOK KUMAR",
    role: "APP DEVELOPER",
    imageSrc: "/alok.jpeg",
  
    
  },
  {
    name: "JINAY JAIN",
    role: "ROBOTICS DOMAIN INTERN",
    imageSrc: "/jinay.png",
    
    
  },
];
const BUSINESS_DEVELOPMENT_TEAM = [
  {
    name: "SIDDHI SEN",
    role: "BUSINESS DEVELOPMENT INTERN",
    imageSrc: "/siddhi.jpeg",
    
   
  },
];

export default function Team() {
  return (
    <section className="bg-black px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* ───────────────────────── ORIGINAL CONTENT START ───────────────────────── */}
      

      {/* LARGE IMAGE */}
     
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
  
            description={member.description}
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
           
            
          />
        ))}
      </div>
      {/* ───────────────────────── BUSINESS DEVELOPMENT TEAM END ───────────────────────── */}
    </section>
  );
}