"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import {
  Calculator,
  TrendingUp,
  PieChart,
  BarChart3,
  FileText,
  Target,
  DollarSign,
} from "lucide-react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar";
import Title from "@/components/Title";

const services = [
  {
    id: "accounting_consulting_and_support",
    icon: Calculator,
    title: "Консультування та підтримка бухгалтерії",
    description: "з питань оподаткування та фінансів",
    color: "from-yellow-500 to-amber-500",
    detailedDescription: `
Професійне консультування з питань бухгалтерського обліку та оподаткування для ефективного ведення бізнесу.
      
Етапи роботи:
1. Аналіз поточної системи обліку
2. Виявлення проблемних питань
3. Розробка рекомендацій з оптимізації
4. Постійна підтримка та консультації
5. Супровід при перевірках
      
Допомагаємо:
- Правильно вести бухгалтерський облік
- Оптимізувати податкові платежі
- Уникнути штрафів та санкцій
- Підготуватися до перевірок
    `,
  },
  {
    id: "tax_liability_planning",
    icon: Target,
    title: "Планування податкових зобов'язань",
    description: "та розробка стратегії податкових обов'язків",
    color: "from-blue-500 to-indigo-500",
    detailedDescription: `
Стратегічне планування податкових зобов'язань для оптимізації фінансових потоків підприємства.
      
Етапи роботи:
1. Аналіз поточного податкового навантаження
2. Прогнозування податкових платежів
3. Розробка стратегії оптимізації
4. Впровадження запланованих заходів
5. Моніторинг результатів
      
Результат:
- Зменшення податкового навантаження
- Покращення фінансового планування
- Уникнення податкових ризиків
    `,
  },
  {
    id: "financial_statement_analysis",
    icon: BarChart3,
    title: "Аналіз фінансової звітності",
    description:
      "за 2024 рік та за 1 квартал 2025 року для розробки стратегії та плану розвитку підприємства",
    color: "from-purple-500 to-blue-500",
    detailedDescription: `
Комплексний аналіз фінансового стану підприємства для прийняття стратегічних рішень.
      
Етапи роботи:
1. Збір та систематизація звітності
2. Горизонтальний та вертикальний аналіз
3. Розрахунок фінансових коефіцієнтів
4. Оцінка динаміки показників
5. Підготовка висновків та рекомендацій
      
Аналізуємо:
- Ліквідність та платоспроможність
- Рентабельність діяльності
- Фінансову стійкість
- Ділову активність
    `,
  },
  {
    id: "optimization_of_enterprise_costs",
    icon: TrendingUp,
    title: "Фінансове планування",
    description: "та прогнозування розвитку підприємства",
    color: "from-green-500 to-emerald-500",
    detailedDescription: `
Розробка фінансових планів та прогнозів для стратегічного розвитку підприємства.
      
Етапи роботи:
1. Аналіз поточного фінансового стану
2. Визначення цілей та завдань
3. Розробка фінансових планів
4. Прогнозування фінансових потоків
5. Моніторинг виконання планів
      
Результат:
- Чіткий план розвитку підприємства
- Прогноз фінансових потоків
- Стратегія інвестування
    `,
  },
  {
    id: "conducting_an_analysis_of_20_accounts",
    icon: PieChart,
    title: "Оптимізація витрат",
    description: "та підвищення ефективності використання ресурсів",
    color: "from-red-500 to-pink-500",
    detailedDescription: `
Аналіз та оптимізація витрат підприємства для підвищення ефективності діяльності.
      
Етапи роботи:
1. Аналіз структури витрат
2. Виявлення резервів економії
3. Розробка заходів з оптимізації
4. Впровадження економічних рішень
5. Контроль результатів
      
Економія:
- Зменшення операційних витрат
- Оптимізація використання ресурсів
- Підвищення рентабельності
    `,
  },
  {
    id: "collection_of_constituent_documents",
    icon: FileText,
    title: "Підготовка фінансової звітності",
    description: "та супровід аудиторських перевірок",
    color: "from-indigo-500 to-purple-500",
    detailedDescription: `
Професійна підготовка фінансової звітності та супровід при аудиторських перевірках.
      
Етапи роботи:
1. Збір та систематизація даних
2. Підготовка звітності
3. Перевірка правильності
4. Супровід аудиторської перевірки
5. Виправлення зауважень
      
Результат:
- Якісна фінансова звітність
- Успішне проходження аудиту
- Дотримання стандартів
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

export default function FinancialDetailPage() {
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
              titleParts={["Фінансовий", "консалтинг"]}
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
