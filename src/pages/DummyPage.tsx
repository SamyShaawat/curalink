import { Link } from 'react-router-dom';
import { TargetIcon } from '@components/common/TargetIcon';
import { RouteConstants } from '@enums/route.constants';
import { AppConstants } from '@enums/app.constants';

export function DummyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center animate-in fade-in zoom-in-95 duration-500">
      <div className="bg-white p-8 rounded-full shadow-sm border border-gray-100">
        <TargetIcon className="w-16 h-16 text-gray-300" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-[#2A4454] mb-2">{AppConstants.DUMMY_PAGE_TITLE}</h1>
        <p className="text-gray-500 max-w-md mx-auto">
          {AppConstants.DUMMY_PAGE_DESC}
        </p>
      </div>
      <Link 
        to={RouteConstants.DASHBOARD}
        className="mt-4 px-6 py-2.5 bg-[#1A919E] hover:bg-[#127173] text-white font-bold rounded-full shadow-md shadow-[#1A919E]/20 transition-all active:scale-95"
      >
        {AppConstants.RETURN_TO_DASHBOARD}
      </Link>
    </div>
  );
}
