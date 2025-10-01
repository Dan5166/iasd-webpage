export default function Ministerios() {
  const ministerios = [
    {
      nombre: "Ministerio Infantil",
      desc: "Apoyamos a los niños en su crecimiento espiritual.",
    },
    {
      nombre: "Ministerio Joven",
      desc: "Actividades y discipulado para jóvenes y adolescentes.",
    },
    {
      nombre: "Ministerio de la Mujer",
      desc: "Espacios de encuentro y crecimiento en comunidad.",
    },
    {
      nombre: "Ministerio de Música",
      desc: "Llevar el evangelio a través del canto y la alabanza.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Nuestros Ministerios
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {ministerios.map((m, i) => (
          <div
            key={i}
            className="p-4 bg-white shadow rounded-lg border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-blue-800">{m.nombre}</h2>
            <p className="text-gray-600">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
