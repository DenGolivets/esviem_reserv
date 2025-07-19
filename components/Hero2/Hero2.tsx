"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Building2,
  Scale,
  Hammer,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

const Hero2 = () => {
  const [currentService, setCurrentService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const services = useMemo(
    () => [
      {
        icon: Building2,
        title: "Земельний консалтинг",
        description: "Експертиза земельних ділянок та нерухомості",
        color: "text-hero-gold",
      },
      {
        icon: Scale,
        title: "Юридичний консалтинг",
        description: "Правове супроводження бізнесу",
        color: "text-hero-yellow",
      },
      {
        icon: Hammer,
        title: "Будівельний консалтинг",
        description: "Технічний нагляд та експертиза",
        color: "text-hero-gold",
      },
      {
        icon: TrendingUp,
        title: "Фінансовий консалтинг",
        description: "Оптимізація фінансових процесів",
        color: "text-hero-yellow",
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { number: "500+", label: "Успішних проєктів" },
      { number: "15+", label: "Років досвіду" },
      { number: "98%", label: "Задоволених клієнтів" },
      { number: "24/7", label: "Підтримка" },
    ],
    []
  );

  const handleServiceHover = useCallback((index: number) => {
    setCurrentService(index);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);
  return (
    <div className="relative overflow-hidden hero-gradient min-h-screen">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-hero-gold opacity-5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-hero-yellow opacity-5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative container mx-auto px-6 md:px-0 py-8 sm:py-12 lg:py-16 xl:py-24">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)] lg:min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`space-y-6 sm:space-y-8 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="space-y-4 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full card-gradient border border-hero-gold/20">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-hero-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                  Преміум консалтингові послуги
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Експертний
                <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Консалтинг
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2">
                  для вашого бізнесу
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Комплексний супровід проєктів у галузі нерухомості, права,
                будівництва та фінансів. гарантією результату.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="group relative px-6 py-3 sm:px-8 sm:py-4 gold-gradient-2 rounded-xl 
              font-semibold text-white transition-all duration-300 hover:shadow-2xl 
              hover:shadow-hero-gold/25 hover:scale-105 focus:outline-none focus:ring-2 
              focus:ring-hero-gold/50 cursor-pointer">
                <span className="relative z-10 text-sm sm:text-base">
                  Отримати консультацію
                </span>
                <ArrowRight className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* <button className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-hero-gold/30 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-hero-gold/10 hover:border-hero-gold focus:outline-none focus:ring-2 focus:ring-hero-gold/50 text-sm sm:text-base">
                Наші послуги
              </button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center transition-all duration-700 ease-out transform ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-hero-gold">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Services Cards */}
          <div
            className={`space-y-4 sm:space-y-6 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="space-y-3 sm:space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = index === currentService;

                return (
                  <div
                    key={service.title}
                    className={`relative p-4 sm:p-6 rounded-2xl border transition-all duration-500 cursor-pointer
                      ${
                        isActive
                          ? "card-gradient border-hero-gold/40 scale-100 sm:scale-105 shadow-2xl shadow-hero-gold/10"
                          : "bg-hero-card/50 border-hero-blue/30 hover:border-hero-gold/20 hover:scale-[1.02]"
                      }`}
                    onMouseEnter={() => handleServiceHover(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleServiceHover(index);
                      }
                    }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`p-2 sm:p-3 rounded-xl transition-all duration-300 flex-shrink-0 ${
                          isActive ? "gold-gradient" : "bg-hero-blue/30"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${
                            isActive ? "text-white" : service.color
                          }`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-base sm:text-lg font-semibold mb-1 sm:mb-2 transition-colors duration-300 ${
                            isActive ? "text-hero-gold" : "text-white"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {isActive && (
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-hero-gold animate-pulse flex-shrink-0" />
                      )}
                    </div>

                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-hero-gold/5 to-hero-yellow/5 pointer-events-none" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="p-4 sm:p-6 card-gradient rounded-2xl border border-hero-gold/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1 text-base sm:text-lg">
                    Чи готові почати?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Безкоштовна консультація протягом 24 годин
                  </p>
                </div>
                <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 gold-gradient-2 rounded-lg 
                font-medium text-white transition-all duration-300 hover:shadow-lg 
                hover:shadow-hero-gold/25 hover:scale-105 focus:outline-none focus:ring-2 
                focus:ring-hero-gold/50 text-sm sm:text-base cursor-pointer">
                  Зв{"’"}язатися
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero2;
