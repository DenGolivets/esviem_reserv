"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  Scale,
  FileText,
  Shield,
  Gavel,
  Building2,
  Users,
  BookOpen,
  Home,
  Briefcase,
  Search,
  HandHeart,
  UserCheck,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Building2,
    title: "Створення, реорганізація та ліквідація юридичних осіб",
    description: "підготовка та супровід корпоративних угод",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Консультації з питань права",
    description:
      "цивільного, трудового, господарського, адміністративного, кримінального права",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 3,
    icon: Shield,
    title: "Юридичний супровід в кримінальних справах",
    description: "Професійний захист у кримінальному процесі",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 4,
    icon: Gavel,
    title: "Юридичний супровід в адміністративних справах",
    description: "Захист прав у адміністративних процедурах",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    icon: Scale,
    title: "Юридичний супровід в цивільних справах",
    description: "Представництво інтересів у цивільних спорах",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 6,
    icon: Search,
    title: "Аналіз законодавства",
    description: "з наданням відповідних письмових консультацій",
    color: "from-green-500 to-blue-500",
  },
  {
    id: 7,
    icon: Users,
    title: "Представництво інтересів",
    description:
      "фізичних та юридичних осіб в правоохоронних і судових органах",
    color: "from-purple-600 to-indigo-600",
  },
  {
    id: 8,
    icon: Home,
    title: "Юридичний супровід при придбанні нерухомості",
    description: "перевірка дозвільних документів, договорів тощо",
    color: "from-teal-500 to-green-500",
  },
  {
    id: 9,
    icon: FileText,
    title: "Допомога при отриманні дозвільних документів",
    description:
      "на будівництво, введення в експлуатацію, оформлення права власності",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 10,
    icon: Briefcase,
    title: "Аналіз та експертиза юридичних документів",
    description: "Професійна оцінка правових документів",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 11,
    icon: HandHeart,
    title: "Складання договорів",
    description: "та супровід при укладанні угод",
    color: "from-pink-500 to-purple-500",
  },
  {
    id: 12,
    icon: UserCheck,
    title: "Представництво у виконавчому провадженні",
    description: "Захист інтересів фізичних та юридичних осіб",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 13,
    icon: Scale,
    title: "Інші види адвокатських послуг",
    description: "Повний спектр юридичної підтримки",
    color: "from-violet-500 to-purple-500",
  },
];

export default function LegalConsulting() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredService, setHoveredService] = useState<number | null>(null);

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

      {/* Floating 3D Legal Elements */}
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
              y: [0, -35, 0],
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
              className="w-4 h-4 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full shadow-lg"
              style={{
                boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)",
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-8 shadow-2xl"
            style={{
              boxShadow:
                "0 0 40px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)",
              transform: "perspective(1000px)",
            }}
          >
            <Scale className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r mr-2 from-white via-gray-100 to-white bg-clip-text text-transparent">
              Юридичний
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Консалтинг
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Професійні юридичні послуги, правовий супровід та захист ваших
            інтересів
          </motion.p>
          <div className="flex items-center text-center justify-center">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-purple-400 mt-0 md:mt-14 md:mb-6">
              ВИДИ ЮРИДИЧНИХ ПОСЛУГ
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-400 vai-purple-500 to-purple-800 mx-auto rounded-full shadow-lg"
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.05 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="group"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  animate={{
                    rotateY: hoveredService === index ? 8 : 0,
                    rotateX: hoveredService === index ? -3 : 0,
                    scale: hoveredService === index ? 1.03 : 1,
                    z: hoveredService === index ? 30 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="h-full min-h-[200px]"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-5 shadow-2xl border border-slate-600 h-full relative overflow-hidden">
                    {/* Animated glow */}
                    <motion.div
                      animate={{
                        opacity: hoveredService === index ? 0.15 : 0,
                        scale: hoveredService === index ? 1.2 : 1,
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl`}
                    />

                    <div className="relative z-10">
                      {/* Service Number and Icon */}
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          animate={{
                            rotateY: hoveredService === index ? 360 : 0,
                            scale: hoveredService === index ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.6 }}
                          className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center shadow-lg`}
                          style={{
                            boxShadow:
                              hoveredService === index
                                ? "0 0 20px rgba(139, 92, 246, 0.5)"
                                : "0 0 8px rgba(0,0,0,0.3)",
                          }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </motion.div>
                        <div className="w-6 h-6 bg-purple-500/20 border border-purple-400/30 rounded-full flex items-center justify-center">
                          <span className="text-purple-400 font-bold text-xs">
                            {service.id}
                          </span>
                        </div>
                      </div>

                      <motion.h3
                        animate={{
                          color:
                            hoveredService === index ? "#a855f7" : "#ffffff",
                        }}
                        className="text-sm md:text-base font-bold mb-2 leading-tight"
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p
                        animate={{
                          color:
                            hoveredService === index ? "#d1d5db" : "#9ca3af",
                        }}
                        className="leading-relaxed text-xs md:text-sm"
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

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: "0 0 50px rgba(139, 92, 246, 0.3)",
          }}
        >

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Готові розпочати роботу?
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                Зв{"'"}яжіться з нами для отримання професійної консультації
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.a
                href="tel:+1234567890"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-all duration-300 border border-white/20"
                style={{ perspective: "1000px" }}
              >
                <Phone className="w-6 h-6" />
                <span className="font-semibold">Подзвонити</span>
              </motion.a>

              <motion.a
                href="mailto:info@esviem.com"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 0 20px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-all duration-300 border border-white/20"
              >
                <Mail className="w-6 h-6" />
                <span className="font-semibold">Email</span>
              </motion.a>

              <motion.a
                href="https://wa.me/+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-all duration-300 border border-white/20"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="font-semibold">WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
