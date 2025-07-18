import ConstructionConsulting from "@/components/Construction/ConstructionConsulting";
import Contacts from "@/components/Contacts";
import FinancialConsulting from "@/components/Financial/FinancialConsulting";
import Finish from "@/components/Finish/Finish";
import Hero from "@/components/Hero/Hero";
import LandConsulting from "@/components/Land/LandConsulting";
import LegalConsulting from "@/components/Legal/LegalConsulting";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <LandConsulting />
      <ConstructionConsulting />
      <FinancialConsulting />
      <LegalConsulting />
      <Contacts />
      <Finish />
    </div>
  );
}
