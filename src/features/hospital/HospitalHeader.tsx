import { ArrowLeft, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RouteConstants } from '@enums/route.constants';
import { TargetIcon } from '@components/common/TargetIcon';
import { AppConstants } from '@enums/app.constants';
import { twMerge } from 'tailwind-merge';

interface HospitalHeaderProps {
  currentPeriod: string;
  onPeriodChange: (period: string) => void;
}

export function HospitalHeader({ currentPeriod, onPeriodChange }: HospitalHeaderProps) {
  const periods = [
    AppConstants.PERIOD_7,
    AppConstants.PERIOD_30,
    AppConstants.PERIOD_90
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-start md:items-center gap-3 md:gap-4">
        <Link to={RouteConstants.DASHBOARD} className="bg-white p-2 rounded-full shadow-sm hover:shadow active:scale-95 transition-all text-gray-500 hover:text-[#1A919E] border border-gray-100 mt-1 md:mt-0 shrink-0">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex items-center gap-3">
          <TargetIcon className="w-6 h-6 md:w-8 md:h-8 text-[#1A919E] hidden sm:block" />
          <div>
            <h1 className="text-lg md:text-xl font-bold text-[#2A4454] tracking-tight leading-tight">AIN SHAMS GENERAL HOSPITAL</h1>
            <div className="flex items-center gap-1.5 mt-1 md:mt-1.5 text-[#0BB68C] text-xs font-extrabold uppercase tracking-widest">
              <div className="w-2 h-2 bg-[#0BB68C] rounded-full shadow-[0_0_4px_rgba(11,182,140,0.5)]"></div>
              {AppConstants.STATUS_ACTIVE}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm font-bold mt-2 md:mt-0">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => onPeriodChange(period)}
            className={twMerge(
              "px-3 md:px-4 py-1.5 rounded-full transition-all duration-300",
              currentPeriod === period
                ? "bg-[#1A919E] text-white shadow-md shadow-[#1A919E]/20"
                : "bg-white/40 backdrop-blur-md text-gray-400 hover:text-gray-700 border border-white/40 hover:bg-white/60"
            )}
          >
            {period}
          </button>
        ))}
        <div className="hidden sm:block w-[1px] h-8 bg-gray-200 mx-1 md:mx-2 self-center"></div>
        <button className="px-3 md:px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md text-[#1A919E] flex items-center gap-2 shadow-sm border border-white/40 hover:bg-white/60 transition-colors ml-auto sm:ml-0">
          <Settings className="w-4 h-4" /> {AppConstants.BUTTON_FILTER}
        </button>
      </div>
    </div>
  );
}
