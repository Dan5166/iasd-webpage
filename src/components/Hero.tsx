import { useState, useEffect, useRef } from "react";

const slides = [
  {
    imagen:
      "https://files.adventistas.org/institucional/es/2025/09/la-verdad-revelada.jpg",
    titulo: "Bienvenidos a Adventistas Las Condes",
    descripcion: "Un lugar para adorar, servir y crecer juntos en Cristo.",
    boton: "Horarios de culto",
  },
  {
    imagen:
      "https://plus.unsplash.com/premium_photo-1683121377344-7daea0fff94e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Culto de Jóvenes",
    descripcion: "Espacios diseñados para fortalecer tu fe y comunidad.",
    boton: "Participa con nosotros",
  },
  {
    imagen:
      "https://plus.unsplash.com/premium_photo-1658506620365-925c827c6fdc?q=80&w=1038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Servicio Comunitario",
    descripcion: "Compartimos el amor de Cristo sirviendo a nuestra comunidad.",
    boton: "Únete al servicio",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const autoplayRef = useRef<number | null>(null);
  const progressRef = useRef<number | null>(null);
  const duration = 5000; // 5 segundos

  // --- función autoplay ---
  const startAutoPlay = () => {
    stopAutoPlay();
    autoplayRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, duration);
  };

  const stopAutoPlay = () => {
    if (autoplayRef.current !== null) {
      window.clearTimeout(autoplayRef.current);
    }
  };

  // --- progreso animado ---
  const startProgress = () => {
    stopProgress();
    const start = Date.now();
    progressRef.current = window.setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);
      if (percent >= 100 && progressRef.current !== null) {
        window.clearInterval(progressRef.current);
      }
    }, 50);
  };

  const stopProgress = () => {
    if (progressRef.current !== null) {
      window.clearInterval(progressRef.current);
    }
  };

  // reiniciar autoplay y progreso al cambiar de slide
  useEffect(() => {
    setProgress(0);
    startAutoPlay();
    startProgress();
    return () => {
      stopAutoPlay();
      stopProgress();
    };
  }, [current]);

  // funciones manuales
  const goToSlide = (index: number) => setCurrent(index);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slides con fade */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.imagen})` }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-white container">
              <div className="space-y-4 text-left lg:max-w-xl p-2">
                <h1 className="text-4xl font-bold">{slide.titulo}</h1>
                <p className="text-lg">{slide.descripcion}</p>
                <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold cursor-pointer">
                  {slide.boton}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Botones */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60 hidden sm:block"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60 hidden sm:block"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Indicadores con barra */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className="w-12 h-2 bg-gray-400 rounded cursor-pointer overflow-hidden"
          >
            {i === current && (
              <div
                className="h-full bg-white transition-all"
                style={{ width: `${progress}%` }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
