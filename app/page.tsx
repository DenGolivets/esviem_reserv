import ConstructionConsulting from "@/components/Construction/ConstructionConsulting";
import Contacts from "@/components/Contacts/Contacts";
import FinancialConsulting from "@/components/Financial/FinancialConsulting";
import Finish from "@/components/Finish/Finish";
import Hero from "@/components/Hero/Hero";
import LandConsulting from "@/components/Land/LandConsulting";
import LegalConsulting from "@/components/Legal/LegalConsulting";
import PreFinish from "@/components/PreFinish/PreFinish";
import PreFinish2 from "@/components/PreFinish2/PreFinish2";
import PreFinish3 from "@/components/PreFinish3/PreFinish3";

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
      <PreFinish />
      <PreFinish3 />
      <PreFinish2 />
    </div>
  );
}
