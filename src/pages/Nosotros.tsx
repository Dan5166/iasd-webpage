export default function Nosotros() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-900">Sobre Nosotros</h1>
      <p className="text-gray-700">
        La Iglesia Adventista del Séptimo Día de Las Condes es una comunidad de
        fe dedicada a compartir el mensaje del evangelio eterno, fortalecer la
        vida espiritual y servir a nuestra comunidad.
      </p>
      <div className="container grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-blue-800">
            Nuestra Misión
          </h2>
          <p className="text-gray-600">
            Anunciar las buenas nuevas de Jesucristo y preparar a las personas
            para su pronto regreso.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-800">
            Nuestra Visión
          </h2>
          <p className="text-gray-600">
            Ser una iglesia acogedora y activa, comprometida con la enseñanza
            bíblica y el servicio.
          </p>
        </div>
      </div>
    </div>
  );
}
