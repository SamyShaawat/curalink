import { useState } from 'react';
import { HospitalHeader } from '@features/hospital/HospitalHeader';
import { HospitalStatsGrid } from '@features/hospital/HospitalStatsGrid';
import { StudiesOverTimeChart } from '@features/hospital/charts/StudiesOverTimeChart';
import { ModalitySplitChart } from '@features/hospital/charts/ModalitySplitChart';
import { StudiesByModalityChart } from '@features/hospital/charts/StudiesByModalityChart';
import { TopModalitiesRadialChart } from '@features/hospital/charts/TopModalitiesRadialChart';
import { AppConstants } from '@enums/app.constants';

const dashboardData: Record<string, any> = {
  [AppConstants.PERIOD_7]: {
    stats: {
      studies: '152',
      patients: '148',
      series: '960',
      images: '120,400',
      modalities: '1',
      activeDays: '7'
    },
    line: [
      { name: '02-20', val: 12 }, { name: '02-21', val: 26 }, { name: '02-22', val: 12 }, 
      { name: '02-23', val: 4 }, { name: '02-24', val: 35 }, { name: '02-25', val: 55 },
      { name: '02-26', val: 8 },
    ],
    bar: [{ name: 'CT', val: 152 }],
    pie: [{ name: 'CT', value: 152 }],
    split: [{ name: 'CT', value: 100 }]
  },
  [AppConstants.PERIOD_30]: {
    stats: {
      studies: '701',
      patients: '701',
      series: '4,958',
      images: '635,205',
      modalities: '1',
      activeDays: '21'
    },
    line: [
      { name: '02-03', val: 60 }, { name: '02-04', val: 18 }, { name: '02-05', val: 15 },
      { name: '02-06', val: 15 }, { name: '02-07', val: 56 }, { name: '02-08', val: 40 },
      { name: '02-09', val: 62 }, { name: '02-10', val: 64 }, { name: '02-11', val: 30 },
      { name: '02-12', val: 50 }, { name: '02-13', val: 5 }, { name: '02-14', val: 32 },
      { name: '02-15', val: 52 }, { name: '02-16', val: 48 }, { name: '02-17', val: 42 },
      { name: '02-18', val: 30 }, { name: '02-19', val: 10 }, { name: '02-21', val: 26 },
      { name: '02-22', val: 12 }, { name: '02-23', val: 4 }, { name: '02-26', val: 8 },
    ],
    bar: [{ name: 'CT', val: 701 }],
    pie: [{ name: 'CT', value: 701 }],
    split: [{ name: 'CT', value: 100 }]
  },
  [AppConstants.PERIOD_90]: {
    stats: {
      studies: '1,842',
      patients: '1,720',
      series: '12,400',
      images: '2,104,800',
      modalities: '2',
      activeDays: '78'
    },
    line: [
      { name: 'Dec', val: 450 }, { name: 'Jan', val: 680 }, { name: 'Feb', val: 701 }
    ],
    bar: [{ name: 'CT', val: 1600 }, { name: 'MR', val: 242 }],
    pie: [{ name: 'CT', value: 1600 }, { name: 'MR', value: 242 }],
    split: [{ name: 'CT', value: 87 }, { name: 'MR', value: 13 }]
  }
};

export function HospitalDashboard() {
  const [period, setPeriod] = useState(AppConstants.PERIOD_30);
  const data = dashboardData[period];

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500 pb-10">
      <HospitalHeader currentPeriod={period} onPeriodChange={setPeriod} />

      <HospitalStatsGrid stats={data.stats} />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[280px]">
        <StudiesOverTimeChart data={data.line} />
        <ModalitySplitChart data={data.split} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[260px] pt-4">
        <StudiesByModalityChart data={data.bar} />
        <TopModalitiesRadialChart data={data.pie} />
      </div>
    </div>
  );
}
