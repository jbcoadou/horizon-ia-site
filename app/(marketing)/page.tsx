import { HeroSection } from "@/components/sections/HeroSection";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { WhyUs } from "@/components/sections/WhyUs";
import { Method } from "@/components/sections/Method";
import { Automations } from "@/components/sections/Automations";
import { ForWhom } from "@/components/sections/ForWhom";
import { Testimonials } from "@/components/sections/Testimonials";
import { Founder } from "@/components/sections/Founder";
import { Audit } from "@/components/sections/Audit";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <WhyUs />
      <Method />
      <Automations />
      <ForWhom />
      <Testimonials />
      <Founder />
      <Audit />
      <FAQ />
    </>
  );
}
