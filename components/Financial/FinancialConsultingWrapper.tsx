"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
import {
  Calculator,
  TrendingUp,
  PieChart,
  BarChart3,
  FileText,
  Target,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { MdArrowCircleLeft } from "react-icons/md";

const services = [
  {
    id: 1,
    icon: Calculator,
    title: "Консультування та підтримка бухгалтерії",
    description: "з питань оподаткування та фінансів",
    color: "from-yellow-500 to-amber-500",
    detailedDescription: `
      Професійне консультування з питань бухгалтерського обліку та оподаткування для ефективного ведення бізнесу.
      
      Етапи роботи:
      1. Аналіз поточної системи обліку
      2. Виявлення проблемних питань
      3. Розробка рекомендацій з оптимізації
      4. Постійна підтримка та консультації
      5. Супровід при перевірках
      
      Допомагаємо:
      - Правильно вести бухгалтерський облік
      - Оптимізувати податкові платежі
      - Уникнути штрафів та санкцій
      - Підготуватися до перевірок
    `,
    examples: [
      "/financial/accounting-doc1.jpg",
      "/financial/accounting-doc2.jpg",
    ],
  },
  {
    id: 2,
    icon: Target,
    title: "Планування податкових зобов'язань",
    description: "та розробка стратегії податкових обов'язків",
    color: "from-blue-500 to-indigo-500",
    detailedDescription: `
      Стратегічне планування податкових зобов'язань для оптимізації фінансових потоків підприємства.
      
      Етапи роботи:
      1. Аналіз поточного податкового навантаження
      2. Прогнозування податкових платежів
      3. Розробка стратегії оптимізації
      4. Впровадження запланованих заходів
      5. Моніторинг результатів
      
      Результат:
      - Зменшення податкового навантаження
      - Покращення фінансового планування
      - Уникнення податкових ризиків
    `,
    examples: [
      "/financial/tax-planning-doc1.jpg",
      "/financial/tax-planning-doc2.jpg",
    ],
  },
  {
    id: 3,
    icon: BarChart3,
    title: "Аналіз фінансової звітності",
    description:
      "за 2024 рік та за 1 квартал 2025 року для розробки стратегії та плану розвитку підприємства",
    color: "from-purple-500 to-blue-500",
    detailedDescription: `
      Комплексний аналіз фінансового стану підприємства для прийняття стратегічних рішень.
      
      Етапи роботи:
      1. Збір та систематизація звітності
      2. Горизонтальний та вертикальний аналіз
      3. Розрахунок фінансових коефіцієнтів
      4. Оцінка динаміки показників
      5. Підготовка висновків та рекомендацій
      
      Аналізуємо:
      - Ліквідність та платоспроможність
      - Рентабельність діяльності
      - Фінансову стійкість
      - Ділову активність
    `,
    examples: [
      "/financial/financial-analysis-doc1.jpg",
      "/financial/financial-analysis-doc2.jpg",
    ],
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Оптимізація витрат підприємства",
    description: "Ефективне управління фінансовими ресурсами",
    color: "from-green-500 to-emerald-500",
    detailedDescription: `
      Комплексний підхід до оптимізації витрат та підвищення ефективності використання ресурсів.
      
      Етапи роботи:
      1. Аудит поточних витрат
      2. Категоризація та аналіз витрат
      3. Виявлення точок оптимізації
      4. Розробка плану скорочення витрат
      5. Контроль впровадження заходів
      
      Оптимізуємо:
      - Операційні витрати
      - Адміністративні витрати
      - Витрати на персонал
      - Закупівельну політику
    `,
    examples: [
      "/financial/cost-optimization-doc1.jpg",
      "/financial/cost-optimization-doc2.jpg",
    ],
  },
  {
    id: 5,
    icon: PieChart,
    title: "Проведення аналізу 20 рахунків",
    description:
      "бухгалтерського обліку та надання рекомендацій для ефективного використання матеріальних ресурсів",
    color: "from-orange-500 to-red-500",
    detailedDescription: `
      Детальний аналіз рахунків бухгалтерського обліку для оптимізації використання ресурсів.
      
      Етапи роботи:
      1. Вибір 20 ключових рахунків
      2. Аналіз оборотів та залишків
      3. Перевірка правильності відображення операцій
      4. Виявлення невикористаних резервів
      5. Розробка рекомендацій з оптимізації
      
      Аналізуємо рахунки:
      - Матеріальних цінностей
      - Розрахунків з покупцями
      - Розрахунків з постачальниками
      - Витрат на виробництво
    `,
    examples: [
      "/financial/accounts-analysis-doc1.jpg",
      "/financial/accounts-analysis-doc2.jpg",
    ],
  },
  {
    id: 6,
    icon: FileText,
    title: "Збір установчих документів",
    description:
      "фінансових, бухгалтерських документів відповідно до положень Господарського кодексу України",
    color: "from-indigo-500 to-purple-500",
    detailedDescription: `
      Повний комплекс послуг з підготовки та оформлення документації відповідно до законодавства України.
      
      Етапи роботи:
      1. Консультація щодо необхідних документів
      2. Підготовка установчих документів
      3. Оформлення фінансової документації
      4. Перевірка відповідності законодавству
      5. Подача документів до відповідних органів
      
      Готуємо документи:
      - Статут підприємства
      - Фінансові звіти
      - Бухгалтерську документацію
      - Документи для реєстрації
    `,
    examples: [
      "/financial/documents-doc1.jpg",
      "/financial/documents-doc2.jpg",
    ],
  },
];

const contactItems = [
  {
    id: "whatsapp",
    icon: "/dash/whatsapp96.svg",
    color: "from-green-500 to-green-600",
    href: "https://wa.me/+1234567890",
  },
  {
    id: "viber",
    icon: "/dash/viber.svg",
    color: "from-purple-500 to-purple-600",
    href: "viber://chat?number=+1234567890",
  },
  {
    id: "telegram",
    icon: "/dash/telegram96.svg",
    color: "from-blue-500 to-blue-600",
    href: "https://t.me/username",
  },
  {
    id: "signal",
    icon: "/dash/signal.svg",
    color: "from-blue-500 to-blue-600",
    href: "https://signal.me/#p/+1234567890",
  },
];

export default function FinancialConsultingWrapper() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleServiceClick = (serviceId: number) => {
    setSelectedService(serviceId);
  };

  const handleBackClick = () => {
    setSelectedService(null);
  };

  const currentService = services.find((s) => s.id === selectedService);

  // Детальна сторінка сервісу
  if (selectedService && currentService) {
    const Icon = currentService.icon;

    return (
      <div className="h-full w-full overflow-hidden bg-transparent">
        <div className="container mx-auto px-0 md:px-4 relative z-10">
          {/* Кнопка назад */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBackClick}
            className="flex items-center cursor-pointer space-x-2 mb-8 text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            <MdArrowCircleLeft className="w-10 h-10" />
          </motion.button>

          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start space-x-4 mb-8"
          >
            <div
              className={`w-16 h-16 bg-gradient-to-r ${currentService.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {currentService.title}
            </h1>
          </motion.div>

          {/* Детальний опис */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl p-8 mb-8 border border-slate-600 flex flex-col"
            style={{
              background:
                "linear-gradient(to right, var(--main-slate-dark) 0%, var(--main-slate700) 100%)",
            }}
          >
            <div className="prose prose-lg prose-invert max-w-none px-0 md:px-4 flex-1">
              <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                {currentService.detailedDescription}
              </pre>
            </div>

            {/* Контактна секція внизу блоку справа */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-end mt-6"
            >
              <div className="rounded-xl p-3">
                <div className="text-center mb-2">
                  <p className="text-white text-xs font-medium">
                    Зв{"'"}яжіться з нами
                  </p>
                </div>
                <div className="flex">
                  {contactItems.map((contact) => (
                    <div key={contact.id} className="relative group">
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-transparent flex items-center justify-center hover:scale-105 transition-transform"
                      >
                        <Image
                          src={contact.icon}
                          alt={contact.id}
                          width={20}
                          height={20}
                          className="w-7 h-7"
                        />
                      </a>
                      {/* Tooltip */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {contact.id.charAt(0).toUpperCase() +
                            contact.id.slice(1)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-hidden bg-transparent">
      {/* Main Content */}
      <div className="container mx-auto px-0 md:px-4 relative z-10" ref={ref}>
        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid xs-responsive md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16"
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
                onClick={() => handleServiceClick(service.id)}
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
                      <div className="flex items-start justify-between mb-4">
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
                            hoveredService === index ? "#fbbf24" : "#ffffff",
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
          transition={{ duration: 0.8, delay: 2 }}
          className="bg-gradient-to-r from-yellow-600 to-amber-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: "0 0 20px rgba(234, 179, 8, 0.3)",
          }}
        >
          <div className="relative z-10">
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl opacity-90">
                Зв{"'"}яжіться з нами для отримання професійної фінансової
                консультації
              </p>
            </div>

            <div className="grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-6">
              <div className="relative group">
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
                  className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg xs:rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/20 w-full h-10 xs:h-12 sm:h-auto sm:p-4 sm:space-x-3"
                >
                  <MessageCircle className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold hidden sm:inline text-sm">
                    WhatsApp
                  </span>
                </motion.a>
                <div className="absolute -top-6 xs:-top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:hidden">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    WhatsApp
                  </div>
                </div>
              </div>

              <div className="relative group">
                <motion.a
                  href="viber://chat?number=+1234567890"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg xs:rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/20 w-full h-10 xs:h-12 sm:h-auto sm:p-4 sm:space-x-3"
                  style={{ perspective: "1000px" }}
                >
                  <Phone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold hidden sm:inline text-sm">
                    Viber
                  </span>
                </motion.a>
                <div className="absolute -top-6 xs:-top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:hidden">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Viber
                  </div>
                </div>
              </div>

              <div className="relative group">
                <motion.a
                  href="https://t.me/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg xs:rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/20 w-full h-10 xs:h-12 sm:h-auto sm:p-4 sm:space-x-3"
                >
                  <Mail className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold hidden sm:inline text-sm">
                    Telegram
                  </span>
                </motion.a>
                <div className="absolute -top-6 xs:-top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:hidden">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Telegram
                  </div>
                </div>
              </div>

              <div className="relative group">
                <motion.a
                  href="https://signal.me/#p/+1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg xs:rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/20 w-full h-10 xs:h-12 sm:h-auto sm:p-4 sm:space-x-3"
                >
                  <MessageCircle className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold hidden sm:inline text-sm">
                    Signal
                  </span>
                </motion.a>
                <div className="absolute -top-6 xs:-top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:hidden">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Signal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
