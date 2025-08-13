"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  FileText,
  Map,
  CheckCircle,
  Building,
  Scale,
  Compass,
} from "lucide-react";
import { FaTelegramPlane, FaViber, FaWhatsapp } from "react-icons/fa";
import { FaSignalMessenger } from "react-icons/fa6";
import {
  MdEditDocument,
  MdOutlineInventory2,
  MdOutlineLayers,
  MdOutlineLayersClear,
} from "react-icons/md";
import { LuKeyRound } from "react-icons/lu";
import { useLingui } from "@lingui/react";
import Image from "next/image";

const LandConsultingWrapper = () => {
  const { i18n } = useLingui();

  const services = useMemo(
    () => [
      {
        id: "privatization_of_land_plots",
        icon: FileText,
        title: i18n._("Приватизація земельних ділянок"),
        description: i18n._("з підготовкою всієї необхідної документації"),
        color: "from-blue-500 to-blue-600",
      },
      {
        id: "change_of_purpose",
        icon: Building,
        title: i18n._("Зміна цільового призначення земельної ділянки"),
        description: i18n._("професійний супровід процедури"),
        color: "from-green-500 to-green-600",
      },
      {
        id: "entering_the_destination_code",
        icon: MdEditDocument,
        title: i18n._("Внесення коду цільового призначення"),
        description: i18n._(
          "при існуючому праві власності на землю і без нього"
        ),
        color: "from-purple-500 to-purple-600",
      },
      {
        id: "making_bug_fixes",
        icon: CheckCircle,
        title: i18n._("Внесення виправлень помилок"),
        description: i18n._("в Держгеокадастр"),
        color: "from-red-500 to-red-600",
      },
      {
        id: "marking_the_boundaries_of_a_land_plot",
        icon: Compass,
        title: i18n._("Винесення меж земельної ділянки"),
        description: i18n._("в натуру"),
        color: "from-yellow-500 to-yellow-600",
      },
      {
        id: "preparation_of_documents_for_legal_proceedings",
        icon: Scale,
        title: i18n._("Підготовка документів для судового процесу"),
        description: i18n._(
          "(в разі самовільного зайняття земельної ділянки та інше)"
        ),
        color: "from-indigo-500 to-indigo-600",
      },
      {
        id: "topographic_survey",
        icon: Map,
        title: i18n._("Топозйомка"),
        description: i18n._("з усіма необхідними погодженнями"),
        color: "from-teal-500 to-teal-600",
      },
      {
        id: "land_consolidation",
        icon: MdOutlineLayers,
        title: i18n._("Об’єднання земельних ділянок"),
        description: i18n._("(шляхом злиття ділянок)"),
        color: "from-yellow-900 to-amber-800",
      },
      {
        id: "division_of_land_plots",
        icon: MdOutlineLayersClear,
        title: i18n._("⁠Поділ земельних ділянок"),
        description: i18n._("для продажу, дарування чи забудови"),
        color: "from-orange-600 to-red-800",
      },
    ],
    [i18n]
  );

  const cityServices = useMemo(
    () => [
      {
        id: "kyiv_inventory",
        icon: MdOutlineInventory2,
        title: i18n._("Інвентаризація"),
        description: i18n._("даних про земельні ділянки"),
        color: "from-gray-700 to-cyan-700",
      },
      {
        id: "privatization_kyiv_of_land_plots",
        icon: LuKeyRound,
        title: i18n._("Приватизація земельних ділянок"),
        description: i18n._("(за наявності об’єкта нерухомості)"),
        color: "from-emerald-500 to-emerald-700",
      },
    ],
    [i18n]
  );

  const router = useRouter();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleServiceClick = (service: any) => {
    router.push(`/land/${service.id}`);
  };

  return (
    <div className="h-full w-full">
      {/* Main Content */}
      <div className="container mx-auto px-0 md:px-4 relative z-10" ref={ref}>
        {/* General Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 xs-responsive sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8"
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
                            hoveredService === index ? "#34d399" : "#ffffff",
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

        {/* Kyiv Services Grid */}
        <motion.div className="flex items-center justify-center gap-10 flex-col my-14 sm:my-20">
          <div className="flex w-full items-center justify-center">
            <Image
              src="/land/kyiv.jpg"
              loading="lazy"
              alt="Kyiv"
              width={1200}
              height={1000}
              className="rounded-lg w-full md:w-160 md:h-100 shadow-xl"
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl text-center font-bold bg-gradient-to-r 
          from-green-400 to-emerald-500 bg-clip-text text-transparent"
          >
            {i18n._("Оформлення земельних ділянок в м. Києві")}
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 xs-responsive sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8"
        >
          {cityServices.map((service, index) => {
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
                            hoveredService === index ? "#34d399" : "#ffffff",
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
          className="bg-gradient-to-r from-green-700 to-emerald-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
          }}
        >
          <div className="relative z-10">
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl opacity-90">
                {i18n._(
                  "Зв’яжіться з нами для отримання професійної консультації"
                )}
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
                  href="viber://chat?number=+380508128888"
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
};

export default LandConsultingWrapper;
