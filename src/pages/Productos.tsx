import { Link } from "react-router-dom";

type Product = {
  id: string;
  clasificacion: string;
  tipo: "Tradicional" | "Blanco";
  description: string;
  image: string;
  alt: string;
  badge: string;
  badgeStyle: "secondary" | "primary";
};

const EGG_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDD0_buhm0zE9QZoI0KD2M2aDtEvHuThGgw5XlBo_eiaYOCweZ8XvXbkWStp6h7ddZ4ZflJib_VLPyusLA2C0B_zvKcI4wQib7HMHgS6nZOX0AAERKYh5CvDaJAmG7NhIWd3f2wimQEcSeKqmh33XoHOM7itkhBNnXGZUpTI8Y6XpCcuHObF-jy8KDUIHo2ib3oAUpMmfh7db6kAGWed6RNcworO7rPEX4ZOMGFgqOfTDluj8btmJvKSV6haNCJYVIlNvyAIxAJSDI";

const products: Product[] = [
  {
    id: "b-tradicional",
    clasificacion: "Clasificación B",
    tipo: "Tradicional",
    description: "46.0 g – 49.9 g por unidad. Huevo pequeño, ideal para recetas ligeras, snacks y preparaciones donde el tamaño exacto no es crítico.",
    image: EGG_IMAGE,
    alt: "Huevo Clasificación B",
    badge: "Clase B",
    badgeStyle: "secondary",
  },
  {
    id: "a-tradicional",
    clasificacion: "Clasificación A",
    tipo: "Tradicional",
    description: "50.0 g – 53.9 g por unidad. Huevo estándar pequeño, de alta rotación. Equilibrio entre tamaño y precio para distribución y consumo cotidiano.",
    image: EGG_IMAGE,
    alt: "Huevo Clasificación A",
    badge: "Clase A",
    badgeStyle: "secondary",
  },
  {
    id: "aa-tradicional",
    clasificacion: "Clasificación AA",
    tipo: "Tradicional",
    description: "54.0 g – 59.9 g por unidad. El estándar más común para el consumo diario. Preferido por hogares, restaurantes y distribuidores por su tamaño y rendimiento.",
    image: EGG_IMAGE,
    alt: "Huevo Clasificación AA",
    badge: "Clase AA",
    badgeStyle: "secondary",
  },
  {
    id: "aaa-blanco",
    clasificacion: "Clasificación AAA",
    tipo: "Blanco",
    description: "60.0 g – 66.9 g por unidad. Huevo grande, excelente para repostería, desayunos abundantes y cocina profesional. Alta demanda en supermercados y exportación.",
    image: EGG_IMAGE,
    alt: "Huevo Clasificación AAA",
    badge: "Clase AAA",
    badgeStyle: "primary",
  },
  {
    id: "jumbo-tradicional",
    clasificacion: "Jumbo",
    tipo: "Tradicional",
    description: "67.0 g o más por unidad. Huevo premium de máximo rendimiento. La opción de mayor tamaño para gastronomía de alto nivel, repostería de precisión y clientes que exigen lo mejor.",
    image: EGG_IMAGE,
    alt: "Huevo Jumbo",
    badge: "Jumbo",
    badgeStyle: "primary",
  },
];

export default function Productos() {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pt-12 pb-20">
      {/* Page Header */}
      <section className="mb-12">
        <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-primary-fixed-dim"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Catálogo de Productos</span>
        </div>
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary tracking-tighter mb-3">
          Huevo Colombiano<br /><span className="text-secondary opacity-80">Todas las Categorías</span>
        </h1>
        <p className="text-on-surface-variant max-w-xl text-base md:text-lg">
          Clasificación B · A · AA · AAA · Jumbo. Tradicional o blanco. Precios según volumen y temporada — consúltenos.
        </p>
      </section>

      {/* Layout: Filter + Grid */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-surface-container-low rounded-xl p-6 lg:sticky lg:top-28">
            <h3 className="font-headline text-lg font-bold text-primary mb-6 tracking-tight">Filtrar</h3>
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">Tipo de Cliente</label>
                <div className="flex flex-col gap-2">
                  <button className="flex items-center justify-between px-4 py-3 rounded-full bg-secondary text-on-secondary font-semibold text-sm shadow-sm">
                    Todos
                    <span className="material-symbols-outlined text-base">check</span>
                  </button>
                  <button className="flex items-center justify-between px-4 py-3 rounded-full bg-surface-container-highest text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors">
                    Mayorista
                  </button>
                  <button className="flex items-center justify-between px-4 py-3 rounded-full bg-surface-container-highest text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors">
                    Detal
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">Clasificación</label>
                <div className="flex flex-wrap gap-2">
                  {["B", "A", "AA", "AAA", "Jumbo"].map((c) => (
                    <span key={c} className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full cursor-pointer hover:bg-primary-fixed/50 transition-colors">{c}</span>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">Tipo</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-primary-fixed text-on-primary-fixed text-xs font-bold rounded-full cursor-pointer">Tradicional</span>
                  <span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full cursor-pointer hover:bg-primary-fixed/50 transition-colors">Blanco</span>
                </div>
              </div>
            </div>
            <div className="mt-10 yolk-gradient rounded-xl p-5 relative overflow-hidden">
              <p className="text-on-primary-fixed font-bold text-sm relative z-10">¿Necesitas cotización para volumen mayor?</p>
              <Link to="/distribuidores" className="mt-3 inline-block bg-primary text-on-primary px-4 py-2 rounded-full text-xs font-bold relative z-10">Solicitar Cotización</Link>
              <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="group bg-surface-container-low rounded-xl p-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="aspect-[4/5] egg-shape overflow-hidden mb-5 bg-surface-container-high relative isolate">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={p.image}
                    alt={p.alt}
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
                <div className="px-2 pb-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-headline text-lg font-extrabold text-primary">{p.clasificacion}</h4>
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant">{p.tipo}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">{p.description}</p>
                  <Link
                    to="/distribuidores"
                    className="w-full py-3 rounded-full border border-outline-variant/30 text-primary font-bold text-sm hover:bg-primary-fixed transition-colors block text-center"
                  >
                    Consultar precio
                  </Link>
                </div>
              </div>
            ))}

            {/* Wholesale Banner */}
            <div className="group sm:col-span-2 bg-primary p-8 md:p-10 rounded-xl flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
              <div className="relative z-10 flex-1">
                <h3 className="font-headline text-2xl md:text-3xl font-extrabold text-primary-fixed mb-3">Venta al por Mayor</h3>
                <p className="text-surface-container-low/80 mb-6">Para supermercados, restaurantes, hoteles y distribuidores — en Colombia y el Caribe. Producto enzunchado y asegurado para exportación.</p>
                <ul className="space-y-2 mb-6 text-surface-bright text-sm">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-lg">inventory</span>
                    Granel · Patineta · Estibas palletizadas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-lg">public</span>
                    Supermercados · Restaurantes · Hoteles (Caribe)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-lg">storefront</span>
                    Marca propia (private label) disponible
                  </li>
                </ul>
                <Link to="/distribuidores" className="yolk-gradient inline-block px-8 py-3 rounded-full text-on-primary-fixed font-bold text-sm">
                  Solicitar Cotización
                </Link>
              </div>
              <div className="w-full md:w-64 h-48 md:h-56 relative">
                <img className="w-full h-full object-cover rounded-xl shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDvcQMiGT_MUjo82QLjoGwiQd7dWvJSYVNzIx_ZUHBV1uSKHWGvExs5FIQvHB6g0_GMapXrYig3d-pyrxQtbDmI1WXsuXDJ45xP_SFOM2TvpHvaEyBxK_1TocDy-_OiOKZ38WtG_3jK2wl5yI7iSd7fDDnTDRiF-q4OI_2nYpPYcr6Ocn0syB7d8eDvIj5vf1IrW_3ZjNrKYh9_f6V-4ZeI1v5WvcSf4m7Y6SAOfKcfrEuBK24PCqR6K2JN6A3LB1flASIeX4O2Vw" alt="Distribución mayorista de huevo" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
