"use client";

import React, { useState } from "react";

const menuItems = [
  { label: "Про компанію", href: "#" },
  { label: "Земельний", href: "#" },
  { label: "Будівельний", href: "#" },
  { label: "Фінансовий", href: "#" },
  { label: "Юридичний", href: "#" },
  { label: "Контакти", href: "#" },
];

const Menu = () => {
  const [active, setActive] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* Премиальное меню */}
      <nav className="hidden md:flex w-full justify-center select-none bg-[var(--color-light)]">
        <ul className="flex gap-12 bg-white/80 rounded-2xl px-10 py-4 shadow-sm border border-[var(--color-warm)]">
          {menuItems.map((item, idx) => (
            <li key={item.label} className="relative">
              <button
                className={`text-lg font-semibold tracking-wide px-2 py-1 transition-colors duration-200
                  ${
                    active === idx
                      ? "text-[var(--color-secondary)]"
                      : "text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                  }`}
                onClick={() => setActive(idx)}
                style={{ fontFamily: "inherit" }}
              >
                {item.label}
                {/* underline-индикатор */}
                <span
                  className={`block h-0.5 rounded-full mt-2 transition-all duration-300
                    ${
                      active === idx
                        ? "w-full bg-[var(--color-secondary)]"
                        : "w-0 bg-transparent"
                    }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Мобильное меню */}
      <div className="md:hidden w-full flex justify-center mb-10">
        <button
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[var(--color-primary)] shadow-sm text-[var(--color-primary)] font-semibold text-lg"
          onClick={() => setMobileMenu(true)}
        >
          Меню
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </button>
      </div>
      {mobileMenu && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
          <div className="w-full max-w-md bg-white rounded-t-3xl p-6 pb-10 shadow-2xl animate-sheet-in">
            <button
              className="absolute top-3 right-6 text-3xl text-[var(--color-primary)]"
              onClick={() => setMobileMenu(false)}
              aria-label="Закрыть меню"
            >
              ×
            </button>
            <ul className="flex flex-col gap-6 mt-6">
              {menuItems.map((item, idx) => (
                <li key={item.label}>
                  <button
                    className={`w-full text-xl font-semibold tracking-wide text-left px-2 py-2 rounded-lg transition-colors duration-200
                      ${
                        active === idx
                          ? "text-[var(--color-secondary)] bg-[var(--color-light)]"
                          : "text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                      }`}
                    onClick={() => {
                      setActive(idx);
                      setMobileMenu(false);
                    }}
                    style={{ fontFamily: "inherit" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1" onClick={() => setMobileMenu(false)}></div>
          <style jsx>{`
            @keyframes sheet-in {
              from {
                transform: translateY(100%);
              }
              to {
                transform: translateY(0);
              }
            }
            .animate-sheet-in {
              animation: sheet-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Menu;
