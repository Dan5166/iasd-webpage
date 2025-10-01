import { useState } from "react";

interface Cuenta {
  banco: string;
  tipo: string;
  numero: string;
  titular: string;
  icon: string;
}

export default function DiezmosOfrendas() {
  const cuentas = [
    {
      banco: "Banco de Chile",
      tipo: "Cuenta Corriente",
      numero: "1234567890",
      titular: "Iglesia Adventista Las Condes",
      icon: "fa-solid fa-building-columns",
    },
    {
      banco: "Banco BCI",
      tipo: "Cuenta Vista",
      numero: "0987654321",
      titular: "Iglesia Adventista Las Condes",
      icon: "fa-solid fa-building-columns",
    },
  ];

  const [copiado, setCopiado] = useState<number | null>(null);

  const copiarCuenta = (cuenta: Cuenta, idx: number) => {
    const texto = `Banco: ${cuenta.banco}
Tipo de cuenta: ${cuenta.tipo}
Número: ${cuenta.numero}
Titular: ${cuenta.titular}`;

    navigator.clipboard.writeText(texto);
    setCopiado(idx);
    setTimeout(() => setCopiado(null), 2000);
  };

  return (
    <section className="container mx-auto bg-gray-50 py-12 px-6 rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
        Diezmos y Ofrendas
      </h2>

      <p className="text-gray-700 mb-6 text-center">
        Agradecemos tu generosidad. Puedes aportar tus diezmos y ofrendas
        mediante las siguientes cuentas bancarias:
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {cuentas.map((cuenta, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition relative"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <i className={`${cuenta.icon} text-blue-600 text-2xl`}></i>
                <h3 className="text-xl font-semibold text-blue-900">
                  {cuenta.banco}
                </h3>
              </div>

              <button
                onClick={() => copiarCuenta(cuenta, idx)}
                className="ml-2 text-sm text-blue-600 hover:text-blue-800"
                title="Copiar datos completos"
              >
                <i className="fa-solid fa-copy"></i>
              </button>
            </div>

            <p className="text-gray-700">
              <span className="font-semibold">Tipo de cuenta:</span>{" "}
              {cuenta.tipo}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Número:</span> {cuenta.numero}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Titular:</span> {cuenta.titular}
            </p>

            {/* Mensaje de copiado */}
            {copiado === idx && (
              <span className="absolute top-2 right-2 text-green-600 text-sm font-semibold">
                ¡Copiado!
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-700">
        <p>
          Recuerda que tu aporte ayuda a sostener la obra de la Iglesia y sus
          ministerios. ¡Gracias por tu fidelidad!
        </p>
      </div>
    </section>
  );
}
