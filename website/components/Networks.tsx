import { WorldMapDemo } from "./Map";

export default function Networks() {
    



    return(<section className="bg-black w-full relative z-50 px-16 py-10">
    
     <div className="grid md:grid-cols-2 gap-10">
        <div>
            <h2 className="text-5xl font-extrabold leading-tight text-white">A <span className="text-orange-500">WORLDWIDE</span> <br/> MINING NETWORK</h2>
        </div>
         <div className="flex items-center justify-end text-gray-200">
          <div className="max-w-sm text-right">
            <h4 className="abouttext tracking-[0.25em] text-lg font-bold mb-2 uppercase underline underline-offset-8 decoration-white">
              OUR CERTIFICATIONS
            </h4>
            <p className="abouttext text-md">
        We work with mining organizations, partners, and stakeholders across regions, building trusted relationships that support safe, efficient, and compliant operations worldwide
            </p>
          </div>
        </div>
           
    </div>
    
    <div>
        {/**indian map */}
        <WorldMapDemo/>
    </div>
    
    
    
    
    </section>)
}