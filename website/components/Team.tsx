import Image from "next/image"




export default function Team() {
    

    return(< section className="bg-black px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
    
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <div>
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                THE PMT<br />
                <span className="text-orange-500">
                  BHARAT TEAM
                </span>
              </h2>
            </div>
    
            <div className="flex items-center justify-start md:justify-end text-gray-200">
              <div className="max-w-xs md:max-w-sm text-left md:text-right">
                <h4 className="abouttext tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm font-bold mb-2 uppercase underline underline-offset-8 decoration-white">
                  OEM Services
                </h4>
                <p className="abouttext text-xs sm:text-sm md:text-base">
          <span className="font-bold">PMT – Pinnacle Mining Technology Pvt. Ltd.</span> 
provides igher productivity, safer operations, and lower lifecycle cost per tonne.
                </p>
              </div>
            </div>
          </div>
    
          {/* ───────────────────────── IMAGE GRID CONTENT ───────────────────────── */}
          <div
       
            className="relative rounded-2xl sm:rounded-3xl w-full min-h-[350px] sm:min-h-[450px] md:min-h-[600px] flex items-center mt-8 sm:mt-10 md:mt-12 lg:mt-16"
          >
            <Image
              src="/aboutteam.png"
              alt="Mining Machinery"
              fill
              priority
              className="object-cover object-center rounded-2xl sm:rounded-3xl"
            />
    
            <div className="absolute inset-0 bg-black/20 rounded-2xl sm:rounded-3xl"></div>
    
           
          </div>
    


    
    
    
    </section>)
}