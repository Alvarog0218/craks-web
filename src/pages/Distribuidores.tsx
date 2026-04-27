export default function Distribuidores() {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pt-16 pb-20">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-secondary tracking-tight mb-6 leading-[1.1]">
            Logística de <span className="text-on-primary-container">Precisión</span><br />para su Negocio
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
            Suministramos a las principales cadenas de supermercados y socios logísticos globales con estándares de frescura inigualables y trazabilidad total desde la granja hasta el anaquel.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 bg-surface-container-high px-5 py-3 rounded-full">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
              <span className="font-bold text-secondary text-sm">Alcance Global</span>
            </div>
            <div className="flex items-center gap-3 bg-surface-container-high px-5 py-3 rounded-full">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
              <span className="font-bold text-secondary text-sm">Flota Propia</span>
            </div>
            <div className="flex items-center gap-3 bg-surface-container-high px-5 py-3 rounded-full">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-bold text-secondary text-sm">ISO 22000</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-56 h-56 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="egg-curve overflow-hidden bg-surface-container-highest shadow-2xl">
            <img alt="Centro de distribución logística moderno" className="w-full h-80 md:h-[32rem] object-cover mix-blend-multiply opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2DutYF5WM2crGKigTN1gE6GtVTJc8nYxlpK9-KlNownfqa6XgdUzodRUElv5PARzrluotCI61YfoQh_SufKEJLJfnzJVdREv_9VzkhbKsq5D3Q6JxA6-SIokkeJd9wzK6p0faIyGygJKRy267E5QUrgBGlVYukHNdX6R1MQMfbooKRpaatvsweS0MAOKXZl4oqaQhTXjzZsVSJ7yHK_TvCrr3_zGdjq7AfJzxMQ7Hujux0x8sIxFn7K2LLkuh42NP_TWCL2GdHbQ" loading="lazy" />
          </div>
        </div>
      </section>

      {/* International Reach */}
      <section className="mb-20">
        <div className="bg-surface-container-low rounded-xl p-8 md:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-headline text-3xl font-bold text-secondary mb-5">Nuestra Huella Internacional</h2>
              <p className="text-on-surface-variant mb-8">Conectamos granjas sostenibles con centros urbanos de alto consumo, garantizando la cadena de frío en cada kilómetro.</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-surface rounded-xl">
                  <span className="font-semibold text-secondary">Latinoamérica</span>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">12 Países</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-surface rounded-xl">
                  <span className="font-semibold text-secondary">Europa Central</span>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">Activo</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-surface rounded-xl">
                  <span className="font-semibold text-secondary">Norteamérica</span>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">Expansión</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 min-h-64 md:min-h-80 bg-surface-container-high rounded-xl relative overflow-hidden group">
              <img alt="Mapa de distribución mundial" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2yaQwrexvshfh9lmPO1d2WTVxCH8KdJXl4OZKwnkIA7gDYOr6dcRbFcYGEE2F9Y2mjxNud2UIzkFJwl4wi_JrdBA8BxYVll75BffxP61U7W_fA35xvEIxejvghJ2rv97HzMfEtbuwhwZPtNEw359hx-pio20nJ2s78guD4orLNyPcBGdo3dxvlq_9fiIA7ktWGen2IQG8hB-ToATDn79kNZDE7Tru3p-VD23Qu0Z1bkZmrsIAb6nEc8gIYzalTXWNx0D95DglUAo" loading="lazy" />
              <div className="absolute bottom-5 left-5 bg-surface/90 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">Real-time Logistics Map</p>
                <p className="text-[10px] text-on-surface-variant">Data location: Global Hubs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Benefits */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-20">
        <div className="md:col-span-2 bg-secondary text-on-secondary p-10 rounded-xl flex flex-col justify-between min-h-56">
          <span className="material-symbols-outlined text-5xl mb-8 opacity-80">inventory_2</span>
          <div>
            <h3 className="text-2xl font-bold mb-3">Stock Garantizado</h3>
            <p className="opacity-80 text-sm leading-relaxed">Nuestra red de granjas modulares asegura el suministro incluso en temporadas de alta demanda global.</p>
          </div>
        </div>
        <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">verified</span>
          <div>
            <h3 className="text-lg font-bold text-secondary mb-2">Calidad Certificada</h3>
            <p className="text-sm text-on-surface-variant">Cumplimos con ISO 22000 y certificaciones de bienestar animal internacionales.</p>
          </div>
        </div>
        <div className="bg-primary-fixed p-8 rounded-xl flex flex-col justify-between">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">support_agent</span>
          <div>
            <h3 className="text-lg font-bold text-on-primary-fixed mb-2">Soporte 24/7</h3>
            <p className="text-sm text-on-primary-fixed-variant">Equipo dedicado para la gestión de pedidos y resolución de incidencias en ruta.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-secondary mb-6 leading-tight">Únete a nuestra red de distribución</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">Buscamos socios estratégicos que valoren la calidad, la sostenibilidad y la transparencia. Complete el formulario y nuestro equipo corporativo se pondrá en contacto en menos de 24 horas.</p>
            <div className="flex items-center gap-5 p-5 ghost-border rounded-xl">
              <div className="w-14 h-14 yolk-gradient rounded-full flex items-center justify-center text-on-primary-fixed flex-shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
              </div>
              <div>
                <p className="text-xs uppercase font-black text-on-surface-variant tracking-widest">Socio Premium</p>
                <p className="font-bold text-secondary">Acceso a precios de volumen</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-surface-container-low p-8 md:p-10 rounded-xl shadow-xl shadow-on-surface/5">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">Empresa</label>
                    <input type="text" placeholder="Nombre legal de la compañía" className="w-full bg-surface-container-high rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">Tipo de Negocio</label>
                    <select className="w-full bg-surface-container-high rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 outline-none transition-all appearance-none">
                      <option>Supermercado / Retail</option>
                      <option>Operador Logístico</option>
                      <option>Distribuidor Regional</option>
                      <option>Horeca</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">Correo Corporativo</label>
                  <input type="email" placeholder="email@empresa.com" className="w-full bg-surface-container-high rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest ml-4">Mensaje / Requerimiento</label>
                  <textarea rows={4} placeholder="Cuéntenos sobre su volumen mensual estimado..." className="w-full bg-surface-container-high rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright outline-none transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full yolk-gradient text-on-primary-fixed py-5 rounded-full font-bold text-lg shadow-xl shadow-primary-fixed/20 hover:brightness-105 active:scale-[0.99] transition-all">
                  Enviar Propuesta de Asociación
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
