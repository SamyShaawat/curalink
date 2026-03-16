import { Building2, Users, ClipboardList, Copy, Image, Activity } from 'lucide-react';

const iconMap: Record<string, any> = {
  'Total Institutions': Building2,
  'Total Patients': Users,
  'Total Studies': ClipboardList,
  'Total Series': Copy,
  'Total Images': Image,
  'Modality Types': Activity
};

export function NetworkStatCard({ stat }: { stat: { label: string, value: string, sub?: string } }) {
  const Icon = iconMap[stat.label] || Building2;
  
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-semibold text-gray-500">{stat.label}</h3>
        <Icon className="w-5 h-5 text-[#1A919E] opacity-40" strokeWidth={2.5} />
      </div>
      <div className="flex items-end justify-between">
        <span className="text-4xl font-bold text-gray-800">{stat.value}</span>
        {stat.sub && <span className="text-xs text-gray-400 font-medium pb-1">{stat.sub}</span>}
      </div>
    </div>
  );
}
