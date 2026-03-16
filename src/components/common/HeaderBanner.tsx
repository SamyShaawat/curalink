import { ReactNode } from 'react';

export function HeaderBanner({ title, icon }: { title: string; icon: ReactNode }) {
  return (
    <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
      {icon}
      <h1 className="text-xl md:text-2xl font-bold text-[#1A919E]">{title}</h1>
    </div>
  );
}
