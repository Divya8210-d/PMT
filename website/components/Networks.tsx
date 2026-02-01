import { WorldMapDemo } from "./Map";

export default function Networks() {
    



    return(<section className="bg-black w-full relative z-50 px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
    
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">A <span className="text-orange-500">WORLDWIDE</span> <br/> MINING NETWORK</h2>
        </div>
         <div className="flex items-center justify-start md:justify-end text-gray-200">
          <div className="max-w-xs md:max-w-sm text-left md:text-right">
            <h4 className="abouttext tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm font-bold mb-2 uppercase underline underline-offset-8 decoration-white">
              OUR CERTIFICATIONS
            </h4>
            <p className="abouttext text-xs sm:text-sm md:text-base">
        We work with mining organizations, partners, and stakeholders across regions, building trusted relationships that support safe, efficient, and compliant operations worldwide
            </p>
          </div>
        </div>
           
    </div>
    
    <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
        {/**indian map */}
        <WorldMapDemo/>
    </div>
    
    
    
    
    </section>)
}