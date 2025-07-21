"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  Users,
  Award,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Building2,
  Handshake,
  Zap,
  Shield,
} from "lucide-react";

const stats = [
  {
    number: "100+",
    label: "Успішних проектів",
    icon: CheckCircle,
    color: "from-yellow-400 to-yellow-500",
  },
  {
    number: "15+",
    label: "Років досвіду",
    icon: Award,
    color: "from-blue-400 to-blue-500",
  },
  {
    number: "98%",
    label: "Задоволених клієнтів",
    icon: Star,
    color: "from-purple-400 to-purple-500",
  },
  {
    number: "24/7",
    label: "Підтримка",
    icon: Handshake,
    color: "from-green-400 to-green-500",
  },
];

const features = [
  {
    icon: Target,
    title: "Індивідуальний підхід",
    description:
      "Кожен проект є унікальним, тому ми розробляємо персональні рішення кожному",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Висока ефективність",
    description:
      "Наші рішення допомагають клієнтам досягати поставлених цілей у найкоротший термін",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building2,
    title: "Комплексний сервіс",
    description:
      "Повний спектр консалтингових послуг від аналізу до реалізації проекту",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Команда експертів",
    description:
      "Професіонали з багаторічним досвідом у різних галузях консалтингу",
    color: "from-purple-500 to-indigo-500",
  },
];

const AboutUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  return (
    <section
      id="about-section"
      ref={ref}
      className="relative min-h-screen overflow-hidden"
    >
      {/* 3D Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
              transform: "perspective(1000px) rotateX(20deg)",
              transformOrigin: "bottom top",
            }}
          />
        </div>
      </div>

      {/* Floating 3D Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotateY: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg"
              style={{
                boxShadow: "0 0 20px rgba(255, 193, 7, 0.5)",
                filter: "blur(0.5px)",
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-0 py-16 md:py-24 relative z-10">
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mb-8 shadow-2xl"
            style={{
              boxShadow:
                "0 0 40px rgba(255, 193, 7, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)",
              transform: "perspective(1000px)",
            }}
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Про
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent ml-4">
              Нас
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ми — команда професіоналів із багаторічним досвідом у сфері
            консалтингу, що надає комплексні рішення для розвитку вашого бізнесу
          </motion.p>
        </motion.div>

        {/* 3D Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
                className="relative group cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  animate={{
                    rotateY: hoveredStat === index ? 10 : 0,
                    rotateX: hoveredStat === index ? -5 : 0,
                    scale: hoveredStat === index ? 1.05 : 1,
                    z: hoveredStat === index ? 50 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 
                  shadow-2xl border border-slate-600 text-center relative overflow-hidden h-full min-h-[220px] sm:min-h-[200px]">
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />

                    {/* 3D Icon */}
                    <div className="relative z-10">
                      <motion.div
                        animate={{
                          rotateY: hoveredStat === index ? 360 : 0,
                          scale: hoveredStat === index ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${stat.color} rounded-full mb-4 shadow-lg`}
                        style={{
                          boxShadow:
                            hoveredStat === index
                              ? "0 0 30px rgba(255, 193, 7, 0.6)"
                              : "0 0 15px rgba(0,0,0,0.3)",
                        }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>

                      <motion.h3
                        animate={{
                          scale: hoveredStat === index ? 1.1 : 1,
                          color: hoveredStat === index ? "#fbbf24" : "#ffffff",
                        }}
                        className="text-3xl md:text-4xl font-bold mb-2"
                      >
                        {stat.number}
                      </motion.h3>
                      <p className="text-gray-300 font-medium">{stat.label}</p>
                    </div>

                    {/* 3D Border Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background:
                          hoveredStat === index
                            ? "linear-gradient(45deg, transparent, rgba(255, 193, 7, 0.1), transparent)"
                            : "none",
                        transform: "translateZ(-10px)",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 3D Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                  rotateY: index % 2 === 0 ? -45 : 45,
                }}
                animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 1, delay: 1.6 + index * 0.2 }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                className="group cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  animate={{
                    rotateY: hoveredFeature === index ? index % 2 === 0 ? 5 : -5 : 0,
                    rotateX: hoveredFeature === index ? index % 2 === 0 ? 2 : -2 : 0,
                    scale: hoveredFeature === index ? 1.02 : 1,
                    z: hoveredFeature === index ? 30 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 
                  shadow-2xl border border-slate-600 h-full relative overflow-hidden">
                    {/* Animated background */}
                    <motion.div
                      animate={{
                        opacity: hoveredFeature === index ? 0.1 : 0,
                        scale: hoveredFeature === index ? 1.2 : 1,
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <motion.div
                          animate={{
                            rotateY: hoveredFeature === index ? 360 : 0,
                            scale: hoveredFeature === index ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}
                          style={{
                            boxShadow:
                              hoveredFeature === index
                                ? "0 0 25px rgba(255, 193, 7, 0.4)"
                                : "0 0 10px rgba(0,0,0,0.3)",
                          }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <motion.h3
                          animate={{
                            x: hoveredFeature === index ? 10 : 0,
                            color:
                              hoveredFeature === index ? "#fbbf24" : "#ffffff",
                          }}
                          className="text-xl md:text-2xl font-bold ml-4"
                        >
                          {feature.title}
                        </motion.h3>
                      </div>
                      <motion.p
                        animate={{
                          color:
                            hoveredFeature === index ? "#d1d5db" : "#9ca3af",
                        }}
                        className="leading-relaxed"
                      >
                        {feature.description}
                      </motion.p>
                    </div>

                    {/* 3D Depth Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl border border-slate-500 opacity-20"
                      style={{
                        transform: "translateZ(-5px)",
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.05), transparent)",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 3D CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-center mt-16"
          style={{ perspective: "1000px" }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              rotateX: -2,
              z: 20,
            }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gradient-to-r from-yellow-500 to-yellow-400 text-slate-900 px-8 
            py-4 rounded-full font-semibold text-lg shadow-2xl overflow-hidden group cursor-pointer"
            style={{
              boxShadow:
                "0 0 30px rgba(255, 193, 7, 0.4), 0 10px 20px rgba(0,0,0,0.3)",
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Дізнатись більше про нас
            </span>

            {/* 3D Button Depth */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full"
              style={{
                transform: "translateZ(-10px)",
                filter: "blur(1px)",
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
