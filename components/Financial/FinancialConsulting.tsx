"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Calculator,
  ChevronDown,
  X,
  ArrowRight,
  Zap,
  PieChart,
  BarChart3,
  Coins,
  CreditCard,
  Wallet,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Calculator,
    title: "Бухгалтерський супровід",
    description: "Консультування з питань оподаткування та фінансів",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: TrendingUp,
    title: "Податкове планування",
    description: "Розробка стратегії податкових зобов'язань",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: PieChart,
    title: "Фінансовий аналіз",
    description: "Аналіз звітності та розробка стратегії розвитку",
    color: "from-purple-500 to-blue-500",
  },
];

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section
      id="financial-section"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-r from-slate-700 via-gray-800 to-slate-800"
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

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Фінансовий
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              консалтинг
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Професійні фінансові рішення, податкове планування та оптимізація
            бізнес-процесів
          </motion.p>

          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-12">
            ВИДИ ФІНАНСОВИХ ПОСЛУГ
          </h3>
        </motion.div>

        {/* 3D Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-3 gap-12 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -90 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="group cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  animate={{
                    rotateY: hoveredService === index ? 10 : 0,
                    rotateX: hoveredService === index ? -5 : 0,
                    scale: hoveredService === index ? 1.05 : 1,
                    z: hoveredService === index ? 50 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl border border-slate-600 h-full relative overflow-hidden">
                    {/* Animated glow */}
                    <motion.div
                      animate={{
                        opacity: hoveredService === index ? 0.2 : 0,
                        scale: hoveredService === index ? 1.2 : 1,
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl`}
                    />

                    {/* Floating coins animation */}
                    {hoveredService === index && (
                      <div className="absolute inset-0">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0, y: 20 }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              y: [20, -30, -60],
                              x: [
                                0,
                                Math.random() * 40 - 20,
                                Math.random() * 60 - 30,
                              ],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.2,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                            className="absolute bottom-4 left-1/2 text-yellow-400 text-xl"
                          >
                            💰
                          </motion.div>
                        ))}
                      </div>
                    )}

                    <div className="relative z-10 text-center">
                      <motion.div
                        animate={{
                          rotateY: hoveredService === index ? 360 : 0,
                          scale: hoveredService === index ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg relative`}
                        style={{
                          boxShadow:
                            hoveredService === index
                              ? "0 0 30px rgba(234, 179, 8, 0.6)"
                              : "0 0 15px rgba(0,0,0,0.3)",
                        }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                        {/* Sparkle effect */}
                        {hoveredService === index && (
                          <motion.div
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="absolute inset-0 border-2 border-yellow-300 rounded-xl opacity-50"
                          />
                        )}
                      </motion.div>

                      <motion.h3
                        animate={{
                          color:
                            hoveredService === index ? "#fbbf24" : "#ffffff",
                        }}
                        className="text-xl md:text-2xl font-bold mb-4"
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p
                        animate={{
                          color:
                            hoveredService === index ? "#d1d5db" : "#9ca3af",
                        }}
                        className="leading-relaxed"
                      >
                        {service.description}
                      </motion.p>
                    </div>

                    {/* 3D Border Effect */}
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

        {/* Interactive 3D CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="max-w-4xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            whileHover={{
              scale: 1.02,
              rotateY: 2,
              rotateX: -1,
              z: 30,
            }}
            className="relative group cursor-pointer"
            onClick={() => setIsModalOpen(true)}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
              {/* 3D Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    transform: "perspective(500px) rotateX(10deg)",
                  }}
                />
              </div>

              {/* Floating 3D Elements */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-40"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.8, 0.4],
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 text-center">
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-amber-600 justify-center w-24 h-24 rounded-full mb-6 backdrop-blur-sm shadow-2xl relative"
                  style={{
                    boxShadow:
                      "inset 0 0 20px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.1)",
                  }}
                >
                  <Zap className="w-12 h-12 text-white" />
                  {/* Rotating dollar signs */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0"
                  >
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 text-white opacity-60"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `rotate(${
                            i * 90
                          }deg) translateY(-40px) translateX(-8px)`,
                        }}
                      >
                        $
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Отримати детальну консультацію
                </h3>
                <p className="text-lg md:text-xl opacity-90 mb-6">
                  Дізнайтеся більше про наші фінансові послуги
                </p>

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotateX: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex items-center text-lg font-semibold bg-gradient-to-r from-yellow-400 to-amber-600 px-6 py-3 rounded-full backdrop-blur-sm"
                >
                  <span className="mr-2">Натисніть тут</span>
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </div>

              {/* 3D Depth Layer */}
              {/* <div
                className="absolute inset-0 bg-gradient-to-r from-yellow-700 to-amber-700 rounded-3xl"
                style={{
                  transform: "translateZ(-20px)",
                  filter: "blur(2px)",
                }}
              /> */}
              
              <div className="absolute inset-0 z-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/finance/finance-bg.jpg"
                    alt="Земельний консалтинг"
                    className="w-full h-full object-cover opacity-80 blur-[3px]"
                    style={{ pointerEvents: "none" }}
                  />
                </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 3D Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ y: "100%", opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: "100%", opacity: 0, rotateX: -90 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-t-3xl md:rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-slate-600 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow:
                  "0 0 50px rgba(234, 179, 8, 0.3), inset 0 0 20px rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  Наші послуги
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 bg-slate-600 hover:bg-slate-500 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              <div className="space-y-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-yellow-400">
                      Консультування та підтримка бухгалтерії
                    </strong>{" "}
                    з питань оподаткування та фінансів.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-yellow-400">
                      Планування податкових зобов{"'"}язань
                    </strong>{" "}
                    та розробка стратегії податкових обов{"'"}язків.
                  </p>
                </motion.div>
              </div>

              <Link href="/financial-consulting">
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(234, 179, 8, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  <span>Дізнатися більше</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
