import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface-container-low rounded-t-xl mt-auto w-full">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src="/assets/logo_azul.png" alt="Craks" className="h-7 w-auto" />
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            {t.footer_tagline}
          </p>
          <div className="flex gap-3 mt-2">
            <Link to="/" className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-petrol transition-colors" aria-label="Inicio">
              <span className="material-symbols-outlined text-lg">public</span>
            </Link>
            <Link to="/contacto" className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-petrol transition-colors" aria-label="Contacto">
              <span className="material-symbols-outlined text-lg">mail</span>
            </Link>
            <button 
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(window.location.href)
                  .then(() => alert("¡Enlace de la página copiado al portapapeles!"))
                  .catch((err) => console.error("Error al copiar: ", err));
              }}
              className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-petrol transition-colors"
              aria-label="Compartir"
            >
              <span className="material-symbols-outlined text-lg">share</span>
            </button>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h5 className="font-headline font-bold text-petrol text-xs uppercase tracking-widest mb-6">{t.footer_resources}</h5>
          <ul className="space-y-3">
            <li><Link to="/nosotros#calidad" className="text-on-surface-variant text-sm hover:text-petrol transition-colors">{t.footer_supply}</Link></li>
            <li><Link to="/logistica" className="text-on-surface-variant text-sm hover:text-petrol transition-colors">{t.footer_global}</Link></li>
            <li><Link to="/nosotros#calidad" className="text-on-surface-variant text-sm hover:text-petrol transition-colors">{t.footer_sustain}</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="font-headline font-bold text-petrol text-xs uppercase tracking-widest mb-6">{t.footer_company}</h5>
          <ul className="space-y-3">
            <li><Link to="/nosotros" className="text-on-surface-variant text-sm hover:text-petrol transition-colors">{t.footer_about}</Link></li>
            <li><a href="#" className="text-on-surface-variant text-sm hover:text-petrol transition-colors">{t.footer_press}</a></li>
            <li><a href="#" className="text-on-surface-variant text-sm hover:text-petrol transition-colors">{t.footer_privacy}</a></li>
          </ul>
        </div>

        {/* Certification */}
        <div>
          <h5 className="font-headline font-bold text-petrol text-xs uppercase tracking-widest mb-6">{t.footer_cert}</h5>
          <div className="bg-surface-container-highest p-5 rounded-xl">
            <p className="text-xs text-on-surface-variant leading-relaxed italic">
              "{t.footer_cert_quote}"
            </p>
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

      {/* Bottom bar */}
      <div className="border-t border-outline-variant/20 max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-on-surface-variant">{t.footer_copyright}</p>
        <div className="flex gap-6 text-on-surface-variant items-center">
          <a href="https://www.instagram.com/inversioneselmonacosas/" target="_blank" rel="noopener noreferrer" className="hover:text-petrol transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://wa.me/573152225332" target="_blank" rel="noopener noreferrer" className="hover:text-petrol transition-colors" aria-label="WhatsApp">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.733-1.455L0 24zm6.59-4.846c1.785 1.059 3.549 1.611 5.371 1.612 5.53 0 10.03-4.499 10.035-10.028.002-2.68-1.038-5.197-2.932-7.092-1.893-1.893-4.411-2.934-7.093-2.934-5.524 0-10.02 4.499-10.025 10.027-.002 1.942.508 3.84 1.48 5.514L1.44 20.312l4.896-1.282c-.085-.145-.119-.219-.689-1.176zm11.393-7.653c-.313-.156-1.854-.915-2.133-1.016-.278-.102-.482-.152-.684.152-.202.304-.785 1.016-.962 1.219-.177.203-.355.228-.668.072-1.31-.655-2.28-1.155-3.184-2.709-.236-.406-.35-.742-.075-1.016.277-.276.313-.365.418-.482.104-.117.152-.203.228-.355.076-.152.038-.285-.019-.393-.057-.108-.482-1.166-.66-1.597-.173-.418-.347-.362-.482-.362-.124-.003-.267-.003-.411-.003-.144 0-.379.054-.577.27-.198.215-.756.739-.756 1.802 0 1.062.773 2.087.88 2.235.108.147 1.52 2.322 3.682 3.256.514.223.916.356 1.229.455.518.165.989.141 1.361.085.414-.062 1.854-.758 2.115-1.453.261-.695.261-1.291.183-1.417-.078-.127-.279-.203-.592-.359z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/p/Inversiones-el-Monaco-SAS-100068268249345/" target="_blank" rel="noopener noreferrer" className="hover:text-petrol transition-colors" aria-label="Facebook">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
