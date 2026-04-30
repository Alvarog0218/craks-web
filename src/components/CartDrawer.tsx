import { useState } from "react";
import { z } from "zod";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

// TODO: Reemplazar con número real de WhatsApp del negocio (formato internacional sin "+")
const WHATSAPP_NUMBER = "528112345678";

const checkoutSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "El nombre es requerido" })
    .max(100, { message: "Máximo 100 caracteres" }),
  address: z
    .string()
    .trim()
    .nonempty({ message: "La dirección es requerida" })
    .max(300, { message: "Máximo 300 caracteres" }),
  phone: z
    .string()
    .trim()
    .nonempty({ message: "El teléfono es requerido" })
    .max(30, { message: "Máximo 30 caracteres" }),
  notes: z.string().trim().max(500, { message: "Máximo 500 caracteres" }).optional(),
});

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "USD" }).format(n);

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalPrice, clear } = useCart();
  const [form, setForm] = useState({ name: "", address: "", phone: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Tu carrito está vacío");
      return;
    }

    const result = checkoutSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((iss) => {
        if (iss.path[0]) fieldErrors[String(iss.path[0])] = iss.message;
      });
      setErrors(fieldErrors);
      toast.error("Revisa los datos del formulario");
      return;
    }
    setErrors({});

    const data = result.data;
    const lines: string[] = [];
    lines.push("*🥚 Nuevo Pedido — Craks*");
    lines.push("");
    lines.push("*Cliente:*");
    lines.push(`• Nombre: ${data.name}`);
    lines.push(`• Teléfono: ${data.phone}`);
    lines.push(`• Dirección: ${data.address}`);
    lines.push("");
    lines.push("*Productos:*");
    items.forEach((it) => {
      const subtotal = it.price * it.quantity;
      lines.push(`• ${it.name} × ${it.quantity} — ${formatCurrency(subtotal)}`);
    });
    lines.push("");
    lines.push(`*Total: ${formatCurrency(totalPrice)}*`);
    if (data.notes) {
      lines.push("");
      lines.push("*Notas:*");
      lines.push(data.notes);
    }

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Abriendo WhatsApp con tu pedido");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="px-6 pt-6 pb-4 border-b">
          <SheetTitle className="font-headline text-2xl text-primary flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Tu Carrito
          </SheetTitle>
          <SheetDescription>
            Finaliza tu pedido por WhatsApp
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12 text-on-surface-variant">
              <ShoppingBag className="h-12 w-12 mx-auto mb-3 opacity-30" />
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
                        className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary-fixed transition-colors"
                        aria-label="Disminuir cantidad"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary-fixed transition-colors"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto w-7 h-7 rounded-full text-on-surface-variant hover:text-destructive flex items-center justify-center transition-colors"
                        aria-label="Eliminar"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-headline font-bold text-secondary">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              ))}

              <Separator className="my-4" />

              <div className="space-y-3">
                <h3 className="font-headline font-bold text-primary">Datos de envío</h3>
                <div>
                  <Label htmlFor="cart-name">Nombre *</Label>
                  <Input
                    id="cart-name"
                    value={form.name}
                    maxLength={100}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="cart-phone">Teléfono *</Label>
                  <Input
                    id="cart-phone"
                    value={form.phone}
                    maxLength={30}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="cart-address">Dirección *</Label>
                  <Textarea
                    id="cart-address"
                    value={form.address}
                    maxLength={300}
                    rows={2}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                  />
                  {errors.address && (
                    <p className="text-xs text-destructive mt-1">{errors.address}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="cart-notes">Notas adicionales</Label>
                  <Textarea
                    id="cart-notes"
                    value={form.notes}
                    maxLength={500}
                    rows={2}
                    placeholder="Comentarios sobre tu pedido (opcional)"
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                  {errors.notes && (
                    <p className="text-xs text-destructive mt-1">{errors.notes}</p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t px-6 py-4 space-y-3 bg-surface-container-low">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-on-surface-variant">Total</span>
              <span className="font-headline text-2xl font-extrabold text-secondary">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold rounded-full py-6"
            >
              Finalizar por WhatsApp
            </Button>
            <button
              onClick={clear}
              className="w-full text-xs text-on-surface-variant hover:text-destructive transition-colors"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
