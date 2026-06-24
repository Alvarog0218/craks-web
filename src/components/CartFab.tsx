import { useCart } from "@/contexts/CartContext";
import { useTranslation } from "@/i18n/LanguageContext";

export default function CartFab() {
  const { totalItems, setIsOpen, isOpen } = useCart();
  const { t } = useTranslation();

  if (isOpen) return null;

  return (
    <button
      onClick={() => setIsOpen(true)}
      aria-label={`${t.cart_fab_label} (${totalItems})`}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-secondary text-on-secondary shadow-lg hover:scale-105 active:scale-95 transition-transform flex items-center justify-center"
    >
      <span className="material-symbols-outlined">shopping_bag</span>
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1.5 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center border-2 border-background">
          {totalItems}
        </span>
      )}
    </button>
  );
}
