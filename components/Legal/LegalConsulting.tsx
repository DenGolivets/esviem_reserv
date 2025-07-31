"use client";

import { useInView } from "react-intersection-observer";
import { Scale } from "lucide-react";
import LegalConsultingWrapper from "./LegalConsultingWrapper";
import TopBar from "../TopBar";
import Title from "../Title";

export default function LegalConsulting() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="legal-section"
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
          icon={<Scale className="w-10 h-10 text-white" />}
          titleParts={["Юридичні", "послуги"]}
          textGradientClasses={[
            "bg-gradient-to-r from-purple-400 to-indigo-500",
            "bg-gradient-to-r from-purple-400 to-indigo-500",
          ]}
          iconGradientClasses="bg-gradient-to-r from-purple-500 to-indigo-500"
          pulseRing={true}
          iconBoxShadowClasses="0 0 40px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)"
          pulseRingClassName="border-purple-400"
        />
        <LegalConsultingWrapper />
      </div>
    </section>
  );
}
