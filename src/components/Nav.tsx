import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useI18n } from "../contexts/I18nContext";

const links = [
  { to: "/", key: "nav_home", icon: "home" },
  { to: "/productos", key: "nav_products", icon: "egg" },
  { to: "/nosotros", key: "nav_about", icon: "group" },
  { to: "/distribuidores", key: "nav_distributors", icon: "hub" },
  { to: "/logistica", key: "nav_logistics", icon: "local_shipping" },
] as const;

export default function Nav() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (to: string) => pathname === to;

  return (
    <div>
      {/* Mobile drawer backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed inset-y-0 left-0 w-80 z-50 flex flex-col p-6 bg-surface rounded-r-xl shadow-2xl shadow-on-surface/10 md:hidden transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-10 px-2">
          <img src="/assets/logo_azul.png" alt="Craks" className="h-8 w-auto" />
          <button
            onClick={() => setOpen(false)}
            className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Cerrar menú"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`${
                isActive(l.to)
                  ? "bg-primary-fixed text-on-primary-fixed"
                  : "text-on-surface hover:bg-surface-container-low"
              } rounded-full font-bold px-6 py-3 flex items-center gap-4 transition-colors`}
            >
              <span className="material-symbols-outlined">{l.icon}</span>
              {t[l.key as keyof typeof t] as string}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex items-center gap-1 bg-surface-container-high rounded-full p-1 self-start">
          <button
            onClick={() => setLang("es")}
            className={`${
              lang === "es" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface"
            } px-4 py-1.5 rounded-full text-xs font-bold transition-colors`}
          >
            ES
          </button>
          <button
            onClick={() => setLang("en")}
            className={`${
              lang === "en" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface"
            } px-4 py-1.5 rounded-full text-xs font-bold transition-colors`}
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

      {/* Top nav */}
      <header className="bg-surface/80 glass-nav sticky top-0 z-30 w-full">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/logo_azul.png" alt="Craks" className="h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `font-headline text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-petrol border-b-2 border-primary-fixed pb-0.5"
                      : "text-on-surface-variant hover:text-petrol"
                  }`
                }
              >
                {t[l.key as keyof typeof t] as string}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5 bg-surface-container-high border border-outline-variant/30 rounded-full p-0.5">
              <button
                onClick={() => setLang("es")}
                className={`${
                  lang === "es" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface"
                } px-2 py-1 rounded-full text-[10px] font-bold transition-colors`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`${
                  lang === "en" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface"
                } px-2 py-1 rounded-full text-[10px] font-bold transition-colors`}
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
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 text-petrol"
              aria-label="Abrir menú"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
