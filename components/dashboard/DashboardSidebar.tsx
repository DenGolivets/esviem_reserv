"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Users,
  MapPin,
  Building,
  DollarSign,
  Scale,
  MessageCircle,
  Phone,
  Send,
  Menu,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { i18n } from "@lingui/core";
import Image from "next/image";
import DashboardContent from "./DashboardContent";

interface MenuItem {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  textColor: string;
  textColorActive: string;
  borderActive: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "about",
    title: "Про нас",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    textColor: "text-blue-500",
    textColorActive: "from-blue-500 to-blue-600",
    borderActive: "from-blue-500 to-yellow-600",
  },
  {
    id: "land",
    title: "Земельний",
    icon: MapPin,
    color: "from-green-500 to-green-600",
    textColor: "text-green-500",
    textColorActive: "from-green-500 to-green-600",
    borderActive: "from-green-500 to-yellow-600",
  },
  {
    id: "construction",
    title: "Будівельний",
    icon: Building,
    color: "from-orange-500 to-orange-600",
    textColor: "text-orange-500",
    textColorActive: "from-orange-500 to-orange-600",
    borderActive: "from-orange-500 to-yellow-600",
  },
  {
    id: "financial",
    title: "Фінансовий",
    icon: DollarSign,
    color: "from-yellow-500 to-yellow-600",
    textColor: "text-yellow-500",
    textColorActive: "from-yellow-500 to-yellow-600",
    borderActive: "from-yellow-500 to-yellow-600",
  },
  {
    id: "legal",
    title: "Юридичний",
    icon: Scale,
    color: "from-purple-500 to-purple-600",
    textColor: "text-purple-500",
    textColorActive: "from-purple-500 to-purple-600",
    borderActive: "from-purple-500 to-yellow-600",
  },
];

const contactItems = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    color: "from-green-500 to-green-600",
    href: "https://wa.me/+1234567890",
  },
  {
    id: "viber",
    icon: Phone,
    color: "from-purple-500 to-purple-600",
    href: "viber://chat?number=+1234567890",
  },
  {
    id: "telegram",
    icon: Send,
    color: "from-blue-500 to-blue-600",
    href: "https://t.me/username",
  },
  {
    id: "signal",
    icon: MessageCircle,
    color: "from-blue-500 to-blue-600",
    href: "https://signal.me/#p/+1234567890",
  },
];

export default function DashboardSidebar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState<"uk" | "en">("uk");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [manualActiveMenu, setManualActiveMenu] = useState<string | null>(null);

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

  useEffect(() => {
    setManualActiveMenu("about");
  }, []);

  const handleCloseContent = () => {
    setManualActiveMenu(null);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLangChange = (lang: "uk" | "en") => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
      setCurrentLang(lang);
      i18n.activate(lang);
      window.location.reload();
    }
  };

  const handleMenuClick = (menuId: string) => {
    setManualActiveMenu(menuId);
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
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
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
          className="fixed top-0 md:top-6 left-0 md:left-6 z-50 w-12 h-12 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-yellow-400/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-6 h-6 text-yellow-400" />
        </motion.button>
      )}

      <div
        className={`min-h-screen transition-all duration-300  ${
          isMobile ? "" : "ml-80"
        }`}
      >
        {/* Page Content */}
        {manualActiveMenu && (
          <DashboardContent
            activeMenu={manualActiveMenu}
            isMobile={isMobile}
            onNavigateToPage={handleCloseContent}
          />
        )}
      </div>

      <motion.div
        initial={{ x: -320 }}
        animate={{ x: isSidebarOpen ? 0 : -320 }}
        transition={{
          type: "tween",
          damping: 25,
          stiffness: 300,
          duration: 0.7,
          ease: "easeOut",
        }}
        className={`fixed ${!isMobile ? 'left-10 top-6' : 'left-0 top-0'} w-80 z-40 flex flex-col ${isMobile && !isSidebarOpen ? 'hidden' : ''}`}
        style={{
          height: !isMobile ? "calc(100vh - 3rem)" : "100vh",
          filter: !isMobile
            ? "drop-shadow(8px 8px 16px rgba(0,0,0,0.4))"
            : "none",
        }}
      >
        {/* Кастомная SVG форма для десктопа */}
        {!isMobile ? (
          <div className="absolute inset-0 w-full h-full">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 320 740"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M19.0342 0C20.843 0 22.6431 0.257824 24.3789 0.766602L306.344 83.4131C314.438 85.7857 320 93.2114 320 101.646V722.014C320 728.429 316.82 734.102 311.95 737.542C309.05 739.591 305.303 739.627 301.823 738.918L16.0102 680.731C6.69355 678.834 0 670.641 0 661.133V6C0 2.68629 2.68629 1.6811e-07 6 0H19.0342Z"
                fill="url(#dashGradient)"
              />
              <defs>
                <linearGradient
                  id="dashGradient"
                  x1="160"
                  y1="0"
                  x2="160"
                  y2="740"
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
          className={`relative z-10 flex flex-col h-full justify-between md:justify-normal ${
            !isMobile ? "pl-6 pr-12 pt-6 pb-4" : ""
          }`}
        >
          {/* Close button for mobile */}
          <div className="md:hidden absolute top-4 right-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-white"
            >
              ×
            </motion.button>
          </div>

          {/* Logo */}
          <div
            className={`${
              !isMobile ? "px-0 py-5" : "p-6"
            } border-b w-fit border-slate-700`}
          >
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text 
            text-transparent"
            >
              <Image
                src="/esviem2.png"
                alt="V"
                width={500}
                height={500}
                priority
                className={`block ${!isMobile ? "w-28 h-8" : "w-35 h-10"}`}
              />
            </Link>
          </div>

          {/* Menu Items */}
          <div className={`${!isMobile ? "px-0 py-4 mt-9" : "p-6 mt-0"}`}>
            <div className="space-y-2">
              {menuItems.map((item, index) => {
                const isActive = manualActiveMenu === item.id;

                // Маппинг для group-hover цвета
                const groupHoverColor =
                  {
                    "text-blue-500": "group-hover:text-blue-500",
                    "text-green-500": "group-hover:text-green-500",
                    "text-orange-500": "group-hover:text-orange-500",
                    "text-yellow-500": "group-hover:text-yellow-500",
                    "text-purple-500": "group-hover:text-purple-500",
                  }[item.textColor] || "";

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
                    className={`w-full z-[2] flex relative items-center space-x-2 py-1.5 ${
                      !isMobile ? "px-3" : "px-8"
                    } rounded-lg group ${
                      !isMobile ? "h-16" : "h-16"
                    } min-h-10 overflow-hidden ${
                      isActive && index % 2 === 0
                        ? `active-gradient-border ${item.borderActive} bg-slate-700/70`
                        : "hover:bg-slate-700/50 border border-transparent"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-left">
                      <h4
                        className={`font-semibold transition-colors ${
                          !isMobile ? "text-base" : "text-lg md:text-base"
                        } uppercase ${
                          isActive
                            ? `bg-gradient-to-r ${item.textColorActive} bg-clip-text text-transparent`
                            : `text-white ${groupHoverColor}`
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

          {/* Contact Section */}
          <div className={`${!isMobile ? "px-0 py-3 mt-10" : "p-6 mt-0"}`}>
            <h3
              className={`text-gray-400 ${
                !isMobile ? "text-sm mb-4" : "text-sm mb-0"
              } font-semibold mb-2 uppercase tracking-wider`}
            >
              Контакти
            </h3>
            <div className="flex space-x-2">
              {contactItems.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.id}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 10,
                      boxShadow: "0 0 20px rgba(255, 193, 7, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`${
                      !isMobile ? "w-8 h-8" : "w-12 h-12"
                    } rounded-lg bg-gradient-to-r ${
                      contact.color
                    } flex items-center justify-center shadow-lg transition-all duration-300`}
                  >
                    <Icon
                      className={`${
                        !isMobile ? "w-4 h-4" : "w-5 h-5"
                      } text-white`}
                    />
                  </motion.a>
                );
              })}
            </div>
            <div
              className={`flex flex-col ${!isMobile ? "mt-7 gap-3" : "mt-10 gap-1"}`}
            >
              <div className="flex items-center gap-2">
                <Mail
                  className={`${!isMobile ? "w-5 h-5" : "w-5 h-5"} text-white`}
                />
                <p
                  className={`text-gray-300 ${
                    !isMobile ? "text-sm" : "text-sm"
                  }`}
                >
                  esviemua@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone
                  className={`${!isMobile ? "w-5 h-5" : "w-5 h-5"} text-white`}
                />
                <p
                  className={`text-gray-300 ${
                    !isMobile ? "text-sm" : "text-sm"
                  }`}
                >
                  +380508128888
                </p>
              </div>
            </div>
          </div>

          {/* Language Switcher */}
          <div
            className={`${
              !isMobile ? "px-0 py-2 mt-6 flex justify-end w-full" : "p-6 mt-0 justify-normal"
            } border-t border-slate-700 w-full`}
          >
            <div className="flex items-center space-x-2 bg-transparent rounded-full p-1 w-fit">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLangChange("uk")}
                className={`px-2 py-1 text-sm font-medium text-gray-300 rounded-full transition-all 
                duration-300 cursor-pointer hover:scale-110 ${
                  currentLang === "uk" ? "scale-110" : ""
                }`}
              >
                <Image
                  src="/ukraine-xs.gif"
                  alt="Ukrainian Flag"
                  width={14}
                  height={14}
                  className={`${
                    !isMobile ? "w-5 h-3" : "w-7 h-4"
                  } object-cover`}
                />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLangChange("en")}
                className={`px-2 py-1 text-sm font-medium text-gray-300 rounded-full transition-all 
                duration-300 cursor-pointer hover:scale-110 ${
                  currentLang === "en" ? "scale-110" : ""
                }`}
              >
                <Image
                  src="/united-states-xs.gif"
                  alt="USA Flag"
                  width={14}
                  height={14}
                  className={`${
                    !isMobile ? "w-5 h-3" : "w-7 h-4"
                  } object-cover`}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
