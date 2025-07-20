"use client";

import React, { useEffect, useState } from "react";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { messages as ukMessages } from "../locales/uk/messages.js";
import { messages as enMessages } from "../locales/en/messages.js";

const getInitialLocale = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("lang") || "uk";
  }
  return "uk";
};

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<string>("uk");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    i18n.load("uk", ukMessages);
    i18n.load("en", enMessages);

    const initialLocale = getInitialLocale();
    setLocale(initialLocale);

    i18n.activate(initialLocale);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (locale && isReady) {
      i18n.activate(locale);
    }
  }, [locale, isReady]);

  useEffect(() => {
    const onStorage = () => {
      const lang = localStorage.getItem("lang") || "uk";
      setLocale(lang);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-700 via-gray-800 to-slate-800">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <I18nProvider i18n={i18n} key={locale}>
      {children}
    </I18nProvider>
  );
};

export default Provider;