import Image from "next/image";
import About from "../../components/About";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Approvals from "../../components/Certificates";
import Networks from "../../components/Networks";
import Updates from "../../components/Updates";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Approvals />
      <Networks />
      {/* <Updates/> */}
    </>
  );
}
