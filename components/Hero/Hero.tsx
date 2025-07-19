"use client";

import React, { useState } from "react";
import { FaTractor, FaBalanceScale } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";

const directions = [
  {
    label: "Земельний",
    icon: <FaTractor size={36} />,
    desc: "Оцінка, аудит, супровід земельних питань",
    color: "var(--hero-gold)",
    badgeSide: "right",
  },
  {
    label: "Юридичний",
    icon: <FaBalanceScale size={36} />,
    desc: "Захист інтересів, супровід угод, аудит",
    color: "var(--hero-blue)",
    badgeSide: "right",
  },
  {
    label: "Будівельний",
    icon: <MdConstruction size={36} />,
    desc: "Технічний нагляд, аудит, проектування",
    color: "var(--hero-yellow)",
    badgeSide: "left",
  },
  {
    label: "Фінансовий",
    icon: <BsBank2 size={36} />,
    desc: "Аудит, інвестиції, банківські послуги",
    color: "var(--hero-dark)",
    badgeSide: "left",
  },
];

const CIRCLE_RADIUS = 120;
const CENTER = 160;
const SECTOR_ANGLE = 360 / directions.length;

const Hero = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  // Вычисляем координаты для секторов
  const getSectorPath = (idx: number) => {
    const startAngle = SECTOR_ANGLE * idx - 90;
    const endAngle = startAngle + SECTOR_ANGLE;
    const rad = (deg: number) => (deg * Math.PI) / 180;
    const x1 = CENTER + CIRCLE_RADIUS * Math.cos(rad(startAngle));
    const y1 = CENTER + CIRCLE_RADIUS * Math.sin(rad(startAngle));
    const x2 = CENTER + CIRCLE_RADIUS * Math.cos(rad(endAngle));
    const y2 = CENTER + CIRCLE_RADIUS * Math.sin(rad(endAngle));
    return `M${CENTER},${CENTER} L${x1},${y1} A${CIRCLE_RADIUS},${CIRCLE_RADIUS} 0 0,1 ${x2},${y2} Z`;
  };

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20"
      style={{ background: "var(--hero-bg)" }}
    >
      <div className="w-full max-w-5xl flex flex-col items-center gap-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center tracking-tight mb-4 text-[var(--hero-yellow)] drop-shadow-lg">
          Консалтинг нового рівня
        </h1>
        <p className="text-lg md:text-2xl text-center text-[var(--hero-gold)] max-w-2xl mb-8">
          Сучасні рішення для земельних, будівельних, фінансових та юридичних
          питань. Оберіть напрям — і отримайте експертну консультацію.
        </p>
        {/* Интерактивный круг */}
        <div className="relative flex items-center justify-center w-[320px] h-[320px] mb-10">
          <svg width={320} height={320} className="absolute left-0 top-0 z-0">
            {directions.map((dir, idx) => (
              <path
                key={dir.label}
                d={getSectorPath(idx)}
                fill={hovered === idx ? dir.color : "rgba(255,255,255,0.07)"}
                className={`transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "drop-shadow-[0_0_24px_rgba(255,215,0,0.4)]"
                    : ""
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{ filter: hovered === idx ? "brightness(1.1)" : "none" }}
              />
            ))}
          </svg>
          {/* Иконки по кругу */}
          {directions.map((dir, idx) => {
            const angle =
              (SECTOR_ANGLE * idx - 90 + SECTOR_ANGLE / 2) * (Math.PI / 180);
            const x = CENTER + (CIRCLE_RADIUS - 36) * Math.cos(angle);
            const y = CENTER + (CIRCLE_RADIUS - 36) * Math.sin(angle);
            const badgeSide = dir.badgeSide;
            return (
              <div
                key={dir.label}
                className="absolute flex items-center transition-all duration-300 z-10"
                style={{
                  left: x - 28,
                  top: y - 28,
                  flexDirection: badgeSide === "left" ? "row-reverse" : "row",
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Иконка */}
                <div
                  className={`rounded-full p-3 shadow-lg transition-all duration-300 ${
                    hovered === idx ? "scale-110" : "scale-100"
                  }`}
                  style={{
                    color: hovered === idx ? dir.color : "var(--hero-gold)",
                    background:
                      hovered === idx ? "#fff" : "rgba(255,255,255,0.12)",
                  }}
                >
                  {dir.icon}
                </div>
                {/* Бадж с текстом */}
                {hovered === idx && (
                  <div
                    className={`absolute ${
                      badgeSide === "left"
                        ? "right-full mr-3"
                        : "left-full ml-3"
                    } top-1/2 -translate-y-1/2 bg-[var(--hero-card)] border border-[var(--hero-yellow)] rounded-lg px-3 py-2 shadow-lg min-w-max z-20 animate-fade-in`}
                  >
                    <div className="text-sm font-bold text-[var(--hero-yellow)] uppercase tracking-wide mb-1">
                      {dir.label}
                    </div>
                    <div className="text-xs text-[var(--hero-gold)] leading-tight max-w-32">
                      {dir.desc}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* Анимированная кнопка */}
        <button className="px-10 py-4 rounded-full font-bold bg-[var(--hero-yellow)] text-[var(--hero-dark)] shadow-lg border-2 border-[var(--hero-gold)] hover:bg-[var(--hero-gold)] hover:text-[var(--hero-dark)] cursor-pointer transition-all text-xl tracking-wide animate-bounce hover:animate-none">
          Отримати консультацію
        </button>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default Hero;
