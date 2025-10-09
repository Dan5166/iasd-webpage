import { Link } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  { label: "Inicio", path: "/" },
  { label: "En vivo", path: "/en-vivo" },
  {
    label: "Recursos",
    children: [
      { label: "Escuela Sabatica", path: "/recursos/escuela-sabatica" },
      { label: "Estudios Bíblicos", path: "/recursos/estudios-biblicos" },
      {
        label: "Material de Estudio",
        path: "https://www.recursos-biblicos.com/",
      },
      // { label: "Alabanza", path: "/alabanza" },
      // { label: "Musica Online", path: "/musica-online" },
      // { label: "Programas anteriores", path: "/programas-anteriores" },
    ],
  },
  { label: "Diezmos y Ofrendas", path: "/diezmos-y-ofrendas" },
  {
    label: "Nosotros",
    children: [
      { label: "Quiénes somos", path: "/nosotros" },
      { label: "Grupos Pequeños", path: "/nosotros/grupos-pequenos" },
    ],
  },
  // {
  //   label: "Ministerios",
  //   children: [
  //     { label: "MIPES", path: "/ministerios/mipes" },
  //     { label: "Jovenes", path: "/ministerios/jovenes" },
  //     { label: "Conquistadores", path: "/ministerios/conquistadores" },
  //     { label: "Aventureros", path: "/ministerios/aventureros" },
  //   ],
  // },
  { label: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  function isExternalLink(path: string) {
    return /^https?:\/\//.test(path);
  }

  return (
    <nav className="bg-white text-blue-900 font-semibold shadow h-20 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://web.archive.org/web/20241202073724/https://static.wixstatic.com/media/4a3f12_06dcad3c3e7a447780ed192bbe95ebbc~mv2.png/v1/fill/w_69,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/little_symbol_nbg.png"
            alt="Logo IASD"
            className="w-12 h-12"
          />
          <div className="flex flex-col leading-tight text-black">
            <span className="text-xl font-bold">Iglesia Adventista</span>
            <span className="text-lg font-semibold">Las Condes</span>
          </div>
        </Link>

        {/* Botón hamburguesa solo en móviles */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {/* Icono hamburguesa */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú en desktop */}
        <div className="hidden lg:flex gap-8 relative">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setOpenMenu(idx)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {item.path ? (
                isExternalLink(item.path) ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.path} className="hover:text-blue-600">
                    {item.label}
                  </Link>
                )
              ) : (
                <span className="cursor-pointer hover:text-blue-600">
                  {item.label}
                </span>
              )}

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

      {/* Menú móvil desplegable */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-3 space-y-2 z-50">
          {menuItems.map((item, idx) => (
            <div key={idx}>
              {item.path ? (
                <Link
                  to={item.path}
                  className="block py-2 hover:text-blue-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <details>
                  <summary className="cursor-pointer py-2 hover:text-blue-600">
                    {item.label}
                  </summary>
                  <div className="pl-4">
                    {item.children?.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        to={subItem.path}
                        className="block py-1 text-sm hover:text-blue-600"
                        onClick={() => setMobileOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </details>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
