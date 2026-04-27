import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import es from "./es.json";
import en from "./en.json";

type Translations = typeof es;

interface LanguageContextType {
  lang: "es" | "en";
  t: Translations;
  setLang: (lang: "es" | "en") => void;
}

const translations = { es, en };

const LanguageContext = createContext<LanguageContextType | null>(null);

function detectLanguage(): "es" | "en" {
  const stored = localStorage.getItem("craks-lang");
  if (stored === "es" || stored === "en") return stored;

  const nav = navigator.language.toLowerCase();
  return nav.startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<"es" | "en">(detectLanguage);

  const setLang = (code: "es" | "en") => {
    setLangState(code);
    localStorage.setItem("craks-lang", code);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be inside LanguageProvider");
  return ctx;
}
