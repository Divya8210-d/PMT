import Image from "next/image";

interface FeatureCardProps {
  title: string;
  text: string;
}

export default function Approvals() {
  return (
    <section className="bg-[#F3740B] w-full z-50 relative px-6 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Title Section */}
        <div>
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight">
            SAFETY & <br />
            {/* Changed nested h2 to span for valid HTML/SEO, styled identically */}
            <span className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-black block mt-1">
              APPROVALS
            </span>
          </h2>
        </div>

        {/* Description Section */}
        <div className="flex items-center justify-start md:justify-end text-gray-100">
          <div className="w-full md:max-w-sm text-left md:text-right">
            <h4 className="tracking-[0.2em] sm:tracking-[0.25em] text-sm sm:text-sm font-bold mb-3 uppercase underline underline-offset-8 decoration-white">
              OEM SERVICES
            </h4>
            <p className="text-sm sm:text-sm md:text-base leading-relaxed">
              PMT – Pinnacle Mining Technology Pvt. Ltd. <br className="hidden md:block" />
              An underground mining problem-solving partner, not a trading house.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Cards Container */}
      <div className="bg-orange-500/20 md:bg-orange-500 p-0 sm:p-8 md:p-10 mt-10 sm:mt-10 md:mt-12 rounded-3xl md:rounded-lg">
        {/* Inner grid wrapper with padding for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-0">
          <FeatureCard
            title="DGMS"
            text="Our safety solutions are aligned with DGMS guidelines, ensuring adherence to statutory safety requirements for mining operations in India."
          />
          <FeatureCard
            title="FLAMEPROOF"
            text="Certified flameproof equipment enables safe use in hazardous mining environments where flammable gases and dust may be present."
          />
          <FeatureCard
            title="IS / IG STANDARDS"
            text="Intrinsically safe designs limit energy levels to reduce ignition risk, supporting deployment in sensitive and high-risk mining zones."
          />
          <FeatureCard
            title="EXPLOSION-PROOF"
            text="Solutions are designed and tested to withstand harsh underground environments, supporting safe deployment in high-risk zones."
          />
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ title, text }: FeatureCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 sm:gap-4 md:gap-5 bg-white rounded-3xl md:rounded-full px-6 sm:px-6 md:px-8 py-6 sm:py-5 md:py-6 shadow-md h-full sm:h-auto">
      {/* Icon */}
      <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-orange-100 sm:bg-transparent md:bg-transparent p-3 sm:p-0">
        <Image
          src="/VISION ICON.png"
          alt="icon"
          width={48}
          height={48}
          className="w-10 h-10 sm:w-12 md:w-16 md:h-auto object-contain"
        />
      </div>

      {/* Text */}
      <div className="text-center sm:text-left flex-1">
        <h3 className="text-sm sm:text-sm md:text-base font-bold text-gray-900 uppercase mb-2 sm:mb-1">
          {title}
        </h3>
        <p className="text-xs sm:text-xs md:text-sm text-gray-600 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};