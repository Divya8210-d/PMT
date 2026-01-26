import Image from "next/image";

interface FeatureCardProps {
  title: string;
  text: string;
}


export default function Approvals() {
    
    return(<section className="bg-[#F3740B] w-full z-50 relative px-16 py-10">
    <div className="grid md:grid-cols-2 gap-10">
        <div>
            <h2 className="text-5xl text-white font-extrabold leading-tight">SAFETY & <br/><h2 className="text-black">APPROVALS</h2> </h2>
        </div>
         <div className="flex items-center justify-end text-gray-200">
          <div className="max-w-sm text-right">
            <h4 className="abouttext tracking-[0.25em] text-lg font-bold mb-2 uppercase underline underline-offset-8 decoration-white">
              OEM SERVICES
            </h4>
            <p className="abouttext text-md">
             PMT – Pinnacle Mining Technology Pvt. Ltd.
An underground mining problem-solving partner, not a trading house.
            </p>
          </div>
        </div>
           
    </div>
<div className="bg-orange-500 p-10">
  <div className="grid grid-cols-2 gap-6">
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

 
    </section>)
}




const FeatureCard = ({ title, text }: FeatureCardProps) => {
  return (
    <div className="flex items-center gap-5 bg-white rounded-full px-8 py-6 shadow-md">
      
      {/* Icon */}
      <div className="flex items-center justify-center  rounded-full bg-orange-500">
       <Image src="/VISION ICON.png" alt="icon" width={72} height={72} />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 uppercase">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-snug mt-1">
          {text}
        </p>
      </div>
    </div>
  );
};
