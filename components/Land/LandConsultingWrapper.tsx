"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  FileText,
  Map,
  CheckCircle,
  Building,
  Scale,
  Compass,
  Camera,
  Mountain,
  Layers,
  Phone,
  Mail,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: FileText,
    title: "Приватизація земельних ділянок",
    description: "(технічна документація, проєкт)",
    color: "from-blue-500 to-blue-600",
    detailedDescription: `
      Повний супровід процедури приватизації земельних ділянок з підготовкою всієї необхідної документації.
      
      Етапи роботи:
      1. Аналіз правового статусу ділянки
      2. Підготовка технічної документації
      3. Розробка проєкту землеустрою
      4. Подача документів до відповідних органів
      5. Отримання державного акта на право власності
      
      Необхідні документи:
      - Документи на право користування землею
      - Технічний паспорт ділянки
      - Довідка про відсутність заборон
      - Кадастрова карта
      
      Термін виконання: 30-45 робочих днів
    `,
    examples: ["/land/privatization-doc1.jpg", "/land/privatization-doc2.jpg"],
  },
  {
    id: 2,
    icon: Building,
    title: "Зміна цільового призначення",
    description: "земельної ділянки",
    color: "from-green-500 to-green-600",
    detailedDescription: `
      Професійний супровід процедури зміни цільового призначення земельної ділянки відповідно до потреб клієнта.
      
      Етапи роботи:
      1. Аналіз поточного статусу ділянки
      2. Визначення можливості зміни призначення
      3. Підготовка обґрунтування зміни
      4. Погодження з місцевими органами
      5. Внесення змін до кадастру
      
      Можливі зміни:
      - З сільськогосподарського на житлове будівництво
      - З житлового на комерційне
      - Під промислове будівництво
      - Під рекреаційні цілі
      
      Термін виконання: 20-30 робочих днів
    `,
    examples: [
      "/land/purpose-change-doc1.jpg",
      "/land/purpose-change-doc2.jpg",
    ],
  },
  {
    id: 3,
    icon: Scale,
    title: "Внесення коду цільового призначення",
    description: "при існуючому праві власності на землю і без нього",
    color: "from-purple-500 to-purple-600",
    detailedDescription: `
      Внесення або зміна коду цільового призначення земельної ділянки в Державному земельному кадастрі.
      
      Етапи роботи:
      1. Аналіз документів на земельну ділянку
      2. Визначення відповідного коду призначення
      3. Підготовка пакета документів
      4. Подача заяви до органів кадастру
      5. Отримання витягу з оновленими даними
      
      Коди призначення:
      - 01 - Землі сільськогосподарського призначення
      - 02 - Землі житлової та громадської забудови  
      - 03 - Землі природно-заповідного фонду
      - 04 - Землі історико-культурного призначення
      - 05 - Землі лісогосподарського призначення
      
      Термін виконання: 15-20 робочих днів
    `,
    examples: ["/land/purpose-code-doc1.jpg", "/land/purpose-code-doc2.jpg"],
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Внесення виправлень помилок",
    description: "в Держгеокадастр",
    color: "from-red-500 to-red-600",
    detailedDescription: `
      Виправлення технічних та реєстраційних помилок у Державному земельному кадастрі.
      
      Етапи роботи:
      1. Виявлення та документування помилок
      2. Підготовка обґрунтування виправлень
      3. Збір підтверджуючих документів
      4. Подача заяви про виправлення
      5. Контроль внесення змін
      
      Види помилок що виправляємо:
      - Неправильні координати меж ділянки
      - Помилки в площі ділянки
      - Неточності в адресі розташування
      - Помилки в кодах призначення
      - Реєстраційні помилки
      
      Термін виконання: 10-15 робочих днів
    `,
    examples: ["/land/corrections-doc1.jpg", "/land/corrections-doc2.jpg"],
  },
  {
    id: 5,
    icon: Compass,
    title: "Винесення меж земельної ділянки",
    description: "в натуру",
    color: "from-yellow-500 to-yellow-600",
    detailedDescription: `
      Професійне винесення меж земельної ділянки в натуру з встановленням межових знаків.
      
      Етапи роботи:
      1. Аналіз кадастрових даних ділянки
      2. Польові геодезичні роботи
      3. Винесення координат меж на місцевість
      4. Встановлення межових знаків
      5. Складання акта винесення меж
      
      Включено в послугу:
      - Геодезичні вимірювання
      - Встановлення межових знаків
      - GPS-координування меж
      - Акт винесення меж в натуру
      - Схема розташування ділянки
      
      Термін виконання: 3-5 робочих днів
    `,
    examples: ["/land/boundaries-doc1.jpg", "/land/boundaries-doc2.jpg"],
  },
  {
    id: 6,
    icon: Scale,
    title: "Підготовка документів для судового процесу",
    description: "(в разі самовільного зайняття земельної ділянки та інш)",
    color: "from-indigo-500 to-indigo-600",
    detailedDescription: `
      Комплексна підготовка документації для судового захисту земельних прав та інтересів.
      
      Етапи роботи:
      1. Аналіз правової ситуації
      2. Збір доказової бази
      3. Підготовка процесуальних документів
      4. Експертна оцінка земельної ділянки
      5. Представництво інтересів у суді
      
      Готуємо документи для:
      - Спорів щодо меж земельних ділянок
      - Випадків самовільного зайняття землі
      - Визнання права власності на землю
      - Спорів щодо сервітутів
      - Відшкодування збитків
      
      Термін виконання: 15-30 робочих днів
    `,
    examples: ["/land/court-doc1.jpg", "/land/court-doc2.jpg"],
  },
  {
    id: 7,
    icon: Map,
    title: "Топозйомка",
    description: "з усіма необхідними погодженнями",
    color: "from-teal-500 to-teal-600",
    detailedDescription: `
      Комплексна топографічна зйомка земельної ділянки з отриманням всіх необхідних погоджень.
      
      Етапи роботи:
      1. Попереднє обстеження ділянки
      2. Польові топографічні роботи
      3. Камеральна обробка даних
      4. Погодження з службами та організаціями
      5. Виготовлення топографічного плану
      
      Погодження з:
      - Енергопостачальними організаціями
      - Газопостачальними службами
      - Водоканалом та каналізацією
      - Телекомунікаційними операторами
      - Органами охорони природи
      
      Термін виконання: 10-20 робочих днів
    `,
    examples: ["/land/topography-doc1.jpg", "/land/topography-doc2.jpg"],
  },
];

const LandConsultingWrapper = () => {
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
        <div className="container mx-auto px-4 relative z-10">
          {/* Кнопка назад */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBackClick}
            className="flex items-center space-x-2 mb-8 text-green-400 hover:text-green-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Назад до списку</span>
          </motion.button>

          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-8"
          >
            <div
              className={`w-16 h-16 bg-gradient-to-r ${currentService.color} rounded-2xl flex items-center justify-center`}
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
                  transition={{ delay: 0.6 + index * 0.1 }}
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
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
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
                onClick={() => handleServiceClick(service.id)}
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
                  className="h-full min-h-[200px] cursor-pointer"
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

                    {/* Підсказка при наведенні */}
                    <motion.div
                      initial={{ opacity: 0, y: -10, x: 10 }}
                      animate={{
                        opacity: hoveredService === index ? 1 : 0,
                        y: hoveredService === index ? 0 : -10,
                        x: hoveredService === index ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-3 right-3 bg-green-500/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg border border-green-400/50 z-20"
                    >
                      Клікніть для деталей
                    </motion.div>

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
                                ? "0 0 25px rgba(16, 185, 129, 0.5)"
                                : "0 0 10px rgba(0,0,0,0.3)",
                          }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="w-8 h-8 bg-green-500/20 border border-green-400/30 rounded-full flex items-center justify-center">
                          <span className="text-green-400 font-bold text-sm">
                            {service.id}
                          </span>
                        </div>
                      </div>

                      <motion.h3
                        animate={{
                          color:
                            hoveredService === index ? "#34d399" : "#ffffff",
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
          className="bg-gradient-to-r from-green-700 to-emerald-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
          }}
        >
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Чи готові почати роботу?
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                Зв{"’"}яжіться з нами для отримання професійної консультації
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
                <span className="font-semibold">Зателефонувати</span>
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
};

export default LandConsultingWrapper;
