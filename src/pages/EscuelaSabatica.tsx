interface Estudio {
  titulo: string;
  imagen: string;
  link: string;
  youtube?: string;
}

interface Categoria {
  nombre: string;
  estudios: Estudio[];
}

const categorias: Categoria[] = [
  {
    nombre: "Adultos",
    estudios: [
      {
        titulo: "Lecciones de Josué acerca de la Fe - CUARTO Trimestre 2025",
        imagen:
          "https://www.recursos-biblicos.com/wp-content/uploads/2014/03/leccion-cuarto-trimestre-2025-josue.jpg",
        link: "https://www.recursos-biblicos.com/2014/03/leccion-de-escuela-sabatica.html",
      },
    ],
  },
  {
    nombre: "Jovenes (16-27 años)",
    estudios: [
      {
        titulo: "El libro de Josué - CUARTO Trimestre 2025",
        imagen:
          "https://www.recursos-biblicos.com/wp-content/uploads/2014/04/inverso-universitarios-4to-trimestre-2025-josue-1536x1152.jpg",
        link: "https://www.recursos-biblicos.com/2014/04/leccion-juveniles-2do-segundo-trimestre-2014.html",
      },
    ],
  },
  {
    nombre: "Juveniles - Gteen (15-18 años)",
    estudios: [
      {
        titulo: "Reyes y Profetas - CUARTO Trimestre 2025",
        imagen:
          "https://www.recursos-biblicos.com/wp-content/uploads/2024/02/Leccion-Juveniles-15-18-anos-1536x1152.jpg",
        link: "https://www.recursos-biblicos.com/2014/03/leccion-infantes-2do-segundo-trimestre.html",
      },
    ],
  },
  {
    nombre: "Itermediarios (13-14 años)",
    estudios: [
      {
        titulo: "Lección menores e intermediarios - CUARTO Trimestre 2025",
        imagen:
          "https://www.recursos-biblicos.com/wp-content/uploads/2020/06/Leccion-menores-intermediarios-escuela-sabatica.jpg.webp",
        link: "https://www.recursos-biblicos.com/2014/03/leccion-infantes-2do-segundo-trimestre.html",
      },
    ],
  },
  {
    nombre: "Primarios (7-9 años)",
    estudios: [
      {
        titulo: "Lección Primarios - CUARTO Trimestre 2025",
        imagen:
          "https://www.recursos-biblicos.com/wp-content/uploads/2022/12/leccion-primarios-escuela-sabatica-pdf-1536x1152.jpg.webp ",
        link: "https://www.recursos-biblicos.com/2014/03/leccion-infantes-2do-segundo-trimestre.html",
      },
    ],
  },
  {
    nombre: "Infantes (4-6 años)",
    estudios: [
      {
        titulo: "Lección de Infantes - CUARTO Trimestre 2025",
        imagen:
          "https://www.recursos-biblicos.com/wp-content/uploads/2020/06/Leccion-Infantes-escuela-sabatica.jpg.webp",
        link: "https://www.recursos-biblicos.com/2014/03/leccion-infantes-2do-segundo-trimestre.html",
      },
    ],
  },
  {
    nombre: "Cuna (0-3 años)",
    estudios: [
      {
        titulo: "Lección 1 - Caminando con Cristo",
        imagen:
          "https://www.recursos-biblicos.com/wp-content/uploads/2020/06/Leccion-cuna-escuela-sabatica.jpg.webp",
        link: "https://www.recursos-biblicos.com/2014/03/leccion-cuna-2do-segundo-trimestre-2014.html",
      },
    ],
  },
];

export default function EscuelaSabatica() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Título principal */}
      <div className="py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          Escuela Sabática
        </h2>

        {/* Categorías */}
        <div className="space-y-16 max-w-7xl mx-auto">
          {categorias.map((categoria, catIdx) => (
            <section
              key={catIdx}
              className={`px-4 pt-12 border-t border-gray-300`}
            >
              {/* Nombre de la categoría */}
              <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center">
                {categoria.nombre}
              </h3>

              {/* Grid de estudios */}
              <div
                className={`grid gap-8 ${
                  categoria.estudios.length === 1
                    ? "grid-cols-1 place-items-center" // centra tanto vertical como horizontal
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {categoria.estudios.map((estudio, idx) => (
                  <div
                    key={idx}
                    className={`relative group rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.03] transition duration-500 cursor-pointer bg-white ${
                      categoria.estudios.length === 1 ? "w-full max-w-2xl" : ""
                    }`}
                  >
                    {/* Video incrustado */}
                    {estudio.youtube ? (
                      <div className="aspect-video bg-black">
                        <iframe
                          src={estudio.youtube}
                          title={estudio.titulo}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    ) : (
                      <img
                        src={estudio.imagen}
                        alt={estudio.titulo}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Contenido */}
                    <div className="p-5 text-gray-800">
                      <h4 className="text-lg font-bold text-center mb-3">
                        {estudio.titulo}
                      </h4>
                      <div className="flex justify-center">
                        <a
                          href={estudio.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold text-white transition flex items-center gap-2"
                        >
                          <i className="fa-solid fa-link"></i> Ver Folleto
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Frase inspiradora */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20 text-center">
        <blockquote className="max-w-2xl mx-auto text-2xl italic font-medium text-blue-900">
          “Enséñame, oh Jehová, tu camino; caminaré yo en tu verdad; afirma mi
          corazón para que tema tu nombre.”
          <br />
          <span className="text-lg font-semibold">— Salmo 86:11</span>
        </blockquote>
      </section>
    </div>
  );
}
