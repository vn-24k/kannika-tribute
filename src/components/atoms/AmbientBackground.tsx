"use client";
export const AmbientBackground = () => (
  <div className="fixed inset-0 -z-50 bg-[#050505] overflow-hidden">
    {/* Efeito de luz difusa dourada no topo */}
    <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-yellow-600/10 blur-[150px] animate-pulse" />
    {/* Efeito de profundidade na base */}
    <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-zinc-800/20 blur-[120px]" />
    {/* Textura de ruído sutil para visual 'high-end' */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
  </div>
);
