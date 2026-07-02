import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import SEO from "@/components/SEO";

const cargoPartners = [
  "TRICARGA",
  "CONALTRA",
  "Operadores logísticos de carga OPL",
  "Ceter",
  "Transportes terrestres de carga",
  "Cotrasur",
  "TLN SAS",
  "Copetran",
  "Logysteel",
  "Transportes el Laurel",
];

const poultryPartners = [
  "Incubadora Santander SA",
  "Petrocasinos SA",
  "Avicola Franaves SAS",
  "Ingamag SAS",
  "Agropecuaria La Tahona SAS",
  "Avicola San Nicolas Colombia SAS",
];

export default function Logistica() {
  const { t } = useTranslation();

  const services = [
    { icon: "local_shipping", title: t.trans_service1_h, body: t.trans_service1_p },
    { icon: "inventory_2", title: t.trans_service2_h, body: t.trans_service2_p },
    { icon: "agriculture", title: t.trans_service3_h, body: t.trans_service3_p },
  ];

  const process = [
    { icon: "assignment", title: t.trans_process1_h, body: t.trans_process1_p },
    { icon: "route", title: t.trans_process2_h, body: t.trans_process2_p },
    { icon: "fact_check", title: t.trans_process3_h, body: t.trans_process3_p },
  ];

  return (
    <main className="flex-1">
      <SEO title={t.seo_transport_title} description={t.seo_transport_desc} />

      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container mb-8">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>route</span>
            <span className="text-xs font-bold uppercase tracking-widest">{t.trans_badge}</span>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[1.05] mb-6">
            {t.trans_h1_1} <span className="text-secondary">{t.trans_h1_2}</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">{t.trans_hero_p}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contacto" className="yolk-gradient px-8 py-4 rounded-full font-headline font-black text-base text-on-primary-fixed shadow-xl shadow-primary-fixed/20 hover:-translate-y-0.5 transition-all active:scale-95">
              {t.trans_cta1}
            </Link>
            <a href="#convenios" className="px-8 py-4 rounded-full font-headline font-bold text-base border-2 border-outline-variant text-on-background hover:bg-surface-container-low transition-all">
              {t.trans_cta2}
            </a>
          </div>
        </div>

        <div className="relative bg-surface-container-low rounded-xl overflow-hidden p-3 shadow-2xl border border-outline-variant/10">
          <img alt={t.alt_transport_service_img} className="w-full aspect-[4/3] lg:aspect-square object-cover rounded-lg" src="/transporte.webp" loading="eager" />
          <div className="absolute left-6 right-6 bottom-6 bg-surface/95 backdrop-blur-md rounded-xl p-5 shadow-lg">
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">{t.trans_card_label}</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold">{t.trans_chip1}</span>
              <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold">{t.trans_chip2}</span>
              <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold">{t.trans_chip3}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-container-low">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((service) => (
              <div key={service.title} className="bg-surface rounded-xl p-8 border border-outline-variant/10 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>{service.icon}</span>
                <h2 className="font-headline text-2xl font-bold text-secondary mb-3">{service.title}</h2>
                <p className="text-on-surface-variant leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">{t.trans_scope_badge}</p>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight mb-6">{t.trans_scope_h2}</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">{t.trans_scope_p}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-surface-container-low rounded-xl p-5">
                <div className="text-3xl font-black text-secondary font-headline">10+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t.trans_stat1}</div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-5">
                <div className="text-3xl font-black text-secondary font-headline">6</div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t.trans_stat2}</div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-5">
                <div className="text-3xl font-black text-secondary font-headline">{t.trans_stat3_val}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t.trans_stat3}</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {process.map((item) => (
              <div key={item.title} className="flex gap-5 bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-fixed">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-secondary mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="convenios" className="py-20 bg-surface-container-low px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">{t.trans_partners_badge}</p>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{t.trans_partners_h2}</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">{t.trans_partners_p}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-surface rounded-xl p-8 border border-outline-variant/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>warehouse</span>
                <h3 className="font-headline text-2xl font-bold text-secondary">{t.trans_cargo_partners_h}</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {cargoPartners.map((partner) => (
                  <div key={partner} className="flex items-center gap-3 rounded-lg bg-surface-container-low px-4 py-3">
                    <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                    <span className="font-semibold text-sm text-on-surface">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface rounded-xl p-8 border border-outline-variant/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>agriculture</span>
                <h3 className="font-headline text-2xl font-bold text-secondary">{t.trans_poultry_partners_h}</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {poultryPartners.map((partner) => (
                  <div key={partner} className="flex items-center gap-3 rounded-lg bg-surface-container-low px-4 py-3">
                    <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                    <span className="font-semibold text-sm text-on-surface">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-surface">
        <div className="max-w-5xl mx-auto bg-secondary rounded-xl p-10 md:p-14 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-5">{t.trans_final_h2}</h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">{t.trans_final_p}</p>
          <a href="https://wa.me/573152225332?text=Hola%20Craks%2C%20quiero%20informacion%20sobre%20el%20servicio%20logistico%20y%20transporte%20de%20carga." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-black text-base hover:brightness-105 active:scale-95 transition-all">
            {t.trans_final_btn}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </main>
  );
}
