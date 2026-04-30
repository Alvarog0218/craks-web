import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function CartFab() {
  const { totalItems, setIsOpen } = useCart();

  return (
    <button
      onClick={() => setIsOpen(true)}
      aria-label={`Abrir carrito (${totalItems} artículos)`}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary text-on-secondary shadow-lg hover:scale-105 active:scale-95 transition-transform flex items-center justify-center"
    >
      <ShoppingBag className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1.5 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center border-2 border-background">
          {totalItems}
        </span>
      )}
    </button>
  );
}
