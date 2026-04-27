import { Link } from "react-router-dom";
import { useI18n } from "../contexts/I18nContext";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-surface-container-low rounded-t-xl mt-auto w-full">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src="/assets/logo_azul.png" alt="Craks" className="h-7 w-auto" />
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">{t.footer_tagline}</p>
          <div className="flex gap-3 mt-2">
            {["public", "mail", "share"].map((i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-petrol transition-colors">
                <span className="material-symbols-outlined text-lg">{i}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="font-headline font-bold text-petrol text-xs uppercase tracking-widest mb-6">{t.footer_resources}</h5>
          <ul className="space-y-3">
            <li><Link to="/distribuidores" className="text-on-surface-variant text-sm hover:text-petrol transition-colors">{t.footer_supply}</Link></li>
            <li><Link to="/logistica" className="text-on-surface-variant text-sm hover:text-petrol transition-colors">{t.footer_global}</Link></li>
            <li><Link to="/nosotros" className="text-on-surface-variant text-sm hover:text-petrol transition-colors">{t.footer_sustain}</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline font-bold text-petrol text-xs uppercase tracking-widest mb-6">{t.footer_company}</h5>
          <ul className="space-y-3">
            <li><Link to="/nosotros" className="text-on-surface-variant text-sm hover:text-petrol transition-colors">{t.footer_about}</Link></li>
            <li><a href="#" className="text-on-surface-variant text-sm hover:text-petrol transition-colors">{t.footer_press}</a></li>
            <li><a href="#" className="text-on-surface-variant text-sm hover:text-petrol transition-colors">{t.footer_privacy}</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline font-bold text-petrol text-xs uppercase tracking-widest mb-6">{t.footer_cert}</h5>
          <div className="bg-surface-container-highest p-5 rounded-xl">
            <p className="text-xs text-on-surface-variant leading-relaxed italic">"{t.footer_cert_quote}"</p>
          </div>
          <div className="flex gap-2 mt-4">
            <div className="w-9 h-9 bg-surface-container-highest rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-petrol text-sm">verified</span>
            </div>
            <div className="w-9 h-9 bg-surface-container-highest rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-petrol text-sm">workspace_premium</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-outline-variant/20 max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-on-surface-variant">© 2026 Craks Egg Distribution Ltd. International Standards Certified.</p>
        <div className="flex gap-6 text-xs font-bold uppercase text-on-surface-variant">
          <a href="#" className="hover:text-petrol transition-colors">Instagram</a>
          <a href="#" className="hover:text-petrol transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-petrol transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
