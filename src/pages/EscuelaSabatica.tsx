interface Estudio {
  titulo: string;
  imagen: string;
  link: string;
  youtube: string; // puede ser el enlace normal o el ID del video
}

const estudios: Estudio[] = [
  {
    titulo: "Lección 1 - La Creación y la Fe",
    imagen:
      "https://static.adventistas.org/es/escuelasabatica/imagenes/leccion1.jpg",
    link: "https://drive.google.com/file/d/1abCDefGhIJkLMnopQRstuVWxyz/view?usp=drive_link",
    youtube: "https://www.youtube.com/embed/DH7ZP7YvNjA",
  },
  {
    titulo: "Lección 2 - El Pacto Eterno",
    imagen:
      "https://static.adventistas.org/es/escuelasabatica/imagenes/leccion2.jpg",
    link: "https://drive.google.com/file/d/1zYXwvUoCbaN3DREt8qHK5mRaa/view?usp=drive_link",
    youtube: "https://www.youtube.com/embed/5m0UtvhF_oA",
  },
];

function getDriveDownloadLink(url: string) {
  const match = url.match(/\/d\/(.*?)\//);
  if (match) {
    return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  }
  return url;
}

export default function EscuelaSabatica() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <div className="py-20 px-6">
        <h2 className="text-3xl md:text-3xl font-bold text-blue-900 text-center mb-12">
          Escuela Sabática
        </h2>

        {/* Grid tipo Netflix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {estudios.map((estudio, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.03] transition duration-500 cursor-pointer bg-white"
            >
              {/* Video incrustado */}
              <div className="aspect-video bg-black">
                <iframe
                  src={estudio.youtube}
                  title={estudio.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Contenido */}
              <div className="p-5 text-gray-800">
                <h3 className="text-xl text-center font-bold mb-3">
                  {estudio.titulo}
                </h3>

                <div className="flex justify-center">
                  <a
                    href={getDriveDownloadLink(estudio.link)}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold text-white transition flex items-center gap-2"
                    download
                  >
                    <i className="fa-solid fa-download"></i>
                    Descargar Guía
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frase inspiradora */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20 text-center">
        <blockquote className="max-w-2xl mx-auto text-2xl italic font-medium text-blue-900">
          “Escudriñad las Escrituras; porque a vosotros os parece que en ellas
          tenéis la vida eterna; y ellas son las que dan testimonio de mí.”
          <br />
          <span className="text-lg font-semibold">— Juan 5:39</span>
        </blockquote>
      </section>
    </div>
  );
}
