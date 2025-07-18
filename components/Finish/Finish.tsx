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

const Finish = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative min-h-screen w-full flex bg-[var(--fin-bg)]"
      style={
        {
          // https://coolors.co/palette/007f5f-2b9348-55a630-80b918-aacc00-bfd200-d4d700-dddf00-eeef20-ffff3f
          ["--fin-bg"]: "#f8fff4",
          ["--fin-primary"]: "#007f5f",
          ["--fin-secondary"]: "#2b9348",
          ["--fin-accent"]: "#d4d700",
          ["--fin-green"]: "#80b918",
          ["--fin-yellow"]: "#ffff3f",
          ["--fin-card"]: "#ffffff",
          ["--fin-dark"]: "#55a630",
        } as React.CSSProperties
      }
    >
      {/* Вертикальный stepper-меню */}
      <aside className="hidden md:flex flex-col items-center gap-0 py-20 px-4 min-w-[220px]">
        {menuItems.map((item, idx) => (
          <div key={item.label} className="flex flex-col items-center w-full">
            <button
              className={`flex flex-col items-center gap-1 px-4 py-3 rounded-full font-semibold text-base transition-all duration-200 w-40
                ${
                  active === idx
                    ? "bg-[var(--fin-primary)] text-white scale-105 shadow-lg"
                    : "bg-[var(--fin-card)] text-[var(--fin-primary)] hover:bg-[var(--fin-green)]/10"
                }
              `}
              onClick={() => setActive(idx)}
              style={{ fontFamily: "inherit" }}
            >
              <span
                className={`flex items-center justify-center w-10 h-10 rounded-full border-4 transition-all mb-1
                ${
                  active === idx
                    ? "bg-[var(--fin-accent)] border-[var(--fin-primary)] text-[var(--fin-primary)]"
                    : "bg-[var(--fin-card)] border-[var(--fin-green)] text-[var(--fin-primary)]"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
              </span>
              <span>{item.label}</span>
              <span
                className={`mt-1 text-xs font-normal rounded transition-all duration-200 h-5 flex items-center justify-center
                ${
                  active === idx
                    ? "opacity-100 scale-100 text-[var(--fin-accent)]"
                    : "opacity-0 scale-95 text-transparent"
                }`}
                style={{ minHeight: 20 }}
              >
                {item.desc}
              </span>
            </button>
            {/* Линия между кругами */}
            {idx < menuItems.length - 1 && (
              <div className="w-1 h-8 bg-[var(--fin-green)]/40 mx-auto"></div>
            )}
          </div>
        ))}
      </aside>

      {/* Showcase UI/UX */}
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <div className="flex flex-col items-center gap-10 w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--fin-primary)] text-center mb-2 tracking-tight">
            Finish — нова палітра
          </h2>
          <p className="text-lg md:text-xl text-[var(--fin-dark)] text-center mb-6 max-w-xl">
            Showcase UI/UX-елементів у сучасній палітрі завершення
          </p>
          <div className="flex flex-wrap gap-6 justify-center w-full">
            {/* Кнопки */}
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--fin-primary)] text-white shadow-md hover:bg-[var(--fin-green)] hover:text-[var(--fin-dark)] transition-colors">
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
              <option>Завершальний аудит</option>
              <option>Підсумкова консультація</option>
              <option>Підтвердження результату</option>
              <option>Інше</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finish;
