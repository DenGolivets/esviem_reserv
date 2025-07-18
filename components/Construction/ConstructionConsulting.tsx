"use client";

import React, { useState } from "react";
import { FaRegBuilding, FaTractor, FaMoneyCheckAlt, FaBalanceScale, FaPhoneAlt } from 'react-icons/fa';
import { MdConstruction } from "react-icons/md";

const menuItems = [
  { label: "Про компанію", icon: <FaRegBuilding />, href: "#" },
  { label: "Земельний", icon: <FaTractor />, href: "#" },
  { label: "Будівельний", icon: <MdConstruction />, href: "#" },
  { label: "Фінансовий", icon: <FaMoneyCheckAlt />, href: "#" },
  { label: "Юридичний", icon: <FaBalanceScale />, href: "#" },
  { label: "Контакти", icon: <FaPhoneAlt />, href: "#" },
];

const ConstructionConsulting = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative min-h-screen w-full flex flex-col bg-[var(--constr-bg)]"
      style={
        {
          // Scoped CSS custom properties for new palette
          // https://coolors.co/palette/16747e-307f70-4a8a62-649554-7ea046-97ab38-b1b62a-cbc11c-e5cc0e-ffd700
          ["--constr-bg"]: "#f8faf4",
          ["--constr-primary"]: "#16747e",
          ["--constr-secondary"]: "#ffd700",
          ["--constr-accent"]: "#cbc11c",
          ["--constr-green"]: "#649554",
          ["--constr-yellow"]: "#e5cc0e",
          ["--constr-card"]: "#ffffff",
          ["--constr-dark"]: "#307f70",
        } as React.CSSProperties
      }
    >
      {/* Горизонтальное меню-чипы с иконками */}
      <nav className="w-full flex justify-center py-10">
        <ul className="flex gap-4 flex-wrap">
          {menuItems.map((item, idx) => (
            <li key={item.label}>
              <button
                className={`flex items-center gap-2 px-6 py-3 rounded-full shadow-md border-2 transition-all text-base font-semibold tracking-wide
                  ${
                    active === idx
                      ? "bg-[var(--constr-primary)] text-white border-[var(--constr-secondary)] scale-105"
                      : "bg-[var(--constr-card)] text-[var(--constr-primary)] border-transparent hover:border-[var(--constr-accent)] hover:bg-[var(--constr-green)]/10"
                  }
                `}
                onClick={() => setActive(idx)}
                style={{ fontFamily: "inherit" }}
              >
                <span className="text-xl">{item.icon}</span>
                {item.label}
                {active === idx && (
                  <span className="ml-2 w-2 h-2 rounded-full bg-[var(--constr-secondary)]"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Showcase UI/UX */}
      <div className="flex-1 flex flex-col items-center justify-center py-10 px-4">
        <div className="flex flex-col items-center gap-10 w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--constr-primary)] text-center mb-2 tracking-tight">
            Construction Consulting — нова палітра
          </h2>
          <p className="text-lg md:text-xl text-[var(--constr-dark)] text-center mb-6 max-w-xl">
            Демонстрація UI/UX-елементів у сучасній будівельній палітрі
          </p>
          <div className="flex flex-wrap gap-6 justify-center w-full">
            {/* Кнопки */}
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--constr-primary)] text-white shadow-md hover:bg-[var(--constr-yellow)] hover:text-[var(--constr-dark)] transition-colors">
              Дізнатись більше
            </button>
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--constr-secondary)] text-[var(--constr-primary)] border-2 border-[var(--constr-primary)] hover:bg-[var(--constr-accent)] transition-colors">
              Замовити консультацію
            </button>
            {/* Инпут */}
            <input
              type="text"
              placeholder="Ваше ім'я"
              className="px-4 py-2 rounded-full border border-[var(--constr-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--constr-accent)] bg-white text-[var(--constr-primary)] min-w-[180px]"
            />
            {/* Селект */}
            <select className="px-4 py-2 rounded-full border border-[var(--constr-dark)] bg-white text-[var(--constr-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--constr-accent)] min-w-[180px]">
              <option>Оберіть послугу</option>
              <option>Будівельний аудит</option>
              <option>Проектування</option>
              <option>Технічний нагляд</option>
              <option>Інше</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionConsulting;
