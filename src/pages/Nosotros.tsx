// src/pages/Nosotros.tsx

export default function Nosotros() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Sobre Nosotros</h1>
        <p className="max-w-2xl mx-auto text-lg text-blue-100">
          Somos una comunidad de fe que busca compartir el evangelio eterno,
          vivir en el amor de Cristo y servir con alegría a quienes nos rodean.
        </p>
      </section>

      {/* Misión y Visión */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Nuestra Misión
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Anunciar las buenas nuevas de Jesucristo y preparar a las personas
            para su pronto regreso, fortaleciendo la fe y la esperanza en cada
            corazón.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Nuestra Visión
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ser una iglesia acogedora, activa y comprometida con la enseñanza
            bíblica y el servicio a la comunidad, mostrando el amor de Dios en
            cada acción.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Nuestros Valores
        </h2>
        <div className="grid md:grid-cols-3 gap-8 container mx-auto px-6 text-center">
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Fe</h3>
            <p className="text-gray-600">
              Creemos en la Palabra de Dios como fundamento de nuestra vida
              cristiana.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Amor</h3>
            <p className="text-gray-600">
              Amamos a Dios y al prójimo, siguiendo el ejemplo de Jesucristo.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Servicio</h3>
            <p className="text-gray-600">
              Servimos a nuestra comunidad con compasión, dedicación y
              esperanza.
            </p>
          </div>
        </div>
      </section>

      {/* Texto bíblico */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-16 text-center">
        <blockquote className="max-w-2xl mx-auto text-2xl italic font-medium text-blue-900">
          “Id por todo el mundo y predicad el evangelio a toda criatura.” <br />
          <span className="text-lg font-semibold">— Marcos 16:15</span>
        </blockquote>
      </section>
    </div>
  );
}
