"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import {
  Building,
  Compass,
} from "lucide-react";
import { FaArrowAltCircleLeft, FaDraftingCompass, FaFileInvoice, FaMapMarkedAlt } from "react-icons/fa";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar";
import Title from "@/components/Title";
import { useLingui } from "@lingui/react";
import { PiBlueprintLight } from "react-icons/pi";
import { Md3dRotation, MdVerifiedUser } from "react-icons/md";
import { BsPassport } from "react-icons/bs";
import { RxBorderSplit } from "react-icons/rx";

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
  const { i18n } = useLingui();

  const serviceFirst = [
  {
    id: "construction_engineering_surveys",
    icon: FaDraftingCompass,
    title: i18n._("Інженерні вишукування"),
    description: i18n._("Вишукування науково-технічної діяльності"),
    color: "from-orange-500 to-red-500",
    detailedDescription: i18n._("Інженерні вишукування для будівництва - це вид науково-технічної діяльності (згідно з Законом України 'Про наукову та науково-технічну діяльність'), що забезпечує вивчення природних і техногенних умов територій (ділянок) об'єктів будівництва, розроблення прогнозів взаємодії об'єктів будівництва з навколишнім середовищем, розроблення усіх видів проектів (у тому числі інженерної підготовки територій, захисту територій і об'єктів від небезпечних процесів).\n\nВиди інженерних вишукувань для будівництва:\n\n1. Інженерно-геодезичні\n2. Інженерно-геологічні\n3. Геотехнічні та інженерно-гідрогеологічні (у складі комплексних інженерно-геологічних вишукувань або окремо)\n4. Інженерно-гідрометеорологічні\n5. Вишукування для раціонального використання та охорони навколишнього середовища\n6. Спеціалізовані (умовно вишукувальні)\n\nТермін виконання: від 10 робочих днів."),
  },
  {
    id: "construction_design_tasks",
    icon: PiBlueprintLight,
    title: i18n._("Завдання на проектування"),
    description: i18n._(
      "(планувальних, архітектурних, інженерних і технологічних рішень об'єкта будівництва)"
    ),
    color: "from-amber-500 to-orange-500",
    detailedDescription: i18n._("Завдання на проектування - це вимоги замовника до планувальних, архітектурних, інженерних і технологічних рішень об'єкта будівництва та його основних параметрів.\n\nЕтапи складання завдання на проектування:\n\n1. Збір вихідних даних\n2. Аналіз вихідних даних та формування завдання на проектування\n\nТермін виконання: від 10 робочих днів."),
  },
  {
    id: "construction_schemes_of_land_development_intentions",
    icon: FaMapMarkedAlt,
    title: i18n._("Схеми намірів забудови земельної ділянки"),
    description: i18n._("(є необхідним для узаконення об’єкту нерухомості)"),
    color: "from-red-500 to-pink-500",
    detailedDescription: i18n._("Схема намірів - це графічний документ, що визначає можливість розміщення об'єкта на конкретній ділянці та є необхідним для узаконення об’єкту нерухомості.\n\nЕтапи отримання схеми намірів забудови земельної ділянки:\n\n1. Збір та аналіз даних\n2. Топографічна зйомка\n3. Формування ескізних намірів забудови\n4. Реєстрація схеми намірів в ДАБК\n\nНеобхідні документи:\n\n- Правовстановлюючі документи на земельну ділянку\n- Успішне проходження аудиту\n- Копія паспорту громадянина України та РНОКПП\n\nТермін виконання: від 15-20 робочих днів."),
  },
  {
    id: "construction_urban_planning_conditions",
    icon: Building,
    title: i18n._("Містобудівні умови і обмеження"),
    description: i18n._("Отримання містобудівних умов та обмежень"),
    color: "from-orange-600 to-red-600",
    detailedDescription: i18n._("Містобудівні умови і обмеження (МУО) – це документ, що містить комплекс планувальних та архітектурних вимог до проектування і будівництва і є одним із складових вихідних даних для проектування.\n\nЕтапи отримання МУО:\n\n1. Підготовка та формування заявки\n2. Технічний супровід при отриманні містобудівних умов і обмежень\n\nТермін виконання: від 15 робочих днів."),
  },
  {
    id: "construction_plans_of_territories",
    icon: Compass,
    title: i18n._("Детальні плани територій (ДПТ)"),
    description: i18n._("Розробка детальних планів територій"),
    color: "from-yellow-500 to-orange-500",
    detailedDescription: i18n._("Детальний план території (ДПТ) – юридичний документ, який встановлює територіальні межі, призначення та особливості використання об’єкта, функціональне застосування окремих його елементів.\n\nЕтапи отримання ДПТ:\n\n1. Отримання дозволу органу місцевого самоврядування на розробку ДПТ\n2. Збір всіх необхідних даних\n3. Розробка детального плану територій\n4. Погодження з відповідними органами\n5. Затвердження ДПТ в органі місцевого самоврядування\n\nТермін виконання: від 3 місяців."),
  },
  ];

  const serviceSecond = [
    {
      id: "construction_development_of_design_and_estimate_documentation",
      icon: FaFileInvoice,
      title: i18n._("Розробка проектно-кошторисної документації"),
      description: i18n._("Проектно-кошторисна документація"),
      color: "from-blue-700 to-sky-500",
      detailedDescription: i18n._("Проектно-кошторисна документація – комплекс документів, що визначають місце будівництва (реконструкції) майбутнього об'єкта, його архітектурне, планувальне і конструктивне рішення, потребу в кадрах, будівельних матеріалах, машинах і обладнанні, коштах.\n\nВиди проектно-кошторисної документації:\n\n1. Архітектурні рішення (Стадія «П», «РД»)\n2. Конструктивні рішення (Стадія «П», «РД»)\n3. Інженерні рішення (внутрішні інженерні мережі, зовнішні інженерні рішення Стадії «П», «РД»)\n4. Технологічні карти\n5. Проекти Організації Виробництва\n6. Проекти енергоефективності\n7. Кошторисна документація\n\nТермін виконання (окремого розділу): від 7 робочих днів.\n\nПроходження експертизи в разі необхідності (окремого розділу): від 7 робочих днів."),
    },
  ];

  const serviceThird = [
    {
      id: "construction_amnesty",
      icon: MdVerifiedUser,
      title: i18n._("Будівельна амністія"),
      description: i18n._("Спрощена процедура легалізації об’єкту"),
      color: "from-emerald-500 to-teal-400",
      detailedDescription: i18n._("Будівельна амністія — це спрощена процедура легалізації вже зведеного (реконструйованого) об’єкту в період з 05.08.1992 року до 09.04.2015 року.\n\nЕтапи процедури легалізації самовільно збудованих об’єктів:\n\n1. Збір та підготовка даних (технічний паспорт, звіт про технічне обстеження для будівель більше 100 м2, декларація, тощо)\n2. Перевірка ДАБК\n3. Реєстрація декларації\n4. Присвоєння поштової адреси\n5. Реєстрація права власності\n\nПакет документів:\n\n- Правовстановлюючі документи на земельну ділянку\n- Копія паспорту громадянина України та РНОКПП власника (або власників, якщо їх кілька)\n\nТермін виконання: від 1-го місяця."),
    },
    {
      id: "construction_technical_data_sheets",
      icon: BsPassport,
      title: i18n._("Технічні паспорти"),
      description: i18n._("Оформлення та реєстрація технічних паспортів"),
      color: "from-purple-700 to-blue-600",
      detailedDescription: i18n._("Технічний паспорт – це технічний документ, який виготовляється на основі проведення комплексу робіт з інвентаризації об'єкту нерухомого майна.\n\nЕтапи виготовлення технічного паспорта:\n\n1. Обстеження та визначення технічних параметрів об’єкту нерухомого майна\n2. Обмірювання об’єкту нерухомого майна\n3. Оформлення технічного паспорту\n4. Реєстрація технічного паспорту\n\nТермін виготовлення: від 7 робочих днів."),
    },
    {
      id: "construction_division_of_existing_home_ownership",
      icon: RxBorderSplit,
      title: i18n._("Поділ існуючого домоволодіння"),
      description: i18n._("Підготовка та реєстрація договору поділу домоволодіння"),
      color: "from-purple-500 to-green-600",
      detailedDescription: i18n._("Підготовка та реєстрація договору поділу домоволодіння.\n\nЕтапи роботи:\n\n1. Вивчення та аналіз вихідних даних\n2. Підготовка необхідних (недостаючих) документів\n3. Підготовка та реєстрація договору поділу домоволодіння у нотаріуса\n4. Отримання поштові адреси новоутворених домоволодінь\n5. Реєстрація речових прав на окремі домоволодіння\n\nНеобхідні документи:\n\n- Правовстановлюючі документи на об’єкт нерухомого майна\n- Правовстановлюючі документи на земельну ділянку\n- Копія паспорту громадянина України та РНОКПП власників\n\nТермін виконання: 1-2 місяці."),
    },
  ];

  const serviceFourth = [
      {
        id: "construction_architectural_visualization_and_animation",
        icon: Md3dRotation,
        title: i18n._("Архітектурна візуалізація та анімація"),
        description: i18n._("Розробка концепцій архітектурних об’єктів"),
        color: "from-blue-700 to-orange-500",
        detailedDescription: i18n._("Розробка концепцій архітектурних об’єктів.\n\nВиди послуг:\n\n1. Розробка концепцій архітектурних об’єктів будь-якої складності (крім промислових)\n2. 3D моделювання об’єктів архітектури\n3. Розробка фотореалістичних 3D-Візуалізацій\n4. Розробка 3D-Анімації об’єктів архітектури\n5. Розробка презентаційних матеріалів"),
      },
    ]

  const params = useParams();
  const router = useRouter();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const serviceId = params.id as string;
  const allServices = [...serviceFirst, ...serviceSecond, ...serviceThird, ...serviceFourth];
  const currentService = allServices.find((s) => s.id === serviceId);

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
                      {i18n._("Зв’яжіться з нами")}
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
