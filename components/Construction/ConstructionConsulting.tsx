"use client";

import { useInView } from "react-intersection-observer";

import ConstructionWrapper from "./ConstructionWrapper";
import TopBar from "../TopBar";
import Title from "../Title";
import { Building } from "lucide-react";
import { useLingui } from "@lingui/react";

export default function ConstructionConsulting() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { i18n } = useLingui();
  return (
    <section
      id="construction-section"
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden"
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
          icon={<Building className="w-10 h-10 text-white" />}
          titleParts={[i18n._("Будівельний"), i18n._("консалтинг")]}
          textGradientClasses={[
            "bg-gradient-to-r from-orange-400 to-red-500",
            "bg-gradient-to-r from-orange-400 to-red-500",
          ]}
          iconGradientClasses="bg-gradient-to-r from-orange-400 to-red-500"
        />
        <ConstructionWrapper />
      </div>
    </section>
  );
}
