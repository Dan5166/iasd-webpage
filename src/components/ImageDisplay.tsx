import { useEffect, useState } from "react";
import { getImageUrl } from "../firebase/storage";

interface ImageDisplayProps {
  path: string;
  alt?: string;
  className?: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  path,
  alt = "Imagen",
  className,
}) => {
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const downloadURL = await getImageUrl(path);
        setUrl(downloadURL);
      } catch (error) {
        console.error("Error al obtener la imagen:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUrl();
  }, [path]);

  if (loading) return <p>Cargando...</p>;
  if (!url) return <p>No se pudo cargar la imagen</p>;

  return <img src={url} alt={alt} className={className} />;
};

export default ImageDisplay;
