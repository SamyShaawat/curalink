import { FileText, Users, Copy, Image, Activity, CalendarDays } from 'lucide-react';
import React from 'react';
import { AppConstants } from '@enums/app.constants';

interface HospitalStatsGridProps {
  stats: {
    studies: string;
    patients: string;
    series: string;
    images: string;
    modalities: string;
    activeDays: string;
  }
}

export function HospitalStatsGrid({ stats }: HospitalStatsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
      <StatCard label={AppConstants.TOTAL_STUDIES} val={stats.studies} icon={<FileText className="w-5 h-5 opacity-40 text-[#14B8A6]" strokeWidth={2.5}/>} />
      <StatCard label={AppConstants.TOTAL_PATIENTS} val={stats.patients} icon={<Users className="w-5 h-5 opacity-40 text-[#14B8A6]" strokeWidth={2.5}/>} />
      <StatCard label={AppConstants.TOTAL_SERIES} val={stats.series} icon={<Copy className="w-5 h-5 opacity-40 text-[#14B8A6]" strokeWidth={2.5}/>} />
      <StatCard label={AppConstants.TOTAL_IMAGES} val={stats.images} sub="Instances" icon={<Image className="w-5 h-5 opacity-40 text-[#14B8A6]" strokeWidth={2.5}/>} />
      <StatCard label={AppConstants.MODALITIES} val={stats.modalities} sub="Distinct types" icon={<Activity className="w-5 h-5 opacity-40 text-[#14B8A6]" strokeWidth={2.5}/>} />
      <StatCard label={AppConstants.ACTIVE_DAYS} val={stats.activeDays} sub="With studies" icon={<CalendarDays className="w-5 h-5 opacity-40 text-[#14B8A6]" strokeWidth={2.5}/>} />
    </div>
  );
}

function StatCard({ label, val, sub, icon }: { label: string; val: string; sub?: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl p-4 md:p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E5F3F3] h-full flex flex-col justify-between group hover:shadow-[0_8px_30px_-4px_rgba(20,184,166,0.15)] hover:border-[#14B8A6]/30 transition-all duration-300">
      <div className="flex justify-between items-start">
        <span className="text-[9px] md:text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">{label}</span>
        {icon}
      </div>
      <div className="mt-3 md:mt-4">
        <div className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-800">{val}</div>
        {sub && <div className="text-[8px] md:text-[9px] text-gray-400 font-bold mt-1">{sub}</div>}
      </div>
    </div>
  );
}
