"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

interface TopBarProps {
  inView: boolean;
}

const TopBar = ({ inView }: TopBarProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex justify-end mb-16 md:mb-0"
      >
        <div
          className="relative"
          style={{
            backgroundImage: "url('/topbar/top.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "280px",
            height: "120px",
            maxWidth: "320px",
            filter:
              "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.25)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04))",
          }}
        >
          {/* Телефон с волнами */}
          <div className="absolute -bottom-4 left-9 z-1 group">
            {/* Пульсирующие волны */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Волна 1 */}
              <div
                className="absolute w-1 bg-amber-400 rounded-full animate-pulse"
                style={{
                  height: "8px",
                  left: "-12px",
                  animationDelay: "0s",
                  animationDuration: "0.8s",
                }}
              />
              {/* Волна 2 */}
              <div
                className="absolute w-1 bg-amber-400 rounded-full animate-pulse"
                style={{
                  height: "12px",
                  left: "-18px",
                  top: "-2px",
                  animationDelay: "0.2s",
                  animationDuration: "0.8s",
                }}
              />
              {/* Волна 3 */}
              <div
                className="absolute w-1 bg-amber-400 rounded-full animate-pulse"
                style={{
                  height: "6px",
                  left: "-24px",
                  top: "1px",
                  animationDelay: "0.4s",
                  animationDuration: "0.8s",
                }}
              />
            </div>

            {/* Телефон */}
            <a
              href="https://wa.me/380508128888"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:rotate-40 duration-500 transition-all cursor-pointer relative block"
            >
              <Image
                src="/topbar/iphone.png"
                alt="Phone"
                width={150}
                height={150}
                priority
                className="w-9 h-12 transform -rotate-20"
              />
              {/* Аватарка пользователя */}
              <div
                className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ top: "20%", left: "20%" }}
              >
                <div className="w-3 h-3 bg-blue-500 transform blur-[0.5px] -rotate-45 rounded-full flex items-center justify-center border border-white/20">
                  <svg
                    className="w-2 h-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Пульсирующая точка в центре телефона */}
              <div
                className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ top: "45%", left: "55%" }}
              >
                <div
                  className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                  style={{
                    animationDuration: "1s",
                    boxShadow: "0 0 8px rgba(251, 191, 36, 0.6)",
                  }}
                />
              </div>
            </a>
          </div>
          {/* Контент поверх формы */}
          <div className="absolute inset-0 flex flex-col items-center">
            <div
              className="text-xs md:text-sm font-medium mb-2 text-center"
              style={{
                color: "#fbbf24",
                fontFamily:
                  "Montserrat, Inter, system-ui, -apple-system, sans-serif",
                marginTop: "10px",
              }}
            >
              <h2
                style={{
                  fontSize: "12px",
                }}
              >
                Телефон для консультацій:
              </h2>
            </div>
            <div
              className="space-y-1"
              style={{
                marginTop: "8px",
              }}
            >
              <div className="flex items-start gap-2">
                <Phone className="w-3 h-3" style={{ color: "#fbbf24" }} />
                <span
                  className="text-sm font-medium"
                  style={{
                    color: "#ffffff",
                    fontFamily:
                      "Montserrat, Inter, system-ui, -apple-system, sans-serif",
                    fontSize: "14px",
                  }}
                >
                  +380508128888
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-3 h-3" style={{ color: "#fbbf24" }} />
                <span
                  className="text-xs font-medium"
                  style={{
                    color: "#d1d5db",
                    fontFamily:
                      "Montserrat, Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  esviemua@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TopBar;
