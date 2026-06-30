import { type FormEvent, useState } from "react";
import { useTranslation } from "@/i18n/LanguageContext";
import SEO from "@/components/SEO";

export default function Contacto() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("distribucion");
  const WHATSAPP_NUMBER = "573152225332";

  const handleWhatsAppSubmit = (
    event: FormEvent<HTMLFormElement>,
    formTitle: string,
    fields: { name: string; label: string }[],
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const details = fields.map(({ name, label }) => {
      const value = formData.get(name)?.toString().trim() || "No indicado";
      return `${label}: ${value}`;
    });

    const message = [
      `Hola Craks, quiero enviar una solicitud de ${formTitle}.`,
      "",
      ...details,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pt-16 pb-20">
      <SEO title={t.seo_contact_title} description={t.seo_contact_desc} />
      <div className="mb-12">
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-secondary tracking-tight mb-6 leading-tight">
          {t.nav_contact}
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          {t.dist_form_p}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-12">
        <button 
          onClick={() => setActiveTab("distribucion")}
          className={`px-8 py-4 rounded-full font-bold transition-all ${activeTab === "distribucion" ? "yolk-gradient text-on-primary-fixed shadow-lg" : "bg-surface-container-low text-on-surface-variant"}`}
        >
          {t.contact_tab_dist}
        </button>
        <button 
          onClick={() => setActiveTab("asociacion")}
          className={`px-8 py-4 rounded-full font-bold transition-all ${activeTab === "asociacion" ? "yolk-gradient text-on-primary-fixed shadow-lg" : "bg-surface-container-low text-on-surface-variant"}`}
        >
          {t.contact_tab_log}
        </button>
        <button 
          onClick={() => setActiveTab("empleo")}
          className={`px-8 py-4 rounded-full font-bold transition-all ${activeTab === "empleo" ? "yolk-gradient text-on-primary-fixed shadow-lg" : "bg-surface-container-low text-on-surface-variant"}`}
        >
          {t.contact_tab_jobs}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <span className="material-symbols-outlined text-secondary">location_on</span>
              <div>
                <h3 className="font-bold text-secondary text-lg mb-1">{t.contact_info_location}</h3>
                <p className="text-on-surface-variant font-medium">Carrera 10 No 15A - 07</p>
                <p className="text-on-surface-variant text-sm">{t.contact_info_neighborhood}</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="material-symbols-outlined text-secondary">call</span>
              <div>
                <h3 className="font-bold text-secondary text-lg mb-1">{t.contact_info_phone}</h3>
                <a href="https://wa.me/573152225332" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary transition-colors block">
                  +57 315 2225332
                </a>
              </div>
            </div>
          </div>

          <div className="p-7 bg-surface-container-low rounded-xl border border-outline-variant/10">
             <h4 className="font-bold text-secondary mb-3">{t.contact_info_hours}</h4>
             <p className="text-sm text-on-surface-variant">{t.contact_info_schedule}</p>
          </div>
        </div>

        <div className="lg:col-span-3">
          {activeTab === "distribucion" && (
            <div className="bg-surface-container-low p-8 rounded-xl shadow-xl border border-outline-variant/10">
              <h2 className="text-2xl font-bold text-secondary mb-6">{t.dist_form_h2}</h2>
              <form
                className="space-y-6"
                onSubmit={(e) =>
                  handleWhatsAppSubmit(e, t.contact_tab_dist, [
                    { name: "company", label: t.dist_form_company },
                    { name: "email", label: t.dist_form_email },
                    { name: "message", label: t.dist_form_message },
                  ])
                }
              >
                <input name="company" type="text" placeholder={t.dist_form_company_ph} className="w-full bg-surface-container-high rounded-full px-6 py-4 outline-none" />
                <input name="email" type="email" placeholder={t.email_placeholder} className="w-full bg-surface-container-high rounded-full px-6 py-4 outline-none" />
                <textarea name="message" rows={4} placeholder={t.dist_form_message_ph} className="w-full bg-surface-container-high rounded-xl px-6 py-4 outline-none resize-none"></textarea>
                <button type="submit" className="w-full yolk-gradient text-on-primary-fixed py-5 rounded-full font-bold text-lg">
                  {t.dist_form_btn}
                </button>
              </form>
            </div>
          )}

          {activeTab === "asociacion" && (
            <div className="bg-surface-container-low p-8 rounded-xl shadow-xl border border-outline-variant/10">
              <h2 className="text-2xl font-bold text-secondary mb-6">{t.log_form_h2}</h2>
              <form
                className="space-y-6"
                onSubmit={(e) =>
                  handleWhatsAppSubmit(e, t.contact_tab_log, [
                    { name: "company", label: t.log_form_company },
                    { name: "email", label: t.log_form_email },
                    { name: "message", label: t.log_form_message },
                  ])
                }
              >
                <input name="company" type="text" placeholder={t.log_form_company_ph} className="w-full bg-surface-container-high rounded-full px-6 py-4 outline-none" />
                <input name="email" type="email" placeholder={t.email_placeholder} className="w-full bg-surface-container-high rounded-full px-6 py-4 outline-none" />
                <textarea name="message" rows={4} placeholder={t.log_form_message_ph} className="w-full bg-surface-container-high rounded-xl px-6 py-4 outline-none resize-none"></textarea>
                <button type="submit" className="w-full yolk-gradient text-on-primary-fixed py-5 rounded-full font-bold text-lg">
                  {t.log_form_btn}
                </button>
              </form>
            </div>
          )}

          {activeTab === "empleo" && (
            <div className="bg-primary p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-fixed/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="mb-10">
                  <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-primary-fixed mb-4 leading-tight">{t.about_cta_h2}</h2>
                  <p className="text-primary-fixed/80 text-lg max-w-xl">{t.about_cta_p}</p>
                </div>
                
                <form
                  className="space-y-5 bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10"
                  onSubmit={(e) =>
                    handleWhatsAppSubmit(e, t.contact_tab_jobs, [
                      { name: "name", label: t.jobs_form_name },
                      { name: "area", label: t.jobs_form_area },
                      { name: "email", label: t.jobs_form_email },
                      { name: "message", label: t.jobs_form_message },
                    ])
                  }
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase text-primary-fixed/60 tracking-widest ml-4">{t.jobs_form_name}</label>
                      <input name="name" type="text" placeholder={t.jobs_form_name_ph} className="w-full bg-white/10 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder:text-white/30 focus:bg-white/20 outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase text-primary-fixed/60 tracking-widest ml-4">{t.jobs_form_area}</label>
                      <select name="area" className="w-full bg-white/10 border border-white/10 rounded-full px-6 py-3.5 text-white focus:bg-white/20 outline-none transition-all appearance-none">
                        <option className="text-primary">{t.jobs_form_area_sales}</option>
                        <option className="text-primary">{t.jobs_form_area_logistics}</option>
                        <option className="text-primary">{t.jobs_form_area_admin}</option>
                        <option className="text-primary">{t.jobs_form_area_prod}</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase text-primary-fixed/60 tracking-widest ml-4">{t.jobs_form_email}</label>
                    <input name="email" type="email" placeholder="email@example.com" className="w-full bg-white/10 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder:text-white/30 focus:bg-white/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase text-primary-fixed/60 tracking-widest ml-4">{t.jobs_form_message}</label>
                    <textarea name="message" rows={3} placeholder={t.jobs_form_message_ph} className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:bg-white/20 outline-none transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary-fixed text-on-primary-fixed py-4 rounded-full font-bold text-lg shadow-xl hover:opacity-90 active:scale-[0.98] transition-all">
                    {t.jobs_form_btn}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
