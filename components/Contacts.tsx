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

const Contacts = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="relative min-h-screen w-full flex flex-col bg-[var(--cont-bg)]"
      style={
        {
          // https://coolors.co/palette/233d4d-fe7f2d-fcca46-a1c181-619b8a
          ["--cont-bg"]: "#f7f6f2",
          ["--cont-primary"]: "#233d4d",
          ["--cont-accent"]: "#fe7f2d",
          ["--cont-yellow"]: "#fcca46",
          ["--cont-green"]: "#a1c181",
          ["--cont-teal"]: "#619b8a",
          ["--cont-card"]: "#ffffff",
        } as React.CSSProperties
      }
    >
      {/* Меню в стиле Menu 6 (блоки li выше, описание внутри li) */}
      <nav className="w-full flex flex-col items-center pt-12 pb-20 select-none">
        <ul className="flex gap-2 md:gap-6 bg-[var(--cont-yellow)] rounded-2xl px-4 py-3 shadow-md">
          {menuItems.map((item, idx) => (
            <li key={item.label} className="relative flex flex-col items-center justify-center" style={{ minWidth: 120 }}>
              <button
                className={`flex flex-col items-center gap-1 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 min-h-[64px] md:min-h-[72px] w-full
                  ${hovered === idx
                    ? 'bg-white text-[var(--cont-yellow)] shadow-lg'
                    : 'bg-[var(--cont-yellow)] text-white'}
                `}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{ fontFamily: 'inherit' }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </span>
                <span
                  className={`mt-1 text-sm font-normal rounded transition-all duration-200 h-6 md:h-7 flex items-center justify-center
                    ${hovered === idx ? 'opacity-100 scale-100 bg-[var(--cont-yellow)] text-white px-3 py-1' : 'opacity-0 scale-95 bg-transparent text-transparent px-3 py-1'}`}
                  style={{ minHeight: 24 }}
                >
                  {item.desc}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Showcase UI/UX */}
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <div className="flex flex-col items-center gap-10 w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--cont-primary)] text-center mb-2 tracking-tight">
            Contacts — нова палітра
          </h2>
          <p className="text-lg md:text-xl text-[var(--cont-accent)] text-center mb-6 max-w-xl">
            Демонстрація UI/UX-елементів у сучасній палітрі для контактів
          </p>
          <div className="flex flex-wrap gap-6 justify-center w-full">
            {/* Кнопки */}
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--cont-accent)] text-white shadow-md hover:bg-[var(--cont-yellow)] hover:text-[var(--cont-primary)] transition-colors">
              Дізнатись більше
            </button>
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--cont-green)] text-[var(--cont-primary)] border-2 border-[var(--cont-primary)] hover:bg-[var(--cont-teal)] transition-colors">
              Замовити консультацію
            </button>
            {/* Инпут */}
            <input
              type="text"
              placeholder="Ваше ім'я"
              className="px-4 py-2 rounded-full border border-[var(--cont-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--cont-accent)] bg-white text-[var(--cont-primary)] min-w-[180px]"
            />
            {/* Селект */}
            <select className="px-4 py-2 rounded-full border border-[var(--cont-teal)] bg-white text-[var(--cont-teal)] focus:outline-none focus:ring-2 focus:ring-[var(--cont-accent)] min-w-[180px]">
              <option>Оберіть послугу</option>
              <option>Зворотній дзвінок</option>
              <option>Запитання</option>
              <option>Партнерство</option>
              <option>Інше</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
