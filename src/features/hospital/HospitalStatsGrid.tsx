import { ClipboardList, Users, Copy, Image, Stethoscope, Calendar } from 'lucide-react';
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

const iconMap: Record<string, any> = {
  [AppConstants.TOTAL_STUDIES]: ClipboardList,
  [AppConstants.TOTAL_PATIENTS]: Users,
  [AppConstants.TOTAL_SERIES]: Copy,
  [AppConstants.TOTAL_IMAGES]: Image,
  [AppConstants.MODALITIES]: Stethoscope,
  [AppConstants.ACTIVE_DAYS]: Calendar
};

export function HospitalStatsGrid({ stats }: HospitalStatsGridProps) {
  const statItems = [
    { label: AppConstants.TOTAL_STUDIES, value: stats.studies },
    { label: AppConstants.TOTAL_PATIENTS, value: stats.patients },
    { label: AppConstants.TOTAL_SERIES, value: stats.series },
    { label: AppConstants.TOTAL_IMAGES, value: stats.images, sub: 'Instances' },
    { label: AppConstants.MODALITIES, value: stats.modalities, sub: 'Distinct types' },
    { label: AppConstants.ACTIVE_DAYS, value: stats.activeDays, sub: 'With studies' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {statItems.map((stat, i) => {
        const Icon = iconMap[stat.label] || ClipboardList;
        return (
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{stat.label}</span>
              <Icon className="w-5 h-5 text-[#1A919E] opacity-40" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-gray-800">{stat.value}</div>
              {stat.sub && <div className="text-[9px] text-gray-400 font-bold mt-1">{stat.sub}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
