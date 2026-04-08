import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import WhatWeDo from "@/components/WhatWeDo";
import Playbook from "@/components/Playbook";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <WhatWeDo />
        <Playbook />
        <Stats />
        <Testimonials />
        <Team />
      </main>
      <Footer />
    </>
  );
}
