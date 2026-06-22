import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import SEO from "@/components/SEO";

export default function Nosotros() {
  const { t } = useTranslation();

  return (
    <main className="flex-1">
      <SEO title={t.seo_about_title} description={t.seo_about_desc} />
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center px-6 py-20 md:py-32 overflow-hidden bg-surface-container-low">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/DSC00634.jpg" 
            alt="Equipo Craks" 
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-black/20"></div>
        </div>

        {/* Content Over background */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-start">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-widest">
              {t.about_badge}
            </span>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter">
              {t.about_h1_1}<br />
              <span className="text-secondary italic">{t.about_h1_2}</span>
            </h1>
            <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-xl">
              {t.about_hero_p}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface-container-low py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-primary tracking-tighter">{t.about_timeline_h2}</h2>
            <p className="text-on-surface-variant mt-3">{t.about_timeline_p}</p>
          </div>
          <div className="relative space-y-16">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block"></div>

            {/* 2005 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-16">
                <h3 className="font-headline text-2xl font-bold text-primary mb-3">{t.about_timeline_2005_h}</h3>
                <p className="text-on-surface-variant">{t.about_1992_p}</p>
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 yolk-gradient rounded-full shadow-lg border-4 border-surface-container-low items-center justify-center font-bold text-on-primary-fixed text-xs">2005</div>
              <div className="md:pl-16">
                <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                  <img className="w-full h-full object-cover" src="/trayectoria1.png" alt="Inicio de operaciones Craks" loading="lazy" />
                </div>
              </div>
            </div>

            {/* 2018 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 md:pl-16">
                <h3 className="font-headline text-2xl font-bold text-primary mb-3">{t.about_timeline_2018_h}</h3>
                <p className="text-on-surface-variant">{t.about_2010_p}</p>
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 yolk-gradient rounded-full shadow-lg border-4 border-surface-container-low items-center justify-center font-bold text-on-primary-fixed text-xs">2018</div>
              <div className="md:order-1 md:pr-16">
                <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                  <img className="w-full h-full object-cover" src="/trayectoria2.png" alt="Bodega de distribución" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Proyección */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-16">
                <h3 className="font-headline text-2xl font-bold text-primary mb-3">{t.about_timeline_hoy_h}</h3>
                <p className="text-on-surface-variant">{t.about_2026_p}</p>
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-12 yolk-gradient rounded-full shadow-lg border-4 border-surface-container-low items-center justify-center font-bold text-on-primary-fixed text-[10px] text-center leading-tight px-1">Hoy</div>
              <div className="md:pl-16">
                <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                  <img className="w-full h-full object-cover" src="/trayectoria3.png" alt="Exportación Caribe" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-low p-10 md:p-14 rounded-3xl border border-outline-variant/10 relative overflow-hidden group hover:bg-surface-container transition-colors duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="w-16 h-16 rounded-2xl yolk-gradient flex items-center justify-center mb-8 shadow-lg">
              <span className="material-symbols-outlined text-on-primary-fixed text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>target</span>
            </div>
            <h2 className="font-headline text-3xl font-extrabold text-primary mb-6">{t.about_mission_h2}</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">{t.about_mission_p}</p>
          </div>
          <div className="bg-primary p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 shadow-lg border border-white/10">
              <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
            </div>
            <h2 className="font-headline text-3xl font-extrabold text-primary-fixed mb-6">{t.about_vision_h2}</h2>
            <p className="text-primary-fixed/80 text-lg leading-relaxed">{t.about_vision_p}</p>
          </div>
        </div>
      </section>

      {/* Nuestra Calidad / Desktop Quality Bento */}
      <section id="calidad" className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-headline font-bold text-secondary uppercase tracking-[0.3em] text-sm">{t.quality_sub}</span>
            <h2 className="font-headline text-5xl font-extrabold text-primary mt-4">{t.quality_h2}</h2>
            <div className="w-24 h-1 bg-primary-fixed mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-10 rounded-xl relative overflow-hidden group shadow-sm border border-outline-variant/10">
              <h3 className="font-headline text-2xl font-bold text-primary mb-4">Abastecimiento Sólido</h3>
              <p className="text-on-surface-variant max-w-md">{t.quality_c1_p}</p>
              <div className="mt-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-secondary">verified</span>
                <span className="font-bold text-primary text-sm">Red confiable de productores colombianos</span>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[12rem] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>egg</span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 bg-secondary text-primary p-10 rounded-xl flex flex-col justify-center shadow-sm">
              <span className="material-symbols-outlined text-5xl mb-6">public</span>
              <h3 className="font-headline text-2xl font-bold mb-3">Proyección Internacional</h3>
              <p className="opacity-80">{t.quality_c2_p}</p>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-surface-container-highest p-8 rounded-xl shadow-sm border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">eco</span>
              <h4 className="font-headline text-lg font-bold mb-2">{t.quality_c3_h4}</h4>
              <p className="text-on-surface-variant text-sm">{t.quality_c3_p}</p>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-surface-container-highest p-8 rounded-xl shadow-sm border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">local_shipping</span>
              <h4 className="font-headline text-lg font-bold mb-2">Logística Nacional</h4>
              <p className="text-on-surface-variant text-sm">{t.organic_cert4}</p>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-surface-container-highest p-8 rounded-xl shadow-sm border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">health_and_safety</span>
              <h4 className="font-headline text-lg font-bold mb-2">Cumplimiento Empresarial</h4>
              <p className="text-on-surface-variant text-sm">{t.quality_c5_p}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-primary tracking-tighter mb-16 text-center">{t.about_val_h2}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 yolk-gradient rounded-full flex items-center justify-center mb-6 shadow-xl">
                <span className="material-symbols-outlined text-on-primary-fixed text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <h4 className="font-headline text-xl font-bold text-primary mb-3">{t.about_val1_h}</h4>
              <p className="text-on-surface-variant">{t.about_val1_p}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 yolk-gradient rounded-full flex items-center justify-center mb-6 shadow-xl">
                <span className="material-symbols-outlined text-on-primary-fixed text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
              </div>
              <h4 className="font-headline text-xl font-bold text-primary mb-3">{t.about_val2_h}</h4>
              <p className="text-on-surface-variant">{t.about_val2_p}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 yolk-gradient rounded-full flex items-center justify-center mb-6 shadow-xl">
                <span className="material-symbols-outlined text-on-primary-fixed text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
              </div>
              <h4 className="font-headline text-xl font-bold text-primary mb-3">{t.about_val3_h}</h4>
              <p className="text-on-surface-variant">{t.about_val3_p}</p>
            </div>
          </div>
        </div>
      </section>


      {/* Allies */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-extrabold text-primary tracking-tighter mb-4">{t.about_allies_h2}</h2>
          <p className="text-on-surface-variant mb-10">{t.about_allies_p}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Ara – Jerónimo Martins", "Fonsepan", "Industrias de Alimentos del Fonse", "Alimentos Naturales del Campo", "Agrodelo"].map((ally) => (
              <span key={ally} className="px-5 py-3 bg-surface-container-high rounded-full font-semibold text-on-surface-variant text-sm">{ally}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Simple */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto text-center py-16 bg-surface-container-low rounded-3xl border border-outline-variant/10 shadow-sm">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-6">{t.cta_h2}</h2>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto mb-10">{t.cta_p}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contacto" className="yolk-gradient text-on-primary-fixed px-10 py-4 rounded-full font-bold hover:brightness-105 transition-all active:scale-95 shadow-lg shadow-primary-fixed/20">
              {t.nav_contact}
            </Link>
            <Link to="/productos" className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:opacity-90 transition-all active:scale-95">
              {t.hero_cta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
