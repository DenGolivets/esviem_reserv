"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
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
import { MdArrowCircleLeft } from "react-icons/md";
import { FaWhatsapp, FaViber, FaTelegramPlane } from "react-icons/fa";
import { FaSignalMessenger } from "react-icons/fa6";

const services = [
  {
    id: 1,
    icon: Shield,
    title: "Амністія",
    description: "Повний супровід процедури амністії самовільного будівництва",
    color: "from-orange-500 to-red-500",
    detailedDescription: `
      Амністія самовільного будівництва - це процедура узаконення об'єктів, збудованих без відповідних дозволів. 
      
      Етапи роботи:
      1. Аналіз документів та об'єкта
      2. Підготовка технічного паспорта
      3. Подача документів до місцевої ради
      4. Отримання рішення про амністію
      5. Реєстрація права власності
      
      Необхідні документи:
      - Документи на земельну ділянку
      - Технічний паспорт об'єкта
      - Заява на амністію
      - Довідка про відсутність заборон
    `,
    examples: [
      "/construction/amnesty-doc1.jpg",
      "/construction/amnesty-doc2.jpg",
    ],
  },
  {
    id: 2,
    icon: MapPin,
    title: "Отримання схеми намірів",
    description: "Підготовка та отримання схеми намірів розміщення об'єкта",
    color: "from-amber-500 to-orange-500",
    detailedDescription: `
      Схема намірів - це попередній документ, що визначає можливість розміщення об'єкта на конкретній ділянці.
      
      Етапи роботи:
      1. Топографічна зйомка ділянки
      2. Аналіз містобудівних обмежень  
      3. Розробка схеми розміщення
      4. Погодження з відповідними службами
      5. Отримання затвердженої схеми
      
      Термін виготовлення: 15-20 робочих днів
    `,
    examples: [
      "/construction/scheme-doc1.jpg",
      "/construction/scheme-doc2.jpg",
    ],
  },
  {
    id: 3,
    icon: FileText,
    title: "Документи на будівництво",
    description:
      "Отримання документів на початок будівельних робіт та на введення в експлуатацію",
    color: "from-red-500 to-pink-500",
    detailedDescription: `
      Повний комплекс документів для законного будівництва та введення об'єкта в експлуатацію.
      
      Види документів:
      1. Будівельний паспорт
      2. Дозвіл на будівництво
      3. Акт готовності об'єкта
      4. Декларація про готовність
      5. Свідоцтво про прийняття в експлуатацію
      
      Супроводжуємо весь процес від початку до кінця.
    `,
    examples: [
      "/construction/building-doc1.jpg",
      "/construction/building-doc2.jpg",
    ],
  },
  {
    id: 4,
    icon: Building,
    title: "Містобудівні умови",
    description: "Отримання містобудівних умов та обмежень",
    color: "from-orange-600 to-red-600",
    detailedDescription: `
      Містобудівні умови та обмеження - це документально оформлені правила, які визначають можливість та умови розміщення об'єктів на території.
      
      Етапи отримання:
      1. Аналіз території та об'єктів, що знаходяться поруч
      2. Визначення містобудівних обмежень
      3. Розробка схеми розміщення
      4. Погодження з відповідними органами
      5. Отримання затверджених умов
      
      Термін виготовлення: 10-15 робочих днів
    `,
    examples: [
      "/construction/city-conditions-doc1.jpg",
      "/construction/city-conditions-doc2.jpg",
    ],
  },
  {
    id: 5,
    icon: Compass,
    title: "Детальні плани територій",
    description: "Розробка детальних планів територій",
    color: "from-yellow-500 to-orange-500",
    detailedDescription: `
      Детальні плани територій - це графічні та текстові документи, які визначають розміщення об'єктів на ділянці.
      
      Етапи роботи:
      1. Топографічна зйомка ділянки
      2. Аналіз містобудівних обмежень
      3. Розробка детальних планів
      4. Погодження з відповідними органами
      5. Отримання затверджених планів
      
      Термін виготовлення: 20-25 робочих днів
    `,
    examples: [
      "/construction/detailed-plan-doc1.jpg",
      "/construction/detailed-plan-doc2.jpg",
    ],
  },
  {
    id: 6,
    icon: Hammer,
    title: "Проекти будівництва",
    description:
      "Виготовлення проектів будівництва та проходження їх експертизи",
    color: "from-red-500 to-orange-500",
    detailedDescription: `
      Проект будівництва - це комплекс документів, який визначає технічні та організаційні рішення щодо будівництва об'єкта.
      
      Етапи роботи:
      1. Аналіз об'єкта та території
      2. Розробка технічних рішень
      3. Проходження експертизи
      4. Отримання затвердження
      5. Виготовлення проекту
      
      Термін виготовлення: 30-40 робочих днів
    `,
    examples: [
      "/construction/project-doc1.jpg",
      "/construction/project-doc2.jpg",
    ],
  },
  {
    id: 7,
    icon: Home,
    title: "Ескізні наміри",
    description:
      "Виготовлення ескізних намірів забудови або будівельних паспортів",
    color: "from-orange-500 to-amber-500",
    detailedDescription: `
      Ескізні наміри - це попередній документ, який визначає загальні наміри щодо розміщення об'єктів на ділянці.
      
      Етапи роботи:
      1. Аналіз території та об'єктів
      2. Визначення намірів забудови
      3. Розробка ескізного наміру
      4. Погодження з відповідними органами
      5. Отримання затвердження
      
      Термін виготовлення: 10-15 робочих днів
    `,
    examples: [
      "/construction/sketch-doc1.jpg",
      "/construction/sketch-doc2.jpg",
    ],
  },
  {
    id: 8,
    icon: FileText,
    title: "Технічні паспорти",
    description: "Виготовлення технічних паспортів на об'єкт будівництва",
    color: "from-amber-500 to-yellow-500",
    detailedDescription: `
      Технічний паспорт - це документ, який визначає технічні характеристики об'єкта та його відповідність вимогам законодавства.
      
      Етапи роботи:
      1. Аналіз об'єкта
      2. Визначення технічних параметрів
      3. Розробка технічного паспорту
      4. Отримання затвердження
      5. Виготовлення паспорту
      
      Термін виготовлення: 15-20 робочих днів
    `,
    examples: [
      "/construction/technical-passport-doc1.jpg",
      "/construction/technical-passport-doc2.jpg",
    ],
  },
  {
    id: 9,
    icon: CheckCircle,
    title: "Реєстрація об'єкту",
    description: "Реєстрація нового об'єкту будівництва під ключ",
    color: "from-red-600 to-orange-600",
    detailedDescription: `
      Реєстрація об'єкту - це процедура, яка підтверджує право власності на об'єкт будівництва.
      
      Етапи роботи:
      1. Аналіз документів
      2. Підготовка заяви
      3. Подача документів до реєстраційної палати
      4. Отримання свідоцтва про реєстрацію
      5. Реєстрація права власності
      
      Термін виготовлення: 10-15 робочих днів
    `,
    examples: [
      "/construction/registration-doc1.jpg",
      "/construction/registration-doc2.jpg",
    ],
  },
  {
    id: 10,
    icon: Scale,
    title: "Поділ домоволодіння",
    description:
      "Поділ домоволодіння між співвласниками з присвоєнням поштових адрес",
    color: "from-orange-500 to-red-500",
    detailedDescription: `
      Поділ домоволодіння - це процедура, яка передбачає розподіл права власності між співвласниками на об'єкт.
      
      Етапи роботи:
      1. Аналіз документів
      2. Визначення співвласниками
      3. Розробка схеми поділу
      4. Погодження з відповідними органами
      5. Отримання затвердження
      
      Термін виготовлення: 15-20 робочих днів
    `,
    examples: [
      "/construction/division-doc1.jpg",
      "/construction/division-doc2.jpg",
    ],
  },
  {
    id: 11,
    icon: Zap,
    title: "Пайова участь",
    description: "Отримання пайової участі",
    color: "from-yellow-500 to-red-500",
    detailedDescription: `
      Пайова участь - це форма спільної власності на об'єкт, яка передбачає спільне володіння та користування.
      
      Етапи роботи:
      1. Визначення співвласниками
      2. Розподіл прав та обов'язків
      3. Спільне володіння
      4. Користування об'єктом
      5. Розподіл прибутків та збитків
      
      Термін виготовлення: 20-25 робочих днів
    `,
    examples: [
      "/construction/participation-doc1.jpg",
      "/construction/participation-doc2.jpg",
    ],
  },
];

const contactItems = [
  {
    id: "whatsapp",
    icon: "/dash/whatsapp96.svg",
    color: "from-green-500 to-green-600",
    href: "https://wa.me/+380508128888",
  },
  {
    id: "viber",
    icon: "/dash/viber.svg",
    color: "from-purple-500 to-purple-600",
    href: "https://viber.com",
  },
  {
    id: "telegram",
    icon: "/dash/telegram96.svg",
    color: "from-blue-500 to-blue-600",
    href: "https://t.me/+380508128888",
  },
  {
    id: "signal",
    icon: "/dash/signal.svg",
    color: "from-blue-500 to-blue-600",
    href: "https://signal.me/#p/+380508128888",
  },
];

export default function ConstructionWrapper() {
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
      <div className="h-full w-full">
        <div className="container mx-auto px-0 md:px-4 relative z-10">
          {/* Кнопка назад */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBackClick}
            className="flex cursor-pointer items-center space-x-2 mb-8 text-orange-400 hover:text-orange-300 transition-colors"
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
          transition={{ duration: 0.8, delay: 2 }}
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
