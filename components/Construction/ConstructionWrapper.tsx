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
  ArrowLeft,
} from "lucide-react";

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
            className="flex items-center space-x-2 mb-8 text-orange-400 hover:text-orange-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Назад до списку</span>
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
            className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 mb-8 border border-slate-600"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <pre className="whitespace-pre-wrap text-gray-300 font-sans leading-relaxed">
                {currentService.detailedDescription}
              </pre>
            </div>
          </motion.div>

          {/* Приклади документів */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Приклади документів
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {currentService.examples.map((imagePath, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-4 border border-slate-600"
                >
                  <div className="aspect-[4/3] bg-slate-600 rounded-xl flex items-center justify-center">
                    <FileText className="w-16 h-16 text-slate-400" />
                    <span className="ml-2 text-slate-400">
                      Приклад документа {index + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
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
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16"
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
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-lg border border-slate-600 h-full relative overflow-hidden">
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
                          className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg`}
                          style={{
                            boxShadow:
                              hoveredService === index
                                ? "0 0 25px rgba(249, 115, 22, 0.5)"
                                : "0 0 10px rgba(0,0,0,0.3)",
                          }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>

                      <motion.h3
                        animate={{
                          color:
                            hoveredService === index ? "#fb923c" : "#ffffff",
                        }}
                        className="text-base md:text-lg font-bold mb-3 leading-tight font-vollkorn"
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
