import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
      <h1 className="font-headline text-6xl font-extrabold text-primary mb-4">404</h1>
      <p className="text-on-surface-variant mb-8">Página no encontrada</p>
      <Link to="/" className="yolk-gradient text-on-primary-fixed px-8 py-3 rounded-full font-bold">
        Volver al inicio
      </Link>
    </section>
  );
}
