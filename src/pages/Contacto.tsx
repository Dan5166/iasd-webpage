export default function Contacto() {
  return (
    <section className="container bg-gray-50 py-12 px-6 rounded-xl shadow-md mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Contacto
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Columna Izquierda: Horarios */}
        <div className="space-y-8 pr-10">
          <h1 className="text-2xl font-bold text-blue-900">Escríbenos</h1>
          <p className="text-gray-700">
            Si deseas comunicarte con nosotros, completa el siguiente formulario
            o visítanos en nuestra iglesia.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full border px-4 py-2 rounded"
            />
            <textarea
              placeholder="Mensaje"
              className="w-full border px-4 py-2 rounded h-32"
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800"
            >
              Enviar
            </button>
          </form>
          <div className="text-gray-700">
            <p>
              <strong>Dirección:</strong> Monroe #6500, Las Condes, Santiago,
              Chile
            </p>
            <p>
              <strong>Teléfono:</strong> +--- ---- ---
            </p>
            <p>
              <strong>Email:</strong> ---@---.cl
            </p>
          </div>
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
