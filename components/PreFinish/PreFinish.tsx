"use client";

import React, { useState } from "react";
import {
  FaRegBuilding,
  FaTractor,
  FaBalanceScale,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";

const menuItems = [
  { label: "Про компанію", icon: <FaRegBuilding />, desc: "Хто ми такі" },
  { label: "Земельний", icon: <FaTractor />, desc: "Земельні питання" },
  {
    label: "Будівельний",
    icon: <MdConstruction />,
    desc: "Будівельні послуги",
  },
  { label: "Фінансовий", icon: <BsBank2 />, desc: "Фінансові рішення" },
  { label: "Юридичний", icon: <FaBalanceScale />, desc: "Юридичний супровід" },
  { label: "Контакти", icon: <FaPhoneAlt />, desc: "Як з нами звʼязатись" },
];

const gradients = [
  "linear-gradient(135deg, #ffd500 0%, #003f88 100%)",
  "linear-gradient(135deg, #00509d 0%, #fdc500 100%)",
  "linear-gradient(135deg, #ffd500 0%, #003f88 100%)",
  "linear-gradient(135deg, #fdc500 0%, #00509d 100%)",
  "linear-gradient(135deg, #003f88 0%, #ffd500 100%)",
  "linear-gradient(135deg, #00296b 0%, #ffd500 100%)",
];

const PreFinish = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState<number>(0);

  return (
    <section
      className="relative min-h-screen w-full flex flex-col bg-[var(--pre-bg)]"
      style={
        {
          // https://coolors.co/palette/00296b-003f88-00509d-fdc500-ffd500
          ["--pre-bg"]: "#f7faff",
          ["--pre-primary"]: "#00296b",
          ["--pre-secondary"]: "#003f88",
          ["--pre-accent"]: "#fdc500",
          ["--pre-yellow"]: "#ffd500",
          ["--pre-blue"]: "#00509d",
          ["--pre-card"]: "#ffffff",
        } as React.CSSProperties
      }
    >
      {/* Grid-меню */}
      <nav className="w-full flex flex-col items-center pt-12 pb-20 select-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
          {menuItems.map((item, idx) => {
            const isActive = active === idx || hovered === idx;
            return (
              <button
                key={item.label}
                className={`relative flex flex-col items-center justify-center h-40 rounded-2xl shadow-xl transition-all duration-300 group overflow-hidden
                  ${isActive ? "scale-105 z-10" : "scale-100"}
                `}
                style={{
                  background: isActive
                    ? gradients[idx % gradients.length]
                    : "var(--pre-card)",
                  color: isActive ? "#fff" : "var(--pre-primary)",
                  boxShadow: isActive
                    ? `0 8px 32px 0 #003f8844`
                    : "0 2px 12px 0 #00296b22",
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActive(idx)}
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-2 text-3xl transition-all duration-300">
                  {item.icon}
                </span>
                <span className="font-bold text-lg md:text-xl mb-1 uppercase tracking-wide">
                  {item.label}
                </span>
                <span
                  className={`block text-base font-normal rounded transition-all duration-200 h-6 flex items-center justify-center
                    ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  style={{ minHeight: 24 }}
                >
                  {item.desc}
                </span>
                {/* Animated overlay */}
                <span
                  className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300
                    ${isActive ? "bg-white/10 opacity-100" : "opacity-0"}`}
                ></span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Showcase UI/UX */}
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <div className="flex flex-col items-center gap-10 w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--pre-primary)] text-center mb-2 tracking-tight">
            PreFinish — нова палітра
          </h2>
          <p className="text-lg md:text-xl text-[var(--pre-blue)] text-center mb-6 max-w-xl">
            Showcase UI/UX-елементів у сучасній палітрі перед завершенням
          </p>
          <div className="flex flex-wrap gap-6 justify-center w-full">
            {/* Кнопки */}
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--pre-primary)] text-white shadow-md hover:bg-[var(--pre-yellow)] hover:text-[var(--pre-primary)] transition-colors">
              Дізнатись більше
            </button>
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--pre-accent)] text-[var(--pre-primary)] border-2 border-[var(--pre-primary)] hover:bg-[var(--pre-yellow)] transition-colors">
              Замовити консультацію
            </button>
            {/* Инпут */}
            <input
              type="text"
              placeholder="Ваше ім'я"
              className="px-4 py-2 rounded-full border border-[var(--pre-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--pre-accent)] bg-white text-[var(--pre-primary)] min-w-[180px]"
            />
            {/* Селект */}
            <select className="px-4 py-2 rounded-full border border-[var(--pre-blue)] bg-white text-[var(--pre-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--pre-accent)] min-w-[180px]">
              <option>Оберіть послугу</option>
              <option>Передзавершальний аудит</option>
              <option>Підготовка документів</option>
              <option>Фінальна перевірка</option>
              <option>Інше</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFinish;
