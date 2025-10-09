import { useState } from "react";

interface Cuenta {
  titular: string;
  banco?: string;
  tipo?: string;
  numero?: string;
  correo?: string;
  rut?: string;
  icon?: string;
  tipoBoton?: "cuentaBancaria" | "enlacePago";
  link?: string;
  desc?: string;
  background?: string;
  textColor?: string;
}

export default function DiezmosOfrendas() {
  const cuentas: Cuenta[] = [
    {
      banco: "Banco de Crédito e Inversiones (BCI)",
      tipo: "Cuenta Corriente",
      numero: "354 185 24",
      titular: "Iglesia Adventista del 7o. Día",
      rut: "65.002.737-K",
      correo: "tesoreria@iasdlascondes.cl",
      icon: "fa-solid fa-building-columns",
      tipoBoton: "cuentaBancaria",
      background: "bg-gray-50",
      textColor: "text-blue-800",
    },
    {
      titular: "7Me",
      link: "https://giving.7me.app/",
      icon: "fa-solid fa-hand-holding-dollar",
      tipoBoton: "enlacePago",
      desc: "Plataforma segura para donar en línea de la Iglesia Adventista.",
      background: "bg-blue-50",
      textColor: "text-blue-900",
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
    <div>
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
              className={`p-6 rounded-lg shadow hover:shadow-lg transition relative ${cuenta.background} ${cuenta.textColor}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <i className={`${cuenta.icon} text-2xl`}></i>
                  <h3 className="text-xl font-semibold">
                    {cuenta.banco || `Pagar a través de ${cuenta.titular}`}
                  </h3>
                </div>

                {cuenta.tipoBoton === "cuentaBancaria" && (
                  <button
                    onClick={() => copiarCuenta(cuenta, idx)}
                    className="ml-2 text-sm hover:underline"
                    title="Copiar datos completos"
                  >
                    <i className="fa-solid fa-copy"></i>
                  </button>
                )}
              </div>

              {cuenta.tipoBoton === "cuentaBancaria" ? (
                <>
                  <p>{cuenta.titular}</p>
                  <p>{cuenta.banco}</p>
                  <p>
                    {cuenta.tipo} {cuenta.numero}
                  </p>
                  <p>{cuenta.rut}</p>
                  <p>{cuenta.correo}</p>
                </>
              ) : (
                <div className="flex flex-col h-48">
                  <p>{cuenta.desc}</p>

                  <a
                    href={cuenta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
                  >
                    Ir a 7Me
                  </a>
                </div>
              )}

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
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20 text-center mt-12">
        <blockquote className="max-w-2xl mx-auto text-2xl italic font-medium text-blue-900">
          “Honra a Jehová con tus bienes, y con las primicias de todos tus
          frutos; y serán llenos tus graneros con abundancia, y tus lagares
          rebosarán de mosto.”
          <br />
          <span className="text-lg font-semibold">— Proverbios 3:9-10</span>
        </blockquote>
      </section>
    </div>
  );
}
