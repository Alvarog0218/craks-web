import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Index() {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center px-8 md:px-24 py-12 md:py-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary-fixed-dim"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">{t.hero_badge}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold font-headline leading-[1.1] tracking-tighter text-primary">
              {t.hero_h1_1} <br /><span className="text-secondary italic">{t.hero_h1_2}</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
              {t.hero_desc}
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/productos" className="yolk-gradient text-on-primary-fixed px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-primary-fixed/20 hover:brightness-105 active:scale-95 transition-all flex items-center gap-3 group">
                {t.hero_cta}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <span className="text-sm font-bold text-on-surface-variant">{t.hero_trust}</span>
            </div>
            {/* Stats */}
            <div className="pt-12 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-black text-primary font-headline tracking-tighter">20+</span>
                <span className="text-sm uppercase tracking-widest text-on-surface-variant font-label">{t.hero_stat1}</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-primary font-headline tracking-tighter">100%</span>
                <span className="text-sm uppercase tracking-widest text-on-surface-variant font-label">{t.hero_stat2}</span>
              </div>
            </div>
          </div>
          {/* Hero Visual */}
          <div className="relative p-4 md:p-8">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl -z-10"></div>
            <div className="relative w-full aspect-square md:aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-2xl transform lg:scale-105">
              <img className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcfiHuPSd8f2DdJeklYEMrhEbmOrkgr7P4jme7E897zNHTJkBEaOnwzlgPUltfYVAW5KBom3v-SYMrtNTchGMWnLa9exHcqKN3dmz4YZwcdor2N96aibtENnx5sOQD2fiTXHaAPA2EkL92sCXFKWCV7WVskV4udp5A6U4KC1-vHqJQiSffHVK1qRjT0_VU0bB2yLw5nra4kJ-tLqIH4mOf9oi7RQKjaNmMs-A-oKalbA3U2buFi0Lp-a_c0c3Mo8x4BG_PdtzGx8I" alt="Huevos orgánicos frescos" />
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

      {/* Services Section: Bento */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary mb-6 tracking-tight">{t.solutions_h2}</h2>
          <p className="text-on-surface-variant">{t.solutions_sub}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* For Consumers */}
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
            <div className="w-full md:w-1/2 aspect-square rounded-lg overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4lKw_FQGIF2WAdm3I7GGuk_mT6oOmS0YVtfmjCi_UAqcecSv8y6ykNSFre9wE_HvNvATHp7TlhZJzK60Jey9LSqYxHgoGzRVHxQnAh-EQut6VZTWaELORkOhueSYojqQQpn6sNOrjxKnTRFc4okNYeAtBE3gbuek7Vl0YHuDyNAVQJEAyR7t-6j4d7cMgFmpfaawl6LUNNlhESd9ph7U4IZUqiCUO_emwbDjE343p3YWNIGubrkjc-eaaFJBYm9hmy8VhYBmaiQo" alt="Desayuno estético" />
            </div>
          </div>
          {/* Logistics Card */}
          <div className="bg-secondary text-on-secondary rounded-xl p-10 flex flex-col justify-between group">
            <div className="space-y-6">
              <span className="material-symbols-outlined text-5xl opacity-50">local_shipping</span>
              <h3 className="text-3xl font-bold font-headline leading-tight">{t.solutions_log_h3}</h3>
              <p className="text-secondary-container/80">{t.solutions_log_p}</p>
            </div>
            <Link className="mt-8 flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors" to="/logistica">
              <span className="font-bold">{t.solutions_log_cta}</span>
              <span className="material-symbols-outlined">north_east</span>
            </Link>
          </div>
          {/* Organic Origin */}
          <div className="bg-surface-container-highest rounded-xl p-10 space-y-6 flex flex-col justify-center text-center">
            <div className="w-20 h-20 yolk-gradient rounded-full mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-fixed text-4xl">eco</span>
            </div>
            <h3 className="text-2xl font-bold font-headline text-primary">{t.solutions_org_h3}</h3>
            <p className="text-on-surface-variant text-sm px-4">{t.solutions_org_p}</p>
          </div>
          {/* Image Gallery Slot */}
          <div className="md:col-span-2 relative rounded-xl overflow-hidden h-64 md:h-auto">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHHc_Gt--kF8cVaPsc531kuPq1QR97xIUZFHmsEQxJuYCWfDupjLPOb8h2m1iBj8hJNQlLbfWtLXKjufWPB0NDrKReHUwJaCkcpDJDTqvaUhfRcfRE6exqv7SGPV5Y-zIpr4hSkWLROAu2vAz0sCW96U6WyCqc1p2QueZfm3-aZ-IkPk8RU04gJKnQxVM90PWS_-v7k63OhhP60TSD46SMa-6aQgWly9RGuEE3wEIsElJGApo0wHb91tOzGECwsO67W3xy8EPBTvQ" alt="Almacén de distribución" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-10">
              <div className="flex items-center gap-6">
                <span className="text-white font-headline font-bold text-3xl">Craks</span>
                <div className="h-10 w-px bg-white/30"></div>
                <p className="text-white font-headline font-bold text-xl">{t.solutions_tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origen 100% Orgánico */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden bg-surface-container-highest p-8 md:p-12">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black font-headline text-primary mb-6">{t.organic_h2}</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed max-w-lg">{t.organic_p}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                  <span className="text-sm font-bold">{t.organic_cert1}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-sm font-bold">{t.organic_cert2}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
                  <span className="text-sm font-bold">{t.organic_cert3}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                  <span className="text-sm font-bold">{t.organic_cert4}</span>
                </div>
              </div>
              <Link to="/nosotros" className="inline-flex items-center justify-center gap-3 bg-primary text-on-primary w-full sm:w-auto px-8 py-4 rounded-full font-bold">
                {t.organic_cta} <span className="material-symbols-outlined">menu_book</span>
              </Link>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-fixed-dim opacity-20 egg-shape-hero pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Desktop Quality Bento */}
      <section className="hidden md:block py-20 px-6 bg-surface-container-low">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-headline font-bold text-secondary uppercase tracking-[0.3em] text-sm">{t.quality_sub}</span>
            <h2 className="font-headline text-5xl font-extrabold text-primary mt-4">{t.quality_h2}</h2>
            <div className="w-24 h-1 bg-primary-fixed mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-7 bg-surface-container-lowest p-10 rounded-xl relative overflow-hidden group">
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
            <div className="col-span-5 bg-secondary text-on-secondary p-10 rounded-xl flex flex-col justify-center">
              <span className="material-symbols-outlined text-5xl mb-6">public</span>
              <h3 className="font-headline text-2xl font-bold mb-3">Proyección Internacional</h3>
              <p className="opacity-80">{t.quality_c2_p}</p>
            </div>
            <div className="col-span-4 bg-surface-container-highest p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">eco</span>
              <h4 className="font-headline text-lg font-bold mb-2">{t.quality_c3_h4}</h4>
              <p className="text-on-surface-variant text-sm">{t.quality_c3_p}</p>
            </div>
            <div className="col-span-4 bg-surface-container-highest p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">local_shipping</span>
              <h4 className="font-headline text-lg font-bold mb-2">Logística Nacional</h4>
              <p className="text-on-surface-variant text-sm">{t.organic_cert4}</p>
            </div>
            <div className="col-span-4 bg-surface-container-highest p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">health_and_safety</span>
              <h4 className="font-headline text-lg font-bold mb-2">Cumplimiento Empresarial</h4>
              <p className="text-on-surface-variant text-sm">{t.quality_c5_p}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-surface-container rounded-xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>
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

    </main>
  );
}
