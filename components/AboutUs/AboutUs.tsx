"use client";

import Image from "next/image";
import React from "react";
import { FaUserTie, FaShieldAlt, FaRocket, FaRegSmile } from "react-icons/fa";

const stats = [
  {
    icon: <FaUserTie className="text-hero-gold w-8 h-8 mb-2" />,
    value: "15+",
    label: "Років досвіду",
    desc: "Експерти у консалтингу, праві, будівництві, фінансах.",
  },
  {
    icon: <FaRocket className="text-hero-gold w-8 h-8 mb-2" />,
    value: "500+",
    label: "Успішних кейсів",
    desc: "Реальні результати для клієнтів у всій країні.",
  },
  {
    icon: <FaShieldAlt className="text-hero-gold w-8 h-8 mb-2" />,
    value: "98%",
    label: "Задоволених клієнтів",
    desc: "Довіра, прозорість, довгострокові стосунки.",
  },
  {
    icon: <FaRegSmile className="text-hero-gold w-8 h-8 mb-2" />,
    value: "24/7",
    label: "Підтримка",
    desc: "Оперативний зв'язок та супровід на кожному етапі.",
  },
];

const AboutUs = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-16">
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
      {/* SVG/градиентный фон */}
      <div className="absolute inset-0 -z-10">
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.12 }}
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2" fill="#cca000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <div className="absolute left-1/3 top-1/4 w-[400px] h-[400px] bg-hero-gold opacity-20 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-0 w-[300px] h-[300px] bg-hero-blue opacity-20 rounded-full blur-2xl" />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Левая часть: текст + преимущества */}
        <div className="w-full md:w-1/2 flex flex-col gap-10">
          <h2 className="text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Про компанію <span className="gold-gradient">ESVIEM</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-xl">
            Ми створюємо цінність для бізнесу через інновації, експертизу та
            довіру. Ваш успіх – наша репутація.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group bg-[var(--hero-bg2)] backdrop-blur-xl rounded-2xl p-6 flex flex-col 
                items-start shadow-xl border-2 border-[var(--hero-gold)] hover:shadow-2xl hover:scale-105 
                transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  {s.icon}
                  <span className="text-3xl font-bold text-white drop-shadow-lg">
                    {s.value}
                  </span>
                </div>
                <div className="text-hero-gold font-semibold text-lg mb-1">
                  {s.label}
                </div>
                <div className="text-gray-200 text-sm opacity-80 leading-snug">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Правая часть: интерактивная карточка/иллюстрация */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div
            className="relative group max-w-md w-full aspect-[4/5] rounded-3xl overflow-hidden 
          shadow-2xl border-4 border-hero-gold/40 bg-white/10 backdrop-blur-xl transition-all 
          duration-500 hover:scale-105 hover:shadow-[0_8px_40px_#cca00044]"
          >
            <Image
              src="/about-us/card-about.jpg"
              width={1000}
              height={1000}
              alt="Команда ESVIEM"
              className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            {/* Светящийся border и параллакс-эффект */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none border-4 border-hero-gold/60 opacity-40 group-hover:opacity-80 transition-all duration-500"
              style={{ boxShadow: "0 0 60px 0 #cca00055" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
