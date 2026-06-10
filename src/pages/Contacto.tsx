import { useTranslation } from "@/i18n/LanguageContext";

export default function Contacto() {
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
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pt-16 pb-20">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-secondary tracking-tight mb-6 leading-[1.1]">
            {t.dist_h1}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">{t.dist_p}</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 bg-surface-container-high px-5 py-3 rounded-full">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
              <span className="font-bold text-secondary text-sm">{t.dist_badge1}</span>
            </div>
            <div className="flex items-center gap-3 bg-surface-container-high px-5 py-3 rounded-full">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
              <span className="font-bold text-secondary text-sm">{t.dist_badge2}</span>
            </div>
            <div className="flex items-center gap-3 bg-surface-container-high px-5 py-3 rounded-full">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-bold text-secondary text-sm">{t.dist_badge3}</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-56 h-56 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="egg-curve overflow-hidden bg-surface-container-highest shadow-2xl">
            <img alt="Centro de distribución logística" className="w-full h-80 md:h-[32rem] object-cover mix-blend-multiply opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2DutYF5WM2crGKigTN1gE6GtVTJc8nYxlpK9-KlNownfqa6XgdUzodRUElv5PARzrluotCI61YfoQh_SufKEJLJfnzJVdREv_9VzkhbKsq5D3Q6JxA6-SIokkeJd9wzK6p0faIyGygJKRy267E5QUrgBGlVYukHNdX6R1MQMfbooKRpaatvsweS0MAOKXZl4oqaQhTXjzZsVSJ7yHK_TvCrr3_zGdjq7AfJzxMQ7Hujux0x8sIxFn7K2LLkuh42NP_TWCL2GdHbQ" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="mb-20">
        <div className="bg-surface-container-low rounded-xl p-8 md:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-headline text-3xl font-bold text-secondary mb-5">{t.dist_coverage_h2}</h2>
              <p className="text-on-surface-variant mb-8">{t.dist_coverage_p}</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-surface rounded-xl">
                  <span className="font-semibold text-secondary">{t.dist_coverage_row1}</span>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">{t.dist_coverage_status1}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-surface rounded-xl">
                  <span className="font-semibold text-secondary">{t.dist_coverage_row2}</span>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">{t.dist_coverage_status2}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-surface rounded-xl">
                  <span className="font-semibold text-secondary">{t.dist_coverage_row3}</span>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">{t.dist_coverage_status3}</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 min-h-64 md:min-h-80 bg-surface-container-high rounded-xl relative overflow-hidden group">
              <img alt="Mapa de cobertura" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2yaQwrexvshfh9lmPO1d2WTVxCH8KdJXl4OZKwnkIA7gDYOr6dcRbFcYGEE2F9Y2mjxNud2UIzkFJwl4wi_JrdBA8BxYVll75BffxP61U7W_fA35xvEIxejvghJ2rv97HzMfEtbuwhwZPtNEw359hx-pio20nJ2s78guD4orLNyPcBGdo3dxvlq_9fiIA7ktWGen2IQG8hB-ToATDn79kNZDE7Tru3p-VD23Qu0Z1bkZmrsIAb6nEc8gIYzalTXWNx0D95DglUAo" loading="lazy" />
              <div className="absolute bottom-5 left-5 bg-surface/90 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">{t.dist_coverage_map1}</p>
                <p className="text-[10px] text-on-surface-variant">{t.dist_coverage_map2}</p>
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
            <h3 className="text-2xl font-bold mb-3">{t.dist_supply_h}</h3>
            <p className="opacity-80 text-sm leading-relaxed">{t.dist_supply_p}</p>
          </div>
        </div>
        <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">verified</span>
          <div>
            <h3 className="text-lg font-bold text-secondary mb-2">{t.dist_class_h}</h3>
            <p className="text-sm text-on-surface-variant">{t.dist_class_p}</p>
          </div>
        </div>
        <div className="bg-primary-fixed p-8 rounded-xl flex flex-col justify-between">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">support_agent</span>
          <div>
            <h3 className="text-lg font-bold text-on-primary-fixed mb-2">{t.dist_support_h}</h3>
            <p className="text-sm text-on-primary-fixed-variant">{t.dist_support_p}</p>
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="font-headline text-2xl md:text-3xl font-extrabold text-secondary tracking-tight">{t.dist_who_h2}</h2>
          <p className="text-on-surface-variant mt-2">{t.dist_who_p}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((item) => (
            <div key={item.label} className="bg-surface-container-low rounded-xl p-6 flex flex-col items-center text-center gap-3">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
              <span className="font-bold text-on-surface text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
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
                <p className="text-xs uppercase font-black text-on-surface-variant tracking-widest">{t.dist_form_partner_label}</p>
                <p className="font-bold text-secondary">{t.dist_form_partner_value}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-surface-container-low p-8 md:p-10 rounded-xl shadow-xl shadow-on-surface/5">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">{t.dist_form_company}</label>
                    <input type="text" placeholder={t.dist_form_company_ph} className="w-full bg-surface-container-high rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">{t.dist_form_type}</label>
                    <select className="w-full bg-surface-container-high rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 outline-none transition-all appearance-none">
                      <option>{t.dist_form_type_1}</option>
                      <option>{t.dist_form_type_2}</option>
                      <option>{t.dist_form_type_3}</option>
                      <option>{t.dist_form_type_4}</option>
                      <option>{t.dist_form_type_5}</option>
                      <option>{t.dist_form_type_6}</option>
                      <option>{t.dist_form_type_7}</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">{t.dist_form_email}</label>
                  <input type="email" placeholder="email@empresa.com" className="w-full bg-surface-container-high rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">{t.dist_form_message}</label>
                  <textarea rows={4} placeholder={t.dist_form_message_ph} className="w-full bg-surface-container-high rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright outline-none transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full yolk-gradient text-on-primary-fixed py-5 rounded-full font-bold text-lg shadow-xl shadow-primary-fixed/20 hover:brightness-105 active:scale-[0.99] transition-all">
                  {t.dist_form_btn}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
