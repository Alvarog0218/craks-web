import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

// TODO: Reemplazar con número real de WhatsApp del negocio (formato internacional sin "+")
const WHATSAPP_NUMBER = "573152225332";

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "USD" }).format(n);

type FormState = { name: string; phone: string; address: string; notes: string };

function validate(form: FormState): Record<string, string> {
  const errors: Record<string, string> = {};
  const name = form.name.trim();
  const phone = form.phone.trim();
  const address = form.address.trim();
  const notes = form.notes.trim();

  if (!name) errors.name = "El nombre es requerido";
  else if (name.length > 100) errors.name = "Máximo 100 caracteres";

  if (!phone) errors.phone = "El teléfono es requerido";
  else if (phone.length > 30) errors.phone = "Máximo 30 caracteres";
  else if (!/^[\d\s+()-]+$/.test(phone)) errors.phone = "Formato inválido";

  if (!address) errors.address = "La dirección es requerida";
  else if (address.length > 300) errors.address = "Máximo 300 caracteres";

  if (notes.length > 500) errors.notes = "Máximo 500 caracteres";

  return errors;
}

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalPrice, clear } = useCart();
  const [form, setForm] = useState<FormState>({ name: "", phone: "", address: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCheckout = () => {
    if (items.length === 0) return;

    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const lines: string[] = [];
    lines.push("*🥚 Nuevo Pedido — Craks*");
    lines.push("");
    lines.push("*Cliente:*");
    lines.push(`• Nombre: ${form.name.trim()}`);
    lines.push(`• Teléfono: ${form.phone.trim()}`);
    lines.push(`• Dirección: ${form.address.trim()}`);
    lines.push("");
    lines.push("*Productos:*");
    items.forEach((it) => {
      const subtotal = it.price * it.quantity;
      lines.push(`• ${it.name} × ${it.quantity} — ${formatCurrency(subtotal)}`);
    });
    lines.push("");
    lines.push(`*Total: ${formatCurrency(totalPrice)}*`);
    if (form.notes.trim()) {
      lines.push("");
      lines.push("*Notas:*");
      lines.push(form.notes.trim());
    }

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compra"
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-background shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="px-6 pt-6 pb-4 border-b border-outline-variant/30 flex items-start justify-between">
          <div>
            <h2 className="font-headline text-2xl font-extrabold text-primary tracking-tight flex items-center gap-2">
              <span className="material-symbols-outlined">shopping_bag</span>
              Tu Carrito
            </h2>
            <p className="text-sm text-on-surface-variant mt-1">
              Finaliza tu pedido por WhatsApp
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar carrito"
            className="w-8 h-8 rounded-full hover:bg-surface-container-high flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant">close</span>
          </button>
        </header>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 text-on-surface-variant">
              <span className="material-symbols-outlined text-5xl opacity-30 mb-3 block">
                shopping_bag
              </span>
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 rounded-xl bg-surface-container-low"
                >
                  <div className="w-16 h-16 egg-shape overflow-hidden bg-surface-container-high flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-primary truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-on-surface-variant">
                      {formatCurrency(item.price)} c/u
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center hover:bg-primary-fixed transition-colors"
                        aria-label="Disminuir cantidad"
                      >
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center hover:bg-primary-fixed transition-colors"
                        aria-label="Aumentar cantidad"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto w-7 h-7 rounded-full text-on-surface-variant hover:text-error flex items-center justify-center transition-colors"
                        aria-label="Eliminar"
                      >
                        <span className="material-symbols-outlined text-base">delete</span>
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-headline font-bold text-secondary text-sm">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-outline-variant/30 space-y-3">
                <h3 className="font-headline font-bold text-primary">Datos de envío</h3>

                <div>
                  <label htmlFor="cart-name" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">
                    Nombre *
                  </label>
                  <input
                    id="cart-name"
                    type="text"
                    value={form.name}
                    maxLength={100}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-full bg-surface-container-low border border-outline-variant/30 text-sm focus:outline-none focus:border-primary"
                  />
                  {errors.name && <p className="text-xs text-error mt-1 px-3">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="cart-phone" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">
                    Teléfono *
                  </label>
                  <input
                    id="cart-phone"
                    type="tel"
                    value={form.phone}
                    maxLength={30}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-full bg-surface-container-low border border-outline-variant/30 text-sm focus:outline-none focus:border-primary"
                  />
                  {errors.phone && <p className="text-xs text-error mt-1 px-3">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="cart-address" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">
                    Dirección *
                  </label>
                  <textarea
                    id="cart-address"
                    value={form.address}
                    maxLength={300}
                    rows={2}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-sm focus:outline-none focus:border-primary resize-none"
                  />
                  {errors.address && <p className="text-xs text-error mt-1 px-3">{errors.address}</p>}
                </div>

                <div>
                  <label htmlFor="cart-notes" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">
                    Notas adicionales
                  </label>
                  <textarea
                    id="cart-notes"
                    value={form.notes}
                    maxLength={500}
                    rows={2}
                    placeholder="Comentarios sobre tu pedido (opcional)"
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-sm focus:outline-none focus:border-primary resize-none"
                  />
                  {errors.notes && <p className="text-xs text-error mt-1 px-3">{errors.notes}</p>}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <footer className="border-t border-outline-variant/30 px-6 py-4 space-y-3 bg-surface-container-low">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-on-surface-variant text-sm uppercase tracking-widest">
                Total
              </span>
              <span className="font-headline text-2xl font-extrabold text-secondary">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">send</span>
              Finalizar por WhatsApp
            </button>
            <button
              onClick={clear}
              className="w-full text-xs text-on-surface-variant hover:text-error transition-colors"
            >
              Vaciar carrito
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
