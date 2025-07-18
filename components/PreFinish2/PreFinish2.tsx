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

const PreFinish2 = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative min-h-screen w-full flex flex-col bg-[var(--pre2-bg)]"
      style={
        {
          // https://coolors.co/palette/d6d6d6-ffee32-ffd100-202020-333533
          ["--pre2-bg"]: "#e5e5e5",
          ["--pre2-gray"]: "#d6d6d6",
          ["--pre2-yellow"]: "#ffee32",
          ["--pre2-accent"]: "#ffd100",
          ["--pre2-dark"]: "#202020",
          ["--pre2-black"]: "#333533",
          ["--pre2-card"]: "#ffffff",
        } as React.CSSProperties
      }
    >
      {/* Split-menu */}
      <nav className="w-full flex flex-col items-center pt-12 pb-20 select-none">
        <div className="flex w-full max-w-5xl mx-auto items-center justify-between gap-2">
          {/* Left side */}
          <div className="flex flex-col gap-3 flex-1 items-end">
            {menuItems.slice(0, 3).map((item, idx) => (
              <button
                key={item.label}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 w-56 justify-end
                  ${
                    active === idx
                      ? "bg-[var(--pre2-yellow)] text-[var(--pre2-black)] scale-105 shadow-xl"
                      : "bg-[var(--pre2-gray)] text-[var(--pre2-dark)] hover:bg-[var(--pre2-yellow)] hover:text-[var(--pre2-black)]"
                  }
                `}
                onClick={() => setActive(idx)}
                style={{ fontFamily: "inherit" }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          {/* Center active */}
          <div className="flex flex-col items-center flex-shrink-0 mx-4">
            <div className="flex flex-col items-center justify-center w-64 h-64 rounded-3xl shadow-2xl bg-[var(--pre2-accent)] text-[var(--pre2-black)] transition-all duration-300 border-4 border-[var(--pre2-yellow)]">
              <span className="text-5xl mb-4">{menuItems[active].icon}</span>
              <span className="font-extrabold text-2xl mb-2 uppercase tracking-wide text-center">
                {menuItems[active].label}
              </span>
              <span className="block text-lg font-normal text-center text-[var(--pre2-dark)]">
                {menuItems[active].desc}
              </span>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col gap-3 flex-1 items-start">
            {menuItems.slice(3).map((item, idx) => (
              <button
                key={item.label}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 w-56 justify-start
                  ${
                    active === idx + 3
                      ? "bg-[var(--pre2-yellow)] text-[var(--pre2-black)] scale-105 shadow-xl"
                      : "bg-[var(--pre2-gray)] text-[var(--pre2-dark)] hover:bg-[var(--pre2-yellow)] hover:text-[var(--pre2-black)]"
                  }
                `}
                onClick={() => setActive(idx + 3)}
                style={{ fontFamily: "inherit" }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Showcase UI/UX */}
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <div className="flex flex-col items-center gap-10 w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--pre2-dark)] text-center mb-2 tracking-tight">
            PreFinish2 — нова палітра
          </h2>
          <p className="text-lg md:text-xl text-[#bc7613] text-center mb-6 max-w-xl">
            Showcase UI/UX-елементів у сучасній палітрі
          </p>
          <div className="flex flex-wrap gap-6 justify-center w-full">
            {/* Кнопки */}
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--pre2-yellow)] text-[var(--pre2-black)] shadow-md hover:bg-[var(--pre2-accent)] hover:text-[var(--pre2-dark)] transition-colors">
              Дізнатись більше
            </button>
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--pre2-accent)] text-[var(--pre2-black)] border-2 border-[var(--pre2-dark)] hover:bg-[var(--pre2-yellow)] transition-colors">
              Замовити консультацію
            </button>
            {/* Инпут */}
            <input
              type="text"
              placeholder="Ваше ім'я"
              className="px-4 py-2 rounded-full border border-[var(--pre2-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--pre2-accent)] bg-white text-[var(--pre2-dark)] min-w-[180px]"
            />
            {/* Селект */}
            <select className="px-4 py-2 rounded-full border border-[var(--pre2-black)] bg-white text-[var(--pre2-black)] focus:outline-none focus:ring-2 focus:ring-[var(--pre2-accent)] min-w-[180px]">
              <option>Оберіть послугу</option>
              <option>Передфінішний аудит</option>
              <option>Підготовка до завершення</option>
              <option>Фінальна перевірка</option>
              <option>Інше</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFinish2;
