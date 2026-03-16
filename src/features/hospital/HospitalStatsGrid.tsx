import { LayoutDashboard, Users, Copy, Calendar } from 'lucide-react';
import React from 'react';

export function HospitalStatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
      <StatCard label="TOTAL STUDIES" val="701" icon={<LayoutDashboard className="w-5 h-5 opacity-40 text-[#1A919E]" strokeWidth={2.5}/>} />
      <StatCard label="TOTAL PATIENTS" val="701" icon={<Users className="w-5 h-5 opacity-40 text-[#1A919E]" strokeWidth={2.5}/>} />
      <StatCard label="TOTAL SERIES" val="4,958" icon={<Copy className="w-5 h-5 opacity-40 text-[#1A919E]" strokeWidth={2.5}/>} />
      <StatCard label="TOTAL IMAGES" val="635,205" sub="Instances" icon={<div className="font-serif opacity-40 text-[#1A919E] text-lg">A</div>} />
      
      <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100 h-full flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">MODALITIES</span>
            <span className="text-lg opacity-40 text-[#1A919E]" role="img" aria-label="medical">⚕</span>
          </div>
          <div className="mt-4">
            <div className="text-2xl md:text-3xl font-extrabold text-gray-800">1</div>
            <div className="text-[9px] md:text-[10px] text-gray-400 font-bold mt-1">Distinct types</div>
          </div>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100 h-full flex flex-col justify-between max-w-sm col-span-2 md:col-span-1 lg:col-span-1 group hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">ACTIVE DAYS</span>
            <Calendar className="w-5 h-5 opacity-40 text-[#1A919E]" strokeWidth={2.5}/>
          </div>
          <div className="mt-4">
            <div className="text-2xl md:text-3xl font-extrabold text-gray-800">21</div>
            <div className="text-[9px] md:text-[10px] text-gray-400 font-bold mt-1">With studies</div>
          </div>
      </div>
    </div>
  );
}

function StatCard({ label, val, sub, icon }: { label: string; val: string; sub?: string; icon: React.ReactNode }) {
  return (
    <div className="bg-[#ffffff] rounded-xl p-5 shadow-sm border border-gray-100 h-full flex flex-col justify-between group hover:shadow-[0_4px_12px_rgba(26,145,158,0.06)] transition-all">
      <div className="flex justify-between items-start">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest overflow-hidden text-ellipsis whitespace-nowrap leading-tight">{label}</span>
        {icon}
      </div>
      <div className="mt-4">
        <div className="text-3xl font-extrabold text-gray-800">{val}</div>
        {sub && <div className="text-[10px] text-gray-400 font-bold mt-1">{sub}</div>}
      </div>
    </div>
  );
}
