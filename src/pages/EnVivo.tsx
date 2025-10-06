import { useEffect, useState } from "react";

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
        console.log("YouTube API response:", data);

        const liveVideoId = data.items?.[0]?.id?.videoId;

        // Solo URLs válidas de embed, nunca la página del canal en iframe
        setVideoUrl(
          liveVideoId ? `https://www.youtube.com/embed/${liveVideoId}` : "" // si no hay en vivo, dejamos vacío y mostramos link
        );
      } catch (err) {
        console.error("Error fetching live video:", err);
      }
    };

    fetchLiveVideo();
  }, [channelId, apiKey]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-start pt-12 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 text-center">
        Culto en Vivo
      </h2>

      <div
        className="w-full max-w-6xl overflow-hidden shadow-2xl rounded-3xl bg-gray-100 flex items-center justify-center
                aspect-video md:aspect-video h-[50vh] md:h-auto"
      >
        {videoUrl ? (
          <iframe
            src={videoUrl} // ✅ usamos el estado que ya tiene la URL correcta
            title="Transmisión en vivo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center h-full">
            <div className="flex flex-col items-center justify-center text-center px-6 mb-6">
              <i className="fa-brands fa-youtube text-red-600 text-8xl mb-6 animate-pulse"></i>
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                Actualmente no hay transmisión en vivo
              </p>
            </div>

            <a
              href={`https://www.youtube.com/channel/${channelId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-100 hover:bg-red-200 text-red-600 font-semibold px-8 py-4 rounded-2xl transition-colors duration-300 shadow-md text-lg md:text-xl"
            >
              <i className="fa-brands fa-youtube text-red-600"></i>
              Ver el canal en YouTube
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
