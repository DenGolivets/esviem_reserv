"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Scale,
  FileText,
  Shield,
  Gavel,
  Building2,
  Users,
  Search,
  HandHeart,
  UserCheck,
  Briefcase,
  BookOpen,
  Home,
} from "lucide-react";
import { FaTelegramPlane, FaViber, FaWhatsapp } from "react-icons/fa";
import { FaSignalMessenger } from "react-icons/fa6";

const services = [
  {
    id: "representation_in_courts",
    icon: Scale,
    title: "Представництво в судах",
    description: "Професійний захист ваших інтересів у всіх інстанціях",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "drafting_contracts",
    icon: FileText,
    title: "Складання договорів",
    description: "Розробка та перевірка договорів всіх видів",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: "corporate_law",
    icon: Building2,
    title: "Корпоративне право",
    description: "Супровід діяльності підприємств та корпорацій",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: "consumer_protection",
    icon: Shield,
    title: "Захист прав споживачів",
    description: "Відстоювання прав у спорах зі споживчими послугами",
    color: "from-green-500 to-blue-500",
  },
  {
    id: "criminal_law",
    icon: Gavel,
    title: "Кримінальне право",
    description: "Захист у кримінальних справах та адвокатське представництво",
    color: "from-red-500 to-purple-500",
  },
  {
    id: "family_law",
    icon: Users,
    title: "Сімейне право",
    description: "Вирішення сімейних спорів та оформлення документів",
    color: "from-pink-500 to-purple-500",
  },
  {
    id: "analysis_of_legislation",
    icon: Search,
    title: "Аналіз законодавства",
    description: "з наданням відповідних письмових консультацій",
    color: "from-green-500 to-blue-500",
  },
  {
    id: "representation_of_interests",
    icon: BookOpen,
    title: "Представництво інтересів",
    description:
      "фізичних та юридичних осіб в правоохоронних і судових органах",
    color: "from-purple-600 to-indigo-600",
  },
  {
    id: "legal_support_when_purchasing_real_estate",
    icon: Home,
    title: "Юридичний супровід при придбанні нерухомості",
    description: "перевірка дозвільних документів, договорів тощо",
    color: "from-teal-500 to-green-500",
  },
  {
    id: "assistance_in_obtaining_permits",
    icon: FileText,
    title: "Допомога при отриманні дозвільних документів",
    description:
      "на будівництво, введення в експлуатацію, оформлення права власності",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "analysis_and_examination_of_legal_documents",
    icon: Briefcase,
    title: "Аналіз та експертиза юридичних документів",
    description: "Професійна оцінка правових документів",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "representation_in_enforcement_proceedings",
    icon: UserCheck,
    title: "Представництво у виконавчому провадженні",
    description: "Захист інтересів фізичних та юридичних осіб",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "other_types_of_legal_services",
    icon: HandHeart,
    title: "Інші види адвокатських послуг",
    description: "Повний спектр юридичної підтримки",
    color: "from-violet-500 to-purple-500",
  },
];

export default function LegalConsultingWrapper() {
  const router = useRouter();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleServiceClick = (service: any) => {
    router.push(`/legal/${service.id}`);
  };

  return (
    <div className="h-full w-full overflow-hidden bg-transparent">
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
                          className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r ${service.color} rounded-lg md:rounded-xl flex items-center justify-center shadow-lg relative`}
                        >
                          <Icon className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                        </motion.div>
                      </div>

                      <motion.h3
                        animate={{
                          color:
                            hoveredService === index ? "#a855f7" : "#ffffff",
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
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
          }}
        >
          <div className="relative z-10">
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl opacity-90">
                Зв{"'"}яжіться з нами для отримання професійної юридичної
                консультації
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
}
