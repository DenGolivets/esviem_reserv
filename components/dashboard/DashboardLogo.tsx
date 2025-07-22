"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DashboardLogo() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center"
      >
        {/* ESVIEM with golden V */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* <span className="text-black">ES</span> */}
          <span
            className="inline-block align-baseline"
          >
            <Image
              src="/esviem2.png"
              alt="V"
              width={500}
              height={500}
              priority
              className="block w-85 h-26"
            />
          </span>
          {/* <span className="text-black">IEM</span> */}
        </motion.h1>

        {/* CONSULTING */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#072A40] mb-6 tracking-[0.3em]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          CONSULTING
        </motion.h2>

        {/* WE SHAPE YOUR SUCCESS */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-[#072A40] font-medium tracking-wider"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, delay: 0.8, repeat: Infinity }}
        >
          WE SHAPE YOUR SUCCESS
        </motion.p>

        
      </motion.div>
    </div>
  );
}
