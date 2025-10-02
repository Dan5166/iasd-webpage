import { Link } from "react-router-dom";
import imagenNoticia from "../assets/proximas-actividades/culto-joven-18.jpeg";
import imagenNoticia2 from "../assets/proximas-actividades/programa-recuperacion-autoinmune.jpeg";

// Simulamos las noticias
const noticias = [
  {
    id: 1,
    imagen: imagenNoticia,
    tag: "Comunidad",
    titular: "Dieciocho Chico con JA Las Condes",
    resumen: "Un espacio para jóvenes que buscan crecer en su fe y amistad.",
  },
  {
    id: 2,
    imagen: imagenNoticia2,
    tag: "Evento",
    titular: "Programa de Recuperación para Autoinmune",
    resumen: "Elementos para disminuir el dolor y la inflamación.",
  },
];

export default function Noticias() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="pl-8 text-xl font-bold mb-6 border-l-4 border-blue-800 text-blue-800">
        NOTICIAS
      </h2>

      <div className="flex flex-col gap-6">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className="flex flex-col md:flex-row bg-white shadow rounded-lg overflow-hidden"
          >
            {/* Imagen */}
            <img
              src={noticia.imagen}
              alt={noticia.titular}
              className="w-full md:w-1/3 h-48 object-cover"
            />

            {/* Contenido */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <span className="text-sm font-semibold text-blue-700 mb-1">
                {noticia.tag}
              </span>
              <h3 className="text-xl font-bold mb-2">{noticia.titular}</h3>
              <p className="text-gray-700 flex-1">{noticia.resumen}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón Ver más */}
      {false && (
        <div className="mt-6 text-center">
          <Link
            to="/noticias"
            className="flex items-center gap-2 justify-center text-blue-700 hover:text-blue-800 font-semibold px-6 py-3 rounded-lg"
          >
            Ver más
            <i className="fa-solid fa-chevron-right" />
          </Link>
        </div>
      )}
    </div>
  );
}
