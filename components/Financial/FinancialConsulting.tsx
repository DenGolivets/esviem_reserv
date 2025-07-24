"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  DollarSign,
  PieChart,
  BarChart3,
  Coins,
  CreditCard,
  Wallet,
} from "lucide-react";
import FinancialConsultingWrapper from "./FinancialConsultingWrapper";

const floatingIcons = [
  DollarSign,
  Coins,
  CreditCard,
  Wallet,
  BarChart3,
  PieChart,
];

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
    >
      {/* 3D Financial Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eab308' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: "perspective(1000px) rotateX(20deg)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Floating 3D Financial Icons */}
      <div className="absolute inset-0">
        {[...Array(18)].map((_, i) => {
          const IconComponent = floatingIcons[i % floatingIcons.length];
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, 30, 0],
                rotateY: [0, 360],
                rotateX: [0, 180, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 15 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut",
              }}
            >
              <div className="relative">
                <IconComponent
                  className="w-6 h-6 text-yellow-400 opacity-30"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(234, 179, 8, 0.6))",
                  }}
                />
                <div
                  className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 blur-sm"
                  style={{
                    transform: "translateZ(-5px)",
                  }}
                />
              </div>
            </motion.div>
          );
        })}
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mb-8 shadow-2xl relative"
            style={{
              boxShadow:
                "0 0 40px rgba(234, 179, 8, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)",
              transform: "perspective(1000px)",
            }}
          >
            <DollarSign className="w-10 h-10 text-white" />
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
              className="absolute inset-0 border-2 border-yellow-400 rounded-full"
            />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-oleo-script">
            <span className="bg-gradient-to-r mr-2 from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Фінансовий
            </span>

            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Консалтинг
            </span>
          </h2>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Професійні фінансові рішення, податкове планування та оптимізація
            бізнес-процесів
          </motion.p>
          <div className="flex items-center text-center justify-center">
            <h3 className="font-oleo-script text-2xl md:text-3xl xl:text-4xl font-bold text-yellow-400 mt-0 md:mt-14 md:mb-6">
              ВИДИ ФІНАНСОВИХ ПОСЛУГ
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full shadow-lg"
          /> */}
        </motion.div>
        <FinancialConsultingWrapper />
      </div>
    </section>
  );
}
