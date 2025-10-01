import { Link } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  { label: "Inicio", path: "/" },
  { label: "En vivo", path: "/en-vivo" },
  {
    label: "Recursos",
    children: [
      { label: "Estudios Bíblicos", path: "/recursos/estudios" },
      { label: "Sermones", path: "/recursos/sermones" },
      { label: "Música", path: "/recursos/musica" },
    ],
  },
  { label: "Diezmos y Ofrendas", path: "/diezmos-y-ofrendas" },
  {
    label: "Nosotros",
    children: [
      { label: "Quiénes somos", path: "/nosotros" },
      { label: "Grupos Pequeños", path: "/nosotros/grupos-pequenos" },
    ],
  }, //Quiénes somos
  {
    label: "Ministerios",
    children: [
      { label: "MIPES", path: "/ministerios/mipes" },
      { label: "Jovenes", path: "/ministerios/jovenes" },
      { label: "Conquistadores", path: "/ministerios/conquistadores" },
      { label: "Aventureros", path: "/ministerios/aventureros" },
    ],
  },
  { label: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <nav className="bg-white text-blue-900 font-semibold shadow h-20">
      <div className="container mx-auto flex justify-between items-center px-4 h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* Imagen del símbolo */}
          <img
            src="https://web.archive.org/web/20241202073724/https://static.wixstatic.com/media/4a3f12_06dcad3c3e7a447780ed192bbe95ebbc~mv2.png/v1/fill/w_69,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/little_symbol_nbg.png"
            alt="Logo IASD"
            className="w-12 h-12"
          />

          {/* Texto del logo en dos líneas */}
          <div className="flex flex-col leading-tight text-black">
            <span
              style={{
                fontFamily:
                  "wfont_4a3f12_dfb8d0447e284de6a73b4febe68275e1, wf_dfb8d0447e284de6a73b4febe, orig_adventsanslogo, sans-serif",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              Iglesia Adventista
            </span>
            <span
              style={{
                fontFamily:
                  "wfont_4a3f12_dfb8d0447e284de6a73b4febe68275e1, wf_dfb8d0447e284de6a73b4febe, orig_adventsanslogo, sans-serif",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              Las Condes
            </span>
          </div>
        </Link>

        {/* Menú principal */}
        <div className="flex gap-8 relative">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => {
                console.log("OPEN: ", idx);
                setOpenMenu(idx);
              }}
              onMouseLeave={() => {
                console.log("CLOSE: ");
                setOpenMenu(null);
              }}
            >
              {item.path ? (
                <Link to={item.path} className="hover:text-blue-600">
                  {item.label}
                </Link>
              ) : (
                <span className="cursor-pointer hover:text-blue-600">
                  {item.label}
                </span>
              )}

              {/* Submenú */}
              {item.children && openMenu === idx && (
                <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-lg py-2 w-48 z-10">
                  {item.children.map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      to={subItem.path}
                      className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
