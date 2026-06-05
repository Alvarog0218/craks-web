import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import { useCart } from "@/contexts/CartContext";

const EGG_IMAGE = "/assets/huevo.png/huevo.png?v=3";
const WHITE_EGG_IMAGE = "/assets/huevo.png/huevo-blanco.png?v=3";
const CLASIFICACIONES = ["B", "A", "AA", "AAA", "Jumbo"];

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(n);

export default function Productos() {
  const { t } = useTranslation();
  const { items, addItem, updateQuantity } = useCart();
  const [selectedClasificaciones, setSelectedClasificaciones] = useState<string[]>([]);
  const [selectedTipo, setSelectedTipo] = useState<string | null>(null);

  const TIPOS = [t.prod_tipo_trad, t.prod_tipo_blanco];

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

  const toggleTipo = (tp: string) =>
    setSelectedTipo((prev) => (prev === tp ? null : tp));

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

      {/* Layout: Filter + Grid */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-64 flex-shrink-0">
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
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">{t.prod_filter_tipo}</label>
                <div className="flex flex-wrap gap-2">
                  {TIPOS.map((tp) => {
                    const active = selectedTipo === tp;
                    return (
                      <button
                        key={tp}
                        onClick={() => toggleTipo(tp)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
                          active
                            ? "bg-secondary text-on-secondary"
                            : "bg-surface-container-highest text-on-surface-variant hover:bg-primary-fixed/50"
                        }`}
                      >
                        {tp}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-10 yolk-gradient rounded-xl p-5 relative overflow-hidden">
              <p className="text-on-primary-fixed font-bold text-sm relative z-10">{t.prod_cta_question}</p>
              <Link to="/distribuidores" className="mt-3 inline-block bg-primary text-on-primary px-4 py-2 rounded-full text-xs font-bold relative z-10">{t.prod_cta_btn}</Link>
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
                  className="group bg-surface-container-low rounded-xl p-4 hover:-translate-y-1 transition-transform duration-300 flex flex-col"
                >
                  <div className="aspect-[4/5] egg-shape overflow-hidden mb-5 bg-surface-container-high relative isolate">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={p.image}
                      alt={p.clasificacion}
                      loading="lazy"
                    />
                    <span
                      className={`absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                        p.badgeStyle === "primary"
                          ? "bg-primary-fixed text-on-primary-fixed"
                          : "bg-secondary/90 text-on-secondary"
                      }`}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <div className="px-2 pb-2 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-headline text-lg font-extrabold text-primary">{p.clasificacion}</h4>
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant">{p.tipo}</span>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-4 leading-relaxed flex-grow">{p.description}</p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-black text-secondary">{formatCurrency(p.price)}</span>
                      <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Panal x 30</span>
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
                          className="w-full py-3 rounded-full bg-primary text-on-primary font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm"
                        >
                          <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                          {t.cart_add}
                        </button>
                      ) : (
                        <div className="flex items-center justify-between w-full p-1 rounded-full border border-primary/20 bg-surface-container-high">
                          <button
                            onClick={() => updateQuantity(p.id, quantity - 1)}
                            className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                            aria-label="Quitar uno"
                          >
                            <span className="material-symbols-outlined">remove</span>
                          </button>
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant/60 leading-none">Cant.</span>
                            <span className="font-headline font-black text-primary text-lg leading-none">{quantity}</span>
                          </div>
                          <button
                            onClick={() => updateQuantity(p.id, quantity + 1)}
                            className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                            aria-label="Agregar uno"
                          >
                            <span className="material-symbols-outlined">add</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Wholesale Section */}
      <section className="mt-14">
        <div className="bg-secondary p-8 md:p-10 rounded-xl flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
          <div className="relative z-10 flex-1">
            <h3 className="font-headline text-2xl md:text-3xl font-extrabold text-secondary-fixed mb-3">{t.prod_wholesale_h3}</h3>
            <p className="text-secondary-container/85 mb-6">{t.prod_wholesale_p}</p>
            <ul className="space-y-2 mb-6 text-on-secondary text-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-lg">inventory</span>
                {t.prod_wholesale_item1}
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-lg">public</span>
                {t.prod_wholesale_item2}
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-lg">storefront</span>
                {t.prod_wholesale_item3}
              </li>
            </ul>
            <Link to="/distribuidores" className="inline-block px-8 py-3 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold text-sm hover:bg-secondary-fixed-dim transition-colors">
              {t.prod_wholesale_btn}
            </Link>
          </div>
          <div className="w-full md:w-64 h-48 md:h-56 relative">
            <img className="w-full h-full object-cover rounded-xl shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDvcQMiGT_MUjo82QLjoGwiQd7dWvJSYVNzIx_ZUHBV1uSKHWGvExs5FIQvHB6g0_GMapXrYig3d-pyrxQtbDmI1WXsuXDJ45xP_SFOM2TvpHvaEyBxK_1TocDy-_OiOKZ38WtG_3jK2wl5yI7iSd7fDDnTDRiF-q4OI_2nYpPYcr6Ocn0syB7d8eDvIj5vf1IrW_3ZjNrKYh9_f6V-4ZeI1v5WvcSf4m7Y6SAOfKcfrEuBK24PCqR6K2JN6A3LB1flASIeX4O2Vw" alt="Distribución mayorista de huevo" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
