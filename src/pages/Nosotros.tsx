import { Link } from "react-router-dom";
import { useI18n } from "../contexts/I18nContext";

export default function Nosotros() {
  const { t } = useI18n();
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-16 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">{t.about_badge}</span>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary leading-tight tracking-tighter mb-6">
              {t.about_h1_1}<br /><span className="text-on-primary-container italic">{t.about_h1_2}</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">{t.about_hero_p}</p>
          </div>
          <div className="relative">
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-surface-container-high shadow-2xl md:rotate-2 flex items-center justify-center">
              <img src="/assets/huevo.png" alt="" className="w-1/2 h-1/2 object-contain" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 yolk-gradient rounded-full opacity-30 blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-primary tracking-tighter">{t.about_timeline_h2}</h2>
            <p className="text-on-surface-variant mt-3">{t.about_timeline_p}</p>
          </div>
          <div className="relative space-y-16">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block" />
            {[
              { year: "1992", title: "The Pasture Seed", desc: t.about_1992_p, reverse: false },
              { year: "2010", title: "Precision Logistics", desc: t.about_2010_p, reverse: true },
              { year: "2026", title: "Global Distribution", desc: t.about_2026_p, reverse: false },
            ].map((m) => (
              <div key={m.year} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`${m.reverse ? "md:order-2 md:pl-16" : "md:text-right md:pr-16"}`}>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-3">{m.title}</h3>
                  <p className="text-on-surface-variant">{m.desc}</p>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 yolk-gradient rounded-full shadow-lg border-4 border-surface-container-low items-center justify-center font-bold text-on-primary-fixed text-xs">{m.year}</div>
                <div className={`${m.reverse ? "md:order-1 md:pr-16" : "md:pl-16"}`}>
                  <div className="h-56 rounded-xl overflow-hidden bg-surface-container-high flex items-center justify-center">
                    <img src="/assets/huevo.png" alt="" className="h-32 object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-primary tracking-tighter mb-16">The Curators of Freshness</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: "eco", title: "Radical Integrity", desc: t.about_val1_p },
              { icon: "public", title: "Precision Chain", desc: t.about_val2_p },
              { icon: "handshake", title: "Shared Prosperity", desc: t.about_val3_p },
            ].map((v) => (
              <div key={v.title} className="flex flex-col items-center text-center">
                <div className="w-36 h-36 yolk-gradient rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <span className="material-symbols-outlined text-on-primary-fixed text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>{v.icon}</span>
                </div>
                <h4 className="font-headline text-xl font-bold text-primary mb-3">{v.title}</h4>
                <p className="text-on-surface-variant">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto bg-primary rounded-xl p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-primary-fixed mb-6">{t.about_cta_h2}</h2>
            <p className="text-primary-fixed/80 text-lg max-w-2xl mb-8">{t.about_cta_p}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/distribuidores" className="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all">{t.about_cta_btn1}</Link>
              <Link to="/distribuidores" className="border border-primary-fixed/30 text-primary-fixed px-8 py-3 rounded-full font-bold hover:bg-primary-fixed/10 transition-all">{t.about_cta_btn2}</Link>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-fixed/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>
    </>
  );
}
