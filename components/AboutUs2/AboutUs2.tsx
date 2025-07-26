"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Award, Target, Heart } from "lucide-react";
import TopBar from "../TopBar";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { partners } from "@/utils";

const AboutUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="about-section"
      ref={ref}
      className="min-h-screen w-full overflow-hidden relative"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="relative w-full h-full min-h-screen">
        <div className="container mx-auto px-4 py-4 relative z-10">
          {/* Contact Info Block - верхний правый угол */}
          <TopBar inView={inView} />
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

            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 flex flex-row gap-2 md:gap-4 items-center justify-center leading-tight flex-wrap"
              style={{
                color: "#D38B14",
                fontFamily:
                  "Montserrat, Inter, system-ui, -apple-system, sans-serif",
                fontWeight: "700",
              }}
            >
              <span>Про</span>
              <span>Нас</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8"
              style={{
                color: "#d1d5db",
                fontFamily:
                  "Montserrat, Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              ESVIEM — це професійна консультаційна компанія з понад 15-річним
              досвідом роботи у сферах юридичного, фінансового, будівельного та
              земельного консультування. Ми спеціалізуємось на вирішенні
              найскладніших завдань для бізнесу та приватних клієнтів, надаючи
              комплексні рішення та індивідуальний підхід до кожного проекту.
              Наша місія — забезпечити клієнтам впевненість у прийнятті
              стратегічних рішень завдяки експертним знанням та проверенному
              досвіду.
            </motion.p>
          </motion.div>

          {/* Наши Партнери */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-8"
          >
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{
                color: "#D38B14",
                fontFamily:
                  "Montserrat, Inter, system-ui, -apple-system, sans-serif",
                fontWeight: "700",
              }}
            >
              Наші Партнери
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <InfiniteMovingCards
              items={partners}
              direction="right"
              speed="normal"
              className="mb-30"
            />
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              {
                icon: Award,
                text: "15+ років досвіду",
                color: "linear-gradient(135deg, #60a5fa, #3b82f6)",
              },
              {
                icon: Target,
                text: "Найскладніші задачі",
                color: "linear-gradient(135deg, #f87171, #ef4444)",
              },
              {
                icon: Heart,
                text: "Індивідуальний підхід",
                color: "linear-gradient(135deg, #4ade80, #22c55e)",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl p-6 border shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, rgb(30, 41, 59), rgb(51, 65, 85))",
                    borderColor: "rgb(71, 85, 105)",
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-lg"
                    style={{ background: item.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{
                      color: "#ffffff",
                      fontFamily:
                        "Montserrat, Inter, system-ui, -apple-system, sans-serif",
                      fontWeight: "700",
                    }}
                  >
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
