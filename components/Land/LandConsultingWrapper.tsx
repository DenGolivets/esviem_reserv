"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Map,
  CheckCircle,
  Building,
  Scale,
  Compass,
} from "lucide-react";
import { FaWhatsapp, FaViber, FaTelegramPlane } from "react-icons/fa";
import { FaLeftLong, FaSignalMessenger } from "react-icons/fa6";

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

interface LandConsultingWrapperProps {
  scrollToTop?: () => void;
}

const LandConsultingWrapper = ({ scrollToTop }: LandConsultingWrapperProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleServiceClick = (serviceId: number) => {
    setSelectedService(serviceId);
    // Принудительный скролл вверх
    if (scrollToTop) {
      setTimeout(() => {
        scrollToTop();
      }, 100);
    }
  };

  const handleBackClick = () => {
    setSelectedService(null);
  };

  const currentService = services.find((s) => s.id === selectedService);

  // Детальна сторінка сервісу
  if (selectedService && currentService) {
    const Icon = currentService.icon;

    return (
      <div
        className="h-full w-full overflow-y-auto detail-page"
        style={{
          overscrollBehavior: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="container mx-auto px-0 md:px-4 relative z-10">
          {/* Кнопка назад */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBackClick}
            className="flex items-center cursor-pointer space-x-2 mb-8 text-green-400 hover:text-green-300 transition-colors"
          >
            <FaLeftLong className="w-10 h-10" />
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
          transition={{ duration: 0.8, delay: 2 }}
          className="bg-gradient-to-r from-green-700 to-emerald-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
          }}
        >
          <div className="relative z-10">
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl opacity-90">
                Зв{"’"}яжіться з нами для отримання професійної консультації
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
};

export default LandConsultingWrapper;
