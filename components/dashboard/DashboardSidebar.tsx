"use client";

import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, MapPin, Building, DollarSign, Scale, Menu } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { i18n } from "@lingui/core";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface MenuItem {
  id: string;
  title: string;
  icon: string | LucideIcon;
  color: string;
  textColor: string;
  textColorActive: string;
  borderActive: string;
  font: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "about",
    title: "Про компанію",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    textColor: "text-blue-400",
    textColorActive: "from-blue-300 to-blue-400",
    borderActive: "from-blue-500 to-yellow-600",
    font: "font-montserrat",
  },
  {
    id: "land",
    title: "Земельний",
    icon: MapPin,
    color: "from-green-500 to-green-600",
    textColor: "text-green-500",
    textColorActive: "from-green-500 to-green-600",
    borderActive: "from-green-500 to-yellow-600",
    font: "font-montserrat",
  },
  {
    id: "construction",
    title: "Будівельний",
    icon: Building,
    color: "from-orange-500 to-orange-600",
    textColor: "text-orange-500",
    textColorActive: "from-orange-500 to-orange-600",
    borderActive: "from-orange-500 to-yellow-600",
    font: "font-montserrat",
  },
  {
    id: "financial",
    title: "Фінансовий",
    icon: DollarSign,
    color: "from-yellow-500 to-yellow-600",
    textColor: "text-yellow-500",
    textColorActive: "from-yellow-500 to-yellow-600",
    borderActive: "from-yellow-500 to-yellow-600",
    font: "font-montserrat",
  },
  {
    id: "legal",
    title: "Юридичний",
    icon: Scale,
    color: "from-purple-500 to-purple-600",
    textColor: "text-purple-500",
    textColorActive: "from-purple-500 to-purple-600",
    borderActive: "from-purple-500 to-yellow-600",
    font: "font-montserrat",
  },
];

const contactItems = [
  {
    id: "whatsapp",
    icon: "/dash/whatsapp96.svg",
    color: "from-green-500 to-green-600",
    href: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
  },
  {
    id: "viber",
    icon: "/dash/viber.svg",
    color: "from-purple-500 to-purple-600",
    href: `viber://chat?number=${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
  },
  {
    id: "telegram",
    icon: "/dash/telegram96.svg",
    color: "from-blue-500 to-blue-600",
    href: `https://t.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
  },
  {
    id: "signal",
    icon: "/dash/signal.svg",
    color: "from-blue-500 to-blue-600",
    href: `https://signal.me/#p/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
  },
];

export default function DashboardSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState<"uk" | "en">("uk");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
  // Простая проверка iOS
  if (
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !(window as any).MSStream
  ) {
    setIsIos(true);
  }
}, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("lang") as "uk" | "en";
      if (savedLang) {
        setCurrentLang(savedLang);
      }
    }
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLangChange = (lang: "uk" | "en") => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
      setCurrentLang(lang);
      i18n.activate(lang);
      // window.location.reload();
    }
  };

  const handleMenuClick = (menuId: string) => {
    if (menuId === "about") {
      router.push("/");
    } else {
      router.push(`/${menuId}`);
    }
  };

  const onClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-30 md:hidden"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={onClose}
        />
      )}

      {/* Mobile Menu Button */}
      {isMobile && !isSidebarOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          onClick={handleToggleSidebar}
          className="fixed top-2 md:top-6 left-2 md:left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          style={{
            background: "rgba(30, 41, 59, 0.8)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(251, 191, 36, 0.3)",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-6 h-6" style={{ color: "#fbbf24" }} />
        </motion.button>
      )}

      {/* Sidebar */}
      <motion.div
        initial={{
          x: -240,
          y: !isMobile ? "-50%" : "0",
        }}
        animate={{
          x: isSidebarOpen ? 0 : -240,
          y: !isMobile ? "-50%" : "0",
        }}
        transition={{
          type: "tween",
          damping: 25,
          stiffness: 300,
          duration: 0.7,
          ease: "easeOut",
        }}
        className="fixed z-40 flex flex-col"
        style={{
          left: !isMobile ? "40px" : "0",
          top: !isMobile ? "50%" : "0",
          width: !isMobile ? "240px" : "320px",
          height: !isMobile ? "550px" : "82vh",
          maxHeight: !isMobile ? "550px" : "82vh",
          filter: !isMobile
            ? "drop-shadow(8px 8px 16px rgba(0,0,0,0.4))"
            : "none",
          display: isMobile && !isSidebarOpen ? "none" : "flex",
        }}
      >
        {/* Кастомная SVG форма для десктопа */}
        {!isMobile ? (
          <div className="absolute inset-0 w-full h-full">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 240 600"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M14.276 0C15.632 0 16.982 0.209 18.289 0.622L229.758 67.685C235.829 69.628 240 75.372 240 82.113V553.411C240 558.348 237.615 562.892 233.962 565.94C231.787 567.693 228.977 567.720 226.367 567.157L12.008 521.593C5.020 520.075 0 513.989 0 506.910V4.5C0 2.015 2.015 0 4.5 0H14.276Z"
                fill="url(#dashGradient)"
              />
              <defs>
                <linearGradient
                  id="dashGradient"
                  x1="120"
                  y1="0"
                  x2="120"
                  y2="600"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="rgb(71, 85, 105)" />
                  <stop offset="0.5" stopColor="rgb(55, 65, 81)" />
                  <stop offset="1" stopColor="rgb(71, 85, 105)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-600 via-gray-800 to-slate-700 rounded-r-3xl" />
        )}

        <div
          className="relative z-10 flex flex-col h-full"
          style={{
            paddingLeft: !isMobile ? "32px" : "0",
            paddingRight: !isMobile ? "32px" : "0",
            paddingTop: !isMobile ? "16px" : "0",
            paddingBottom: !isMobile ? "12px" : "0",
          }}
        >
          {/* Close button for mobile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onClick={onClose}
            className="md:hidden absolute top-4 right-4 z-50"
            style={{
              color: "#fbbf24",
              fontSize: "24px",
              fontWeight: "bold",
              textShadow:
                "0 2px 4px rgba(0,0,0,0.5), 0 0 8px rgba(251, 191, 36, 0.3)",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
              cursor: "pointer",
            }}
          >
            ✕
          </motion.button>

          {/* Logo - фиксированный */}
          <div
            className="border-b w-fit flex-shrink-0"
            style={{
              borderColor: "rgb(55, 65, 81)",
              paddingLeft: !isMobile ? "0" : "24px",
              paddingRight: !isMobile ? "0" : "24px",
              paddingTop: !isMobile ? "24px" : "24px",
              paddingBottom: "0",
            }}
          >
            <button
              onClick={() => handleMenuClick("about")}
              className="text-2xl font-bold cursor-pointer"
              style={{
                background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <Image
                src="/esviem2.png"
                alt="V"
                width={500}
                height={500}
                priority
                className="block"
                style={{
                  width: !isMobile ? "80px" : "140px",
                  height: !isMobile ? "24px" : "40px",
                }}
              />
            </button>
            <h2
              className="mt-1 select-none"
              style={{
                color: "#072a40",
                fontFamily:
                  "Montserrat, Inter, system-ui, -apple-system, sans-serif",
                fontSize: "12px",
              }}
            >
              Consulting
            </h2>
          </div>

          {/* Скроллируемый контент */}
          <div className="flex-1 overflow-y-hidden overflow-x-hidden">
            {/* Menu Items */}
            <div
              style={{
                paddingLeft: !isMobile ? "0" : "0",
                paddingRight: !isMobile ? "0" : "24px",
                paddingTop: !isMobile ? "6px" : isMobile && isIos ? "40px" : "0",
                paddingBottom: !isMobile ? "12px" : "0",
                marginTop: !isMobile ? "0" : "0",
              }}
            >
              <div className="space-y-1 select-none">
                {menuItems.map((item) => {
                  const isActive =
                    pathname === (item.id === "about" ? "/" : `/${item.id}`);

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        handleMenuClick(item.id);
                        if (window.innerWidth < 768) {
                          onClose();
                        }
                      }}
                      onHoverStart={() => setHoveredItem(item.id)}
                      onHoverEnd={() => setHoveredItem(null)}
                      className="w-full z-[2] flex relative items-center space-x-2 rounded-lg group overflow-hidden"
                      style={{
                        padding: !isMobile ? "4px 8px" : "16px 32px",
                        height: !isMobile ? "24px" : "45px",
                        minHeight: "40px",
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-left">
                        <h4
                          className={`font-medium transition-colors ${
                            item.font
                          } ${!isMobile ? "text-sm" : "text-lg md:text-base"} ${
                            isActive
                              ? `bg-gradient-to-r ${item.textColorActive} bg-clip-text text-transparent`
                              : `text-white hover:${item.textColor}`
                          }`}
                        >
                          {item.title}
                        </h4>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            {/* Graphic work */}
            <div
              className="flex flex-col"
              style={{
                paddingLeft: !isMobile ? "0" : "24px",
                paddingRight: !isMobile ? "0" : "24px",
                paddingTop: !isMobile ? "0px" : "4px",
                paddingBottom: !isMobile ? "0px" : "4px",
                marginTop: !isMobile ? "0px" : "16px",
              }}
            >
              <h3
                className="font-semibold mb-1 tracking-wider"
                style={{
                  color: "#fbbf24",
                  fontSize: !isMobile ? "12px" : "14px",
                  marginBottom: !isMobile ? "8px" : "12px",
                  fontFamily:
                    "Montserrat, Inter, system-ui, -apple-system, sans-serif",
                }}
              >
                Графік роботи
              </h3>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: !isMobile ? "12px" : "14px",
                  marginBottom: !isMobile ? "0px" : "12px",
                  fontFamily:
                    "Montserrat, Inter, system-ui, -apple-system, sans-serif",
                }}
              >
                Пн-Пт: 9:00 - 19:00
              </p>
            </div>
            {/* Contact Section */}
            <div
              style={{
                paddingLeft: !isMobile ? "0" : "24px",
                paddingRight: !isMobile ? "0" : "24px",
                paddingTop: !isMobile ? "8px" : "0px",
                paddingBottom: !isMobile ? "8px" : "0px",
                marginTop: !isMobile ? "0px" : "0px",
              }}
            >
              <h3
                className="font-semibold mb-1 tracking-wider"
                style={{
                  color: "#fbbf24",
                  fontSize: !isMobile ? "12px" : "14px",
                  marginBottom: !isMobile ? "8px" : "4px",
                  marginTop: !isMobile ? "0px" : "0px",
                  fontFamily:
                    "Montserrat, Inter, system-ui, -apple-system, sans-serif",
                }}
              >
                Напишіть нам
              </h3>
              <div className="flex space-x-1 h-full">
                {contactItems.map((contact) => {
                  const isImage = typeof contact.icon === "string";
                  const IconComponent = contact.icon;
                  return (
                    <div key={contact.id} className="relative group">
                      <motion.a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-lg flex items-center justify-center shadow-lg"
                        style={{
                          width: !isMobile ? "24px" : "32px",
                          height: !isMobile ? "24px" : "32px",
                          background: "transparent",
                        }}
                      >
                        {isImage && IconComponent ? (
                          <Image
                            src={contact.icon as string}
                            alt={contact.id}
                            width={isMobile ? 20 : 15}
                            height={isMobile ? 20 : 15}
                            className="w-20 h-20"
                          />
                        ) : IconComponent ? (
                          React.createElement(
                            IconComponent as unknown as LucideIcon,
                            {
                              className: !isMobile ? "w-3 h-3" : "w-4 h-4",
                              style: { color: "#ffffff" },
                            }
                          )
                        ) : null}
                      </motion.a>
                      {/* Tooltip */}
                      <div
                        className={`absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
                          contact.id === "whatsapp"
                            ? "left-0 transform translate-x-0"
                            : "left-1/2 transform -translate-x-1/2"
                        }`}
                      >
                        <div className="bg-gray-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {contact.id.charAt(0).toUpperCase() +
                            contact.id.slice(1)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Language Switcher - фиксированный внизу */}
              <div
                className="w-full flex-shrink-0 border-t border-slate-800"
                style={{
                  borderColor: "rgb(55, 65, 81)",
                  paddingLeft: !isMobile ? "0" : "24px",
                  paddingRight: !isMobile ? "0" : "24px",
                  paddingTop: "8px",
                  paddingBottom: !isMobile ? "8px" : "24px",
                  marginTop: !isMobile ? "20px" : "50px",
                  display: "flex",
                  justifyContent: !isMobile ? "flex-end" : "flex-end",
                }}
              >
                <div
                  className="flex items-center space-x-1 rounded-full p-1 w-fit"
                  style={{ background: "transparent" }}
                >
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLangChange("uk")}
                    className="px-1 py-1 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      color: "#d1d5db",
                      transform:
                        currentLang === "uk" ? "scale(1.1)" : "scale(1)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform =
                        currentLang === "uk" ? "scale(1.1)" : "scale(1)")
                    }
                  >
                    <Image
                      src="/ukrainian2.gif"
                      alt="Ukrainian Flag"
                      width={14}
                      height={14}
                      className="object-cover"
                      style={{
                        width: !isMobile ? "21px" : "28px",
                        height: !isMobile ? "15px" : "16px",
                      }}
                    />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLangChange("en")}
                    className="px-1 py-1 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      color: "#d1d5db",
                      transform:
                        currentLang === "en" ? "scale(1.1)" : "scale(1)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform =
                        currentLang === "en" ? "scale(1.1)" : "scale(1)")
                    }
                  >
                    <Image
                      src="/britain.gif"
                      alt="USA Flag"
                      width={14}
                      height={14}
                      className="object-cover"
                      style={{
                        width: !isMobile ? "21px" : "28px",
                        height: !isMobile ? "15px" : "16px",
                      }}
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
