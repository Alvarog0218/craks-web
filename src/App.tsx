import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Suspense, lazy } from "react";
import Index from "@/pages/Index";

const Productos = lazy(() => import("@/pages/Productos"));
const Nosotros = lazy(() => import("@/pages/Nosotros"));
const Contacto = lazy(() => import("@/pages/Contacto"));
const Operaciones = lazy(() => import("@/pages/Operaciones"));

function Loader() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
          <Layout>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/operaciones" element={<Operaciones />} />
              </Routes>
            </Suspense>
          </Layout>
      </LanguageProvider>
    </BrowserRouter>
  );
}
