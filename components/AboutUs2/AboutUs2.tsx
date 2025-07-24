"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Award, Target, Heart } from "lucide-react";

// Команда экспертов
const teamMembers = [
  {
    name: "Олександр Петренко",
    role: "Головний консультант",
    image: "/team/1.png",
    specialty: "Юридичне консультування",
  },
  {
    name: "Марія Коваль",
    role: "Фінансовий експерт",
    image: "/team/2.png",
    specialty: "Фінансовий аналіз",
  },
  {
    name: "Дмитро Іваненко",
    role: "Будівельний інженер",
    image: "/team/3.png",
    specialty: "Будівельні проекти",
  },
  {
    name: "Софія Сидоренко",
    role: "Земельний експерт",
    image: "/team/4.png",
    specialty: "Земельне право",
  },
];

const AboutUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="about-section"
      ref={ref}
      className="min-h-screen w-full overflow-hidden"
    >
      <div className="relative w-full h-full">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Image
                src="/esviem2.png"
                alt="ESVIEM Consulting"
                width={300}
                height={100}
                priority
                className="mx-auto w-auto h-16 md:h-20"
              />
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white flex flex-row gap-2 md:gap-4 items-center justify-center font-oleo-script leading-tight flex-wrap">
              <span className="text-[#D38B14]">Наша</span>
              <span className="text-[#D38B14]">Команда</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Команда експертів з досвідом понад 15 років, що беруться за
              найскладніші задачі та знаходять оптимальні рішення для кожного
              клієнта
            </motion.p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 mb-20"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                className="text-center"
              >
                <div>
                  {/* Photo */}
                  <div className="relative mb-6 flex items-end justify-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={400}
                      className="max-w-full max-h-72 md:max-h-96 object-contain"
                      priority={index < 2}
                    />
                  </div>

                  {/* Info */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg md:text-xl leading-tight text-white">
                      {member.name}
                    </h3>

                    <p className="text-yellow-400 text-sm md:text-base font-medium">
                      {member.role}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              {
                icon: Award,
                text: "15+ років досвіду",
                color: "from-blue-400 to-blue-500",
              },
              {
                icon: Target,
                text: "Найскладніші задачі",
                color: "from-red-400 to-red-500",
              },
              {
                icon: Heart,
                text: "Індивідуальний підхід",
                color: "from-green-400 to-green-500",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 shadow-lg"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-full mb-4 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {item.text}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
