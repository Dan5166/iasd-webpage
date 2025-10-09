interface Estudio {
  titulo: string;
  imagen: string;
  link: string;
  youtube: string;
}

const estudios: Estudio[] = [
  {
    titulo: "En los pasos de Jesus",
    imagen:
      "https://escritoesta.org/wp-content/uploads/2022/06/Pasos-de-Jesus.png",
    link: "https://drive.google.com/file/d/1f0r9Ovnd31Grbz21FsTxv6Io3x657_Uw/view?usp=drive_link",
    youtube:
      "https://www.youtube.com/playlist?list=PL1_DVvLkyF1MwQhQH-TmuuKxWQQ0TPiBP",
  },
];

function getDriveDownloadLink(url: string) {
  const match = url.match(/\/d\/(.*?)\//);
  if (match) {
    return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  }
  return url; // por si ya es directo o no es de Drive
}

export default function EstudiosBiblicos() {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      <h2 className="text-3xl md:text-3xl font-bold text-blue-900 text-center mb-12">
        Estudios Bíblicos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {estudios.map((estudio, idx) => (
          <div
            key={idx}
            className="relative group rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.03] transition duration-500 cursor-pointer"
          >
            {/* Imagen */}
            <img
              src={estudio.imagen}
              alt={estudio.titulo}
              className="w-full h-64 object-cover"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-blue-950/100 to-transparent transition-opacity duration-500  "opacity-100" : "opacity-0"
              `}
            />

            {/* Contenido */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
              <h3 className="text-xl text-center font-bold mb-3">
                {estudio.titulo}
              </h3>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={getDriveDownloadLink(estudio.link)}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2"
                  download
                >
                  <i className="fa-solid fa-download"></i>
                  Descargar
                </a>

                <a
                  href={estudio.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2"
                >
                  <i className="fa-brands fa-youtube text-lg"></i>
                  Ver En Youtube
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
