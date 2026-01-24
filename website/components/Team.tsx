import Image from "next/image"




export default function Team() {
    

    return(< section className=" bg-black px-16 py-10">
    
     <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-white text-5xl font-extrabold leading-tight">
                THE PMT<br />
                <span className="text-orange-500">
                  BHARAT TEAM
                </span>
              </h2>
            </div>
    
            <div className="flex items-center justify-end text-gray-200">
              <div className="max-w-sm text-right">
                <h4 className="abouttext tracking-[0.25em] text-lg font-bold mb-2 uppercase underline underline-offset-8 decoration-white">
                  OEM Services
                </h4>
                <p className="abouttext text-md">
          <span className="font-bold">PMT – Pinnacle Mining Technology Pvt. Ltd.</span> 
provides igher productivity, safer operations, and lower lifecycle cost per tonne.
                </p>
              </div>
            </div>
          </div>
    
          {/* ───────────────────────── IMAGE GRID CONTENT ───────────────────────── */}
          <div
       
            className="relative rounded-3xl w-full min-h-[600px] flex items-center mt-5"
          >
            <Image
              src="/aboutteam.png"
              alt="Mining Machinery"
              fill
              priority
              className="object-cover object-center rounded-3xl"
            />
    
            <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
    
           
          </div>
    


    
    
    
    </section>)
}