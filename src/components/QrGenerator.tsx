import QRCode, {
  type QRCodeErrorCorrectionLevel,
  type QRCodeToDataURLOptions,
} from "qrcode";
import { useEffect, useRef, useState } from "react";

export default function QRGenerator() {
  const [text, setText] = useState<string>("https://example.com");
  const [size, setSize] = useState<number>(300);
  const [fgColor, setFgColor] = useState<string>("#111827");
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [level, setLevel] = useState<QRCodeErrorCorrectionLevel>("M");
  const [dataUrl, setDataUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let mounted = true;

    async function generate() {
      if (!text) {
        setDataUrl("");
        return;
      }
      setLoading(true);

      try {
        const opts: QRCodeToDataURLOptions = {
          errorCorrectionLevel: level,
          width: size,
          margin: 1,
          color: {
            dark: fgColor,
            light: bgColor,
          },
        };

        if (canvasRef.current) {
          await QRCode.toCanvas(canvasRef.current, text, opts);
        }

        const url = await QRCode.toDataURL(text, opts);
        if (mounted) setDataUrl(url);
      } catch (err) {
        console.error("QR generation error", err);
        if (mounted) setDataUrl("");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    generate();
    return () => {
      mounted = false;
    };
  }, [text, size, fgColor, bgColor, level]);

  function handleDownload() {
    if (!dataUrl) return;
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `qr-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Generador de QR</h2>

      <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
        <label>
          <span className="text-sm font-medium">Texto / URL</span>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe el texto o pega la URL..."
            className="mt-1 block w-full rounded-lg border p-2"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label>
            <span className="text-sm">Tamaño (px)</span>
            <input
              type="number"
              min={64}
              max={2000}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border p-2"
            />
          </label>

          <label>
            <span className="text-sm">Nivel corrección</span>
            <select
              value={level}
              onChange={(e) =>
                setLevel(e.target.value as QRCodeErrorCorrectionLevel)
              }
              className="mt-1 block w-full rounded-lg border p-2"
            >
              <option value="L">L (baja)</option>
              <option value="M">M (media)</option>
              <option value="Q">Q (alta)</option>
              <option value="H">H (muy alta)</option>
            </select>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label>
            <span className="text-sm">Color oscuro</span>
            <input
              type="color"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
              className="mt-1 block w-full rounded-lg border p-2"
            />
          </label>
          <label>
            <span className="text-sm">Fondo</span>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="mt-1 block w-full rounded-lg border p-2"
            />
          </label>
        </div>
      </form>

      <div className="mt-6 flex flex-col items-center gap-4">
        <div className="bg-white rounded-lg p-4 border flex flex-col items-center">
          <canvas
            ref={canvasRef}
            width={size}
            height={size}
            style={{ width: size, height: size }}
            className="shadow-sm"
          />
          {loading && <div className="text-xs mt-2">Generando...</div>}

          <button
            type="button"
            onClick={handleDownload}
            disabled={!dataUrl}
            className="mt-3 rounded-lg border px-3 py-2 disabled:opacity-50"
          >
            Descargar PNG
          </button>
        </div>
      </div>
    </div>
  );
}
