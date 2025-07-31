"use client";

import { useInView } from "react-intersection-observer";
import { DollarSign } from "lucide-react";
import FinancialConsultingWrapper from "./FinancialConsultingWrapper";
import TopBar from "../TopBar";
import Title from "../Title";

export default function FinancialConsulting() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="financial-section"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto px-4 py-4 relative z-10">
        {/* Contact Info Block - верхний правый угол */}
        <TopBar inView={inView} />
        {/* Header */}
        <Title
          inView={inView}
          icon={<DollarSign className="w-10 h-10 text-white" />}
          titleParts={["Фінансовий", "консалтинг"]}
          textGradientClasses={[
            "bg-gradient-to-r from-yellow-400 to-amber-500",
            "bg-gradient-to-r from-yellow-400 to-amber-500",
          ]}
          iconGradientClasses="bg-gradient-to-r from-yellow-500 to-amber-500"
          pulseRing={true}
          iconBoxShadowClasses="0 0 40px rgba(234, 179, 8, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)"
          pulseRingClassName="border-yellow-400"
        />
        <FinancialConsultingWrapper />
      </div>
    </section>
  );
}
