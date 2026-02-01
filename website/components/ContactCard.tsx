import React, { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import axios from 'axios';

const ContactForm = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [number,setNumber]=useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/sendmail', {
        name,
        email,
        number
      });
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setNumber("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };
  
  return (
    // Outer Container (Simulating the dark background from your screenshot)
   <div className="lg:w-3xl md:w-3xl sm:w-2xl mx-auto mt-5 flex items-center justify-center">
      
  {/* Main Card */}
  <div className="w-lg p-4 bg-black/20 backdrop-blur-md border border-white/20 
                  rounded-2xl shadow-xl
                  px-8 py-6 md:px-10 md:py-6
                  flex flex-col md:flex-row gap-10
                  overflow-hidden relative">

    {/* Left Side: Form */}
    <div className="flex-1 z-10 flex flex-col justify-center">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-white mb-1">
          GET IN <span className="text-orange-500">TOUCH</span>
        </h2>
        <p className="text-gray-300 text-sm font-light">
          PMT Bharat brings together expertise in mining
        </p>
      </div>

      <form className="space-y-3 flex flex-col" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          className="w-full bg-transparent border border-gray-500/50 rounded-full
                     py-2.5 px-5 text-sm text-white placeholder-gray-400
                     focus:outline-none focus:border-orange-500"
        />

        <input
          type="email"
          placeholder="E-mail id"
          className="w-full bg-transparent border border-gray-500/50 rounded-full
                     py-2.5 px-5 text-sm text-white placeholder-gray-400
                     focus:outline-none focus:border-orange-500"
        />
         
         <div className='flex w-full gap-3'> <input
          type="Number"
          placeholder="Country Code"
          className="max-w-xs bg-transparent border border-gray-500/50 rounded-full
                     py-2.5 px-5 text-sm text-white placeholder-gray-400
                     focus:outline-none focus:border-orange-500"
        />
 <input
          type="tel"
          placeholder="Phone No."
          className="max-w-xs bg-transparent border border-gray-500/50 rounded-full
                     py-2.5 px-5 text-sm text-white placeholder-gray-400
                     focus:outline-none focus:border-orange-500"
        />
</div>
       
       <button
  className="
    relative bg-orange-500 hover:bg-orange-600
    rounded-full py-2 px-4
    flex items-center justify-end
    group shadow-md shadow-orange-500/20
    
  "
 
>
  {/* Centered text */}
  <span
    className="
      absolute left-1/2 -translate-x-1/2
      font-bold text-white text-base tracking-wide
    "
  >
    SEND
  </span>

  {/* Right arrow */}
  <div
    className="
      bg-white rounded-full w-8 h-8
      flex items-center justify-center
      group-hover:scale-105 transition-transform
    "
  >
    <MoveUpRight className="text-orange-500 w-4 h-4" />
  </div>
</button>

      </form>
    </div>

    {/* Right Side: Map */}
   
    {/* Glow */}
    <div className="absolute -bottom-14 -left-14 w-48 h-48 
                    bg-orange-600/20 rounded-full blur-[80px]
                    pointer-events-none"></div>
  </div>
</div>

  );
};

export default ContactForm;