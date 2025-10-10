import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-200 mt-12">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Columna 1 - Logo y nombre */}
        <div>
          <h2 className="text-xl font-bold">IASD Las Condes</h2>
          <p className="text-sm mt-2 text-gray-400">
            Iglesia Adventista del Séptimo Día en Las Condes, Chile.
          </p>
        </div>

        {/* Columna 2 - Enlaces rápidos */}
        <div>
          <h3 className="font-semibold mb-3">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/en-vivo" className="hover:text-white transition">
                En vivo
              </Link>
            </li>
            <li>
              <Link
                to="/diezmos-y-ofrendas"
                className="hover:text-white transition"
              >
                Diezmos y ofrendas
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-white transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 - Contacto */}
        <div>
          <h3 className="font-semibold mb-3">Contáctanos</h3>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2">
            <i className="fa-solid fa-location-dot text-blue-400"></i>
            Monroe #6500, Las Condes, Santiago, Chile
          </p>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2 mt-2">
            <i className="fa-solid fa-envelope text-blue-400"></i>
            contacto@iasdlascondes.cl
          </p>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="bg-blue-950 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Iglesia Adventista del Séptimo Día – Las
        Condes. Todos los derechos reservados.
      </div>
    </footer>
  );
}
