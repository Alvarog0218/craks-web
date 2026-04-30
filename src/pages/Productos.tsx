import { Link } from "react-router-dom";

export default function Productos() {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pt-12 pb-20">
      {/* Page Header */}
      <section className="mb-12">
        <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-primary-fixed-dim"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Catálogo 2026</span>
        </div>
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary tracking-tighter mb-3">
          Organic Precision<br /><span className="text-secondary opacity-80">Catalog</span>
        </h1>
        <p className="text-on-surface-variant max-w-xl text-base md:text-lg">
          Desde nuestras granjas a tu red de distribución. Excelencia en cada cáscara.
        </p>
      </section>

      {/* Layout: Filter + Grid */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-surface-container-low rounded-xl p-6 lg:sticky lg:top-28">
            <h3 className="font-headline text-lg font-bold text-primary mb-6 tracking-tight">Curation</h3>
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">Categoría</label>
                <div className="flex flex-col gap-2">
                  <button className="flex items-center justify-between px-4 py-3 rounded-full bg-secondary text-on-secondary font-semibold text-sm shadow-sm">
                    Para el Hogar
                    <span className="material-symbols-outlined text-base">check</span>
                  </button>
                  <button className="flex items-center justify-between px-4 py-3 rounded-full bg-surface-container-highest text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors">
                    Venta al por Mayor
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">Tipo de Producto</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-primary-fixed text-on-primary-fixed text-xs font-bold rounded-full cursor-pointer">Orgánico</span>
                  <span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full cursor-pointer hover:bg-primary-fixed/50 transition-colors">Grande</span>
                  <span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full cursor-pointer hover:bg-primary-fixed/50 transition-colors">Jumbo</span>
                  <span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full cursor-pointer hover:bg-primary-fixed/50 transition-colors">Pasture Raised</span>
                </div>
              </div>
            </div>
            <div className="mt-10 yolk-gradient rounded-xl p-5 relative overflow-hidden">
              <p className="text-on-primary-fixed font-bold text-sm relative z-10">¿Necesitas una cotización logística personalizada?</p>
              <Link to="/distribuidores" className="mt-3 inline-block bg-primary text-on-primary px-4 py-2 rounded-full text-xs font-bold relative z-10">Contactar Supply Chain</Link>
              <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group bg-surface-container-low rounded-xl p-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-[4/5] egg-shape overflow-hidden mb-5 bg-surface-container-high relative isolate">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzCT0QhrH4DNNZUb9noTNaXWR-wB9GMMchgEHWvIUAJVZiVc2Gu8VnO__dTbQ-6hyuuLKSS406RTrzF3QqXMRxQZn2JztRy_Cm7SymFfspCLUcmVvffSXYtWpYvwrEchu2yCdUIePv-aHqjufOIkiSJXSo9NMBl4Fjv-Rcygy5kVqR2j3hHzBLSQMQ1jiWxfHnUrEbXgAPwG21nTgOIo3RASDPooDecjMgysMZUTRp1VaiEY9HmURYqrHVTB0GOrZwICnknHYije8" alt="Craks Reserve — huevos marrones orgánicos" loading="lazy" />
                <span className="absolute top-6 left-1/2 -translate-x-1/2 bg-secondary/90 text-on-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Orgánico</span>
              </div>
              <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-headline text-lg font-extrabold text-primary">Craks Reserve</h4>
                  <span className="font-headline font-bold text-secondary">$24.00</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">Huevos marrones de gallinas criadas en pastoreo. Certificados non-GMO y ricos en nutrientes.</p>
                <button className="w-full py-3 rounded-full border border-outline-variant/30 text-primary font-bold text-sm hover:bg-primary-fixed transition-colors">Añadir al carrito</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-surface-container-low rounded-xl p-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-[4/5] egg-shape overflow-hidden mb-5 bg-surface-container-high relative isolate">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr3skdAhyyGdwwST7rSw0wBhSQXBGo3s4IpQWBnmUQUVZuQ3tRBzSys6zmQT0FV7ORTrooTNYpH_qmrsBfaOnrOo55TPQgoAcxJXHF6E7-YNdDpxIm-5YFU14EuoHdiwiX6z9SaxsOVQemXhuPpvScJJ6k0qWkYvXnNVbx9zDwmmpqv1mBHAd3sGt32Po0FRRrwwGbX2iWK-Hp45iHKjRVs2w-cFD63FeWqRmXbVbx3QWXMI4uTqj7k-SDehazHopE3dPU0fz2dnU" alt="Standard Excellence — huevos blancos grandes" loading="lazy" />
                <span className="absolute top-6 left-1/2 -translate-x-1/2 bg-secondary/90 text-on-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Grande</span>
              </div>
              <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-headline text-lg font-extrabold text-primary">Standard Excellence</h4>
                  <span className="font-headline font-bold text-secondary">$18.50</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">La base de la cocina doméstica. Huevos Grade A con densidad de yema consistente.</p>
                <button className="w-full py-3 rounded-full border border-outline-variant/30 text-primary font-bold text-sm hover:bg-primary-fixed transition-colors">Añadir al carrito</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-surface-container-low rounded-xl p-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-[4/5] egg-shape overflow-hidden mb-5 bg-surface-container-high relative isolate">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD0_buhm0zE9QZoI0KD2M2aDtEvHuThGgw5XlBo_eiaYOCweZ8XvXbkWStp6h7ddZ4ZflJih_VLPyusLA2C0B_zvKcI4wQib7HMHgS6nZOX0AAERKYh5CvDaJAmG7NhIWd3f2wimQEcSeKqmh33XoHOM7itkhBNnXGZUpTI8Y6XpCcuHObF-jy8KDUIHo2ib3oAUpMmfh7db6kAGWed6RNcworO7rPEX4ZOMGFgqOfTDluj8btmJvKSV6haNCJYVIlNvyAIxAJSDI" alt="Jumbo Heritage — selección artesanal" loading="lazy" />
                <span className="absolute top-6 left-1/2 -translate-x-1/2 bg-secondary/90 text-on-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Jumbo</span>
              </div>
              <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-headline text-lg font-extrabold text-primary">Jumbo Heritage</h4>
                  <span className="font-headline font-bold text-secondary">$32.00</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">Tamaño extraordinario para precisión en repostería y excelencia culinaria. Grado profesional.</p>
                <button className="w-full py-3 rounded-full border border-outline-variant/30 text-primary font-bold text-sm hover:bg-primary-fixed transition-colors">Añadir al carrito</button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-surface-container-low rounded-xl p-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-[4/5] egg-shape overflow-hidden mb-5 bg-surface-container-high relative isolate">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLQE-0GqCPtSObHndEPfMZnQ4oHU9QW-gDplCpsSy3l26XWv5vMjB2rctSSBB4YG-7hDEw-EKYVdhmrvgnaDPAl8wgvVE-xSofbweFfIT3Nxc26sTZJXxFT22PLpdLTxuhVnXweCsS_Qs4fOOfM_W47jKEqV4fhfzhpzzW3mZ2Wcz05c8fqNmGe2zDKgQ3QVTHEVgzNjOg6JUtWGO5IFiJszJgo1jZ0IFsi9o3466pLdyoPU75J5zYnrRNJSNoCVXCRGXplazhBXI" alt="Heritage Variety — colección artesanal" loading="lazy" />
                <span className="absolute top-6 left-1/2 -translate-x-1/2 bg-primary-fixed text-on-primary-fixed text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Heirloom</span>
              </div>
              <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-headline text-lg font-extrabold text-primary">Heritage Variety</h4>
                  <span className="font-headline font-bold text-secondary">$38.00</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">Razas únicas de herencia para artes culinarias especializadas.</p>
                <button className="w-full py-3 rounded-full border border-outline-variant/30 text-primary font-bold text-sm hover:bg-primary-fixed transition-colors">Añadir al carrito</button>
              </div>
            </div>

            {/* Wholesale Banner */}
            <div className="group sm:col-span-2 bg-primary p-8 md:p-10 rounded-xl flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
              <div className="relative z-10 flex-1">
                <h3 className="font-headline text-2xl md:text-3xl font-extrabold text-primary-fixed mb-3">Venta al por Mayor</h3>
                <p className="text-surface-container-low/80 mb-6">Soluciones de distribución a granel para comercio internacional. Precisión paletizada, alcance global.</p>
                <ul className="space-y-2 mb-6 text-surface-bright text-sm">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-lg">verified</span>
                    Estándares de seguridad internacionales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-lg">local_shipping</span>
                    Red logística global
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-lg">inventory</span>
                    Cadenas de suministro automatizadas
                  </li>
                </ul>
                <Link to="/distribuidores" className="yolk-gradient inline-block px-8 py-3 rounded-full text-on-primary-fixed font-bold text-sm">
                  Solicitar Especificaciones
                </Link>
              </div>
              <div className="w-full md:w-64 h-48 md:h-56 relative">
                <img className="w-full h-full object-cover rounded-xl shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDvcQMiGT_MUjo82QLjoGwiQd7dWvJSYVNzIx_ZUHBV1uSKHWGvExs5FIQvHB6g0_GMapXrYig3d-pyrxQtbDmI1WXsuXDJ45xP_SFOM2TvpHvaEyBxK_1TocDy-_OiOKZ38WtG_3jK2wl5yI7iSd7fDDnTDRiF-q4OI_2nYpPYcr6Ocn0syB7d8eDvIj5vf1IrW_3ZjNrKYh9_f6V-4ZeI1v5WvcSf4m7Y6SAOfKcfrEuBK24PCqR6K2JN6A3LB1flASIeX4O2Vw" alt="Instalación de clasificación industrial" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
