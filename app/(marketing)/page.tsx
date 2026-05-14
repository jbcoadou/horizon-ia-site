import { HeroSection } from "@/components/sections/HeroSection";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { WhyUs } from "@/components/sections/WhyUs";
import { Method } from "@/components/sections/Method";
import { ForWhom } from "@/components/sections/ForWhom";
import { Testimonials } from "@/components/sections/Testimonials";
import { Founder } from "@/components/sections/Founder";
import { Offers } from "@/components/sections/Offers";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <WhyUs />
      <Method />
      <ForWhom />
      <Testimonials />
      <Founder />
      <Offers />
      <FAQ />
    </>
  );
}
