"use client";

import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";
import LandConsultingWrapper from "./LandConsultingWrapper";
import TopBar from "../TopBar";
import Title from "../Title";
import { useLingui } from "@lingui/react";

const LandConsulting = () => {
  const { i18n } = useLingui();

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="land-section"
      className="min-h-screen w-full overflow-hidden"
      ref={ref}
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="relative w-full h-full">
        <div className="container mx-auto px-4 py-4 relative z-10">
          {/* Contact Info Block - верхний правый угол */}
          <TopBar inView={inView} />
          {/* Header */}
          <Title
            inView={inView}
            icon={<MapPin className="w-10 h-10 text-white" />}
            titleParts={[i18n._("Земельний"), i18n._("консалтинг")]}
            textGradientClasses={[
              "bg-gradient-to-r from-green-400 to-emerald-500",
              "bg-gradient-to-r from-green-400 to-emerald-500",
            ]}
            iconGradientClasses="bg-gradient-to-r from-green-500 to-emerald-500"
            iconBoxShadowClasses="0 0 40px rgba(16, 185, 129, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)"
          />
          <LandConsultingWrapper />
        </div>
      </div>
    </section>
  );
};

export default LandConsulting;
