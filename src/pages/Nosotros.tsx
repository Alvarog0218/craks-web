import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Nosotros() {
  const { t } = useTranslation();

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-16 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">{t.about_badge}</span>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary leading-tight tracking-tighter mb-6">
              {t.about_h1_1}<br /><span className="text-on-primary-container italic">{t.about_h1_2}</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">{t.about_hero_p}</p>
          </div>
          <div className="relative">
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-surface-container-high shadow-2xl md:rotate-2">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsNfHmjmVY_HG4g8VKMpJIQSWtSkmPHPCCCPbvJ8OGf3cYqC_SsgN9xlKVDyX_Cwy1ToEzT1lD5Mt7Te6a74xvihplVfjdZIIPoGH_RqRfcohuo8avweOL7JKomz6nWiIDnGwT9pTrwksdosQQiRw1fpk9E3jcq74wD5tFJ7A_v_VwgqTpJcExlw7JG3mBoe2JwGg5SIlstMiveO9RSM_Az7-UmphcUHUXrfDT8e0yvLbTMGl75lfN1OrpQIi7znGrpNo8gKZl44U" alt="Huevos orgánicos frescos en cesto rústico" loading="lazy" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 yolk-gradient rounded-full opacity-30 blur-3xl pointer-events-none"></div>
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

            {/* 1992 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-16">
                <h3 className="font-headline text-2xl font-bold text-primary mb-3">The Pasture Seed</h3>
                <p className="text-on-surface-variant">{t.about_1992_p}</p>
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 yolk-gradient rounded-full shadow-lg border-4 border-surface-container-low items-center justify-center font-bold text-on-primary-fixed text-xs">1992</div>
              <div className="md:pl-16">
                <div className="h-56 rounded-xl overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjCSsICqI9TFkeNPaCqkRiHtz7z3fzipx9BnZtRrLrhs1Zktgxxguqu00bOSlXkDjqXSctgTxhLFa4_xiguJUANSzUmCdpXoBUPeadum24VBp8mO1_JdACWA5_xRKbid-fRxNuS-uBiBr6cDH-LTQg_nh2By8mm3yFxtfjjOnRpfmIv1SEOiJqUu1Xql7ECKduYi_pbrrjNkk7zi25RJSLzSP65lrB8S-oDky-eyEbQWYAhbCGN2Ght5TPxeq6TtPw2PqEjol_yUY" alt="Granja campestre bajo atardecer pastel" loading="lazy" />
                </div>
              </div>
            </div>

            {/* 2010 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 md:pl-16">
                <h3 className="font-headline text-2xl font-bold text-primary mb-3">Precision Logistics</h3>
                <p className="text-on-surface-variant">{t.about_2010_p}</p>
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 yolk-gradient rounded-full shadow-lg border-4 border-surface-container-low items-center justify-center font-bold text-on-primary-fixed text-xs">2010</div>
              <div className="md:order-1 md:pr-16">
                <div className="h-56 rounded-xl overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAre5Qp6WNWOBkMbj2aIUJbiYBF9wvqrGj4Ik_rkdxyomB8o7HYGaTRW_pJc4OvCRsqWTqE-J-1VEqxwrToAb6U31A-UJ8-2w7Ke6-LQCVXAgRTrFvSrzYoHmx5UT0HihKSQ2fFxOG8Ct7u6O90sQDSDcJVkoOt4-4x4jdncyvipCLiiV5RitAxkYBFXIJh3NUvJwuyoGDobvh-G5kTt6IEt6uaO7IWB94OO62jYlukQRx5neoQ1Vw1Wq9JDJl0hW6f3FtHpexJNFU" alt="Almacén automatizado moderno" loading="lazy" />
                </div>
              </div>
            </div>

            {/* 2026 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-16">
                <h3 className="font-headline text-2xl font-bold text-primary mb-3">Global Distribution</h3>
                <p className="text-on-surface-variant">{t.about_2026_p}</p>
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 yolk-gradient rounded-full shadow-lg border-4 border-surface-container-low items-center justify-center font-bold text-on-primary-fixed text-xs">2026</div>
              <div className="md:pl-16">
                <div className="h-56 rounded-xl overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCocjZFjU_mitcy618AS6LIs5Q08thlYUheAHxcdopgrRzw1Eb--fxcj-QfGvn_K8g_reXLYMkSvICuS-JldekGojhLbK-TlpOHARFj1ERAMHW09oJf8UibCjmYCl2cjDEhthO27xSOmO4kG9RrHrxyc8CvM8z70VkAOQLW-sRfci8C75-KxIUZmTjecINXkzi5XgcwvxQ2IliXFjJpRDlvdWFRVYOosRD_uN0mMSCiJu60KefyK_0MRaLUM_aQrtVmEy_DOXeUkog" alt="Paisaje urbano moderno nocturno" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-primary tracking-tighter mb-16">The Curators of Freshness</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 yolk-gradient rounded-full flex items-center justify-center mb-6 shadow-xl">
                <span className="material-symbols-outlined text-on-primary-fixed text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              </div>
              <h4 className="font-headline text-xl font-bold text-primary mb-3">Radical Integrity</h4>
              <p className="text-on-surface-variant">{t.about_val1_p}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 yolk-gradient rounded-full flex items-center justify-center mb-6 shadow-xl">
                <span className="material-symbols-outlined text-on-primary-fixed text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
              </div>
              <h4 className="font-headline text-xl font-bold text-primary mb-3">Precision Chain</h4>
              <p className="text-on-surface-variant">{t.about_val2_p}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 yolk-gradient rounded-full flex items-center justify-center mb-6 shadow-xl">
                <span className="material-symbols-outlined text-on-primary-fixed text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
              </div>
              <h4 className="font-headline text-xl font-bold text-primary mb-3">Shared Prosperity</h4>
              <p className="text-on-surface-variant">{t.about_val3_p}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto bg-primary rounded-xl p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-primary-fixed mb-6">{t.about_cta_h2}</h2>
            <p className="text-primary-fixed/80 text-lg max-w-2xl mb-8">{t.about_cta_p}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/distribuidores" className="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all">{t.about_cta_btn1}</Link>
              <Link to="/distribuidores" className="border border-primary-fixed/30 text-primary-fixed px-8 py-3 rounded-full font-bold hover:bg-primary-fixed/10 transition-all">{t.about_cta_btn2}</Link>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-fixed/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </section>
    </main>
  );
}
