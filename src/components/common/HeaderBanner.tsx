import { ReactNode } from 'react';

export function HeaderBanner({ title, icon }: { title: string; icon: ReactNode }) {
  return (
    <div className="bg-white/40 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] flex items-center gap-3 border border-white/40">
      {icon}
      <h1 className="text-xl md:text-2xl font-bold text-[#1A919E]">{title}</h1>
    </div>
  );
}
