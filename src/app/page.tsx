import { AmbientBackground } from "@/components/atoms/AmbientBackground";
import { Hero } from "@/components/organisms/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Camada 0: Fundo Atmosférico */}
      <AmbientBackground />
      
      {/* Camada 1: Experiência de Imersão */}
      <div className="relative z-10">
        <Hero />
        {/* Seções futuras como Timeline e Quotes entrarão aqui em blocos organizados */}
      </div>
    </main>
  );
}
