"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";
import LandConsultingWrapper from "./LandConsultingWrapper";
import TopBar from "../TopBar";

const LandConsulting = () => {
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
          <TopBar inView={inView}/>
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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-8 shadow-2xl"
              style={{
                boxShadow:
                  "0 0 40px rgba(16, 185, 129, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)",
                transform: "perspective(1000px)",
              }}
            >
              <MapPin className="w-10 h-10 text-white" />
            </motion.div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white flex flex-col gap-1 md:gap-4
items-center justify-center md:flex-row leading-relaxed"
            >
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Земельний
              </span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                консалтинг
              </span>
            </h2>
          </motion.div>
          <LandConsultingWrapper />
        </div>
      </div>
    </section>
  );
};

export default LandConsulting;
