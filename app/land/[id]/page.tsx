"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import {
  FileText,
  Map,
  CheckCircle,
  Building,
  Scale,
  Compass,
  MapPin,
} from "lucide-react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar";

const services = [
  {
    id: "privatization_of_land_plots",
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
  },
  {
    id: "change_of_purpose",
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
  },
  {
    id: "entering_the_destination_code",
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
  },
  {
    id: "making_bug_fixes",
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
  },
  {
    id: "marking_the_boundaries_of_a_land_plot",
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
  },
  {
    id: "preparation_of_documents_for_legal_proceedings",
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
  },
  {
    id: "topographic_survey",
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

export default function LandDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // const serviceId = parseInt(params.id as string);

  const serviceId = params.id as string;
  const currentService = services.find((s) => s.id === serviceId);

  useEffect(() => {
    if (!currentService) {
      router.push("/land");
    }
  }, [currentService, router]);

  if (!currentService) {
    return null;
  }

  const Icon = currentService.icon;

  return (
    <div
      className="w-full h-full min-h-screen"
      style={{
        background:
          "linear-gradient(to right, var(--main-slate-light) 0%, var(--main-gray) 80%, var(--main-slate-dark) 100%)",
        fontFamily:
          "Montserrat, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: "hidden",
      }}
    >
      <DashboardSidebar />
      <div className="ml-0 md:ml-[280px]">
        <div className="h-full w-full">
          <div
            className="container mx-auto px-4 py-4 relative z-10"
            ref={ref}
          >
            {/* Contact Info Block - верхний правый угол */}
            <TopBar inView={inView} />
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.8, rotateY: -180 }}
                animate={inView ? { scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-8 shadow-2xl"
                style={{
                  boxShadow:
                    "0 0 40px rgba(16, 185, 129, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)",
                  transform: "perspective(1000px)",
                }}
              >
                <MapPin className="w-10 h-10 text-white" />
              </motion.div>

              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white flex flex-col gap-1 md:gap-4
              items-center justify-center md:flex-row leading-relaxed"
              >
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Земельний
                </span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  консалтинг
                </span>
              </h2>
            </motion.div>
            {/* Кнопка назад */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => router.push("/land")}
              className="flex items-center cursor-pointer space-x-2 mb-8 text-green-400 hover:text-green-300 transition-colors"
            >
              <FaArrowAltCircleLeft className="w-10 h-10" />
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
                      Зв&apos;яжіться з нами
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
      </div>
    </div>
  );
}
