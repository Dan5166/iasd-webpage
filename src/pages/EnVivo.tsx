// src/pages/EnVivo.tsx

import liveHero from "../assets/en-vivo/live-hero.jpg"; // coloca aquí tu imagen de portada

export default function EnVivo() {
  const youtubeUrl = "https://www.youtube.com/embed/TU_LINK_AQUI"; // 🔴 reemplaza con tu link de transmisión en vivo o canal

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src={liveHero}
          alt="Transmisión en vivo"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4">
            Transmisión en Vivo
          </h1>
          <p className="max-w-2xl mx-auto text-lg drop-shadow-md">
            Acompáñanos en nuestra transmisión en vivo y sé parte de cada culto,
            alabanza y mensaje donde estés.
          </p>
        </div>
      </section>

      {/* Sección de Video en Vivo */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Culto en Vivo</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          Conéctate con nosotros a través de nuestro canal de YouTube. Si la
          transmisión aún no ha comenzado, puedes ver nuestras predicaciones
          anteriores directamente desde el mismo enlace.
        </p>

        <div className="relative aspect-video max-w-4xl mx-auto shadow-lg rounded-2xl overflow-hidden">
          <iframe
            src={youtubeUrl}
            title="Transmisión en vivo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="mt-8">
          <a
            href="https://www.youtube.com/@TU_CANAL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-300 shadow-md"
          >
            Ver en YouTube
          </a>
        </div>
      </section>

      {/* Frase inspiradora */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20 text-center">
        <blockquote className="max-w-2xl mx-auto text-2xl italic font-medium text-blue-900">
          “Jehová habita en medio de las alabanzas de su pueblo.” <br />
          <span className="text-lg font-semibold">— Salmos 22:3</span>
        </blockquote>
      </section>
    </div>
  );
}
