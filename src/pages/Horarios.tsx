export default function Horarios() {
  return (
    <section className="container py-12 px-6 mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Todos los Horarios de Culto
      </h2>

      <div className="space-y-8">
        {/* Sábado */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-3">Sábado</h3>
          <ul className="space-y-2">
            <li>10:00 – 11:00 hrs → Escuela Sabática</li>
            <li>11:00 – 12:30 hrs → Culto de Adoración</li>
            <li>19:30 – 21:00 hrs → Culto Joven</li>
          </ul>
        </div>

        {/* Miércoles */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-3">
            Miércoles
          </h3>
          <ul className="space-y-2">
            <li>19:30 hrs → Culto de Oración (Zoom y YouTube)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
