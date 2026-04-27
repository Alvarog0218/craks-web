import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import es from "../locales/es.json";
import en from "../locales/en.json";

type Lang = "es" | "en";
type Dict = typeof es;

interface I18nContextValue {
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
}

const dicts: Record<Lang, Dict> = { es, en: en as Dict };

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function detectLang(): Lang {
  if (typeof window === "undefined") return "es";
  const saved = localStorage.getItem("lang") as Lang | null;
  if (saved === "es" || saved === "en") return saved;
  const nav = navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("es") ? "es" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    localStorage.setItem("lang", l);
    setLangState(l);
  };

  return (
    <I18nContext.Provider value={{ lang, t: dicts[lang], setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
