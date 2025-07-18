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
  { label: "Про компанію", icon: <FaRegBuilding />, href: "#" },
  { label: "Земельний", icon: <FaTractor />, href: "#" },
  { label: "Будівельний", icon: <MdConstruction />, href: "#" },
  { label: "Фінансовий", icon: <BsBank2 />, href: "#" },
  { label: "Юридичний", icon: <FaBalanceScale />, href: "#" },
  { label: "Контакти", icon: <FaPhoneAlt />, href: "#" },
];

const FinancialConsulting = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative min-h-screen w-full flex bg-[var(--fin-bg)]"
      style={
        {
          // https://coolors.co/palette/03071e-370617-6a040f-9d0208-d00000-dc2f02-e85d04-f48c06-faa307-ffba08
          ["--fin-bg"]: "#fff9f3",
          ["--fin-primary"]: "#d00000",
          ["--fin-secondary"]: "#03071e",
          ["--fin-accent"]: "#faa307",
          ["--fin-dark"]: "#370617",
          ["--fin-card"]: "#ffffff",
          ["--fin-orange"]: "#e85d04",
          ["--fin-yellow"]: "#ffba08",
        } as React.CSSProperties
      }
    >
      {/* Вертикальное меню-прогрессбар */}
      <aside className="hidden md:flex flex-col gap-2 py-20 px-4 min-w-[220px] items-start">
        {menuItems.map((item, idx) => (
          <button
            key={item.label}
            className={`group w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-semibold text-lg relative
              ${
                active === idx
                  ? "bg-[var(--fin-primary)] text-white scale-105 shadow-lg"
                  : "bg-transparent text-[var(--fin-dark)] hover:bg-[var(--fin-orange)]/10"
              }
            `}
            onClick={() => setActive(idx)}
            style={{ fontFamily: "inherit" }}
          >
            {/* Индикатор слева */}
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-full transition-all
              ${
                active === idx
                  ? "bg-[var(--fin-yellow)] opacity-100"
                  : "bg-[var(--fin-orange)] opacity-0 group-hover:opacity-60"
              }`}
            ></span>
            <span className="text-2xl">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </aside>

      {/* Showcase UI/UX */}
      <div className="flex-1 flex flex-col items-center justify-center py-10 px-4">
        <div className="flex flex-col items-center gap-10 w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--fin-primary)] text-center mb-2 tracking-tight">
            Financial Consulting — нова палітра
          </h2>
          <p className="text-lg md:text-xl text-[var(--fin-dark)] text-center mb-6 max-w-xl">
            Демонстрація UI/UX-елементів у сучасній фінансовій палітрі
          </p>
          <div className="flex flex-wrap gap-6 justify-center w-full">
            {/* Кнопки */}
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--fin-primary)] text-white shadow-md hover:bg-[var(--fin-orange)] hover:text-[var(--fin-secondary)] transition-colors">
              Дізнатись більше
            </button>
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--fin-yellow)] text-[var(--fin-primary)] border-2 border-[var(--fin-primary)] hover:bg-[var(--fin-accent)] transition-colors">
              Замовити консультацію
            </button>
            {/* Инпут */}
            <input
              type="text"
              placeholder="Ваше ім'я"
              className="px-4 py-2 rounded-full border border-[var(--fin-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--fin-accent)] bg-white text-[var(--fin-primary)] min-w-[180px]"
            />
            {/* Селект */}
            <select className="px-4 py-2 rounded-full border border-[var(--fin-dark)] bg-white text-[var(--fin-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--fin-accent)] min-w-[180px]">
              <option>Оберіть послугу</option>
              <option>Фінансовий аудит</option>
              <option>Банківські послуги</option>
              <option>Інвестиції</option>
              <option>Інше</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialConsulting;
