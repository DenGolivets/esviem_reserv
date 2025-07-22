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
          className="fixed top-6 left-6 z-50 w-12 h-12 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-yellow-400/30"
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
        className="fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-slate-600 via-gray-800 
        to-slate-700 border-r border-slate-700 z-40 flex flex-col"
        style={{
          borderTopRightRadius: "2rem",
          borderBottomRightRadius: "2rem",
        }}
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
        <div className="p-6 border-b border-slate-700">
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
              className="block w-35 h-10"
            />
          </Link>
        </div>

        {/* Menu Items */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-3">
            {menuItems.map((item) => {
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
                  className={`w-full z-[2] flex relative items-center space-x-4 py-2 px-8 rounded-xl group h-20 min-h-20 max-h-20 overflow-hidden ${
                    isActive
                      ? `active-gradient-border ${item.borderActive}`
                      : "hover:bg-slate-700/50 border border-transparent"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-left">
                    <h4
                      className={`font-semibold transition-colors text-lg md:text-xl uppercase ${
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

          {/* Contact Section */}
          <div className="mt-12">
            <h3 className="text-gray-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              Контакти
            </h3>
            <div className="flex space-x-3">
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
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center shadow-lg transition-all duration-300`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                );
              })}
            </div>
            <div className="flex flex-col gap-3 mt-10">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-white" />
                <p className="text-gray-300">esviemua@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
                <p className="text-gray-300">+380508128888</p>
              </div>
            </div>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="p-6 border-t border-slate-700 w-full">
          <div className="flex items-center space-x-2 bg-transparent rounded-full p-2 w-fit">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLangChange("uk")}
              className={`px-3 py-1.5 text-sm font-medium text-gray-300 rounded-full transition-all 
                duration-300 cursor-pointer hover:scale-120 ${
                  currentLang === "uk" ? "scale-120" : ""
                }`}
            >
              <Image
                src="/ukraine-xs.gif"
                alt="Ukrainian Flag"
                width={14}
                height={14}
                className="w-7 h-4 object-cover"
              />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLangChange("en")}
              className={`px-3 py-1.5 text-sm font-medium text-gray-300 rounded-full transition-all 
                duration-300 cursor-pointer hover:scale-120 ${
                  currentLang === "en" ? "scale-120" : ""
                }`}
            >
              <Image
                src="/united-states-xs.gif"
                alt="USA Flag"
                width={14}
                height={14}
                className="w-7 h-4 object-cover"
              />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
