import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import SEO from "@/components/SEO";

export default function Index() {
  const { t } = useTranslation();

  return (
    <main>
      <SEO title={t.seo_home_title} description={t.seo_home_desc} />
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-88px)] flex items-center px-8 md:px-24 py-6 md:py-10 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary-fixed-dim"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">{t.hero_badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-headline leading-[1.1] tracking-tighter text-primary">
              {t.hero_h1_1} <br /><span className="text-[#428488] italic">{t.hero_h1_2}</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
              {t.hero_desc}
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/productos" className="w-full sm:w-auto justify-center yolk-gradient text-on-primary-fixed px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg shadow-xl shadow-primary-fixed/20 hover:brightness-105 active:scale-95 transition-all flex items-center gap-3 group">
                {t.hero_cta}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            {/* Stats */}
            <div className="pt-8 md:pt-12 grid grid-cols-2 gap-4 md:gap-8">
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
      <section className="py-20 md:py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold font-headline text-primary mb-4 md:mb-6 tracking-tight">{t.solutions_h2}</h2>
          <p className="text-on-surface-variant">{t.solutions_sub}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: For Consumers */}
          <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center group transition-all hover:bg-surface-container shadow-sm border border-outline-variant/10">
            <div className="flex-1 space-y-6">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-2xl text-primary">local_mall</span>
              </div>
              <h3 className="text-2xl font-bold font-headline text-primary">{t.solutions_cons_h3}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">{t.solutions_cons_p}</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-bold text-on-surface">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> {t.solutions_check1}
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-on-surface">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> {t.solutions_check2}
                </li>
              </ul>
            </div>
            <div className="w-full md:w-5/12 aspect-[4/3] md:aspect-square rounded-lg overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4lKw_FQGIF2WAdm3I7GGuk_mT6oOmS0YVtfmjCi_UAqcecSv8y6ykNSFre9wE_HvNvATHp7TlhZJzK60Jey9LSqYxHgoGzRVHxQnAh-EQut6VZTWaELORkOhueSYojqQQpn6sNOrjxKnTRFc4okNYeAtBE3gbuek7Vl0YHuDyNAVQJEAyR7t-6j4d7cMgFmpfaawl6LUNNlhESd9ph7U4IZUqiCUO_emwbDjE343p3YWNIGubrkjc-eaaFJBYm9hmy8VhYBmaiQo" alt="Desayuno estético" />
            </div>
          </div>
          {/* Card 2: Logistics Card (Now Yellow) */}
          <div className="bg-secondary rounded-xl p-8 flex flex-col justify-between group shadow-lg shadow-secondary/20">
            <div className="space-y-6">
              <span className="material-symbols-outlined text-4xl opacity-80 text-white">local_shipping</span>
              <h3 className="text-2xl font-bold font-headline text-white leading-tight">{t.solutions_log_h3}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{t.solutions_log_p}</p>
            </div>
            <Link className="mt-8 flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors" to="/operaciones">
              <span className="font-bold text-sm text-white">{t.solutions_log_cta}</span>
              <span className="material-symbols-outlined text-xl text-white">north_east</span>
            </Link>
          </div>
          {/* Card 3: Organic Origin (Shorter) */}
          <div className="bg-surface-container-highest rounded-xl p-6 h-56 flex flex-col justify-center text-center shadow-sm border border-outline-variant/10">
            <div className="w-14 h-14 yolk-gradient rounded-full mx-auto flex items-center justify-center mb-4 shadow-sm">
              <span className="material-symbols-outlined text-on-primary-fixed text-2xl">eco</span>
            </div>
            <h3 className="text-xl font-bold font-headline text-primary mb-2">{t.solutions_org_h3}</h3>
            <p className="text-on-surface-variant text-sm px-2 line-clamp-3">{t.solutions_org_p}</p>
          </div>
          {/* Card 4: Product Quality (Now Yellow, matching Card 2) */}
          <div className="bg-secondary rounded-xl p-6 h-56 flex flex-col justify-center text-center shadow-lg shadow-secondary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>
            <h3 className="text-xl font-bold font-headline text-white mb-3">{t.organic_h2}</h3>
            <div className="flex flex-col gap-2 text-white/90 text-xs font-bold items-start w-max mx-auto">
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-white text-base">eco</span> {t.organic_cert1}</div>
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-white text-base">verified</span> {t.organic_cert2}</div>
            </div>
            <Link to="/nosotros" className="mt-4 text-xs font-bold text-white hover:underline inline-flex items-center justify-center gap-1">
              {t.organic_cta} <span className="material-symbols-outlined text-sm text-white">arrow_forward</span>
            </Link>
          </div>
          {/* Card 5: Image Gallery Slot (Shorter) */}
          <div className="relative rounded-xl overflow-hidden h-56 shadow-md border border-outline-variant/10">
            <img className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHHc_Gt--kF8cVaPsc531kuPq1QR97xIUZFHmsEQxJuYCWfDupjLPOb8h2m1iBj8hJNQlLbfWtLXKjufWPB0NDrKReHUwJaCkcpDJDTqvaUhfRcfRE6exqv7SGPV5Y-zIpr4hSkWLROAu2vAz0sCW96U6WyCqc1p2QueZfm3-aZ-IkPk8RU04gJKnQxVM90PWS_-v7k63OhhP60TSD46SMa-6aQgWly9RGuEE3wEIsElJGApo0wHb91tOzGECwsO67W3xy8EPBTvQ" alt="Almacén de distribución" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-surface-container rounded-xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black font-headline text-[#428488] tracking-tighter mb-4">{t.cta_h2}</h2>
            <p className="text-[#428488] mb-8 max-w-md mx-auto">{t.cta_p}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/573152225332" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center yolk-gradient text-[#428488] px-8 py-4 md:px-10 rounded-full font-bold text-lg transition-all active:scale-95">{t.cta_btn1}</a>
              <Link to="/operaciones" className="w-full sm:w-auto text-center bg-[#428488] text-white px-8 py-4 md:px-10 rounded-full font-bold text-lg hover:bg-[#428488]/90 transition-all">{t.cta_btn2}</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
