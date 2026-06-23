import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import SEO from "@/components/SEO";

const EGG_IMAGE = "/assets/huevo.png/huevo.webp?v=3";
const WHITE_EGG_IMAGE = "/assets/huevo.png/huevo-blanco.webp?v=3";
const CLASIFICACIONES = ["B", "A", "AA", "AAA", "Jumbo"];



export default function Productos() {
  const { t, formatPrice } = useTranslation();
  const { items, addItem, updateQuantity } = useCart();
  const [selectedClasificaciones, setSelectedClasificaciones] = useState<string[]>([]);
  const [selectedTipo, setSelectedTipo] = useState<string | null>(null);

  type Product = {
    id: string;
    clasificacion: string;
    tipo: string;
    description: string;
    badge: string;
    badgeStyle: "secondary" | "primary";
    price: number;
    image: string;
  };

  const products: Product[] = [
    { id: "b-tradicional",  clasificacion: t.prod_clase_b,    tipo: t.prod_tipo_trad,   description: t.prod_desc_b,    badge: "Clase B",   badgeStyle: "secondary", price: 12500, image: EGG_IMAGE },
    { id: "b-blanco",       clasificacion: t.prod_clase_b,    tipo: t.prod_tipo_blanco, description: t.prod_desc_b,    badge: "Clase B",   badgeStyle: "secondary", price: 12800, image: WHITE_EGG_IMAGE },
    
    { id: "a-tradicional",  clasificacion: t.prod_clase_a,    tipo: t.prod_tipo_trad,   description: t.prod_desc_a,    badge: "Clase A",   badgeStyle: "secondary", price: 13800, image: EGG_IMAGE },
    { id: "a-blanco",       clasificacion: t.prod_clase_a,    tipo: t.prod_tipo_blanco, description: t.prod_desc_a,    badge: "Clase A",   badgeStyle: "secondary", price: 14100, image: WHITE_EGG_IMAGE },
    
    { id: "aa-tradicional", clasificacion: t.prod_clase_aa,   tipo: t.prod_tipo_trad,   description: t.prod_desc_aa,   badge: "Clase AA",  badgeStyle: "secondary", price: 15200, image: EGG_IMAGE },
    { id: "aa-blanco",      clasificacion: t.prod_clase_aa,   tipo: t.prod_tipo_blanco, description: t.prod_desc_aa,   badge: "Clase AA",  badgeStyle: "secondary", price: 15500, image: WHITE_EGG_IMAGE },
    
    { id: "aaa-tradicional",clasificacion: t.prod_clase_aaa,  tipo: t.prod_tipo_trad,   description: t.prod_desc_aaa,  badge: "Clase AAA", badgeStyle: "primary",   price: 16500, image: EGG_IMAGE },
    { id: "aaa-blanco",     clasificacion: t.prod_clase_aaa,  tipo: t.prod_tipo_blanco, description: t.prod_desc_aaa,  badge: "Clase AAA", badgeStyle: "primary",   price: 16800, image: WHITE_EGG_IMAGE },
    
    { id: "jumbo-tradicional", clasificacion: t.prod_clase_jumbo,tipo: t.prod_tipo_trad,   description: t.prod_desc_jumbo,badge: "Jumbo",      badgeStyle: "primary",   price: 18500, image: EGG_IMAGE },
    { id: "jumbo-blanco",      clasificacion: t.prod_clase_jumbo,tipo: t.prod_tipo_blanco, description: t.prod_desc_jumbo,badge: "Jumbo",      badgeStyle: "primary",   price: 18800, image: WHITE_EGG_IMAGE },
  ];

  const toggleClasificacion = (c: string) =>
    setSelectedClasificaciones((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );

  const resetFilters = () => {
    setSelectedClasificaciones([]);
    setSelectedTipo(null);
  };

  const filtered = products.filter((p) => {
    const matchesClasificacion =
      selectedClasificaciones.length === 0 ||
      selectedClasificaciones.some((c) => p.clasificacion.includes(c));
    const matchesTipo = !selectedTipo || p.tipo === selectedTipo;
    return matchesClasificacion && matchesTipo;
  });

  const hasFilters = selectedClasificaciones.length > 0 || selectedTipo !== null;

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pt-12 pb-20">
      <SEO title={t.seo_prod_title} description={t.seo_prod_desc} />
      {/* Page Header */}
      <section className="mb-12">
        <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-primary-fixed-dim"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t.prod_badge}</span>
        </div>
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary tracking-tighter mb-3">
          {t.prod_h1_1}<br /><span className="text-secondary opacity-80">{t.prod_h1_2}</span>
        </h1>
        <h2 className="text-on-surface-variant max-w-xl text-base md:text-lg">{t.prod_subtitle}</h2>
      </section>

      {/* Tipo Selector Menu */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center p-2 bg-surface-container-low rounded-2xl md:rounded-full border border-outline-variant/30 max-w-2xl mx-auto shadow-sm">
          <button
            onClick={() => setSelectedTipo(null)}
            className={`w-full md:w-1/3 py-4 px-6 rounded-xl md:rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
              selectedTipo === null
                ? "bg-primary text-on-primary shadow-lg shadow-primary/20 scale-105"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined text-lg">apps</span>
            {t.nav_home === "Inicio" ? "Todos" : "All"}
          </button>
          <button
            onClick={() => setSelectedTipo(t.prod_tipo_trad)}
            className={`w-full md:w-1/3 py-4 px-6 rounded-xl md:rounded-full font-bold transition-all flex items-center justify-center gap-3 ${
              selectedTipo === t.prod_tipo_trad
                ? "bg-primary text-on-primary shadow-lg shadow-primary/20 scale-105"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-[#f5cd62] border-2 border-white/20 shadow-inner"></div>
            {t.prod_tipo_trad}
          </button>
          <button
            onClick={() => setSelectedTipo(t.prod_tipo_blanco)}
            className={`w-full md:w-1/3 py-4 px-6 rounded-xl md:rounded-full font-bold transition-all flex items-center justify-center gap-3 ${
              selectedTipo === t.prod_tipo_blanco
                ? "bg-primary text-on-primary shadow-lg shadow-primary/20 scale-105"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-[#f8f9fa] border-2 border-primary/10 shadow-inner"></div>
            {t.prod_tipo_blanco}
          </button>
        </div>
      </section>

      {/* Layout: Filter + Grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-56 flex-shrink-0">
          <div className="bg-surface-container-low rounded-xl p-6 lg:sticky lg:top-28">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline text-lg font-bold text-primary tracking-tight">{t.prod_filter_title}</h3>
              {hasFilters && (
                <button onClick={resetFilters} className="text-xs font-bold text-secondary hover:underline">
                  {t.prod_filter_clear}
                </button>
              )}
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">{t.prod_filter_clasificacion}</label>
                <div className="flex flex-wrap gap-2">
                  {CLASIFICACIONES.map((c) => {
                    const active = selectedClasificaciones.includes(c);
                    return (
                      <button
                        key={c}
                        onClick={() => toggleClasificacion(c)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
                          active
                            ? "bg-secondary text-on-secondary"
                            : "bg-surface-container-highest text-on-surface-variant hover:bg-primary-fixed/50"
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-10 yolk-gradient rounded-xl p-5 relative overflow-hidden">
              <p className="text-on-primary-fixed font-bold text-sm relative z-10">{t.prod_cta_question}</p>
              <Link to="/contacto" className="mt-3 inline-block bg-primary text-on-primary px-4 py-2 rounded-full text-xs font-bold relative z-10">{t.prod_cta_btn}</Link>
              <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-grow">
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4">search_off</span>
              <p className="font-bold text-on-surface-variant">{t.prod_no_results}</p>
              <button onClick={resetFilters} className="mt-4 text-sm font-bold text-secondary hover:underline">{t.prod_clear_filters}</button>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((p) => {
              const cartItem = items.find((it) => it.id === p.id);
              const quantity = cartItem?.quantity || 0;

              return (
                <div
                  key={p.id}
                  className="group bg-surface-container-low rounded-2xl p-2 hover:-translate-y-1 transition-transform duration-300 flex flex-col relative overflow-hidden isolate shadow-xl"
                >
                  <div className="aspect-[4/5] egg-shape overflow-hidden mb-2 bg-white/30 relative isolate border border-white/20 shadow-inner">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={p.image}
                      alt={`Panal de 30 huevos colombianos ${p.clasificacion} ${p.tipo}`}
                      loading="lazy"
                    />
                    <span
                      className={`absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary text-on-primary shadow-lg shadow-primary/20`}
                    >
                      {p.badge}
                    </span>
                  </div>

                  {/* Content Box (Cream background with Blue text/buttons) */}
                  <div className="bg-surface-container rounded-xl p-5 flex-grow flex flex-col relative overflow-hidden shadow-inner border border-white/60">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-headline text-lg font-extrabold text-primary">{p.clasificacion}</h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary text-on-primary">{p.tipo}</span>
                      </div>
                      <p className="text-primary/80 text-sm mb-4 leading-relaxed flex-grow font-bold">{p.description}</p>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-black text-primary">{formatPrice(p.price)}</span>
                        <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Panal x 30</span>
                      </div>
                      
                      <div className="space-y-3 mt-auto">
                        {quantity === 0 ? (
                          <button
                            onClick={() => addItem({
                              id: p.id,
                              name: `${p.clasificacion} ${p.tipo}`,
                              price: p.price,
                              image: p.image
                            })}
                            className="w-full py-3.5 rounded-full bg-primary text-on-primary font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                          >
                            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                            {t.cart_add}
                          </button>
                        ) : (
                          <div className="flex items-center justify-between w-full p-1 rounded-full border border-primary/20 bg-primary/5">
                            <button
                              onClick={() => updateQuantity(p.id, quantity - 1)}
                              className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:brightness-110 transition-all shadow-md"
                              aria-label="Quitar uno"
                            >
                              <span className="material-symbols-outlined">remove</span>
                            </button>
                            <div className="flex flex-col items-center">
                              <span className="text-[10px] font-bold uppercase tracking-tighter text-primary/60 leading-none">Cant.</span>
                              <span className="font-headline font-black text-primary text-lg leading-none">{quantity}</span>
                            </div>
                            <button
                              onClick={() => updateQuantity(p.id, quantity + 1)}
                              className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:brightness-110 transition-all shadow-md"
                              aria-label="Agregar uno"
                            >
                              <span className="material-symbols-outlined">add</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Background decorative element */}
                    <div className="absolute -right-3 -bottom-3 w-20 h-20 bg-white/30 rounded-full blur-xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Wholesale Section */}
      <section className="mt-14">
        <div className="bg-primary p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-center gap-8 overflow-hidden relative shadow-2xl">
          <div className="relative z-10 flex-1">
            <h3 className="font-headline text-2xl md:text-3xl font-extrabold text-white mb-3">{t.prod_wholesale_h3}</h3>
            <p className="text-white/80 mb-6">{t.prod_wholesale_p}</p>
            <ul className="space-y-2 mb-6 text-white text-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">inventory</span>
                {t.prod_wholesale_item1}
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">public</span>
                {t.prod_wholesale_item2}
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">storefront</span>
                {t.prod_wholesale_item3}
              </li>
            </ul>
            <Link to="/contacto" className="inline-block px-8 py-3 rounded-full bg-secondary text-primary font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-secondary/20">
              {t.prod_wholesale_btn}
            </Link>
          </div>
          <div className="w-full md:w-64 h-48 md:h-56 relative group">
            <img className="w-full h-full object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500" src="/al%20por%20mayor.jpg" alt="Distribución mayorista de huevo" loading="lazy" />
            <div className="absolute inset-0 rounded-xl bg-primary/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>
    </main>
  );
}
