import { ArrowLeft, Settings, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RouteConstants } from '@enums/route.constants';
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
    <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E5F3F3]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start md:items-center gap-3 md:gap-4">
          <Link to={RouteConstants.DASHBOARD} className="bg-[#F0F9F9] p-2.5 rounded-xl hover:bg-[#E0F7F7] active:scale-95 transition-all text-gray-500 hover:text-[#14B8A6] border border-[#E5F3F3] shrink-0">
            <ArrowLeft className="w-5 h-5" strokeWidth={2} />
          </Link>
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center shadow-lg shadow-[#14B8A6]/20">
              <svg viewBox="0 0 100 100" className="w-6 h-6 fill-white">
                <path d="M50 10C27.9 10 10 27.9 10 50s17.9 40 40 40 40-17.9 40-40S72.1 10 50 10zm0 70C33.4 80 20 66.6 20 50s13.4-30 30-30 30 13.4 30 30-13.4 30-30 30z"></path>
                <path d="M50 30c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 30c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-base md:text-lg font-bold text-gray-800 tracking-tight">AIN SHAMS GENERAL HOSPITAL</h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3 h-3 text-pink-500" strokeWidth={2.5} fill="#EC4899" />
                <div className="flex items-center gap-1.5 text-[#10B981] text-[10px] font-extrabold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full shadow-[0_0_6px_rgba(16,185,129,0.6)] animate-pulse"></div>
                  {AppConstants.STATUS_ACTIVE}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 text-sm font-bold mt-2 md:mt-0">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => onPeriodChange(period)}
              className={twMerge(
                "px-3 md:px-4 py-2 rounded-full transition-all duration-300 text-xs md:text-sm",
                currentPeriod === period
                  ? "bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white shadow-md shadow-[#14B8A6]/25"
                  : "bg-white text-gray-500 hover:text-gray-700 border border-[#E5F3F3] hover:bg-[#F0F9F9] shadow-sm"
              )}
            >
              {period}
            </button>
          ))}
          <div className="hidden sm:block w-[1px] h-6 bg-[#E5F3F3] mx-2 self-center"></div>
          <button className="px-3 md:px-4 py-2 rounded-full bg-white text-[#14B8A6] flex items-center gap-2 shadow-sm border border-[#E5F3F3] hover:bg-[#F0F9F9] transition-colors text-xs md:text-sm">
            <Settings className="w-4 h-4" strokeWidth={2} /> {AppConstants.BUTTON_FILTER}
          </button>
        </div>
      </div>
    </div>
  );
}
