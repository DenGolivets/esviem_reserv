"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building } from "lucide-react";
import ConstructionWrapper from "./ConstructionWrapper";

export default function ConstructionConsulting() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section
      id="construction-section"
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden "
    >
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8 shadow-2xl"
            style={{
              boxShadow:
                "0 0 40px rgba(249, 115, 22, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)",
              transform: "perspective(1000px)",
            }}
          >
            <Building className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-vollkorn">
            <span className="bg-gradient-to-r mr-2 from-orange-400 to-red-500 bg-clip-text text-transparent">
              Будівельний
            </span>
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Консалтинг
            </span>
          </h2>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Професійні послуги в галузі будівництва, документообігу та правового
            супроводу
          </motion.p>
          <div className="flex items-center text-center justify-center">
            <h3 className="font-vollkorn text-2xl md:text-3xl xl:text-4xl font-bold text-orange-400 mt-0 md:mt-14 md:mb-6">
              ВИДИ ПОСЛУГ В ГАЛУЗІ БУДІВНИЦТВА
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full shadow-lg"
          /> */}
        </motion.div>

        <ConstructionWrapper />
      </div>
    </section>
  );
}
