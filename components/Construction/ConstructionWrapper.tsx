"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  Building,
  FileText,
  Hammer,
  CheckCircle,
  Scale,
  Compass,
  Phone,
  Mail,
  MessageCircle,
  Shield,
  Zap,
  Home,
  MapPin,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Shield,
    title: "Амністія",
    description: "Повний супровід процедури амністії самовільного будівництва",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    icon: MapPin,
    title: "Отримання схеми намірів",
    description: "Підготовка та отримання схеми намірів розміщення об'єкта",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 3,
    icon: FileText,
    title: "Документи на будівництво",
    description:
      "Отримання документів на початок будівельних робіт та на введення в експлуатацію",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 4,
    icon: Building,
    title: "Містобудівні умови",
    description: "Отримання містобудівних умов та обмежень",
    color: "from-orange-600 to-red-600",
  },
  {
    id: 5,
    icon: Compass,
    title: "Детальні плани територій",
    description: "Розробка детальних планів територій",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    icon: Hammer,
    title: "Проекти будівництва",
    description:
      "Виготовлення проектів будівництва та проходження їх експертизи",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 7,
    icon: Home,
    title: "Ескізні наміри",
    description:
      "Виготовлення ескізних намірів забудови або будівельних паспортів",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 8,
    icon: FileText,
    title: "Технічні паспорти",
    description: "Виготовлення технічних паспортів на об'єкт будівництва",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: 9,
    icon: CheckCircle,
    title: "Реєстрація об'єкту",
    description: "Реєстрація нового об'єкту будівництва під ключ",
    color: "from-red-600 to-orange-600",
  },
  {
    id: 10,
    icon: Scale,
    title: "Поділ домоволодіння",
    description:
      "Поділ домоволодіння між співвласниками з присвоєнням поштових адрес",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 11,
    icon: Zap,
    title: "Пайова участь",
    description: "Отримання пайової участі",
    color: "from-yellow-500 to-red-500",
  },
];

export default function ConstructionWrapper() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredService, setHoveredService] = useState<number | null>(null);
  return (
    <div className="h-full w-full">
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
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
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-2xl border border-slate-600 h-full relative overflow-hidden">
                    {/* Animated glow */}
                    <motion.div
                      animate={{
                        opacity: hoveredService === index ? 0.15 : 0,
                        scale: hoveredService === index ? 1.2 : 1,
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl`}
                    />

                    <div className="relative z-10">
                      {/* Service Number */}
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          animate={{
                            rotateY: hoveredService === index ? 360 : 0,
                            scale: hoveredService === index ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.6 }}
                          className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg`}
                          style={{
                            boxShadow:
                              hoveredService === index
                                ? "0 0 25px rgba(249, 115, 22, 0.5)"
                                : "0 0 10px rgba(0,0,0,0.3)",
                          }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="w-8 h-8 bg-orange-500/20 border border-orange-400/30 rounded-full flex items-center justify-center">
                          <span className="text-orange-400 font-bold text-sm">
                            {service.id}
                          </span>
                        </div>
                      </div>

                      <motion.h3
                        animate={{
                          color:
                            hoveredService === index ? "#fb923c" : "#ffffff",
                        }}
                        className="text-lg md:text-xl font-bold mb-3 leading-tight"
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p
                        animate={{
                          color:
                            hoveredService === index ? "#d1d5db" : "#9ca3af",
                        }}
                        className="leading-relaxed text-sm md:text-base"
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
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
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
                  boxShadow: "0 0 25px rgba(255,255,255,0.2)",
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
    </div>
  );
}
