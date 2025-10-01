export default function Eventos() {
  const eventos = [
    {
      titulo: "Culto de Oración",
      fecha: "Miércoles 19:30",
      lugar: "Templo Central",
    },
    {
      titulo: "Escuela Sabática",
      fecha: "Sábado 09:30",
      lugar: "Templo Central",
    },
    { titulo: "Culto Divino", fecha: "Sábado 11:00", lugar: "Templo Central" },
    {
      titulo: "Reunión Joven",
      fecha: "Sábado 17:00",
      lugar: "Salón de Jóvenes",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Próximos Eventos
      </h1>
      <div className="space-y-4">
        {eventos.map((e, i) => (
          <div key={i} className="p-4 bg-gray-50 rounded-lg shadow border">
            <h2 className="text-xl font-semibold text-blue-800">{e.titulo}</h2>
            <p className="text-gray-600">📅 {e.fecha}</p>
            <p className="text-gray-600">📍 {e.lugar}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
