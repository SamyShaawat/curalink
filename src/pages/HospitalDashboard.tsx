import { HospitalHeader } from '@features/hospital/HospitalHeader';
import { HospitalStatsGrid } from '@features/hospital/HospitalStatsGrid';
import { StudiesOverTimeChart } from '@features/hospital/charts/StudiesOverTimeChart';
import { ModalitySplitChart } from '@features/hospital/charts/ModalitySplitChart';
import { StudiesByModalityChart } from '@features/hospital/charts/StudiesByModalityChart';
import { TopModalitiesRadialChart } from '@features/hospital/charts/TopModalitiesRadialChart';

const lineData = [
  { name: '02-03', val: 60 }, { name: '02-04', val: 18 }, { name: '02-05', val: 15 },
  { name: '02-06', val: 15 }, { name: '02-07', val: 56 }, { name: '02-08', val: 40 },
  { name: '02-09', val: 62 }, { name: '02-10', val: 64 }, { name: '02-11', val: 30 },
  { name: '02-12', val: 50 }, { name: '02-13', val: 5 }, { name: '02-14', val: 32 },
  { name: '02-15', val: 52 }, { name: '02-16', val: 48 }, { name: '02-17', val: 42 },
  { name: '02-18', val: 30 }, { name: '02-19', val: 10 }, { name: '02-21', val: 26 },
  { name: '02-22', val: 12 }, { name: '02-23', val: 4 }, { name: '02-26', val: 8 },
];

const barData = [
  { name: 'CT', val: 701 }
];

const pieData = [
  { name: 'CT', value: 701 }
];

export function HospitalDashboard() {
  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500 pb-10">
      <HospitalHeader />

      <HospitalStatsGrid />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[280px]">
        <StudiesOverTimeChart data={lineData} />
        <ModalitySplitChart data={[{name: 'CT', value: 100}]} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[260px] pt-4">
        <StudiesByModalityChart data={barData} />
        <TopModalitiesRadialChart data={pieData} />
      </div>
    </div>
  );
}
