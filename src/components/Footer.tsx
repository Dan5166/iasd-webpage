import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-200 mt-12">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Columna 1 - Enlaces rápidos */}
        <div>
          <div>
            <h3 className="font-semibold mb-3">Sitio</h3>
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
          <div className="mt-12">
            <h3 className="font-semibold mb-3">Enlaces de Interés</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.adventistas.org/pt/"
                  className="hover:text-white transition"
                  target="_blank"
                >
                  Adventistas.org
                </a>
              </li>
              <li>
                <a
                  href="https://www.escuelasabatica.cl/"
                  className="hover:text-white transition"
                  target="_blank"
                >
                  Escuela Sabática
                </a>
              </li>
              <li>
                <a
                  href="https://institucional.adventistas.org/es/s"
                  className="hover:text-white transition"
                  target="_blank"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="https://www.adven7.org/libros/"
                  className="hover:text-white transition"
                  target="_blank"
                >
                  Biblioteca Adven7
                </a>
              </li>
              <li>
                <a
                  href="https://feliz7play.com/es"
                  className="hover:text-white transition"
                  target="_blank"
                >
                  Feliz 7 Play
                </a>
              </li>
              <li>
                <a
                  href="http://www.nuevotiempo.org/chile/"
                  className="hover:text-white transition"
                  target="_blank"
                >
                  Nuevo Tiempo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Columna 2 - Logo y nombre */}
        <div>
          <h2 className="text-xl font-bold">Horarios</h2>
          <div className="mt-4 text-sm">
            <div className="mb-6">
              <strong>Sabados:</strong>
              <p className="mt-2">10:00 hrs - Escuela Sabática</p>
              <p className="mt-2">11:00 hrs - Culto</p>
              <p className="mt-2">18:30 hrs - Culto Joven</p>
            </div>
            <p className="mb-6">
              <strong>Miércoles:</strong>
              <p className="mt-2">19:30 hrs - Culto de Oración</p>
            </p>
          </div>
        </div>

        {/* Columna 3 - Contacto */}
        <div className="w-72 mx-auto md:mx-0">
          <div className="flex items-center justify-center sm:justify-center md:justify-end mb-4 border-b border-blue-200 pb-4">
            <img
              id="logo"
              src="https://static.wixstatic.com/media/4a3f12_f684025a502349fe86bd75feda56516b~mv2_d_1924_1240_s_2.png/v1/crop/x_0,y_44,w_1924,h_1140/fill/w_175,h_105,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/adventist-es-centered--white.png"
              alt="Logo"
              className="h-26"
            />
          </div>
          <div>
            <p className="text-sm flex items-center justify-center sm:justify-center md:justify-end gap-2 mt-1">
              IV Centenario 415
            </p>
            <p className="text-sm flex items-center justify-center sm:justify-center md:justify-end gap-2 mt-1">
              Estacionamientos por Monroe 6500
            </p>
            <p className="text-sm flex items-center justify-center sm:justify-center md:justify-end gap-2 mt-1">
              Las Condes, Santiago, Chile
            </p>
            <p className="text-sm flex items-center justify-center sm:justify-center md:justify-end gap-2 mt-1">
              <i className="fa-solid fa-envelope text-blue-400"></i>
              <a
                href="mailto:comunicaciones@iasdlascondes.cl"
                className="text-blue-300 hover:underline"
              >
                comunicaciones@iasdlascondes.cl
              </a>
            </p>
            <div
              id="social"
              className="flex items-center gap-4 mt-4 justify-center sm:justify-center md:justify-end"
            >
              <a
                href="https://www.instagram.com/adventistaslascondes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition h-6 w-6 flex items-center justify-center rounded-full border border-gray-400"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/iasdlascondes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition h-6 w-6 flex items-center justify-center rounded-full border border-gray-400"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.youtube.com/adventistaslascondes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition h-6 w-6 flex items-center justify-center rounded-full border border-gray-400"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
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
