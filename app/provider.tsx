"use client";

import React, { useEffect, useState } from "react";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { messages as ukMessages } from "../locales/uk/messages.js";
import { messages as enMessages } from "../locales/en/messages.js";
import CircularText from "@/components/ui/jsrepo/CircularText/CircularText";

const getInitialLocale = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("lang") || "uk";
  }
  return "uk";
};

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<string>("uk");
  const [isReady, setIsReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderDelay = setTimeout(() => {
      setShowLoader(true);
    }, 500);

    const loadTranslations = async () => {
      i18n.load("uk", ukMessages);
      i18n.load("en", enMessages);

      const initialLocale = getInitialLocale();
      setLocale(initialLocale);
      i18n.activate(initialLocale);

      clearTimeout(loaderDelay); // Успели до 300ms — лоадер не нужен
      setIsReady(true);
    };

    loadTranslations();

    return () => clearTimeout(loaderDelay);
  }, []);

  useEffect(() => {
    const onStorage = () => {
      const lang = localStorage.getItem("lang") || "uk";
      setLocale(lang);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!isReady && showLoader) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-700 via-gray-800 to-slate-800">
        <CircularText
          text="ESVIEM*ESVIEM*ESVIEM*"
          onHover="speedUp"
          spinDuration={20}
          className="text-yellow-600"
        />
      </div>
    );
  }

  if (!isReady) return null;

  return (
    <I18nProvider i18n={i18n} key={locale}>
      {children}
    </I18nProvider>
  );
};

export default Provider;
