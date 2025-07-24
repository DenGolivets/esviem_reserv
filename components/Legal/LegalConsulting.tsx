"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Scale } from "lucide-react";
import LegalConsultingWrapper from "./LegalConsultingWrapper";

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
    >
      {/* 3D Legal Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.3'%3E%3Cpath d='M30 0l15 15-15 15-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: "perspective(1000px) rotateX(20deg)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, rotateY: -180 }}
            animate={inView ? { scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-8 shadow-2xl relative"
            style={{
              boxShadow:
                "0 0 40px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)",
              transform: "perspective(1000px)",
            }}
          >
            <Scale className="w-10 h-10 text-white" />
            {/* Pulsing ring */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 border-2 border-purple-400 rounded-full"
            />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-oleo-script">
            <span className="bg-gradient-to-r mr-2 from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Юридичні
            </span>

            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Послуги
            </span>
          </h2>
        </motion.div>
        <LegalConsultingWrapper />
      </div>
    </section>
  );
}
