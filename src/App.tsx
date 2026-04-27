import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Nosotros from "./pages/Nosotros";
import Distribuidores from "./pages/Distribuidores";
import Logistica from "./pages/Logistica";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/distribuidores" element={<Distribuidores />} />
        <Route path="/logistica" element={<Logistica />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
