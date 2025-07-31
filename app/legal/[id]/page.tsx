"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import {
  Scale,
  FileText,
  Shield,
  Gavel,
  Building2,
  Users,
  Search,
  HandHeart,
  UserCheck,
  Briefcase,
  BookOpen,
  Home,
} from "lucide-react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar";

const services = [
  {
    id: "representation_in_courts",
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
  },
  {
    id: "drafting_contracts",
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
  },
  {
    id: "corporate_law",
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
  },
  {
    id: "consumer_protection",
    icon: Shield,
    title: "Захист прав споживачів",
    description: "Відстоювання інтересів споживачів у спорах з продавцями",
    color: "from-green-500 to-emerald-500",
    detailedDescription: `
Професійний захист прав споживачів у спорах з продавцями товарів та послуг.
      
Етапи роботи:
1. Аналіз ситуації та документів
2. Підготовка претензії
3. Переговори з продавцем
4. Представництво в суді
5. Контроль виконання рішення
      
Допомагаємо з:
- Поверненням неякісних товарів
- Відшкодуванням збитків
- Расторгненням договорів
- Компенсацією моральної шкоди
    `,
  },
  {
    id: "criminal_law",
    icon: Gavel,
    title: "Трудове право",
    description: "Захист у кримінальних справах та адвокатське представництво",
    color: "from-orange-500 to-red-500",
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
  },
  {
    id: "family_law",
    icon: Users,
    title: "Сімейне право",
    description: "Вирішення сімейних спорів та правових питань",
    color: "from-pink-500 to-rose-500",
    detailedDescription: `
Професійне вирішення сімейних спорів та правових питань з урахуванням інтересів всіх сторін.
      
Етапи роботи:
1. Консультація з сімейних питань
2. Аналіз ситуації та документів
3. Розробка стратегії вирішення
4. Підготовка документів
5. Представництво в суді
      
Вирішуємо питання:
- Розлучення та поділ майна
- Визначення місця проживання дітей
- Стягнення аліментів
- Усиновлення та опікунство
    `,
  },
  {
    id: "analysis_of_legislation",
    icon: Search,
    title: "Аналіз законодавства",
    description: "З наданням відповідних письмових консультацій",
    color: "from-teal-500 to-cyan-500",
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
  },
  {
    id: "representation_of_interests",
    icon: BookOpen,
    title: "Представництво інтересів",
    description: "Захист фізичних та юридичних осіб в правоохоронних і судових органах",
    color: "from-amber-500 to-yellow-500",
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
  },
  {
    id: "legal_support_when_purchasing_real_estate",
    icon: Home,
    title: "Юридичний супровід при придбанні нерухомості",
    description: "Перевірка дозвільних документів, договорів тощо",
    color: "from-slate-500 to-gray-500",
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
  },
  {
    id: "assistance_in_obtaining_permits",
    icon: FileText,
    title: "Допомога при отриманні дозвільних документів",
    description: "Комплексна перевірка правової діяльності підприємства",
    color: "from-violet-500 to-purple-500",
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
  },
  {
    id: "analysis_and_examination_of_legal_documents",
    icon: Briefcase,
    title: "Аналіз та експертиза юридичних документів",
    description: "Підтримка фізичних та юридичних осіб в процесі розпізнавання правових документів",
    color: "from-emerald-500 to-green-500",
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
  },
  {
    id: "representation_in_enforcement_proceedings",
    icon: UserCheck,
    title: "Представництво у виконавчому провадженні",
    description: "Захист інтересів фізичних та юридичних осіб",
    color: "from-blue-500 to-indigo-500",
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
  },
  {
    id: "other_types_of_legal_services",
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

export default function LegalDetailPage() {
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
      router.push("/legal");
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
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-8 shadow-2xl relative"
                style={{
                  boxShadow:
                    "0 0 40px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)",
                  transform: "perspective(1000px)",
                }}
              >
                <Scale className="w-10 h-10 text-white" />
                {/* Pulsing ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 border-2 border-purple-400 rounded-full"
                />
              </motion.div>

              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white flex flex-col gap-1 md:gap-4
              items-center justify-center md:flex-row leading-relaxed"
              >
                <span className="bg-gradient-to-r mr-2 from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                  Юридичні
                </span>

                <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                  послуги
                </span>
              </h2>
            </motion.div>
            {/* Кнопка назад */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => router.push("/legal")}
              className="flex items-center cursor-pointer space-x-2 mb-8 text-violet-500 hover:text-violet-400 transition-colors"
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
