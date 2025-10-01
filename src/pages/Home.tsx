import Hero from "../components/Hero";
import HorariosCard from "../features/HorariosCard";
import Noticias from "../features/Noticias";

export default function Home() {
  return (
    <div>
      <Hero />
      <Noticias />
      <HorariosCard />
    </div>
  );
}
