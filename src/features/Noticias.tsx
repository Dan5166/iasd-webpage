import { Link } from "react-router-dom";

// Simulamos las noticias
const noticias = [
  {
    id: 1,
    imagen:
      "https://images.unsplash.com/photo-1690982625154-5a1efe8c3da2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Comunidad",
    titular: "Gran reunión de jóvenes este domingo",
    resumen:
      "Únete a nuestra reunión de jóvenes donde compartiremos música, estudios bíblicos y momentos de oración.",
  },
  {
    id: 2,
    imagen:
      "https://files.adventistas.org/noticias/es/2024/02/16233931/Apoyo-comunitario-2-2-960x540.jpg",
    tag: "Evento",
    titular: "Servicio comunitario: ayudando a los necesitados",
    resumen:
      "Participa en nuestro servicio comunitario y sé parte de la obra de Cristo en nuestra comunidad.",
  },
];

export default function Noticias() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Noticias</h2>

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
      <div className="mt-6 text-center">
        <Link
          to="/noticias"
          className="flex items-center gap-2 justify-center text-blue-700 hover:text-blue-800 font-semibold px-6 py-3 rounded-lg"
        >
          Ver más
          <i className="fa-solid fa-chevron-right" />
        </Link>
      </div>
    </div>
  );
}
