import { Link } from "react-router-dom";
import { useI18n } from "../contexts/I18nContext";

export default function Productos() {
  const { t } = useI18n();
  const products = [
    { name: "Craks Reserve", price: "$24.00", badge: "Orgánico", desc: t.prod_c1_p, badgeCls: "bg-secondary/90 text-on-secondary" },
    { name: "Standard Excellence", price: "$18.50", badge: "Grande", desc: t.prod_c2_p, badgeCls: "bg-secondary/90 text-on-secondary" },
    { name: "Jumbo Heritage", price: "$32.00", badge: "Jumbo", desc: t.prod_c3_p, badgeCls: "bg-secondary/90 text-on-secondary" },
    { name: "Heritage Variety", price: "$38.00", badge: "Heirloom", desc: t.prod_c4_p, badgeCls: "bg-primary-fixed text-on-primary-fixed" },
  ];

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pt-12 pb-20">
      <section className="mb-12">
        <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-primary-fixed-dim" />
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t.prod_badge}</span>
        </div>
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary tracking-tighter mb-3">
          Organic Precision<br /><span className="text-secondary opacity-80">Catalog</span>
        </h1>
        <p className="text-on-surface-variant max-w-xl text-base md:text-lg">{t.prod_sub}</p>
      </section>

      <div className="flex flex-col lg:flex-row gap-10">
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-surface-container-low rounded-xl p-6 lg:sticky lg:top-28">
            <h3 className="font-headline text-lg font-bold text-primary mb-6 tracking-tight">Curation</h3>
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">{t.prod_cat_label}</label>
                <div className="flex flex-col gap-2">
                  <button className="flex items-center justify-between px-4 py-3 rounded-full bg-secondary text-on-secondary font-semibold text-sm shadow-sm">
                    {t.prod_cat_home}
                    <span className="material-symbols-outlined text-base">check</span>
                  </button>
                  <button className="flex items-center justify-between px-4 py-3 rounded-full bg-surface-container-highest text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors">
                    {t.prod_cat_wholesale}
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">{t.prod_type_label}</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-primary-fixed text-on-primary-fixed text-xs font-bold rounded-full cursor-pointer">Orgánico</span>
                  <span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full cursor-pointer hover:bg-primary-fixed/50 transition-colors">Grande</span>
                  <span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full cursor-pointer hover:bg-primary-fixed/50 transition-colors">Jumbo</span>
                  <span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full cursor-pointer hover:bg-primary-fixed/50 transition-colors">Pasture Raised</span>
                </div>
              </div>
            </div>
            <div className="mt-10 yolk-gradient rounded-xl p-5 relative overflow-hidden">
              <p className="text-on-primary-fixed font-bold text-sm relative z-10">{t.prod_quote_p}</p>
              <Link to="/distribuidores" className="mt-3 inline-block bg-primary text-on-primary px-4 py-2 rounded-full text-xs font-bold relative z-10">{t.prod_quote_btn}</Link>
              <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-white/20 rounded-full blur-xl" />
            </div>
          </div>
        </aside>

        <section className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="group bg-surface-container-low rounded-xl p-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="aspect-[4/5] egg-shape overflow-hidden mb-5 bg-surface-container-high relative flex items-center justify-center">
                  <img src="/assets/huevo.png" alt={p.name} className="w-1/2 h-1/2 object-contain group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <span className={`absolute top-4 left-4 ${p.badgeCls} backdrop-blur text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full`}>{p.badge}</span>
                </div>
                <div className="px-2 pb-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-headline text-lg font-extrabold text-primary">{p.name}</h4>
                    <span className="font-headline font-bold text-secondary">{p.price}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <button className="w-full py-3 rounded-full border border-outline-variant/30 text-primary font-bold text-sm hover:bg-primary-fixed transition-colors">
                    {t.prod_add_cart}
                  </button>
                </div>
              </div>
            ))}

            <div className="group sm:col-span-2 bg-primary p-8 md:p-10 rounded-xl flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
              <div className="relative z-10 flex-1">
                <h3 className="font-headline text-2xl md:text-3xl font-extrabold text-primary-fixed mb-3">{t.prod_ws_h3}</h3>
                <p className="text-surface-container-low/80 mb-6">{t.prod_ws_p}</p>
                <ul className="space-y-2 mb-6 text-surface-bright text-sm">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-fixed-dim text-lg">verified</span>{t.prod_ws_li1}</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-fixed-dim text-lg">local_shipping</span>{t.prod_ws_li2}</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-fixed-dim text-lg">inventory</span>{t.prod_ws_li3}</li>
                </ul>
                <Link to="/distribuidores" className="yolk-gradient inline-block px-8 py-3 rounded-full text-on-primary-fixed font-bold text-sm">
                  {t.prod_ws_cta}
                </Link>
              </div>
              <div className="w-full md:w-64 h-48 md:h-56 relative bg-primary-container rounded-xl shadow-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-fixed text-8xl">inventory_2</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
