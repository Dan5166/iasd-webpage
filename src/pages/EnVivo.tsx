import { useEffect, useState } from "react";
import fondo from "../assets/banner/iasd-las-condes-iglesia.jpg";

export default function EnVivo() {
  const channelId = import.meta.env.VITE_YT_CHANNEL_ID;
  const apiKey = import.meta.env.VITE_YT_API_KEY;
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchLiveVideo = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`
        );
        const data = await res.json();
        const liveVideoId = data.items?.[0]?.id?.videoId;
        setVideoUrl(
          liveVideoId ? `https://www.youtube.com/embed/${liveVideoId}` : ""
        );
      } catch (err) {
        console.error("Error fetching live video:", err);
      }
    };
    fetchLiveVideo();
  }, [channelId, apiKey]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-start">
        {/* Título */}
        <h2 className="text-3xl md:text-3xl font-bold text-blue-800 mt-12 mb-8 text-center">
          Culto en Vivo
        </h2>

        {/* Sección del video con fondo */}
        <section className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl aspect-video bg-blue-900">
          {/* Imagen de fondo */}
          <img
            src={fondo}
            alt="Fondo En Vivo"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          {/* Contenido (video o mensaje) */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            {videoUrl ? (
              <iframe
                src={`${videoUrl}?autoplay=1&mute=1`}
                title="Transmisión en vivo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center text-white px-6">
                <i className="fa-brands fa-youtube text-red-500 text-8xl mb-6"></i>
                <p className="text-2xl md:text-3xl font-semibold mb-6">
                  Actualmente no hay transmisión en vivo
                </p>
                <a
                  href={`https://www.youtube.com/channel/${channelId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-2xl transition-colors duration-300 shadow-md text-lg md:text-xl"
                >
                  <i className="fa-brands fa-youtube"></i>
                  Ver el canal en YouTube
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
      {/* Frase inspiradora */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20 text-center">
        <blockquote className="max-w-2xl mx-auto text-2xl italic font-medium text-blue-900">
          “¡Mirad cuán bueno y cuán delicioso es habitar los hermanos juntos en
          armonía!”
          <span className="text-lg font-semibold">— Salmo 133:1</span>
        </blockquote>
      </section>
    </div>
  );
}
