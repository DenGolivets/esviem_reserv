import AboutUs from "@/components/AboutUs/AboutUs";
import ConstructionConsulting from "@/components/Construction/ConstructionConsulting";
import Contacts from "@/components/Contacts/Contacts";
import FinancialConsulting from "@/components/Financial/FinancialConsulting";
import Hero from "@/components/Hero/Hero";
import Hero2 from "@/components/Hero2/Hero2";
import Hero3 from "@/components/Hero3/Hero3";
import LandConsulting from "@/components/Land/LandConsulting";
import LegalConsulting from "@/components/Legal/LegalConsulting";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero3 />
      <Hero />
      <Hero2 />
      <div className="h-16 w-full bg-gradient-to-b from-[var(--hero-gold)] via-[var(--hero-bg2)] to-[var(--hero-bg)]" />
      <AboutUs />
      <div className="h-16 w-full bg-gradient-to-b from-[var(--hero-gold)] via-[var(--hero-bg2)] to-[var(--hero-bg)]" />
      <LandConsulting />
      <ConstructionConsulting />
      <FinancialConsulting />
      <LegalConsulting />
      <Contacts />
    </div>
  );
}