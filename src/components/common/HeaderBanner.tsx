import { ReactNode } from 'react';

export function HeaderBanner({ title, icon }: { title: string; icon: ReactNode }) {
  return (
    <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-sm flex items-center gap-3 border border-white/40">
      {icon}
      <h1 className="text-xl md:text-2xl font-bold text-[#1A919E]">{title}</h1>
    </div>
  );
}
