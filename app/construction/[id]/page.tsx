"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import {
  Building,
  FileText,
  Hammer,
  Compass,
  Shield,
  Home,
  MapPin,
  CheckCircle,
  Scale,
  Zap,
} from "lucide-react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar";
import Title from "@/components/Title";

const services = [
  {
    id: "amnesty",
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
  },
  {
    id: "getting_an_intent_schema",
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
  },
  {
    id: "construction_documents",
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
  },
  {
    id: "urban_planning_conditions",
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
  },
  {
    id: "detailed_plans_of_territories",
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
  },
  {
    id: "construction_projects",
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
  },
  {
    id: "sketchy_intentions",
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
  },
  {
    id: "technical_data_sheets",
    icon: FileText,
    title: "Технічні паспорти",
    description: "Виготовлення технічних паспортів на об'єкт будівництва",
    color: "from-amber-500 to-yellow-500",
    detailedDescription: `
Технічний паспорт - це документ, який визначає технічні характеристики об'єкта та його відповідність вимогам законодавства.
      
Етапи роботи:
1. Аналіз об'єкта та його характеристик
2. Визначення технічних параметрів
3. Розробка технічного паспорта
4. Погодження з відповідними органами
5. Отримання затвердження
      
Термін виготовлення: 15-20 робочих днів
    `,
  },
  {
    id: "object_registration",
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
  },
  {
    id: "division_of_household_ownership",
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
  },
  {
    id: "share_participation",
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
    href: "viber://chat?number=+380508128888",
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

export default function ConstructionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const serviceId = params.id as string;
  const currentService = services.find((s) => s.id === serviceId);

  useEffect(() => {
    if (!currentService) {
      router.push("/construction");
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
          <div className="container mx-auto px-4 py-4 relative z-10" ref={ref}>
            {/* Contact Info Block - верхний правый угол */}
            <TopBar inView={inView} />
            {/* Header */}
            <Title
              inView={inView}
              icon={<Building className="w-10 h-10 text-white" />}
              titleParts={["Будівельний", "консалтинг"]}
              textGradientClasses={[
                "bg-gradient-to-r from-orange-400 to-red-500",
                "bg-gradient-to-r from-orange-400 to-red-500",
              ]}
              iconGradientClasses="bg-gradient-to-r from-orange-400 to-red-500"
            />
            {/* Кнопка назад */}
            <motion.button
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              onClick={() => router.push("/construction")}
              className="flex items-center cursor-pointer space-x-2 mb-8 text-orange-500 hover:text-orange-400 transition-colors"
            >
              <FaArrowAltCircleLeft className="w-10 h-10" />
            </motion.button>

            {/* Заголовок */}
            <motion.div
              initial={{ opacity: 0, y: 160 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
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
              initial={{ opacity: 0, y: 180 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
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
