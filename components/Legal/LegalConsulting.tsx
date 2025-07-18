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

const LegalConsulting = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative min-h-screen w-full flex flex-col bg-[var(--leg-bg)]"
      style={
        {
          // https://coolors.co/palette/007f5f-2b9348-55a630-80b918-aacc00-bfd200-d4d700-dddf00-eeef20-ffff3f
          ["--leg-bg"]: "#f8fff4",
          ["--leg-primary"]: "#007f5f",
          ["--leg-secondary"]: "#2b9348",
          ["--leg-accent"]: "#d4d700",
          ["--leg-green"]: "#80b918",
          ["--leg-yellow"]: "#ffff3f",
          ["--leg-card"]: "#ffffff",
          ["--leg-dark"]: "#55a630",
        } as React.CSSProperties
      }
    >
      {/* Stepper-меню сверху */}
      <nav className="w-full flex flex-col items-center pt-10 pb-16">
        <div className="flex items-center w-full max-w-3xl justify-between relative">
          {menuItems.map((item, idx) => (
            <div key={item.label} className="flex-1 flex flex-col items-center">
              <button
                className={`flex flex-col items-center justify-center z-10 transition-all
                  ${
                    active === idx
                      ? "text-[var(--leg-primary)] scale-110 font-bold"
                      : "text-[var(--leg-dark)] hover:text-[var(--leg-secondary)]"
                  }
                `}
                onClick={() => setActive(idx)}
                style={{ fontFamily: "inherit" }}
              >
                <span className="text-2xl mb-1">{item.icon}</span>
                <span className="text-xs md:text-sm text-center">
                  {item.label}
                </span>
              </button>
              {/* Прогресс-бар */}
              {idx < menuItems.length - 1 && (
                <span
                  className={`absolute top-5 left-1/2 w-full h-1 -z-1 ${
                    idx < active
                      ? "bg-[var(--leg-accent)]"
                      : "bg-[var(--leg-green)]/30"
                  } transition-all`}
                  style={{ right: "-50%", left: "50%" }}
                ></span>
              )}
              {/* Индикатор под активным */}
              {active === idx && (
                <span className="block w-8 h-1 rounded-full bg-[var(--leg-accent)] mt-2"></span>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Showcase UI/UX */}
      <div className="flex-1 flex flex-col items-center justify-center py-10 px-4">
        <div className="flex flex-col items-center gap-10 w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--leg-primary)] text-center mb-2 tracking-tight">
            Legal Consulting — нова палітра
          </h2>
          <p className="text-lg md:text-xl text-[var(--leg-dark)] text-center mb-6 max-w-xl">
            Демонстрація UI/UX-елементів у сучасній legal-палітрі
          </p>
          <div className="flex flex-wrap gap-6 justify-center w-full">
            {/* Кнопки */}
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--leg-primary)] text-white shadow-md hover:bg-[var(--leg-green)] transition-colors">
              Дізнатись більше
            </button>
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--leg-yellow)] text-[var(--leg-primary)] border-2 border-[var(--leg-primary)] hover:bg-[var(--leg-accent)] transition-colors">
              Замовити консультацію
            </button>
            {/* Инпут */}
            <input
              type="text"
              placeholder="Ваше ім'я"
              className="px-4 py-2 rounded-full border border-[var(--leg-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--leg-accent)] bg-white text-[var(--leg-primary)] min-w-[180px]"
            />
            {/* Селект */}
            <select className="px-4 py-2 rounded-full border border-[var(--leg-dark)] bg-white text-[var(--leg-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--leg-accent)] min-w-[180px]">
              <option>Оберіть послугу</option>
              <option>Юридичний аудит</option>
              <option>Супровід угод</option>
              <option>Захист інтересів</option>
              <option>Інше</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalConsulting;
