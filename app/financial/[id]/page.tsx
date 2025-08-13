"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import {
  Calculator,
  TrendingUp,
  BarChart3,
  FileText,
  DollarSign,
  Coins,
  Globe,
} from "lucide-react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar";
import Title from "@/components/Title";
import { useLingui } from "@lingui/react";

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

export default function FinancialDetailPage() {
  const { i18n } = useLingui();

  const firstServices = [
    {
      id: "accounting_consulting_and_support",
      icon: Coins,
      title: i18n._(
        "Консультування та підтримка бухгалтерії з питань оподаткування та фінансів"
      ),
      description: i18n._("Підтримка та консультації"),
      color: "from-yellow-500 to-amber-500",
      detailedDescription: i18n._(
        "Етапи роботи:\n\n1. Аналіз поточної системи обліку\n2. Виявлення проблемних питань\n3. Розробка рекомендацій з оптимізації\n4. Постійна підтримка та консультації\n5. Супровід при перевірках\n\nСупроводжуємо:\n\n- Введення бухгалтерського обліку юридичних осіб та ФОП\n- Оптимізацію податкових платежів\n- Питання уникнення штрафів та санкцій\n- Підготувку до перевірок"
      ),
    },
    {
      id: "tax_liability_planning",
      icon: Calculator,
      title: i18n._(
        "Планування податкових зобов'язань та розробка стратегії податкових обов’язків"
      ),
      description: i18n._("Прогнозування податкових платежів"),
      color: "from-blue-500 to-indigo-500",
      detailedDescription: i18n._(
        "Етапи роботи:\n\n1. Аналіз поточного податкового навантаження\n2. Прогнозування податкових платежів\n3. Розробка стратегії оптимізації\n4. Впровадження запланованих заходів\n5. Моніторинг результатів\n\nРезультат:\n\n- Зменшення податкового навантаження\n- Покращення фінансового планування\n- Уникнення податкових ризиків"
      ),
    },
    {
      id: "financial_statement_analysis",
      icon: BarChart3,
      title: i18n._("Аналіз фінансової звітності"),
      description: i18n._(
        "за 2024 рік та за 1 квартал 2025 року для розробки стратегії та плану розвитку підприємства"
      ),
      color: "from-purple-500 to-blue-500",
      detailedDescription: i18n._(
        "Комплексний аналіз фінансового стану підприємства за 2024 рік та за 1 квартал 2025 року для розробки стратегії та плану розвитку.\n\nЕтапи роботи:\n\n1. Збір та систематизація звітності\n2. Горизонтальний та вертикальний аналіз\n3. Розрахунок фінансових коефіцієнтів\n4. Оцінка динаміки показників\n5. Підготовка висновків та рекомендацій\n\nПроводимо аналіз:\n\n- Ліквідності та платоспроможності підприємств\n- Рентабельність діяльності підприємства\n- Фінансову стійкість\n- Ділову активність"
      ),
    },
    {
      id: "optimization_of_enterprise_costs",
      icon: TrendingUp,
      title: i18n._("Оптимізація витрат підприємства"),
      description: i18n._(
        "надання рекомендацій для ефективного використання матеріальних ресурсів"
      ),
      color: "from-green-500 to-emerald-500",
      detailedDescription: i18n._(
        "Проведення аналізу 20 рахунків бухгалтерського обліку та надання рекомендацій для ефективного використання матеріальних ресурсів.\n\nЕтапи роботи:\n\n1. Аналіз поточного фінансового стану\n2. Визначення цілей та завдань\n3. Розробка фінансових планів\n4. Прогнозування фінансових потоків\n5. Моніторинг виконання планів\n\nРезультат:\n\n- Чіткий план розвитку підприємства\n- Прогноз фінансових потоків\n- Стратегія інвестування"
      ),
    },
    {
      id: "collection_of_constituent_documents",
      icon: FileText,
      title: i18n._("Збір установчих, фінансових, бухгалтерських документів"),
      description: i18n._(
        "Відповідно до положень Господарського кодексу України"
      ),
      color: "from-indigo-500 to-purple-500",
      detailedDescription: i18n._(
        "Збір установчих, фінансових, бухгалтерських документів відповідно до положень Господарського кодексу України, зокрема статті 81, та постанови Кабінету Міністрів України від 3 червня 2020 р. №475.\n\nЕтапи роботи:\n\n1. Збір та систематизація даних\n2. Підготовка звітності підприємств\n3. Перевірка правильності звітності\n4. Супровід аудиторської перевірки\n5. Виправлення зауважень\n\nРезультат:\n\n- Якісна фінансова звітність\n- Успішне проходження аудиту\n- Дотримання стандартів"
      ),
    },
  ];

  const secondServices = [
    {
      id: "international_services",
      icon: Globe,
      title: i18n._("Міжнародні послуги"),
      description: i18n._("Консультування та підтримка"),
      color: "from-yellow-500 to-amber-500",
      detailedDescription: i18n._("Етапи роботи\n\n1. Консультування з питань бухгалтерського обліку\n2. Аналіз структури компанії та побудова облікової політики\n3. Ведення первинної документації\n4. Супровід банківських операцій\n5. Облік усіх господарських операцій відповідно до чинного законодавства.\n6. Проведення аналізу рахунків бухгалтерського обліку та надання рекомендацій для ефективного використання матеріальних ресурсів\n7. Планування податкових зобов’язань та розробка стратегії податкових обов’язків\n8. Аналіз фінансової звітності для розробки стратегії та плану розвитку підприємства , та рекомендаціі щодо її  підготовки\n9. Консультації щодо чинного податкового законодавства\n10. Супровід під час перевірок"),
    },
  ];

  const params = useParams();
  const router = useRouter();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const serviceId = params.id as string;
  const allServices = [...firstServices, ...secondServices];
  const currentService = allServices.find((s) => s.id === serviceId);

  useEffect(() => {
    if (!currentService) {
      router.push("/financial");
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
              icon={<DollarSign className="w-10 h-10 text-white" />}
              titleParts={[i18n._("Фінансовий"), i18n._("консалтинг")]}
              textGradientClasses={[
                "bg-gradient-to-r from-yellow-400 to-amber-500",
                "bg-gradient-to-r from-yellow-400 to-amber-500",
              ]}
              iconGradientClasses="bg-gradient-to-r from-yellow-500 to-amber-500"
              pulseRing={true}
              iconBoxShadowClasses="0 0 40px rgba(234, 179, 8, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)"
              pulseRingClassName="border-yellow-400"
            />
            {/* Кнопка назад */}
            <motion.button
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              onClick={() => router.push("/financial")}
              className="flex items-center cursor-pointer space-x-2 mb-8 text-yellow-500 hover:text-yellow-400 transition-colors"
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
