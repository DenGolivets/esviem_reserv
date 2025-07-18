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
  "linear-gradient(135deg, #cca000 0%, #f5cc00 100%)",
  "linear-gradient(135deg, #003566 0%, #cca000 100%)",
  "linear-gradient(135deg, #001d3d 0%, #003566 100%)",
  "linear-gradient(135deg, #f5cc00 0%, #cca000 100%)",
  "linear-gradient(135deg, #003566 0%, #f5cc00 100%)",
  "linear-gradient(135deg, #000814 0%, #cca000 100%)",
];

const PreFinish3 = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState<number>(0);

  return (
    <section
      className="relative min-h-screen w-full flex flex-col bg-[var(--pre2-bg)]"
      style={
        {
          // https://coolors.co/palette/000814-001d3d-003566-cca000-f5cc00
          ["--pre2-bg"]: "#232424",
          ["--pre2-dark"]: "#001d3d",
          ["--pre2-blue"]: "#003566",
          ["--pre2-gold"]: "#cca000",
          ["--pre2-yellow"]: "#e49b0f",
          ["--pre2-card"]: "#0a1830",
        } as React.CSSProperties
      }
    >
      {/* Glass/Neumorph Grid-меню */}
      <nav className="w-full flex flex-col items-center pt-12 pb-20 select-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
          {menuItems.map((item, idx) => {
            const isActive = active === idx || hovered === idx;
            return (
              <button
                key={item.label}
                className={`relative flex flex-col items-center justify-center h-44 rounded-3xl shadow-xl transition-all duration-300 group overflow-hidden
                  ${isActive ? "scale-105 z-10" : "scale-100"}
                  ${
                    isActive
                      ? "bg-[var(--pre2-yellow)] text-[var(--pre2-dark)]"
                      : "bg-white/10 text-[var(--pre2-yellow)]"
                  }
                `}
                style={{
                  boxShadow: isActive
                    ? "0 8px 32px 0 #f5cc0088, 0 1.5px 8px 0 #fff4"
                    : "0 2px 12px 0 #001d3d33, 0 1.5px 8px 0 #fff1",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: isActive ? "2.5px solid #cca000" : "2px solid #222a",
                  transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActive(idx)}
              >
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-2 text-4xl transition-all duration-300 shadow-md">
                  {item.icon}
                </span>
                <span className="font-bold text-lg md:text-xl mb-1 uppercase tracking-wide">
                  {item.label}
                </span>
                <span
                  className={`block text-base font-normal rounded transition-all duration-200 h-6 flex items-center justify-center
                    ${
                      isActive
                        ? "opacity-100 scale-100 text-[var(--pre2-dark)]"
                        : "opacity-0 scale-95 text-transparent"
                    }`}
                  style={{ minHeight: 24 }}
                >
                  {item.desc}
                </span>
                {/* Glass shine effect */}
                <span
                  className={`absolute left-0 top-0 w-full h-full pointer-events-none rounded-3xl transition-all duration-300 ${
                    isActive ? "opacity-60" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "linear-gradient(120deg, #fff8 10%, #fff2 60%, transparent 100%)",
                  }}
                ></span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Showcase UI/UX */}
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <div className="flex flex-col items-center gap-10 w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--pre2-yellow)] text-center mb-2 tracking-tight">
            PreFinish2 — нова палітра
          </h2>
          <p className="text-lg md:text-xl text-[var(--pre2-gold)] text-center mb-6 max-w-xl">
            Showcase UI/UX-елементів у сучасній палітрі
          </p>
          <div className="flex flex-wrap gap-6 justify-center w-full">
            {/* Кнопки */}
            <button className="px-6 py-2 rounded-full font-semibold bg-[var(--pre2-yellow)] text-[var(--pre2-dark)] shadow-md hover:bg-[var(--pre2-gold)] hover:text-[var(--pre2-blue)] transition-colors border-2 border-[var(--pre2-yellow)]">
              Дізнатись більше
            </button>
            <button className="px-6 py-2 rounded-full font-semibold bg-white text-[var(--pre2-yellow)] border-2 border-[var(--pre2-yellow)] hover:bg-[var(--pre2-yellow)] hover:text-[var(--pre2-dark)] transition-colors">
              Замовити консультацію
            </button>
            {/* Инпут */}
            <input
              type="text"
              placeholder="Ваше ім'я"
              className="px-4 py-2 rounded-full border-2 border-[var(--pre2-yellow)] focus:outline-none focus:ring-2 focus:ring-[var(--pre2-yellow)] bg-white text-[var(--pre2-dark)] min-w-[180px] placeholder-[var(--pre2-blue)]"
            />
            {/* Селект */}
            <select className="px-4 py-2 rounded-full border-2 border-[var(--pre2-yellow)] bg-white text-[var(--pre2-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--pre2-yellow)] min-w-[180px]">
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

export default PreFinish3;

