import { WobbleCardDemo } from "./UpdateCards";

export default function Updates() {
    



    return(<section className="bg-black w-full relative z-50 px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">LATEST <span className="text-orange-500">UPDATES</span><br/> & HIGHLIGHTS</h2>
        </div>
         <div className="flex items-center justify-start md:justify-end text-gray-200">
          <div className="max-w-xs md:max-w-sm text-left md:text-right">
            <h4 className="abouttext tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm font-bold mb-2 uppercase underline underline-offset-8 decoration-white">
              NEWS AND GALLERY
            </h4>
            <p className="abouttext text-xs sm:text-sm md:text-base">
Explore the latest updates, industry events, and on-ground activities that reflect our work, partnerships, and progress across the mining ecosystem.
            </p>
          </div>
        </div>
           
    </div>
    
     <div className="pt-8 sm:pt-10 md:pt-12 lg:pt-16">
      <WobbleCardDemo/>
     </div>

    </section>)
}