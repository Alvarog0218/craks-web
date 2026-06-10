import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";

const navLinks = [
  { path: "/", page: "inicio", icon: "home", key: "nav_home" },
  { path: "/nosotros", page: "nosotros", icon: "group", key: "nav_about" },
  { path: "/logistica", page: "logistica", icon: "local_shipping", key: "nav_logistics" },
  { path: "/distribuidores", page: "distribuidores", icon: "hub", key: "nav_distributors" },
  { path: "/productos", page: "productos", icon: "egg", key: "nav_products" },
] as const;

function getPage(pathname: string) {
  if (pathname === "/") return "inicio";
  return pathname.slice(1);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, t, setLang } = useTranslation();
  const location = useLocation();
  const page = getPage(location.pathname);

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 w-80 z-50 flex flex-col p-6 bg-surface rounded-r-xl shadow-2xl shadow-on-surface/10 md:hidden transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-10 px-2">
          <img src="/assets/logo_azul.png" alt="Craks" className="h-12 w-auto" />
          <button onClick={() => setOpen(false)} className="p-2 text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.page}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`${
                page === link.page
                  ? "bg-primary-fixed text-on-primary-fixed"
                  : "text-on-surface hover:bg-surface-container-low"
              } rounded-full font-bold px-6 py-3 flex items-center gap-4 transition-colors`}
            >
              <span className="material-symbols-outlined">{link.icon}</span>{" "}
              {t[link.key as keyof typeof t] as string}
            </Link>
          ))}
        </nav>

        {/* Mobile Lang Toggle */}
        <div className="mt-6 flex items-center gap-1 bg-surface-container-high rounded-full p-1 self-start">
          <button
            onClick={() => setLang("es")}
            className={`${lang === "es" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface"} px-4 py-1.5 rounded-full text-xs font-bold transition-colors`}
          >
            ES
          </button>
          <button
            onClick={() => setLang("en")}
            className={`${lang === "en" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface"} px-4 py-1.5 rounded-full text-xs font-bold transition-colors`}
          >
            EN
          </button>
        </div>

        <div className="mt-auto pt-8">
          <Link
            to="/distribuidores"
            onClick={() => setOpen(false)}
            className="yolk-gradient block w-full text-center py-4 rounded-full font-bold text-on-primary-fixed text-sm uppercase tracking-wide"
          >
            {t.nav_partner}
          </Link>
        </div>
      </aside>

      {/* Top Nav Bar */}
      <header className="bg-surface/80 glass-nav sticky top-0 z-30 w-full">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/logo_azul.png" alt="Craks" className="h-16 w-auto" />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={link.path}
                className={`font-headline text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                  page === link.page
                    ? "text-petrol border-b-2 border-primary-fixed pb-0.5"
                    : "text-on-surface-variant hover:text-petrol"
                }`}
              >
                {t[link.key as keyof typeof t] as string}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5 bg-surface-container-high border border-outline-variant/30 rounded-full p-0.5">
              <button
                onClick={() => setLang("es")}
                className={`${lang === "es" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface"} px-2 py-1 rounded-full text-[10px] font-bold transition-colors`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`${lang === "en" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface"} px-2 py-1 rounded-full text-[10px] font-bold transition-colors`}
              >
                EN
              </button>
            </div>
            <Link
              to="/distribuidores"
              className="hidden sm:block yolk-gradient text-on-primary-fixed px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all active:scale-95"
            >
              {t.nav_orders}
            </Link>
            <button onClick={() => setOpen(true)} className="md:hidden p-2 text-petrol" aria-label="Abrir menú">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
