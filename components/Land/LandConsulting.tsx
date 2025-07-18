"use client";

import React, { useState } from "react";
import {
  FaRegBuilding,
  FaTractor,
  FaHardHat,
  FaMoneyCheckAlt,
  FaBalanceScale,
  FaPhoneAlt,
} from "react-icons/fa";

const menuItems = [
  { label: "Про компанію", icon: <FaRegBuilding />, href: "#" },
  { label: "Земельний", icon: <FaTractor />, href: "#" },
  { label: "Будівельний", icon: <FaHardHat />, href: "#" },
  { label: "Фінансовий", icon: <FaMoneyCheckAlt />, href: "#" },
  { label: "Юридичний", icon: <FaBalanceScale />, href: "#" },
  { label: "Контакти", icon: <FaPhoneAlt />, href: "#" },
];

const LandConsulting = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative min-h-screen w-full flex bg-[var(--land-bg)]"
      style={
        {
          // Scoped CSS custom properties for new palette
          // https://coolors.co/palette/1ed1af-0f9c7e-1d915f-2b863f-80b918-aac80c-d4d700-ffff0a-ffea00-ffdd00
          // 1ed1af, 0f9c7e, 1d915f, 2b863f, 80b918, aac80c, d4d700, ffff0a, ffea00, ffdd00
          ["--land-bg"]: "#f4fff6",
          ["--land-primary"]: "#1ed1af",
          ["--land-secondary"]: "#0f9c7e",
          ["--land-accent"]: "#d4d700",
          ["--land-green"]: "#80b918",
          ["--land-yellow"]: "#ffea00",
          ["--land-card"]: "#ffffff",
          ["--land-dark"]: "#1d915f",
        } as React.CSSProperties
      }
    >
      {/* Вертикальное меню-карточки */}
      <aside className="hidden lg:flex flex-col gap-6 py-16 px-4 min-w-[220px]">
        {menuItems.map((item, idx) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-6 py-5 rounded-2xl shadow-md border-2 transition-all text-lg font-semibold tracking-wide
              ${
                active === idx
                  ? "bg-[var(--land-primary)] text-white border-[var(--land-accent)] scale-105"
                  : "bg-[var(--land-card)] text-[var(--land-secondary)] border-transparent hover:border-[var(--land-primary)] hover:bg-[var(--land-green)]/10"
              }
            `}
            onClick={() => setActive(idx)}
            style={{ fontFamily: "inherit" }}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
            {active === idx && (
              <span className="mt-2 block w-8 h-1 rounded-full bg-[var(--land-accent)]"></span>
            )}
          </button>
        ))}
      </aside>

      {/* Showcase UI/UX */}
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <div className="flex flex-col items-center gap-10 w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--land-secondary)] text-center mb-2 tracking-tight">
            Land Consulting — нова палітра
          </h2>
          <p className="text-lg md:text-xl text-[var(--land-primary)] text-center mb-6 max-w-xl">
            Демонстрація UI/UX-елементів у свіжій зеленій палітрі для сучасного
            консалтингу
          </p>
          <div className="flex flex-wrap gap-6 justify-center w-full">
            {/* Кнопки */}
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--land-primary)] text-white shadow-md hover:bg-[var(--land-green)] transition-colors">
              Дізнатись більше
            </button>
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--land-yellow)] text-[var(--land-secondary)] border-2 border-[var(--land-secondary)] hover:bg-[var(--land-accent)] transition-colors">
              Замовити консультацію
            </button>
            {/* Инпут */}
            <input
              type="text"
              placeholder="Ваше ім'я"
              className="px-4 py-2 rounded-full border border-[var(--land-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--land-accent)] bg-white text-[var(--land-secondary)] min-w-[180px]"
            />
            {/* Селект */}
            <select className="px-4 py-2 rounded-full border border-[var(--land-secondary)] bg-white text-[var(--land-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--land-accent)] min-w-[180px]">
              <option>Оберіть послугу</option>
              <option>Земельний аудит</option>
              <option>Оцінка ділянки</option>
              <option>Юридичний супровід</option>
              <option>Інше</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandConsulting;
