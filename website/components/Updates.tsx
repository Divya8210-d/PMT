import { WobbleCardDemo } from "./UpdateCards";

export default function Updates() {
    



    return(<section className="bg-black w-full relative z-50 px-16 py-10 ">
         <div className="grid md:grid-cols-2 gap-10">
        <div>
            <h2 className="text-5xl font-extrabold leading-tight text-white">LATEST <span className="text-orange-500">UPDATES</span><br/> & HIGHLIGHTS</h2>
        </div>
         <div className="flex items-center justify-end text-gray-200">
          <div className="max-w-sm text-right">
            <h4 className="abouttext tracking-[0.25em] text-lg font-bold mb-2 uppercase underline underline-offset-8 decoration-white">
              NEWS AND GALLERY
            </h4>
            <p className="abouttext text-md">
Explore the latest updates, industry events, and on-ground activities that reflect our work, partnerships, and progress across the mining ecosystem.
            </p>
          </div>
        </div>
           
    </div>
    
     <div className="pt-10">
      <WobbleCardDemo/>
     </div>

    </section>)
}