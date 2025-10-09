import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Ministerios from "./pages/Ministeries";
import Eventos from "./pages/Eventos";
import Contacto from "./pages/Contacto";
import Horarios from "./pages/Horarios";
import DiezmosYOfrendas from "./pages/DiezmosYOfrendas";
import GruposPequenos from "./pages/GruposPequenos";
import EnVivo from "./pages/EnVivo";
import EstudiosBiblicos from "./pages/EstudioBiblicos";
import EscuelaSabatica from "./pages/EscuelaSabatica";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/ministerios" element={<Ministerios />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/horarios" element={<Horarios />} />
            <Route path="/diezmos-y-ofrendas" element={<DiezmosYOfrendas />} />
            <Route
              path="/nosotros/grupos-pequenos"
              element={<GruposPequenos />}
            />
            <Route path="/en-vivo" element={<EnVivo />} />
            <Route
              path="/recursos/escuela-sabatica"
              element={<EscuelaSabatica />}
            />
            <Route
              path="/recursos/estudios-biblicos"
              element={<EstudiosBiblicos />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
