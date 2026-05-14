"use client";
export const AmbientBackground = () => (
  <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-500/10 blur-[120px] animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-600/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
  </div>
);
