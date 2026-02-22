"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Locale } from "../data/i18n";

const STORAGE_KEY = "resume-locale";

type LanguageContextValue = {
  locale: Locale;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  // Sync from localStorage after hydration (client-only)
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "th" || saved === "en") {
      setLocale(saved);
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale, isHydrated]);

  const toggleLanguage = useCallback(() => {
    setLocale((current) => (current === "en" ? "th" : "en"));
  }, []);

  const value = useMemo(
    () => ({ locale, toggleLanguage }),
    [locale, toggleLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
