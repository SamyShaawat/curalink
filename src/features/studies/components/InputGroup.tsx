import React from 'react';

export function InputGroup({ label, placeholder, icon, sub }: { label: string; placeholder?: string; icon?: React.ReactNode; sub?: React.ReactNode }) {
  return (
    <div className="flex flex-col relative w-full">
      <label className="text-sm font-semibold text-gray-500 mb-2">{label}</label>
      <div className="relative">
        <input 
          type="text" 
          placeholder={placeholder}
          className="w-full bg-[#EAF5F5]/60 hover:bg-[#EAF5F5] focus:bg-[#EAF5F5] border border-transparent focus:border-[#1A919E]/30 rounded-lg px-4 py-2.5 outline-none transition-colors text-sm text-gray-700 placeholder-gray-400 font-medium"
        />
        {icon && <div className="absolute right-3 top-3">{icon}</div>}
      </div>
      {sub && <div className="absolute -bottom-7">{sub}</div>}
    </div>
  );
}
