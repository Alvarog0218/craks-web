import { Link } from "react-router-dom";
import { useI18n } from "../contexts/I18nContext";

export default function Inicio() {
  const { t } = useI18n();
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[921px] flex items-center px-8 md:px-24 py-12 md:py-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary-fixed-dim" />
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">{t.hero_badge}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold font-headline leading-[1.1] tracking-tighter text-primary">
              {t.hero_h1_1} <br /><span className="text-secondary italic">{t.hero_h1_2}</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">{t.hero_desc}</p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/productos" className="yolk-gradient text-on-primary-fixed px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-primary-fixed/20 hover:brightness-105 active:scale-95 transition-all flex items-center gap-3 group">
                {t.hero_cta}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-4 border-surface overflow-hidden bg-surface-container-high" />
                <div className="w-12 h-12 rounded-full border-4 border-surface overflow-hidden bg-surface-container-highest" />
                <div className="w-12 h-12 rounded-full border-4 border-surface bg-surface-container-highest flex items-center justify-center text-xs font-bold">+2k</div>
              </div>
              <span className="text-sm font-bold text-on-surface-variant">{t.hero_trust}</span>
            </div>
            <div className="pt-12 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-black text-primary font-headline tracking-tighter">1.2M+</span>
                <span className="text-sm uppercase tracking-widest text-on-surface-variant font-label">{t.hero_stat1}</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-primary font-headline tracking-tighter">100%</span>
                <span className="text-sm uppercase tracking-widest text-on-surface-variant font-label">{t.hero_stat2}</span>
              </div>
            </div>
          </div>
          <div className="relative p-4 md:p-8">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl -z-10" />
            <div className="relative w-full aspect-square md:aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-2xl transform lg:scale-105 flex items-center justify-center">
              <img src="/assets/huevo.png" alt="Huevos orgánicos" className="w-2/3 h-2/3 object-contain animate-float" />
              <div className="absolute bottom-8 left-8 right-8 bg-surface/90 backdrop-blur-md p-6 rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-bold text-primary">{t.hero_farm_name}</p>
                  <p className="text-sm text-on-surface-variant">{t.hero_farm_time}</p>
                </div>
                <span className="material-symbols-outlined text-primary-fixed-dim text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Bento */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary mb-6 tracking-tight">{t.solutions_h2}</h2>
          <p className="text-on-surface-variant">{t.solutions_sub}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-surface-container-low rounded-xl p-10 flex flex-col md:flex-row gap-8 items-center group transition-all hover:bg-surface-container">
            <div className="flex-1 space-y-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-3xl text-primary">local_mall</span>
              </div>
              <h3 className="text-3xl font-bold font-headline text-primary">{t.solutions_cons_h3}</h3>
              <p className="text-on-surface-variant leading-relaxed">{t.solutions_cons_p}</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-bold text-on-surface">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> {t.solutions_check1}
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-on-surface">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> {t.solutions_check2}
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 aspect-square rounded-lg overflow-hidden bg-surface-container-high flex items-center justify-center">
              <img src="/assets/huevo.png" alt="" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>

          <div className="bg-secondary text-on-secondary rounded-xl p-10 flex flex-col justify-between group">
            <div className="space-y-6">
              <span className="material-symbols-outlined text-5xl opacity-50">local_shipping</span>
              <h3 className="text-3xl font-bold font-headline leading-tight">{t.solutions_log_h3}</h3>
              <p className="text-secondary-container/80">{t.solutions_log_p}</p>
            </div>
            <Link to="/logistica" className="mt-8 flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors">
              <span className="font-bold">{t.solutions_log_cta}</span>
              <span className="material-symbols-outlined">north_east</span>
            </Link>
          </div>

          <div className="bg-surface-container-highest rounded-xl p-10 space-y-6 flex flex-col justify-center text-center">
            <div className="w-20 h-20 yolk-gradient rounded-full mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-fixed text-4xl">eco</span>
            </div>
            <h3 className="text-2xl font-bold font-headline text-primary">{t.solutions_org_h3}</h3>
            <p className="text-on-surface-variant text-sm px-4">{t.solutions_org_p}</p>
          </div>

          <div className="md:col-span-2 relative rounded-xl overflow-hidden h-64 md:h-auto bg-primary flex items-end p-10">
            <div className="flex items-center gap-6">
              <span className="text-white font-headline font-bold text-3xl">Craks</span>
              <div className="h-10 w-px bg-white/30" />
              <p className="text-white font-headline font-bold text-xl">{t.solutions_tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organic */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden bg-surface-container-highest p-8 md:p-12">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black font-headline text-primary mb-6">{t.organic_h2}</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed max-w-lg">{t.organic_p}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  ["eco", t.organic_cert1],
                  ["verified", t.organic_cert2],
                  ["health_and_safety", t.organic_cert3],
                  ["local_shipping", t.organic_cert4],
                ].map(([icon, label]) => (
                  <div key={icon} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                    <span className="text-sm font-bold">{label}</span>
                  </div>
                ))}
              </div>
              <Link to="/nosotros" className="inline-flex items-center justify-center gap-3 bg-primary text-on-primary w-full sm:w-auto px-8 py-4 rounded-full font-bold">
                {t.organic_cta} <span className="material-symbols-outlined">menu_book</span>
              </Link>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-fixed-dim opacity-20 egg-shape-hero pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Quality Bento (desktop) */}
      <section className="hidden md:block py-20 px-6 bg-surface-container-low">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-headline font-bold text-secondary uppercase tracking-[0.3em] text-sm">{t.quality_sub}</span>
            <h2 className="font-headline text-5xl font-extrabold text-primary mt-4">{t.quality_h2}</h2>
            <div className="w-24 h-1 bg-primary-fixed mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-7 bg-surface-container-lowest p-10 rounded-xl relative overflow-hidden group">
              <h3 className="font-headline text-2xl font-bold text-primary mb-4">Organic Precision</h3>
              <p className="text-on-surface-variant max-w-md">{t.quality_c1_p}</p>
              <div className="mt-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-secondary">verified</span>
                <span className="font-bold text-primary text-sm">Certified International Standards</span>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[12rem] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>egg</span>
              </div>
            </div>
            <div className="col-span-5 bg-secondary text-on-secondary p-10 rounded-xl flex flex-col justify-center">
              <span className="material-symbols-outlined text-5xl mb-6">public</span>
              <h3 className="font-headline text-2xl font-bold mb-3">Global Reach</h3>
              <p className="opacity-80">{t.quality_c2_p}</p>
            </div>
            <div className="col-span-4 bg-surface-container-highest p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">eco</span>
              <h4 className="font-headline text-lg font-bold mb-2">{t.quality_c3_h4}</h4>
              <p className="text-on-surface-variant text-sm">{t.quality_c3_p}</p>
            </div>
            <div className="col-span-4 bg-surface-container-highest p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">local_shipping</span>
              <h4 className="font-headline text-lg font-bold mb-2">Rapid Logistics</h4>
              <p className="text-on-surface-variant text-sm">{t.organic_cert4}</p>
            </div>
            <div className="col-span-4 bg-surface-container-highest p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">health_and_safety</span>
              <h4 className="font-headline text-lg font-bold mb-2">Pure Integrity</h4>
              <p className="text-on-surface-variant text-sm">{t.quality_c5_p}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-surface-container rounded-xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black font-headline text-primary tracking-tighter mb-4">{t.cta_h2}</h2>
            <p className="text-on-surface-variant mb-8 max-w-md mx-auto">{t.cta_p}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/distribuidores" className="yolk-gradient text-on-primary-fixed px-10 py-4 rounded-full font-bold text-lg transition-all active:scale-95">{t.cta_btn1}</Link>
              <Link to="/distribuidores" className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all">{t.cta_btn2}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAB mobile */}
      <div className="fixed bottom-6 right-5 z-40 md:hidden">
        <Link to="/productos" className="yolk-gradient w-14 h-14 rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-on-primary-fixed text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
        </Link>
      </div>
    </>
  );
}
