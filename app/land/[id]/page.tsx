"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo } from "react";
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
import Title from "@/components/Title";
import {
  MdOutlineInventory2,
  MdOutlineLayers,
  MdOutlineLayersClear,
} from "react-icons/md";
import { LuKeyRound } from "react-icons/lu";
import { useLingui } from "@lingui/react";

const cityServices = [
  {
    id: "kyiv_inventory",
    icon: MdOutlineInventory2,
    title: "Інвентаризація",
    description: "даних про земельні ділянки",
    color: "from-gray-700 to-cyan-700",
    detailedDescription: `
Перевірка, облік і оновлення даних про земельні ділянки.
      
Етапи роботи:
1. Аналіз вихідних даних
2. Виконання геодезичних робіт
3. Розробка документації із землеустрою
4. Реєстрація земельної ділянки в ДЗК 
5. Підготовка та супровід документів для подачі до Київської міської ради
      
Необхідні документи:
- Правовстановлюючі документи на об’єкт нерухомого майна
- Актуальний технічний паспорт (за наявності)
- Підтвердження сплати земельного податку (за наявності)
- Установчі документи користувача земельної ділянки
`,
  },
  {
    id: "privatization_kyiv_of_land_plots",
    icon: LuKeyRound,
    title: "Приватизація земельних ділянок",
    description: "(за наявності об’єкта нерухомості)",
    color: "from-emerald-500 to-emerald-700",
    detailedDescription: `
Під час дії воєнного стану можливе оформлення лише за наявності об’єкта нерухомості.
      
Етапи роботи:
1. Аналіз вихідних даних
2. Підготовка документів для подачі заяви до Київської міської ради
3. Реєстрація заяви про надання дозволу на розробку проекту землеустрою
4. Реєстрація заяви про використання (мовчазної згоди)
5. Виконання геодезичних робіт
6. Розробка проекту землеустрою
7. Реєстрація земельної ділянки в ДЗК (присвоєння кадастрового номеру)
8. Підготовка та супровід документів на затвердження Київської міської ради
      
Необхідні документи:
- Правовстановлюючі документи  на об’єкт нерухомого майна
- Актуальний технічний паспорт (за наявності)
- Паспорті код власника об’єкту  нерухомого майна
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

  const { i18n } = useLingui();

  const services = useMemo(
    () => [
      {
        id: "privatization_of_land_plots",
        icon: FileText,
        title: i18n._("Приватизація земельних ділянок"),
        description: i18n._("з підготовкою всієї необхідної документації"),
        color: "from-blue-500 to-blue-600",
        detailedDescription: i18n._("Повний супровід процедури приватизації земельних ділянок з підготовкою всієї необхідної документації.\n\nЕтапи роботи:\n1. Аналіз правового статусу ділянки\n2. Розробка технічної документації/проекту землеустрою\n3. Реєстрація земельної ділянки в ДЗК (присвоєння кадастрового номеру)\n4. Реєстрація речових прав на земельну ділянку\n\nНеобхідні документи:\n- Право власності на об’єкт нерухомого майна (житлові /садибні забудови)\n- Схема розміщення земельної ділянки (за наявності)"),
      },
      {
        id: "change_of_purpose",
        icon: Building,
        title: "Зміна цільового призначення земельної ділянки",
        description: "професійний супровід процедури",
        color: "from-green-500 to-green-600",
        detailedDescription: `
Професійний супровід процедури зміни цільового призначення земельної ділянки відповідно до потреб клієнта.
      
Етапи роботи:
1. Аналіз наявних документів
2. Отримання необхідних документів для зміни цільового призначення
3. Визначення можливості зміни цільового призначення 
4. Розробка відповідної документації із землеустрою
5. Внесення змін до кадастру
      
Можливі зміни:
- З сільськогосподарського на житлове будівництво
- З житлового на комерційне
- Під промислове будівництво
- Під рекреаційні цілі
- Інше
      
Необхідні документи:
- Право власності на земельну ділянку
- Копія паспорту  і коду власника земельної ділянки.
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
2. Визначення можливості внесення коду
3. Підготовка пакета документів
4. Подача заяви на внесення змін до ДЗК
5. Отримання витягу з ДЗК з оновленими даними
      
Необхідні документи:
- Право власності або користування на земельну ділянку
- Право власності на об’єкт нерухомого майна (за наявності)
- Копія архівних документів із землеустрою (за наявності)
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
4. Подача заяви до ДЗК на внесення змін
5. Отримання оновленого витягу з ДЗК зі змінами
      
Види помилок:
- Неправильні координати меж ділянки
- Помилки в площі ділянки
- Неточність в адресі розташування
- Помилки в цільовому призначенні
- Помилки в даних власника
      
Необхідні документи:
- Право власності або користування на земельну ділянку
- Копія паспорту і коду власника (користувача) земельної ділянки.
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
1. Аналіз вихідних даних
2. Отримання координат земельної ділянки
3. Виконання геодезичних робіт та встановлення межових знаків
4. Складання акту винесення меж

Включено в послугу:
- Геодезичні роботи
- Встановлення межових знаків
- Акт винесення меж в натуру
      
Необхідні документи:
- Право власності або користування на земельну ділянку
- Копія паспорту  і коду власника (користувача) земельної ділянки
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
4. Представництво інтересів у суді
      
Готуємо документи для:
- Спорів щодо меж земельних ділянок
- Випадків самовільного зайняття землі
- Визнання права власності на землю
- Спорів щодо сервітутів
- Відшкодування збитків
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
1. Аналіз вихідних даних
2. Встановлення об’єму робіт та визначення технічного завдання від Замовника
3. Виконання топографо-геодезичних робіт
4. Виготовлення топографічного плану
5. Нанесення меж земельної ділянки
6. Погодження з відповідними службами та організаціями
      
Погодження з:
- Енергопостачальними організаціями
- Газопостачальними службами
- Водоканалом та каналізацією
- Телекомунікаційними операторами
- Департаментом містобудування та архітектури
- Нанесення червоних ліній
`,
      },
      {
        id: "land_consolidation",
        icon: MdOutlineLayers,
        title: "Об’єднання земельних ділянок",
        description: "(шляхом злиття ділянок)",
        color: "from-yellow-900 to-amber-800",
        detailedDescription: `
Об’єднання суміжних ділянок в єдиний земельний масив.
      
Етапи роботи:
1. Аналіз вихідних даних
2. Виконання геодезичних робіт
3. Складання акту об’єднання земельних ділянок
4. Розробка документації із землеустрою
5. Реєстрація земельних ділянок в ДЗК (отримання кадастрового номеру на новоутворену земельну ділянку)
6. Реєстрація речових прав
      
Необхідні документи:
- Правовстановлюючі документи на земельні ділянки
- Нотаріальна заява щодо об’єднання земельних ділянок
- Правовстановлюючі документи на будинок (за наявності)
- Копія паспорту і коду власника земельної ділянки
`,
      },
      {
        id: "division_of_land_plots",
        icon: MdOutlineLayersClear,
        title: "⁠Поділ земельних ділянок",
        description: "для продажу, дарування чи забудови",
        color: "from-orange-600 to-red-800",
        detailedDescription: `
Формування кількох ділянок з однієї — для продажу, дарування чи забудови.
      
Етапи роботи:
1. Аналіз вихідних даних
2. Виконання геодезичних робіт
3. Складання акту розподілу та визначення площ новоутворених земельних ділянок (необхідно надати нотаріусу)
4. Розробка документації із землеустрою
5. Реєстрація земельних ділянок в ДЗК (отримання кадастрових номерів на новоутворені земельні ділянки)
6. Реєстрація речових прав
      
Необхідні документи:
- Правовстановлюючі документи на земельну ділянку
- Нотаріальна заява щодо поділу земельної ділянки / договір поділу земельної
- Ділянки для двох або більше власників
- Правовстановлюючі документи на будинок (за наявності)
- Висновок щодо можливості поділу будинку (за необхідності)
- Копія паспорту і коду власників земельної ділянки
`,
      },
    ],
    [i18n]
  );

  // const serviceId = parseInt(params.id as string);

  const serviceId = params.id as string;
  const allServices = [...services, ...cityServices];
  const currentService = allServices.find((s) => s.id === serviceId);

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
          <div className="container mx-auto px-4 py-4 relative z-10" ref={ref}>
            {/* Contact Info Block - верхний правый угол */}
            <TopBar inView={inView} />
            {/* Header */}
            <Title
              inView={inView}
              icon={<MapPin className="w-10 h-10 text-white" />}
              titleParts={["Земельний", "консалтинг"]}
              textGradientClasses={[
                "bg-gradient-to-r from-green-400 to-emerald-500",
                "bg-gradient-to-r from-green-400 to-emerald-500",
              ]}
              iconGradientClasses="bg-gradient-to-r from-green-500 to-emerald-500"
              iconBoxShadowClasses="0 0 40px rgba(16, 185, 129, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)"
            />
            {/* Кнопка назад */}
            <motion.button
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              onClick={() => router.push("/land")}
              className="flex items-center cursor-pointer space-x-2 mb-8 text-green-400 hover:text-green-300 transition-colors"
            >
              <FaArrowAltCircleLeft className="w-10 h-10" />
            </motion.button>

            {/* Заголовок */}
            <motion.div
              initial={{ opacity: 0, y: 160 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="flex items-center space-x-4 mb-8"
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
