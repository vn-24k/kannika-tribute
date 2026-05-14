export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050505]">
      <div className="text-center px-4">
        <h1 className="editorial-headline text-5xl md:text-7xl text-gold-light tracking-wide mb-4 animate-subtle-pulse italic" style={{ fontFamily: 'var(--font-serif)', color: '#D4AF37' }}>
          Kannika
        </h1>
        <p className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase font-light" style={{ fontFamily: 'var(--font-sans)' }}>
          A Digital Tribute • Estate 2026
        </p>
      </div>
    </main>
  );
}
