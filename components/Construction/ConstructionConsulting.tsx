"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building } from "lucide-react";
import ConstructionWrapper from "./ConstructionWrapper";
import TopBar from "../TopBar";

export default function ConstructionConsulting() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
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
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, rotateY: -180 }}
            animate={inView ? { scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8 shadow-2xl"
            style={{
              boxShadow:
                "0 0 40px rgba(249, 115, 22, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)",
              transform: "perspective(1000px)",
            }}
          >
            <Building className="w-10 h-10 text-white" />
          </motion.div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white flex flex-col gap-1 md:gap-4
              items-center justify-center md:flex-row leading-relaxed"
          >
            <span className="bg-gradient-to-r mr-2 from-orange-400 to-red-500 bg-clip-text text-transparent">
              Будівельний
            </span>
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              консалтинг
            </span>
          </h2>
        </motion.div>

        <ConstructionWrapper />
      </div>
    </section>
  );
}
