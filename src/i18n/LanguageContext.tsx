import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import es from "./es.json";
import en from "./en.json";

type Translations = typeof es;

interface LanguageContextType {
  lang: "es" | "en";
  t: Translations;
  setLang: (lang: "es" | "en") => void;
  currency: "COP" | "USD";
  setCurrency: (c: "COP" | "USD") => void;
  formatPrice: (priceCop: number) => string;
}

const translations = { es, en };

const LanguageContext = createContext<LanguageContextType | null>(null);

// Tasa de cambio de referencia para moneda extranjera
const EXCHANGE_RATE = 4000;

function detectLocalLanguage(): "es" | "en" {
  const stored = localStorage.getItem("craks-lang");
  if (stored === "es" || stored === "en") return stored;
  const nav = navigator.language.toLowerCase();
  return nav.startsWith("es") ? "es" : "en";
}

function detectLocalCurrency(): "COP" | "USD" {
  const stored = localStorage.getItem("craks-currency");
  if (stored === "COP" || stored === "USD") return stored;
  return "COP";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<"es" | "en">(detectLocalLanguage);
  const [currency, setCurrencyState] = useState<"COP" | "USD">(detectLocalCurrency);

  useEffect(() => {
    const hasStoredLang = localStorage.getItem("craks-lang") !== null;
    const hasStoredCurrency = localStorage.getItem("craks-currency") !== null;

    if (hasStoredLang && hasStoredCurrency) return;

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          const country = data.country_code || data.country;
          const languages = data.languages || "";
          
          if (!hasStoredCurrency) {
            setCurrencyState(country === "CO" ? "COP" : "USD");
          }
          if (!hasStoredLang) {
            setLangState(languages.toLowerCase().includes("es") ? "es" : "en");
          }
        }
      })
      .catch(() => {
        // Fallo silencioso, se mantienen los defaults
      });
  }, []);

  const setLang = (code: "es" | "en") => {
    setLangState(code);
    localStorage.setItem("craks-lang", code);
  };

  const setCurrency = (c: "COP" | "USD") => {
    setCurrencyState(c);
    localStorage.setItem("craks-currency", c);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const formatPrice = (priceCop: number) => {
    if (currency === "USD") {
      const priceUsd = priceCop / EXCHANGE_RATE;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(priceUsd);
    }
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(priceCop);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang, currency, setCurrency, formatPrice }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be inside LanguageProvider");
  return ctx;
}
