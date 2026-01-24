
const services=[
{heading:"India Market Entry AND Strategy",image:"/market.jpg",content:"We provide end-to-end support for organizations planning to enter or expand within the Indian market. Our services include in-depth market assessment, competitive and regulatory analysis, product–market fit evaluation, pricing strategy development, and localisation planning tailored to Indian operational conditions. By aligning global offerings with local customer needs, compliance requirements, and commercial realities, we help companies establish a strong market presence, reduce entry risk, and build a sustainable growth strategy in India."},
{heading:"Technology Localisation & Adaptation",image:"/technology.jpg",content:"We support the localisation and adaptation of mining technologies to meet Indian geological conditions, operational requirements, and cost expectations. Our approach includes engineering customisation, system optimisation, and practical design adjustments to ensure solutions perform reliably on site while remaining commercially viable. By aligning technology with local operating environments and constraints, we help organizations achieve effective deployment, improved performance, and long-term sustainability in Indian mining operations."},
{heading:"DGMS & Statutory Approvals",image:"/approvals.png",content:"We support organizations through the DGMS and statutory approval process with a structured roadmap, ensuring clarity on requirements, timelines, and documentation. Our service includes preparing and organizing technical dossiers and submission documents, coordinating required testing, and planning field trials for performance validation. We also assist with follow-ups and regular/renewal approvals where applicable, helping reduce delays and ensure compliant deployment in Indian mining operations."},
{heading:"Field Trials & Performance Validation",image:"/performance.jpg",content:"We plan and execute structured field trials to validate equipment performance under real mining conditions. Our service covers trial scope definition, site readiness, safety and execution planning, and performance benchmarking against agreed parameters such as productivity, reliability, and operating efficiency. We document results through clear reporting, capture operator and maintenance feedback, and translate on-ground learnings into actionable inputs for OEM design and engineering teams—supporting iterative improvements, stronger product–market fit, and deployment confidence."},
{heading:"After-Sales & Lifecycle Support",image:"",content:"We provide end-to-end after-sales and lifecycle support to keep equipment running reliably and customers confident post-deployment. Our service includes spares planning and inventory recommendations, preventive maintenance support, and structured service training for site teams to reduce downtime and improve response time. We also manage warranty handling through clear documentation, coordination with OEM teams, and timely issue resolution. By maintaining consistent service standards and proactive support, we help protect performance in the field and safeguard long-term brand reputation in the Indian market."},
{heading:"Partnership Models",image:"",content:"We design and support partnership structures that enable effective, compliant, and scalable collaboration in the Indian market. Our frameworks cover representation and channel-based models, joint ventures (JV) for deeper market presence, co-development arrangements to localise and improve products for Indian operating conditions, and long-term cooperation models aligned to shared commercial and operational goals. We help define roles and responsibilities, governance, commercial terms, and execution workflows—ensuring partnerships are practical to run, resilient over time, and focused on measurable outcomes."},
];
const service2=[
{heading:"Underground Mining Solutions & Consulting",image:"",content:"We provide underground mining solutions and consulting built around a problem-first approach. Our work begins with structured mine studies to understand site conditions, production constraints, safety risks, and operational bottlenecks. Based on these insights, we support technology selection and solution design—matching equipment, systems, and operating methods to the mine’s geology, layout, workforce capability, and cost targets. The result is a practical, implementation-ready recommendation that improves safety, productivity, and reliability while reducing the risk of adopting unsuitable technology."},
{heading:"Mechanised Drivage & Production",image:"",content:"We support mechanised development and production programs by recommending and integrating the right mix of equipment and systems for underground operations. This includes solutions around Road Headers, Continuous Miners, LHDs, and supporting integrated systems that improve cycle times, material flow, and face productivity. Our approach focuses on matching technology to site conditions—geology, seam characteristics, ventilation, power, and layout—so deployment is practical, safe, and commercially viable. The outcome is a structured mechanisation plan that strengthens productivity, reliability, and operational control across drivage and production."},
{heading:"Operation & Maintenance (O&M)",image:"",content:"We provide full Operation & Maintenance (O&M) support to ensure underground equipment and systems deliver consistent performance over the lifecycle. Our O&M model is built around measurable outcomes—higher equipment availability, improved productivity, and optimized cost per tonne. We manage maintenance planning and execution, breakdown response, spares and consumables strategy, and operator/technician training to reduce downtime and extend asset life. Through structured reporting and performance monitoring, we help stabilize operations, improve reliability, and drive predictable output in demanding mining conditions."},
{heading:"DGMS Compliance & Technical Support",image:"",content:"We provide end-to-end DGMS compliance support to help mining organizations and OEMs meet statutory requirements with clarity and confidence. Our service covers approval planning and submissions, inspection readiness, and the preparation and management of technical documentation required for DGMS interactions. We also support coordination during site inspections, address observations and clarifications, and assist with extensions/renewals where applicable—helping reduce compliance risk, avoid operational delays, and ensure smoother deployment and continued operation in Indian mines."},
{heading:"Spares, Consumables & Lifecycle Management",image:"",content:"We build reliable spares and consumables strategies that keep operations running with minimal downtime and predictable costs. Our service includes on-site critical spares planning, min–max inventory norms, replenishment scheduling, and usage tracking aligned to production and maintenance cycles. Where suitable, we structure pay-on-consumption or managed inventory models to reduce working capital burden while ensuring availability at the mine site. We also support lifecycle optimisation through wear-part monitoring, failure trend analysis, and replacement planning—helping improve equipment uptime, extend component life, and lower total cost of ownership over the full operating lifecycle."},
{heading:"DGMS Compliance & Technical Support",image:"",content:"We deliver structured training and capability-building programs to ensure teams operate and maintain underground equipment safely and effectively. Our programs cover operator training for correct machine handling and productivity practices, maintenance training for troubleshooting, preventive routines, and component care, and safety training aligned to mining operating conditions and statutory expectations. Training can be delivered through classroom sessions, on-site practical modules, and periodic refreshers, with clear competency checks where required. The objective is to improve safe behavior, reduce breakdowns and misuse, and build a confident workforce that can sustain performance over the equipment lifecycle."},
]



 

function Products() {
  return (
    <section className="bg-black relative z-50 w-full  py-20">
      
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-20 px-10">
        <div>
          <h2 className="text-5xl font-extrabold leading-tight text-white">
        <span className="text-orange-500">  01 </span>  Services for OEMs & Technology Providers
          </h2>
        </div>

        <div className="flex items-center justify-end text-gray-200">
          <div className="max-w-sm text-right">
            <h4 className="tracking-[0.25em] text-lg font-bold mb-2 uppercase underline underline-offset-8 decoration-white">
              OEM SERVICES
            </h4>
            <p className="text-md">
             PMT – Pinnacle Mining Technology Pvt. Ltd.
provides Faster India entry, reduced regulatory and performance risk, and protected brand reputation.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="space-y-24">
        {services.map((service, idx) => {
          return (
            <div key={idx} className="relative z-50">
              {idx % 2 === 0 ? (
                <RightCard
                  heading={service.heading}
                  content={service.content}
                  image={service.image}
                />
              ) : (
                <LeftCard
                  heading={service.heading}
                  content={service.content}
                  image={service.image}
                />
              )}
            </div>
          );
        })}
      </div>

       <div className="grid md:grid-cols-2 gap-10 mb-20 px-10">
        <div>
          <h2 className="text-5xl font-extrabold leading-tight text-white">
              <span className="text-orange-500">  02 </span> Services for Mine Owners & Operators
          </h2>
        </div>

        <div className="flex items-center justify-end text-gray-200">
          <div className="max-w-sm text-right">
            <h4 className="tracking-[0.25em] text-lg font-bold mb-2 uppercase underline underline-offset-8 decoration-white">
              Services for Mine Owners
            </h4>
            <p className="text-md">
              PMT – Pinnacle Mining Technology Pvt. Ltd.
provides higher productivity, safer operations, and lower lifecycle cost per tonne.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="space-y-24">
        {service2.map((service, idx) => {
          return (
            <div key={idx} className="relative z-50">
              {idx % 2 === 0 ? (
                <RightCard
                  heading={service.heading}
                  content={service.content}
                  image={service.image}
                />
              ) : (
                <LeftCard
                  heading={service.heading}
                  content={service.content}
                  image={service.image}
                />
              )}
            </div>
          );
        })}
      </div>





    </section>
  );
}

export default Products;
import Image from "next/image";
import { Target } from "lucide-react";

 function RightCard({content,heading,image}) {
  return (
    <section className="w-full bg-orange-500 py-16 px-6 md:px-16"
  >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white">
          {/* Heading with Icon */}
         <div className="flex flex-col gap-5">
             <div className="flex items-center gap-4">
            <div className=" rounded-full bg-white flex items-center justify-center">
                             <Image
            src="/rightcard.png"
            alt="India Market Strategy"
            width={64}
            height={64}
            className="object-cover rounded-2xl"
            priority
          />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold uppercase">
              {heading}
            </h2>
            
          </div>
  <div className="w-full h-[2px] bg-white mt-4 mb-6"></div>
          </div>

          {/* Paragraph */}
          <p className="text-md md:text-md leading-relaxed text-white/90 max-w-xl">
          {content}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[320px] md:h-[380px]">
          <Image
            src={image}
            alt="India Market Strategy"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}





 function LeftCard({content,heading,image}) {
  return (
    <section className="w-full bg-black py-16 px-6 md:px-16"
  >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[320px] md:h-[380px]">
          <Image
            src={image}
            alt="India Market Strategy"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>


        {/* LEFT CONTENT */}
        <div className="text-white">
          {/* Heading with Icon */}
          <div className="flex flex-col gap-5">
             <div className="flex items-center gap-4">
            <div className=" rounded-full bg-white flex items-center justify-center">
                             <Image
            src="/leftcard.png"
            alt="India Market Strategy"
            width={64}
            height={64}
            className="object-cover rounded-2xl"
            priority
          />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold uppercase">
              {heading}
            </h2>
            
          </div>
  <div className="w-full h-[2px] bg-white mt-4 mb-6"></div>
          </div>
         
          {/* Underline */}
        

          {/* Paragraph */}
          <p className="text-sm md:text-base leading-relaxed text-white/90 max-w-xl">
          {content}
          </p>
        </div>

      

      </div>
    </section>
  );
}



export {LeftCard,RightCard}


