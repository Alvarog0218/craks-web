import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Logistica() {
  const { t } = useTranslation();

  return (
    <main className="flex-1">
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
            <Link to="/distribuidores" className="yolk-gradient px-8 py-4 rounded-full font-headline font-black text-base text-on-primary-fixed shadow-xl shadow-primary-fixed/20 hover:-translate-y-0.5 transition-all active:scale-95">
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
            <img alt="Centro logístico" className="w-full aspect-square object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIIXjzj-e3ZhDVn_UETbrudsuFY70ChF0YJgD5IInoajIrbnq0aTYyxJPUOPgQwnBmp36BdGKwK5Sdem33auTp2y2pO47CklZkZMqR_BfMTQG2TphPa94kUlOqoRqw9B38_5E3fEARLbE2z8WbVv99LLXIgpcJzXTrAnG8TBMkHQ4oKmTi5tq_Lztr8m3W3UBASw1Wpdflav6ZlLL8zZibCbmewf0wUkNdhnj8avFwYZ0yLfIrSSTJks1duqB8jWWuS5QuXKsXpHU" loading="lazy" />
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
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
          <div className="rounded-xl overflow-hidden aspect-video md:aspect-[21/9] bg-surface-variant relative group">
            <img alt="Mapa de cobertura nacional" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEEz7aUwGikMRoNe_bM369g7E3YmegaTIB758-Dbp1MP4Kfxai5uZqkpvmNpML_N6sYY46mxbcHHAC86R5QWIloOl-lVjWjWwqLH35NU3TPHBD6kpmjWzVR34Z5qT6nsWk0mZOVG65jpGi1lCOPb2MEDHqKgMvYXvoj_HgDufE_84sXx2zMy-s3PYVTwjcz5MuQQVcNOxSpSyG6gLjlF-InsZT_51H-sxyiF_rboUkEL6GqL3oqQuTu3fiGOdBvA16zLNVyeluvXw" loading="lazy" />
            <div className="absolute bottom-5 left-5 bg-surface/90 backdrop-blur-sm p-3 rounded-xl">
              <p className="text-xs font-bold text-secondary uppercase tracking-widest">{t.log_map_label}</p>
              <p className="text-[10px] text-on-surface-variant">{t.log_map_sub}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="soluciones" className="py-16 md:py-24 bg-surface px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="egg-curve bg-secondary-container w-full aspect-square absolute -z-10 scale-110 opacity-20"></div>
            <img alt="Servicio de transporte" className="w-full h-auto egg-curve shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZIeF_tdz1vpIjbNc-aaaW9VaFYgH0t3cTB_frmGR5Xt3RRgvEkCk8FP_3UBSaJFXbXkiHa2JS4JwDBWeE6s65mlInSa393VqAC4TVWo_xKMkrgLtLamzIzqWUyx9xAvvUQKBsg694_rpNKiRQW7DxnbG4K-zvFK-DzdcBLRWERlTYaRkM44aAilRpFQ6TnHf01NzetLa57hq50Am-Bg373630QM56NMRozO6YNfrufeydaWGDhzsOfZbW4FstQPtXefJpC4RxDOY" loading="lazy" />
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
      <section className="py-16 bg-surface-container-low px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight mb-3">{t.log_benefits_h2}</h2>
              <p className="text-on-surface-variant text-lg">{t.log_benefits_p}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "inventory_2",  h: t.log_benefit1_h, p: t.log_benefit1_p },
              { icon: "support_agent",h: t.log_benefit2_h, p: t.log_benefit2_p },
              { icon: "verified_user",h: t.log_benefit3_h, p: t.log_benefit3_p },
            ].map((item) => (
              <div key={item.h} className="bg-surface p-8 md:p-10 rounded-xl group hover:bg-secondary transition-all duration-500 ghost-border">
                <span className="material-symbols-outlined text-5xl text-secondary group-hover:text-primary-fixed transition-colors mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{item.h}</h3>
                <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed text-sm">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-container/20 translate-x-1/2 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter mb-6">{t.log_form_h2}</h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">{t.log_form_p}</p>
            <div className="p-7 bg-surface-container rounded-xl border-l-4 border-secondary">
              <p className="italic text-on-surface font-medium leading-relaxed">"{t.log_quote}"</p>
              <div className="mt-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full yolk-gradient flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-fixed text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>egg</span>
                </div>
                <div>
                  <div className="font-bold text-sm">{t.log_quote_name}</div>
                  <div className="text-xs text-on-surface-variant">{t.log_quote_role}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 md:p-10 rounded-xl shadow-xl shadow-on-surface/5">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">{t.log_form_company}</label>
                  <input type="text" placeholder={t.log_form_company_ph} className="w-full bg-surface-container-high rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">{t.log_form_country}</label>
                  <input type="text" placeholder={t.log_form_country_ph} className="w-full bg-surface-container-high rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">{t.log_form_email}</label>
                <input type="email" placeholder="email@empresa.com" className="w-full bg-surface-container-high rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright outline-none transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">{t.log_form_volume}</label>
                <select className="w-full bg-surface-container-high rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 outline-none transition-all appearance-none">
                  <option>{t.log_form_vol_1}</option>
                  <option>{t.log_form_vol_2}</option>
                  <option>{t.log_form_vol_3}</option>
                  <option>{t.log_form_vol_4}</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">{t.log_form_message}</label>
                <textarea rows={3} placeholder={t.log_form_message_ph} className="w-full bg-surface-container-high rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full yolk-gradient text-on-primary-fixed py-5 rounded-full font-bold text-lg shadow-xl active:scale-[0.99] transition-all hover:brightness-105">
                {t.log_form_btn}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
