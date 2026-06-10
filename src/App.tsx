import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartFab from "@/components/CartFab";
import CartDrawer from "@/components/CartDrawer";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "@/pages/Index";
import Productos from "@/pages/Productos";
import Nosotros from "@/pages/Nosotros";
import Contacto from "@/pages/Contacto";
import Logistica from "@/pages/Logistica";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
      <CartFab />
      <CartDrawer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/logistica" element={<Logistica />} />
            </Routes>
          </Layout>
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
