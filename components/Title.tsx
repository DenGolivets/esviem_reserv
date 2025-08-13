"use client";

import React from "react";
import { motion } from "framer-motion";

interface ITitle {
  inView: boolean;
  icon: React.ReactNode;
  titleParts: [string, string];
  textGradientClasses?: [string, string];
  iconGradientClasses?: string;
  iconBoxShadowClasses?: string;
  pulseRing?: boolean;
  className?: string;
  pulseRingClassName?: string;
}

const Title = ({
  inView,
  icon,
  titleParts,
  textGradientClasses = [
    "bg-gradient-to-r from-orange-400 to-red-500",
    "bg-gradient-to-r from-orange-400 to-red-500",
  ],
  iconGradientClasses = "bg-gradient-to-r from-orange-500 to-red-500",
  iconBoxShadowClasses = "0 0 40px rgba(249, 115, 22, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)",
  pulseRing = false,
  className = "",
  pulseRingClassName = "",
}: ITitle) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay: 0.2 }}
      className={`text-center mb-16 ${className}`}
    >
      <motion.div
        initial={{ scale: 0.8, rotateY: -180 }}
        animate={inView ? { scale: 1, rotateY: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.2 }}
        className={`inline-flex items-center justify-center w-20 h-20 ${iconGradientClasses} rounded-full mb-8 shadow-2xl relative`}
        style={{
          boxShadow: `${iconBoxShadowClasses}`,
          transform: "perspective(1000px)",
        }}
      >
        <div className="text-white w-10 h-10">
          {icon}
          {pulseRing && (
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
              className={`absolute inset-0 border-2 rounded-full ${pulseRingClassName}`}
            />
          )}
        </div>
      </motion.div>

      <h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white flex flex-col gap-1 md:gap-4
              items-center justify-center lg:flex-row"
      >
        <span
          className={`${textGradientClasses[0]} bg-clip-text text-transparent mr-2`}
        >
          {titleParts[0]}
        </span>
        <span
          className={`${textGradientClasses[1]} bg-clip-text text-transparent`}
        >
          {titleParts[1]}
        </span>
      </h2>
    </motion.div>
  );
};

export default Title;
