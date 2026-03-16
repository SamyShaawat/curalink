import React from 'react';

export function InputGroup({ label, placeholder, icon, sub }: { label: string; placeholder?: string; icon?: React.ReactNode; sub?: React.ReactNode }) {
  return (
    <div className="flex flex-col relative w-full">
      <label className="text-sm font-semibold text-gray-500 mb-2">{label}</label>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-[#F0F9F9] hover:bg-[#E0F7F7] focus:bg-[#E0F7F7] border border-[#E5F3F3] focus:border-[#14B8A6] rounded-lg px-4 py-2.5 outline-none transition-all text-sm text-gray-700 placeholder-gray-400 font-medium"
        />
        {icon && <div className="absolute right-3 top-3">{icon}</div>}
      </div>
      {sub && <div className="mt-1.5">{sub}</div>}
    </div>
  );
}
