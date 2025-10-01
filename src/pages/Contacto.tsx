export default function Contacto() {
  return (
    <div className="max-w-xl mx-auto space-y-6 mt-20">
      <h1 className="text-3xl font-bold text-blue-900">Contáctanos</h1>
      <p className="text-gray-700">
        Si deseas comunicarte con nosotros, completa el siguiente formulario o
        visítanos en nuestra iglesia.
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
          <strong>Dirección:</strong> Monroe #6500, Las Condes
        </p>
        <p>
          <strong>Teléfono:</strong> +--- ---- ---
        </p>
        <p>
          <strong>Email:</strong> ---@---.cl
        </p>
      </div>
    </div>
  );
}
