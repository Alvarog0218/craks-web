import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

import { useTranslation } from "@/i18n/LanguageContext";

// TODO: Reemplazar con número real de WhatsApp del negocio (formato internacional sin "+")
const WHATSAPP_NUMBER = "573152225332";

type FormState = { name: string; phone: string; address: string; notes: string };

function validate(form: FormState, t: any): Record<string, string> {
  const errors: Record<string, string> = {};
  const name = form.name.trim();
  const phone = form.phone.trim();
  const address = form.address.trim();
  const notes = form.notes.trim();

  if (!name) errors.name = t.cart_val_name_req;
  else if (name.length > 100) errors.name = t.cart_val_name_max;

  if (!phone) errors.phone = t.cart_val_phone_req;
  else if (phone.length > 30) errors.phone = t.cart_val_phone_max;
  else if (!/^[\d\s+()-]+$/.test(phone)) errors.phone = t.cart_val_phone_inv;

  if (!address) errors.address = t.cart_val_addr_req;
  else if (address.length > 300) errors.address = t.cart_val_addr_max;

  if (notes.length > 500) errors.notes = t.cart_val_notes_max;

  return errors;
}

export default function CartDrawer() {
  const { t, formatPrice, currency } = useTranslation();
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalPrice, clear } = useCart();
  const [form, setForm] = useState<FormState>({ name: "", phone: "", address: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCheckout = () => {
    if (items.length === 0) return;

    const fieldErrors = validate(form, t);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const lines: string[] = [];
    lines.push(t.cart_msg_new);
    lines.push("");
    lines.push(t.cart_msg_client);
    lines.push(`${t.cart_msg_name} ${form.name.trim()}`);
    lines.push(`${t.cart_msg_phone} ${form.phone.trim()}`);
    lines.push(`${t.cart_msg_address} ${form.address.trim()}`);
    lines.push("");
    lines.push(t.cart_msg_products);
    items.forEach((it) => {
      const subtotal = it.price * it.quantity;
      lines.push(`• ${it.name} × ${it.quantity} — ${formatPrice(subtotal)}`);
    });
    lines.push("");
    lines.push(`${t.cart_msg_total} ${formatPrice(totalPrice)} ${currency}*`);
    if (form.notes.trim()) {
      lines.push("");
      lines.push(t.cart_msg_notes);
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
              {t.cart_title}
            </h2>
            <p className="text-sm text-on-surface-variant mt-1">
              {t.cart_subtitle}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label={t.cart_close}
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
              <p>{t.cart_empty}</p>
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
                      {formatPrice(item.price)} {t.cart_each}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center hover:bg-primary-fixed transition-colors"
                        aria-label={t.cart_decrease}
                      >
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center hover:bg-primary-fixed transition-colors"
                        aria-label={t.cart_increase}
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto w-7 h-7 rounded-full text-on-surface-variant hover:text-error flex items-center justify-center transition-colors"
                        aria-label={t.cart_remove}
                      >
                        <span className="material-symbols-outlined text-base">delete</span>
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-headline font-bold text-secondary text-sm">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-outline-variant/30 space-y-3">
                <h3 className="font-headline font-bold text-primary">{t.cart_shipping}</h3>

                <div>
                  <label htmlFor="cart-name" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">
                    {t.cart_form_name}
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
                    {t.cart_form_phone}
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
                    {t.cart_form_address}
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
                    {t.cart_form_notes}
                  </label>
                  <textarea
                    id="cart-notes"
                    value={form.notes}
                    maxLength={500}
                    rows={2}
                    placeholder={t.cart_form_notes_ph}
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
                {t.cart_total_label}
              </span>
              <span className="font-headline text-2xl font-extrabold text-secondary">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">send</span>
              {t.cart_checkout}
            </button>
            <button
              onClick={clear}
              className="w-full text-xs text-on-surface-variant hover:text-error transition-colors"
            >
              {t.cart_clear}
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
