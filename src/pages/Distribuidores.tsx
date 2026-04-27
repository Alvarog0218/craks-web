import { useI18n } from "../contexts/I18nContext";

export default function Distribuidores() {
  const { t } = useI18n();
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pt-16 pb-20">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-secondary tracking-tight mb-6 leading-[1.1]">
            {t.dist_h1_1} <span className="text-on-primary-container">{t.dist_h1_2}</span><br />{t.dist_h1_3}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">{t.dist_hero_p}</p>
          <div className="flex flex-wrap gap-4">
            {[
              ["public", t.dist_tag1],
              ["local_shipping", t.dist_tag2],
              ["verified", "ISO 22000"],
            ].map(([icon, label]) => (
              <div key={icon} className="flex items-center gap-3 bg-surface-container-high px-5 py-3 rounded-full">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                <span className="font-bold text-secondary text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-56 h-56 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />
          <div className="egg-curve overflow-hidden bg-surface-container-highest shadow-2xl flex items-center justify-center h-80 md:h-[32rem]">
            <span className="material-symbols-outlined text-secondary text-[14rem] opacity-50">local_shipping</span>
          </div>
        </div>
      </section>

      {/* International */}
      <section className="mb-20">
        <div className="bg-surface-container-low rounded-xl p-8 md:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-headline text-3xl font-bold text-secondary mb-5">{t.dist_intl_h2}</h2>
              <p className="text-on-surface-variant mb-8">{t.dist_intl_p}</p>
              <div className="space-y-3">
                {[
                  [t.dist_latam, t.dist_latam_badge],
                  [t.dist_europe, t.dist_europe_badge],
                  [t.dist_na, t.dist_na_badge],
                ].map(([region, badge]) => (
                  <div key={region} className="flex items-center justify-between p-4 bg-surface rounded-xl">
                    <span className="font-semibold text-secondary">{region}</span>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 min-h-64 md:min-h-80 bg-surface-container-high rounded-xl relative overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-[10rem] opacity-30">public</span>
              <div className="absolute bottom-5 left-5 bg-surface/90 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">{t.dist_map_label}</p>
                <p className="text-[10px] text-on-surface-variant">{t.dist_map_sub}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Benefits */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-20">
        <div className="md:col-span-2 bg-secondary text-on-secondary p-10 rounded-xl flex flex-col justify-between min-h-56">
          <span className="material-symbols-outlined text-5xl mb-8 opacity-80">inventory_2</span>
          <div>
            <h3 className="text-2xl font-bold mb-3">{t.dist_stock_h3}</h3>
            <p className="opacity-80 text-sm leading-relaxed">{t.dist_stock_p}</p>
          </div>
        </div>
        <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">verified</span>
          <div>
            <h3 className="text-lg font-bold text-secondary mb-2">{t.dist_quality_h3}</h3>
            <p className="text-sm text-on-surface-variant">{t.dist_quality_p}</p>
          </div>
        </div>
        <div className="bg-primary-fixed p-8 rounded-xl flex flex-col justify-between">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">support_agent</span>
          <div>
            <h3 className="text-lg font-bold text-on-primary-fixed mb-2">{t.dist_support_h3}</h3>
            <p className="text-sm text-on-primary-fixed-variant">{t.dist_support_p}</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-secondary mb-6 leading-tight">{t.dist_form_h2}</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">{t.dist_form_p}</p>
            <div className="flex items-center gap-5 p-5 ghost-border rounded-xl">
              <div className="w-14 h-14 yolk-gradient rounded-full flex items-center justify-center text-on-primary-fixed flex-shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
              </div>
              <div>
                <p className="text-xs uppercase font-black text-on-surface-variant tracking-widest">{t.dist_partner_badge}</p>
                <p className="font-bold text-secondary">{t.dist_partner_label}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-surface-container-low p-8 md:p-10 rounded-xl shadow-xl shadow-on-surface/5">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">{t.dist_label_company}</label>
                    <input type="text" placeholder={t.dist_ph_company} className="w-full bg-surface-container-high rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">{t.dist_label_type}</label>
                    <select className="w-full bg-surface-container-high rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 outline-none transition-all appearance-none">
                      <option>{t.dist_opt1}</option>
                      <option>{t.dist_opt2}</option>
                      <option>{t.dist_opt3}</option>
                      <option>Horeca</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">{t.dist_label_email}</label>
                  <input type="email" placeholder="email@empresa.com" className="w-full bg-surface-container-high rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">{t.dist_label_msg}</label>
                  <textarea rows={4} placeholder={t.dist_ph_msg} className="w-full bg-surface-container-high rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright outline-none transition-all resize-none" />
                </div>
                <button type="submit" className="w-full yolk-gradient text-on-primary-fixed py-5 rounded-full font-bold text-lg shadow-xl shadow-primary-fixed/20 hover:brightness-105 active:scale-[0.99] transition-all">
                  {t.dist_submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
