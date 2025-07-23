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
  ArrowLeft,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Building2,
    title: "Створення, реорганізація та ліквідація юридичних осіб",
    description: "підготовка та супровід корпоративних угод",
    color: "from-purple-500 to-indigo-500",
    detailedDescription: `
      Повний спектр послуг з корпоративного права для бізнесу будь-якого масштабу.
      
      Етапи роботи:
      1. Консультація щодо оптимальної організаційно-правової форми
      2. Підготовка установчих документів
      3. Реєстрація в державних органах
      4. Отримання необхідних ліцензій та дозволів
      5. Постановка на облік в податкових органах
      
      Типи юридичних осіб:
      - Товариства з обмеженою відповідальністю (ТОВ)
      - Акціонерні товариства (АТ) 
      - Приватні підприємства (ПП)
      - Громадські організації
      - Благодійні фонди
      
      Термін виконання: 5-15 робочих днів
    `,
    examples: ["/legal/corporate-doc1.jpg", "/legal/corporate-doc2.jpg"],
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Консультації з питань права",
    description:
      "цивільного, трудового, господарського, адміністративного, кримінального права",
    color: "from-indigo-500 to-blue-500",
    detailedDescription: `
      Професійні юридичні консультації з широкого спектру правових питань.
      
      Види консультацій:
      1. Цивільне право - договори, зобов'язання, спадщина
      2. Трудове право - трудові відносини, звільнення, оплата праці
      3. Господарське право - підприємницька діяльність, корпоративні спори
      4. Адміністративне право - дозволи, ліцензії, взаємодія з органами влади
      5. Кримінальне право - захист прав підозрюваних та обвинувачених
      
      Форми консультацій:
      - Усні консультації
      - Письмові висновки
      - Аналіз документів
      - Правова експертиза
      
      Термін надання: 1-3 робочі дні
    `,
    examples: ["/legal/consultation-doc1.jpg", "/legal/consultation-doc2.jpg"],
  },
  {
    id: 3,
    icon: Shield,
    title: "Юридичний супровід в кримінальних справах",
    description: "Професійний захист у кримінальному процесі",
    color: "from-red-500 to-pink-500",
    detailedDescription: `
      Кваліфікований захист прав та інтересів у кримінальному провадженні.
      
      Етапи супроводу:
      1. Участь під час допитів та слідчих дій
      2. Збір та аналіз доказів на користь клієнта
      3. Підготовка процесуальних документів
      4. Представництво інтересів у суді
      5. Оскарження судових рішень
      
      Види послуг:
      - Захист підозрюваних та обвинувачених
      - Представництво потерпілих
      - Участь у досудовому розслідуванні
      - Захист у апеляційній та касаційній інстанціях
      - Супровід виконання вироків
      
      Доступно цілодобово для екстрених випадків
    `,
    examples: ["/legal/criminal-doc1.jpg", "/legal/criminal-doc2.jpg"],
  },
  {
    id: 4,
    icon: Gavel,
    title: "Юридичний супровід в адміністративних справах",
    description: "Захист прав у адміністративних процедурах",
    color: "from-orange-500 to-red-500",
    detailedDescription: `
      Професійний захист прав у відносинах з органами державної влади та місцевого самоврядування.
      
      Напрями роботи:
      1. Оскарження рішень органів влади
      2. Захист від адміністративних стягнень
      3. Супровід дозвільних процедур
      4. Представництво в адміністративних судах
      5. Взаємодія з контролюючими органами
      
      Типові справи:
      - Податкові спори
      - Будівельні та земельні питання
      - Ліцензування та сертифікація
      - Трудові спори з державними органами
      - Соціальні виплати та пільги
      
      Термін вирішення: 15-45 днів залежно від складності
    `,
    examples: [
      "/legal/administrative-doc1.jpg",
      "/legal/administrative-doc2.jpg",
    ],
  },
  {
    id: 5,
    icon: Scale,
    title: "Юридичний супровід в цивільних справах",
    description: "Представництво інтересів у цивільних спорах",
    color: "from-blue-500 to-purple-500",
    detailedDescription: `
      Комплексний супровід цивільних справ у судах усіх інстанцій.
      
      Етапи роботи:
      1. Аналіз правової ситуації
      2. Збір доказової бази
      3. Подача позову або відзиву
      4. Участь у судових засіданнях
      5. Виконання судових рішень
      
      Категорії справ:
      - Договірні спори
      - Відшкодування збитків
      - Захист честі, гідності та ділової репутації
      - Спадкові спори
      - Сімейні спори
      - Житлові спори
      
      Успішність: понад 85% виграних справ
    `,
    examples: ["/legal/civil-doc1.jpg", "/legal/civil-doc2.jpg"],
  },
  {
    id: 6,
    icon: Search,
    title: "Аналіз законодавства",
    description: "з наданням відповідних письмових консультацій",
    color: "from-green-500 to-blue-500",
    detailedDescription: `
      Глибокий аналіз чинного законодавства та його впливу на діяльність клієнта.
      
      Етапи аналізу:
      1. Дослідження нормативно-правової бази
      2. Аналіз судової практики
      3. Виявлення правових ризиків
      4. Розробка рекомендацій
      5. Підготовка письмового висновку
      
      Види аналізу:
      - Галузевий аналіз законодавства
      - Аналіз змін у законодавстві
      - Правова експертиза документів
      - Оцінка комплаєнс-ризиків
      - Моніторинг нормативних актів
      
      Термін виконання: 3-10 робочих днів
    `,
    examples: ["/legal/analysis-doc1.jpg", "/legal/analysis-doc2.jpg"],
  },
  {
    id: 7,
    icon: Users,
    title: "Представництво інтересів",
    description:
      "фізичних та юридичних осіб в правоохоронних і судових органах",
    color: "from-purple-600 to-indigo-600",
    detailedDescription: `
      Професійне представництво та захист інтересів у державних органах та судах.
      
      Органи представництва:
      1. Суди всіх інстанцій та юрисдикцій
      2. Правоохоронні органи
      3. Органи досудового розслідування
      4. Виконавча служба
      5. Нотаріальні та реєстраційні органи
      
      Повноваження представника:
      - Подача документів та заяв
      - Участь у процесуальних діях
      - Отримання документів та інформації
      - Підписання угод та протоколів
      - Оскарження рішень
      
      Ліцензія адвоката дозволяє представляти інтереси у будь-яких органах
    `,
    examples: [
      "/legal/representation-doc1.jpg",
      "/legal/representation-doc2.jpg",
    ],
  },
  {
    id: 8,
    icon: Home,
    title: "Юридичний супровід при придбанні нерухомості",
    description: "перевірка дозвільних документів, договорів тощо",
    color: "from-teal-500 to-green-500",
    detailedDescription: `
      Комплексний супровід угод з нерухомістю для безпечного придбання.
      
      Етапи супроводу:
      1. Перевірка правовстановлюючих документів
      2. Аналіз обтяжень та заборон
      3. Перевірка дозвільної документації
      4. Підготовка договору купівлі-продажу
      5. Супровід державної реєстрації
      
      Перевіряємо:
      - Право власності продавця
      - Відсутність арештів та застав
      - Технічні паспорти та плани
      - Дозволи на будівництво
      - Відповідність фактичного стану документам
      
      Гарантуємо юридичну чистоту угоди
    `,
    examples: ["/legal/real-estate-doc1.jpg", "/legal/real-estate-doc2.jpg"],
  },
  {
    id: 9,
    icon: FileText,
    title: "Допомога при отриманні дозвільних документів",
    description:
      "на будівництво, введення в експлуатацію, оформлення права власності",
    color: "from-amber-500 to-orange-500",
    detailedDescription: `
      Професійний супровід отримання всіх видів дозвільних документів.
      
      Види дозволів:
      1. Дозволи на будівництво
      2. Дозволи на введення в експлуатацію
      3. Містобудівні умови та обмеження
      4. Дозволи на реконструкцію
      5. Дозволи на знесення
      
      Етапи роботи:
      - Консультація щодо необхідних документів
      - Підготовка пакета документів
      - Подача заяв до відповідних органів
      - Супровід розгляду заяв
      - Отримання готових дозволів
      
      Працюємо з усіма містобудівними органами України
    `,
    examples: ["/legal/permits-doc1.jpg", "/legal/permits-doc2.jpg"],
  },
  {
    id: 10,
    icon: Briefcase,
    title: "Аналіз та експертиза юридичних документів",
    description: "Професійна оцінка правових документів",
    color: "from-cyan-500 to-blue-500",
    detailedDescription: `
      Детальний аналіз юридичних документів на предмет їх законності та ефективності.
      
      Типи документів:
      1. Договори всіх видів
      2. Установчі документи
      3. Корпоративні рішення
      4. Трудові договори та положення
      5. Внутрішні документи підприємств
      
      Що включає експертиза:
      - Перевірка відповідності законодавству
      - Аналіз ризиків та небезпечних умов
      - Рекомендації щодо доопрацювання
      - Альтернативні варіанти формулювань
      - Висновок про правові наслідки
      
      Термін виконання: 2-5 робочих днів
    `,
    examples: ["/legal/expertise-doc1.jpg", "/legal/expertise-doc2.jpg"],
  },
  {
    id: 11,
    icon: HandHeart,
    title: "Складання договорів",
    description: "та супровід при укладанні угод",
    color: "from-pink-500 to-purple-500",
    detailedDescription: `
      Професійна підготовка договорів з урахуванням специфіки бізнесу клієнта.
      
      Види договорів:
      1. Купівлі-продажу (товари, нерухомість)
      2. Надання послуг та виконання робіт
      3. Оренди та лізингу
      4. Трудові та цивільно-правові
      5. Партнерства та інвестиційні
      
      Етапи роботи:
      - Вивчення потреб клієнта
      - Розробка проєкту договору
      - Узгодження умов з контрагентом
      - Доопрацювання з урахуванням зауважень
      - Супровід підписання
      
      Гарантуємо максимальний захист інтересів клієнта
    `,
    examples: ["/legal/contracts-doc1.jpg", "/legal/contracts-doc2.jpg"],
  },
  {
    id: 12,
    icon: UserCheck,
    title: "Представництво у виконавчому провадженні",
    description: "Захист інтересів фізичних та юридичних осіб",
    color: "from-emerald-500 to-teal-500",
    detailedDescription: `
      Професійний супровід на стадії виконання судових рішень та інших виконавчих документів.
      
      Напрями роботи:
      1. Представництво стягувачів
      2. Захист прав боржників
      3. Оскарження дій виконавців
      4. Розстрочка та відстрочка виконання
      5. Припинення виконавчого провадження
      
      Послуги для стягувачів:
      - Подача виконавчих документів
      - Контроль дій виконавця
      - Розшук майна боржника
      - Забезпечення арешту активів
      
      Послуги для боржників:
      - Захист від неправомірних дій
      - Зменшення розміру стягнення
      - Звільнення арештованого майна
    `,
    examples: ["/legal/execution-doc1.jpg", "/legal/execution-doc2.jpg"],
  },
  {
    id: 13,
    icon: Scale,
    title: "Інші види адвокатських послуг",
    description: "Повний спектр юридичної підтримки",
    color: "from-violet-500 to-purple-500",
    detailedDescription: `
      Додаткові адвокатські послуги для комплексного вирішення правових питань.
      
      Спектр послуг:
      1. Правовий аудит підприємств
      2. Корпоративне обслуговування
      3. Супровід M&A угод
      4. Інтелектуальна власність
      5. Міжнародне право
      
      Додатково надаємо:
      - Медіацію та альтернативне вирішення спорів
      - Правове навчання персоналу
      - Розробку внутрішніх положень
      - Супровід перевірок контролюючих органів
      - Правовий супровід IT-проєктів
      
      Індивідуальний підхід до кожного клієнта
    `,
    examples: [
      "/legal/other-services-doc1.jpg",
      "/legal/other-services-doc2.jpg",
    ],
  },
];

export default function LegalConsulting() {
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
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Кнопка назад */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBackClick}
            className="flex items-center space-x-2 mb-8 text-purple-400 hover:text-purple-300 transition-colors"
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
      </section>
    );
  }

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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, rotateY: 0 }}
            animate={
              inView
                ? {
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0],
                    rotateY: [0, 360, 720],
                    x: [
                      Math.random() * window.innerWidth,
                      Math.random() * window.innerWidth,
                      Math.random() * window.innerWidth,
                    ],
                    y: [
                      Math.random() * window.innerHeight,
                      Math.random() * window.innerHeight,
                      Math.random() * window.innerHeight,
                    ],
                  }
                : {}
            }
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            className="absolute"
            style={{
              filter: "blur(1px)",
            }}
          >
            <div
              className={`w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center`}
              style={{
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
                transform: "perspective(100px) rotateX(45deg)",
              }}
            >
              <Scale className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Юридичні
            </span>{" "}
            <span className="text-white">Послуги</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Професійний юридичний захист та консультації з усіх галузей права
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-500 mx-auto rounded-full shadow-lg"
          />
        </motion.div>

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
                      className="absolute top-3 right-3 bg-purple-500/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg border border-purple-400/50 z-20"
                    >
                      Клікніть для деталей
                    </motion.div>

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
