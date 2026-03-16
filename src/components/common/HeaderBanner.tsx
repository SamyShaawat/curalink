import { ReactNode } from 'react';

export function HeaderBanner({ title, icon }: { title: string; icon: ReactNode }) {
  return (
    <div className="bg-white px-6 py-5 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E5F3F3] flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#14B8A6]/10 to-[#0D9488]/10 flex items-center justify-center">
        {icon}
      </div>
      <h1 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h1>
    </div>
  );
}
