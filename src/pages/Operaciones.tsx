import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import SEO from "@/components/SEO";

export default function Operaciones() {
  const { t } = useTranslation();

  const clients = [
    { icon: "storefront",      label: t.dist_who_supermarket },
    { icon: "restaurant",      label: t.dist_who_restaurant  },
    { icon: "hotel",           label: t.dist_who_hotel       },
    { icon: "local_shipping",  label: t.dist_who_distributor },
    { icon: "public",          label: t.dist_who_export      },
    { icon: "shopping_basket", label: t.dist_who_consumer    },
  ];

  return (
    <main className="flex-1">
      <SEO title={t.seo_log_title} description={t.seo_log_desc} />
      {/* Hero */}
      <section className="relative px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container mb-8">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
            <span className="text-xs font-bold uppercase tracking-widest">{t.log_badge}</span>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[1.05] mb-6">
            {t.log_h1_1} <span className="text-secondary">{t.log_h1_2}</span> {t.log_h1_3}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">{t.log_hero_p}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contacto" className="yolk-gradient px-8 py-4 rounded-full font-headline font-black text-base text-on-primary-fixed shadow-xl shadow-primary-fixed/20 hover:-translate-y-0.5 transition-all active:scale-95">
              {t.log_cta1}
            </Link>
            <a href="#soluciones" className="px-8 py-4 rounded-full font-headline font-bold text-base border-2 border-outline-variant text-on-background hover:bg-surface-container-low transition-all">
              {t.log_cta2}
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-fixed/30 blur-3xl rounded-full pointer-events-none"></div>
          <div className="relative bg-surface-container-low rounded-xl overflow-hidden p-3 shadow-2xl">
            <img alt="Centro logístico" className="w-full aspect-square object-cover rounded-lg" src="/Bodega.jpg" loading="lazy" />
            <div className="absolute bottom-8 left-8 p-5 bg-surface/90 backdrop-blur-md rounded-xl max-w-xs shadow-lg">
              <div className="flex items-center gap-3 mb-1">
                <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="font-bold text-secondary text-sm">{t.log_cert_title}</span>
              </div>
              <p className="text-sm">{t.log_cert_p}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface-container-low">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{t.log_network_h2}</h2>
            <p className="text-on-surface-variant text-lg">{t.log_network_p}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 bg-surface rounded-xl">
              <div className="text-3xl md:text-4xl font-black text-secondary mb-1 font-headline">{t.log_stat1_val}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t.log_stat1_label}</div>
            </div>
            <div className="p-6 bg-surface rounded-xl">
              <div className="text-3xl md:text-4xl font-black text-secondary mb-1 font-headline">{t.log_stat2_val}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t.log_stat2_label}</div>
            </div>
            <div className="p-6 bg-surface rounded-xl">
              <div className="text-3xl md:text-4xl font-black text-secondary mb-1 font-headline">{t.log_stat3_val}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t.log_stat3_label}</div>
            </div>
            <div className="p-6 bg-surface rounded-xl">
              <div className="text-3xl md:text-4xl font-black text-secondary mb-1 font-headline">{t.log_stat4_val}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t.log_stat4_label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-xl p-8 md:p-12 overflow-hidden relative border border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-headline text-3xl font-bold text-secondary mb-5">{t.dist_coverage_h2}</h2>
              <p className="text-on-surface-variant mb-8">{t.dist_coverage_p}</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-surface rounded-xl shadow-sm">
                  <span className="font-semibold text-secondary">{t.dist_coverage_row1}</span>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">{t.dist_coverage_status1}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-surface rounded-xl shadow-sm">
                  <span className="font-semibold text-secondary">{t.dist_coverage_row2}</span>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">{t.dist_coverage_status2}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-surface rounded-xl shadow-sm">
                  <span className="font-semibold text-secondary">{t.dist_coverage_row3}</span>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">{t.dist_coverage_status3}</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 min-h-64 md:min-h-80 bg-surface-container-high rounded-xl relative overflow-hidden group">
              <img alt="Mapa de cobertura" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEEz7aUwGikMRoNe_bM369g7E3YmegaTIB758-Dbp1MP4Kfxai5uZqkpvmNpML_N6sYY46mxbcHHAC86R5QWIloOl-lVjWjWwqLH35NU3TPHBD6kpmjWzVR34Z5qT6nsWk0mZOVG65jpGi1lCOPb2MEDHqKgMvYXvoj_HgDufE_84sXx2zMy-s3PYVTwjcz5MuQQVcNOxSpSyG6gLjlF-InsZT_51H-sxyiF_rboUkEL6GqL3oqQuTu3fiGOdBvA16zLNVyeluvXw" loading="lazy" />
              <div className="absolute bottom-5 left-5 bg-surface/90 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">{t.dist_coverage_map1}</p>
                <p className="text-[10px] text-on-surface-variant">{t.dist_coverage_map2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-headline text-2xl md:text-4xl font-extrabold text-secondary tracking-tight">{t.dist_who_h2}</h2>
          <p className="text-on-surface-variant mt-2 max-w-2xl mx-auto">{t.dist_who_p}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((item) => (
            <div key={item.label} className="bg-surface-container-low rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:bg-surface-container transition-colors shadow-sm border border-outline-variant/10">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
              <span className="font-bold text-on-surface text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Service Section (Transport) */}
      <section id="soluciones" className="py-20 md:py-24 bg-surface px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="egg-curve bg-secondary-container w-full aspect-square absolute -z-10 scale-110 opacity-20"></div>
            <img alt="Distribución y logística de huevos" className="w-full h-auto egg-curve shadow-2xl" src="/transporte.jpg" loading="lazy" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight mb-10">{t.log_tech_h2}</h2>
            <div className="space-y-8">
              {[
                { icon: "inventory_2", h: t.log_tech1_h, p: t.log_tech1_p },
                { icon: "verified",    h: t.log_tech2_h, p: t.log_tech2_p },
                { icon: "public",      h: t.log_tech3_h, p: t.log_tech3_p },
              ].map((item) => (
                <div key={item.h} className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary-fixed text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.h}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{item.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-surface-container-low px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight mb-3">{t.log_benefits_h2}</h2>
            <p className="text-on-surface-variant text-lg">{t.log_benefits_p}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "inventory_2",  h: t.log_benefit1_h, p: t.log_benefit1_p },
              { icon: "support_agent",h: t.log_benefit2_h, p: t.log_benefit2_p },
              { icon: "verified_user",h: t.log_benefit3_h, p: t.log_benefit3_p },
            ].map((item) => (
              <div key={item.h} className="bg-surface p-8 md:p-10 rounded-xl group hover:bg-secondary transition-all duration-500 shadow-sm border border-outline-variant/10">
                <span className="material-symbols-outlined text-5xl text-secondary group-hover:text-primary-fixed transition-colors mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{item.h}</h3>
                <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed text-sm">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Card */}
      <section className="py-20 px-6 md:px-12 bg-surface">
        <div className="max-w-5xl mx-auto bg-surface-container rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border border-outline-variant/10 shadow-2xl shadow-on-surface/5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-fixed/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter text-secondary leading-tight">
              {t.log_form_h2}
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
              {t.log_form_p}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <Link to="/contacto" className="yolk-gradient px-10 py-5 rounded-full font-headline font-black text-lg text-on-primary-fixed shadow-xl shadow-primary-fixed/20 hover:brightness-105 transition-all active:scale-95">
                {t.log_cta1}
              </Link>
              <Link to="/nosotros" className="px-10 py-5 rounded-full font-headline font-bold text-lg border-2 border-outline-variant text-on-background hover:bg-surface-container-low transition-all">
                {t.nav_about}
              </Link>
            </div>
            
            <div className="pt-10 flex flex-wrap justify-center gap-10 opacity-60">
               <div className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">verified</span>
                 <span className="text-xs font-bold uppercase tracking-widest">{t.dist_badge3}</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">public</span>
                 <span className="text-xs font-bold uppercase tracking-widest">{t.dist_badge1}</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">local_shipping</span>
                 <span className="text-xs font-bold uppercase tracking-widest">{t.dist_badge2}</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
