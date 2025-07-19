"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import {
  Users,
  Building,
  DollarSign,
  Scale,
  ChevronDown,
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPinHouse,
} from "lucide-react";
import { MenuItem } from "@/types/heroTypes";
import { scrollToSection } from "@/utils/scrollToSection";
import { i18n } from "@lingui/core";
import MenuCircle from "./MenuCircle";
import MobileMenu from "./MobileMenu";

export const menuItems: MenuItem[] = [
  {
    id: "about",
    title: "Про Нас",
    icon: Users,
    position: { x: "0%", y: "30%" },
    sectionId: "about-section",
    description: "Про нашу компанію",
  },
  {
    id: "land",
    title: "Земельний",
    icon: MapPinHouse,
    position: { x: "20%", y: "25%" },
    sectionId: "land-section",
    description: "Земельне право",
  },
  {
    id: "construction",
    title: "Будівельний",
    icon: Building,
    position: { x: "40%", y: "20%" },
    sectionId: "construction-section",
    description: "Будівництво",
  },
  {
    id: "financial",
    title: "Фінансовий",
    icon: DollarSign,
    position: { x: "60%", y: "35%" },
    sectionId: "financial-section",
    description: "Фінанси",
  },
  {
    id: "legal",
    title: "Юридичний",
    icon: Scale,
    position: { x: "80%", y: "40%" },
    sectionId: "legal-section",
    description: "Правові послуги",
  },
  {
    id: "contacts",
    title: "Контакты",
    icon: Phone,
    position: { x: "100%", y: "30%" },
    sectionId: "contact-section",
    description: "Зв'язатися з нами",
  },
];

const Hero3 = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"uk" | "en">("uk");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
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

  const handleLangChange = (lang: "uk" | "en") => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
      setCurrentLang(lang);
      i18n.activate(lang);
      window.location.reload();
    }
  };
  return (
    <section
      ref={ref}
      className="relative min-h-screen hero-gradient overflow-hidden"
    >
      {/* Background Buildings Image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero/bg-hero.jpeg')`,
          }}
        />
        <div className="absolute inset-0 buildings-overlay" />
      </div>

      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0">
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div> */}

      {/* Mobile Menu */}
      {isMobile && (
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col">
        {/* WhatsApp Floating Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.a
            href="https://wa.me/+1234567890"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.1,
              rotate: [0, -10, 10, -10, 0],
            }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            {/* Pulsing background */}
            <motion.div
              className="absolute inset-0 bg-green-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0.3, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main button */}
            <div className="relative w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300">
              <MessageCircle className="w-7 h-7 text-white" />

              {/* Notification dot */}
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-white text-xs font-bold">!</span>
              </motion.div>
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-green-400/20">
                Написати в WhatsApp
                <div className="absolute top-full right-4 w-2 h-2 bg-slate-800 rotate-45 border-r border-b border-green-400/20"></div>
              </div>
            </div>
          </motion.a>
        </motion.div>
        {/* Header Content */}
        {/* Header with Logo and Language Switcher */}
        <div className="flex justify-between items-center mt-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] tracking-wider cursor-pointer"
              transition={{ duration: 0.3 }}
            >
              <span>ES</span>
              <span className="gold-gradient">V</span>
              <span>IEM</span>
            </motion.h2>
          </motion.div>

          {/* Language Switcher and Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center space-x-1 bg-slate-800/50 backdrop-blur-sm rounded-full p-1 border border-yellow-400/20"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLangChange("uk")}
                className={`px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-yellow-400
                hover:bg-yellow-400/10 rounded-full transition-all duration-300 cursor-pointer ${
                  currentLang === "uk"
                    ? "bg-[var(--hero-gold)]"
                    : ""
                }`}
              >
                UK
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLangChange("en")}
                className={`px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-yellow-400 
                hover:bg-yellow-400/10 rounded-full transition-all duration-300 cursor-pointer ${
                  currentLang === "en"
                    ? "bg-[var(--hero-gold)]"
                    : ""
                }`}
              >
                EN
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            {isMobile && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-12 h-12 rounded-full menu-circle flex items-center justify-center ml-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-yellow-400" />
                ) : (
                  <Menu className="w-6 h-6 text-yellow-400" />
                )}
              </motion.button>
            )}
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center pt-16 md:pt-20">
          <div className="text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight">
                <motion.span
                  className="text-white block uppercase"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Ваш надійний
                </motion.span>
                <motion.span
                  className="gold-gradient block uppercase"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  консалтинговий
                </motion.span>
                <motion.span
                  className="text-white block uppercase"
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  партнер
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto px-4 leading-relaxed"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                Комплексні рішення в галузі земельного, будівельного,
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                фінансового та юридичного консалтингу
              </motion.span>
            </motion.p>

            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="text-center"
              >
                <motion.p
                  className="text-yellow-400 text-sm md:text-base mb-4 font-medium"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Оберіть напрям консалтингу
                </motion.p>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronDown className="w-6 h-6 text-yellow-400 mx-auto" />
                </motion.div>
              </motion.div>
            )}

            {isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="text-center"
              >
                <motion.p
                  className="text-yellow-400 text-sm mb-4 font-medium"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Натисніть меню для вибору послуги
                </motion.p>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-8 h-8 mx-auto"
                >
                  <Menu className="w-full h-full text-yellow-400" />
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Interactive Menu Circles - Desktop Only */}
        {!isMobile && (
          <div className="relative flex-1 hidden md:block">
            {menuItems.map((item, index) => (
              <MenuCircle key={item.id} item={item} index={index} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pb-8 md:pb-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-6 md:px-8 
            py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-2xl hover:shadow-yellow-500/25 
            transition-all duration-300 cursor-pointer"
            onClick={() => scrollToSection("contact-section")}
          >
            Отримати консультацію
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default Hero3;
