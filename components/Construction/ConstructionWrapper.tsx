"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Building,
  FileText,
  Hammer,
  CheckCircle,
  Scale,
  Compass,
  Shield,
  Zap,
  Home,
  MapPin,
} from "lucide-react";
import { FaTelegramPlane, FaViber, FaWhatsapp } from "react-icons/fa";
import { FaSignalMessenger } from "react-icons/fa6";

const services = [
  {
    id: "amnesty",
    icon: Shield,
    title: "Амністія",
    description: "Повний супровід процедури амністії самовільного будівництва",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "getting_an_intent_schema",
    icon: MapPin,
    title: "Отримання схеми намірів",
    description: "Підготовка та отримання схеми намірів розміщення об'єкта",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "construction_documents",
    icon: FileText,
    title: "Документи на будівництво",
    description:
      "Отримання документів на початок будівельних робіт та на введення в експлуатацію",
    color: "from-red-500 to-pink-500",
  },
  {
    id: "urban_planning_conditions",
    icon: Building,
    title: "Містобудівні умови",
    description: "Отримання містобудівних умов та обмежень",
    color: "from-orange-600 to-red-600",
  },
  {
    id: "detailed_plans_of_territories",
    icon: Compass,
    title: "Детальні плани територій",
    description: "Розробка детальних планів територій",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "construction_projects",
    icon: Hammer,
    title: "Проекти будівництва",
    description:
      "Виготовлення проектів будівництва та проходження їх експертизи",
    color: "from-red-500 to-orange-500",
  },
  {
    id: "sketchy_intentions",
    icon: Home,
    title: "Ескізні наміри",
    description:
      "Виготовлення ескізних намірів забудови або будівельних паспортів",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "technical_data_sheets",
    icon: FileText,
    title: "Технічні паспорти",
    description: "Виготовлення технічних паспортів на об'єкт будівництва",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "object_registration",
    icon: CheckCircle,
    title: "Реєстрація об'єкту",
    description: "Реєстрація нового об'єкту будівництва під ключ",
    color: "from-red-600 to-orange-600",
  },
  {
    id: "division_of_household_ownership",
    icon: Scale,
    title: "Поділ домоволодіння",
    description:
      "Поділ домоволодіння між співвласниками з присвоєнням поштових адрес",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "share_participation",
    icon: Zap,
    title: "Пайова участь",
    description: "Отримання пайової участі",
    color: "from-yellow-500 to-red-500",
  },
];

export default function ConstructionWrapper() {
  const router = useRouter();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleServiceClick = (service: any) => {
    router.push(`/construction/${service.id}`);
  };

  return (
    <div className="h-full w-full">
      {/* Main Content */}
      <div className="container mx-auto px-0 md:px-4 relative z-10" ref={ref}>
        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid xs-responsive md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                onClick={() => handleServiceClick(service)}
                className="group"
              >
                <motion.div
                  animate={{
                    scale:
                      hoveredService === index &&
                      typeof window !== "undefined" &&
                      window.innerWidth >= 768
                        ? 1.05
                        : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="h-full min-h-[160px] md:min-h-[200px] cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-slate-600 h-full relative overflow-hidden">
                    {/* Animated glow */}
                    <motion.div
                      animate={{
                        opacity: hoveredService === index ? 0.15 : 0,
                        scale: hoveredService === index ? 1.2 : 1,
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl`}
                    />

                    <div className="relative z-10">
                      {/* Service Icon */}
                      <div className="mb-4">
                        <motion.div
                          animate={{
                            scale: hoveredService === index ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.6 }}
                          className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r ${service.color} rounded-lg md:rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                        </motion.div>
                      </div>

                      <motion.h3
                        animate={{
                          color:
                            hoveredService === index ? "#fb923c" : "#ffffff",
                        }}
                        className="text-sm sm:text-base md:text-base lg:text-base font-bold mb-2 sm:mb-3 leading-tight"
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p
                        animate={{
                          color:
                            hoveredService === index ? "#d1d5db" : "#9ca3af",
                        }}
                        className="leading-relaxed text-xs sm:text-xs md:text-xs lg:text-xs"
                      >
                        {service.description}
                      </motion.p>
                    </div>
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
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
          }}
        >
          <div className="relative z-10">
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl opacity-90">
                Зв{"'"}яжіться з нами для отримання професійної консультації
              </p>
            </div>

            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 xs:gap-3 sm:gap-6">
              <div className="flex flex-col items-center">
                <motion.a
                  href="https://wa.me/+380508128888"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg xs:rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/20 w-full h-10 xs:h-12 sm:h-auto sm:p-4 sm:space-x-3 group relative"
                >
                  <FaWhatsapp className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold hidden sm:inline text-sm md:text-xs lg:text-xs xl:text-sm">
                    WhatsApp
                  </span>
                </motion.a>
                {/* Mobile label */}
                <span className="text-white text-xs mt-1 sm:hidden">
                  WhatsApp
                </span>
              </div>

              <div className="flex flex-col items-center">
                <motion.a
                  href="https://viber.com"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg xs:rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/20 w-full h-10 xs:h-12 sm:h-auto sm:p-4 sm:space-x-3 group relative"
                  style={{ perspective: "1000px" }}
                >
                  <FaViber className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold hidden sm:inline text-sm md:text-xs lg:text-xs xl:text-sm">
                    Viber
                  </span>
                </motion.a>
                {/* Mobile label */}
                <span className="text-white text-xs mt-1 sm:hidden">Viber</span>
              </div>

              <div className="flex flex-col items-center">
                <motion.a
                  href="https://t.me/+380508128888"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg xs:rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/20 w-full h-10 xs:h-12 sm:h-auto sm:p-4 sm:space-x-3 group relative"
                >
                  <FaTelegramPlane className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold hidden sm:inline text-sm md:text-xs lg:text-xs xl:text-sm">
                    Telegram
                  </span>
                </motion.a>
                {/* Mobile label */}
                <span className="text-white text-xs mt-1 sm:hidden">
                  Telegram
                </span>
              </div>

              <div className="flex flex-col items-center">
                <motion.a
                  href="https://signal.me/#p/+380508128888"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg xs:rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/20 w-full h-10 xs:h-12 sm:h-auto sm:p-4 sm:space-x-3 group relative"
                >
                  <FaSignalMessenger className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold hidden sm:inline text-sm md:text-xs lg:text-xs xl:text-sm">
                    Signal
                  </span>
                </motion.a>
                {/* Mobile label */}
                <span className="text-white text-xs mt-1 sm:hidden">
                  Signal
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
