import { Link } from "react-router-dom";

export default function HorariosCard() {
  return (
    <section className="container bg-gray-50 py-12 px-6 rounded-xl shadow-md mx-auto">
      <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
        Horarios culto y Ubicación
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Columna Izquierda: Horarios */}
        <div className="space-y-8">
          {/* Sábado */}
          <div className="flex items-start gap-4">
            <i className="fa-solid fa-calendar-days text-blue-600 text-2xl"></i>
            <div className="space-y-4">
              <p className="font-semibold text-xl text-blue-900">Sábado</p>

              {/* Actividades del sábado */}
              <div>
                <p className="font-semibold text-lg text-blue-900">
                  Escuela Sabática
                </p>
                <p className="text-gray-700">10:00 – 11:00 hrs</p>
                <p className="text-gray-600">Presencial</p>
              </div>
              <div>
                <p className="font-semibold text-lg text-blue-900">
                  Culto de Adoración
                </p>
                <p className="text-gray-700">11:00 – 12:30 hrs</p>
                <p className="text-gray-600">
                  Presencial y en vivo por{" "}
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    className="text-blue-600 underline"
                    rel="noreferrer"
                  >
                    YouTube
                  </a>
                </p>
              </div>

              <div>
                <p className="font-semibold text-lg text-blue-900">
                  Culto Joven
                </p>
                <p className="text-gray-700">19:30 – 21:00 hrs</p>
                <p className="text-gray-600">
                  Presencial y en vivo por{" "}
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    className="text-blue-600 underline"
                    rel="noreferrer"
                  >
                    YouTube
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Miércoles */}
          <div className="flex items-start gap-4">
            <i className="fa-solid fa-calendar-days text-blue-600 text-2xl"></i>
            <div>
              <p className="font-semibold text-xl text-blue-900">Miércoles</p>
              <div className="mt-2">
                <p className="font-semibold text-lg text-blue-900">
                  Culto de Oración
                </p>
                <p className="text-gray-700">19:30 hrs</p>
                <p className="text-gray-600">
                  Virtual vía <span className="text-blue-600">Zoom</span> y{" "}
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    className="text-blue-600 underline"
                    rel="noreferrer"
                  >
                    YouTube
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Datos adicionales */}
          <div className="mt-6 space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <i className="fa-solid fa-user text-blue-600"></i>
              <span>
                <strong>Pastor Oficiante:</strong> Pr. Sebastián Alvarado
              </span>
            </p>
            <p className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-blue-600"></i>
              <span>Monroe #6500, Las Condes, Santiago, Chile</span>
            </p>
          </div>
          <Link
            to="/horarios"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Ver todos los horarios
          </Link>
        </div>

        {/* Columna Derecha: Mapa */}
        <div className="w-full h-80 md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.4615547538992!2d-70.56477422431075!3d-33.411209173405126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cee7e1d49523%3A0x2a8e1a25820c262!2sMonroe%206500%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1759273616130!5m2!1sen!2scl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Iglesia Adventista Rancagua"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
