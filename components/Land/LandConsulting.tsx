"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  MapPin,
  FileText,
  Map,
  ChevronDown,
  X,
  ArrowRight,
  Zap,
  Shield,
} from "lucide-react";
import land from "@/public/land/land.json";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import Link from "next/link";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: FileText,
    title: "Документообіг",
    description: "Повний супровід документообігу із земельних питань",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Map,
    title: "Геодезичні роботи",
    description: "Професійні геодезичні та топографічні послуги",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Правовий захист",
    description: "Юридичний супровід земельних спорів та процедур",
    color: "from-purple-500 to-indigo-500",
  },
];

const LandConsulting = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const router = useRouter();

  return (
    <section
      id="land-section"
      className="min-h-screen w-full overflow-hidden"
      ref={ref}
    >
      <div className="relative w-full h-full">
        {/* 3D Hexagonal Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.3'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              transform: "perspective(1000px) rotateX(30deg)",
              transformOrigin: "center bottom",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0))",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
            }}
          />
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                rotateY: [0, 360],
                rotateX: [0, 180, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            >
              <div
                className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg"
                style={{
                  boxShadow: "0 0 25px rgba(16, 185, 129, 0.6)",
                  filter: "blur(0.5px)",
                }}
              />
            </motion.div>
          ))}
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
            items-center justify-center md:flex-row"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Земельний
              </span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Консалтинг
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Професійні послуги в галузі земельних відносин, документообігу та
              правового супроводу
            </motion.p>

            <div className="flex items-center text-center justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-green-400 mt-0 md:mt-24 md:mb-6">
                ВИДИ ПОСЛУГ В ГАЛУЗІ ЗЕМЕЛЬНИХ ВІДНОСИН
              </h3>
              <Lottie loop animationData={land} play className="w-70 h-70" />
            </div>
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
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                  className="group cursor-pointer"
                  style={{ perspective: "1000px" }}
                >
                  <motion.div
                    animate={{
                      rotateY:
                        hoveredService === index ? (index === 2 ? -10 : 10) : 0,
                      rotateX:
                        hoveredService === index ? (index === 2 ? 5 : -5) : 0,
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

                      <div className="relative z-10 text-center">
                        <motion.div
                          animate={{
                            rotateY: hoveredService === index ? 360 : 0,
                            scale: hoveredService === index ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                          style={{
                            boxShadow:
                              hoveredService === index
                                ? "0 0 30px rgba(16, 185, 129, 0.6)"
                                : "0 0 15px rgba(0,0,0,0.3)",
                          }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>

                        <motion.h3
                          animate={{
                            color:
                              hoveredService === index ? "#34d399" : "#e49b0f",
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
            className="max-w-4xl mx-auto relative"
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
              <div className=" rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
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
                {/* <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full opacity-40"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 80}%`,
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
                </div> */}

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
                    className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-700 to-emerald-700 rounded-full mb-6 backdrop-blur-sm shadow-2xl"
                    style={{
                      boxShadow:
                        "inset 0 0 20px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.1)",
                    }}
                  >
                    <Zap className="w-12 h-12 text-white" />
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Отримати детальну консультацію
                  </h3>
                  <p className="text-lg md:text-xl opacity-90 mb-6">
                    Дізнайтесь більше про наші послуги в галузі земельних
                    відносин
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
                    className="inline-flex items-center text-lg font-semibold bg-white/10 px-6 py-3 
                    rounded-full backdrop-blur-sm relative"
                  >
                    <span className="mr-2 z-1">Натисніть тут</span>
                    <ChevronDown className="w-6 h-6 z-1" />
                    {/* 3D Depth Layer */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 rounded-3xl"
                      style={{
                        transform: "translateZ(-20px)",
                        filter: "blur(2px)",
                      }}
                    />
                  </motion.div>
                </div>

                <div className="absolute inset-0 z-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/land/cta-bg.jpg"
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
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm md:left-80 md:w-[calc(100vw-20rem)]"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ y: "100%", opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: "100%", opacity: 0, rotateX: -90 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[var(--hero-gold)]/50 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                style={{
                  boxShadow:
                    "0 0 50px rgba(16, 185, 129, 0.3), inset 0 0 20px rgba(255,255,255,0.05)",
                }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-green-400">
                    Наші послуги
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(false)}
                    className="w-10 h-10 bg-slate-600 hover:bg-slate-500 rounded-full flex 
                    items-center justify-center transition-colors duration-200 shadow-lg cursor-pointer"
                  >
                    <X className="w-5 h-5 text-[var(--hero-yellow)]" />
                  </motion.button>
                </div>

                <div className="space-y-4 mb-8 h-full">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start md:items-center space-x-3 h-full"
                  >
                    <div
                      className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 
                    rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg"
                    >
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <p
                      className="text-gray-300 leading-relaxed flex md:flex-row flex-col 
                    items-start md:items-center"
                    >
                      <strong className="text-green-400">
                        Приватизація земельних ділянок
                      </strong>{" "}
                      (технічна документація, проєкт).
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start md:items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <p
                      className="text-gray-300 leading-relaxed flex md:flex-row flex-col 
                    items-start md:items-center"
                    >
                      <strong className="text-green-400">
                        Зміна цільового призначення земельної ділянки.
                      </strong>
                    </p>
                  </motion.div>
                </div>

                <div>
                  <Link
                    href="/land-consulting"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/land-consulting");
                    }}
                  >
                    <span>Дізнатись більше</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LandConsulting;
