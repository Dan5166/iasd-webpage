// src/pages/GruposPequenos.tsx
import React from "react";

export default function GruposPequenos() {
  const fotos = [
    "https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4">
            Grupos Pequeños
          </h1>
          <p className="max-w-2xl mx-auto text-lg drop-shadow-md">
            El corazón de nuestra iglesia: comunidades donde estudiamos la
            Biblia, oramos, alabamos y compartimos como familia espiritual.
          </p>
        </div>
      </section>

      {/* Descripción */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          ¿Qué son los Grupos Pequeños?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Nos dividimos en{" "}
          <span className="font-semibold">muchos grupos pequeños</span> en
          distintas partes de la ciudad. En ellos participan niños, jóvenes,
          adultos y adultos mayores, creando un espacio inclusivo para todos.
          <br />
          <br />
          Allí crecemos en la fe, fortalecemos la amistad y nos apoyamos unos a
          otros en la vida diaria. Cada reunión es una oportunidad de acercarnos
          más a Cristo y compartir Su amor.
        </p>
      </section>

      {/* Galería dinámica */}
      <section className="bg-white py-20 relative">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Un vistazo a nuestros Grupos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 container mx-auto">
          {fotos.map((src, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={src}
                alt={`Grupo ${idx + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                <span className="text-white font-semibold text-lg">
                  Grupo #{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frase inspiradora */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20 text-center">
        <blockquote className="max-w-2xl mx-auto text-2xl italic font-medium text-blue-900">
          “Porque donde están dos o tres congregados en mi nombre, allí estoy yo
          en medio de ellos.” <br />
          <span className="text-lg font-semibold">— Mateo 18:20</span>
        </blockquote>
      </section>
    </div>
  );
}
