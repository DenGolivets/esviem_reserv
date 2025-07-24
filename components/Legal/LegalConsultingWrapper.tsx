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
  Phone,
  Mail,
  MessageCircle,
  ArrowLeft,
  Search,
  HandHeart,
  UserCheck,
  Briefcase,
  BookOpen,
  Home,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Scale,
    title: "Представництво в судах",
    description: "Професійний захист ваших інтересів у всіх інстанціях",
    color: "from-purple-500 to-indigo-500",
    detailedDescription: `
      Кваліфіковане представництво клієнтів у судах різних юрисдикцій для захисту їх правових інтересів.
      
      Етапи роботи:
      1. Аналіз правової ситуації
      2. Збір необхідних документів та доказів
      3. Підготовка процесуальних документів
      4. Представництво в судових засіданнях
      5. Супровід виконання судових рішень
      
      Представляємо в:
      - Цивільних справах
      - Господарських спорах
      - Адміністративних справах
      - Кримінальних провадженнях
    `,
    examples: ["/legal/court-doc1.jpg", "/legal/court-doc2.jpg"],
  },
  {
    id: 2,
    icon: FileText,
    title: "Складання договорів",
    description: "Розробка та перевірка договорів всіх видів",
    color: "from-blue-500 to-purple-500",
    detailedDescription: `
      Професійна підготовка договорів з урахуванням всіх правових нюансів та захисту інтересів клієнта.
      
      Етапи роботи:
      1. Консультація щодо умов договору
      2. Аналіз ризиків та можливостей
      3. Розробка проекту договору
      4. Узгодження умов з контрагентом
      5. Фінальне оформлення документів
      
      Готуємо договори:
      - Купівлі-продажу нерухомості
      - Оренди та лізингу
      - Підряду та послуг
      - Трудові договори
    `,
    examples: ["/legal/contract-doc1.jpg", "/legal/contract-doc2.jpg"],
  },
  {
    id: 3,
    icon: Building2,
    title: "Корпоративне право",
    description: "Супровід діяльності підприємств та корпорацій",
    color: "from-indigo-500 to-blue-500",
    detailedDescription: `
      Комплексне юридичне супровід корпоративної діяльності для забезпечення законності бізнес-процесів.
      
      Етапи роботи:
      1. Аналіз корпоративної структури
      2. Розробка внутрішніх документів
      3. Супровід корпоративних процедур
      4. Консультування з питань управління
      5. Захист корпоративних інтересів
      
      Надаємо послуги з:
      - Реєстрації юридичних осіб
      - Корпоративного управління
      - Злиття та поглинання
      - Реорганізації підприємств
    `,
    examples: ["/legal/corporate-doc1.jpg", "/legal/corporate-doc2.jpg"],
  },
  {
    id: 4,
    icon: Shield,
    title: "Захист прав споживачів",
    description: "Відстоювання прав у спорах зі споживчими послугами",
    color: "from-green-500 to-blue-500",
    detailedDescription: `
      Професійний захист прав споживачів у спорах з постачальниками товарів та послуг.
      
      Етапи роботи:
      1. Аналіз споживчого спору
      2. Збір доказової бази
      3. Досудове врегулювання
      4. Подання позову до суду
      5. Виконання судового рішення
      
      Захищаємо права у спорах:
      - З продавцями товарів
      - З надавачами послуг
      - Зі страховими компаніями
      - З туристичними агентствами
    `,
    examples: ["/legal/consumer-doc1.jpg", "/legal/consumer-doc2.jpg"],
  },
  {
    id: 5,
    icon: Gavel,
    title: "Кримінальне право",
    description: "Захист у кримінальних справах та адвокатське представництво",
    color: "from-red-500 to-purple-500",
    detailedDescription: `
      Кваліфіковані адвокатські послуги у кримінальних провадженнях для захисту прав підозрюваних та обвинувачених.
      
      Етапи роботи:
      1. Аналіз кримінального провадження
      2. Участь у слідчих діях
      3. Підготовка захисної позиції
      4. Представництво в судових засіданнях
      5. Оскарження судових рішень
      
      Надаємо захист у справах:
      - Економічних злочинів
      - Злочинів проти власності
      - Злочинів проти особи
      - Адміністративних правопорушень
    `,
    examples: ["/legal/criminal-doc1.jpg", "/legal/criminal-doc2.jpg"],
  },
  {
    id: 6,
    icon: Users,
    title: "Сімейне право",
    description: "Вирішення сімейних спорів та оформлення документів",
    color: "from-pink-500 to-purple-500",
    detailedDescription: `
      Делікатне вирішення сімейних правових питань з урахуванням інтересів всіх сторін.
      
      Етапи роботи:
      1. Консультація з сімейних питань
      2. Медіація та переговори
      3. Підготовка необхідних документів
      4. Представництво в суді
      5. Виконання судових рішень
      
      Допомагаємо в питаннях:
      - Розлучення та поділу майна
      - Аліментних зобов'язань
      - Опіки та піклування
      - Усиновлення дітей
    `,
    examples: ["/legal/family-doc1.jpg", "/legal/family-doc2.jpg"],
  },
  {
    id: 7,
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
    id: 8,
    icon: BookOpen,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    icon: HandHeart,
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

export default function LegalConsultingWrapper() {
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
            className="flex items-center space-x-2 mb-8 text-purple-400 hover:text-purple-300 transition-colors"
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
                          className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg relative`}
                          style={{
                            boxShadow:
                              hoveredService === index
                                ? "0 0 20px rgba(139, 92, 246, 0.5)"
                                : "0 0 10px rgba(0,0,0,0.3)",
                          }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                          {/* Sparkle effect */}
                          {hoveredService === index && (
                            <motion.div
                              animate={{
                                rotate: [0, 360],
                                scale: [1, 1.3, 1],
                              }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="absolute inset-0 border-2 border-purple-300 rounded-xl opacity-60"
                            />
                          )}
                        </motion.div>
                      </div>

                      <motion.h3
                        animate={{
                          color:
                            hoveredService === index ? "#a855f7" : "#ffffff",
                        }}
                        className="text-base md:text-lg font-bold mb-3 leading-tight font-oleo-script"
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
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
          }}
        >
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Потрібна юридична допомога?
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                Зв{"'"}яжіться з нами для отримання професійної юридичної
                консультації
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
