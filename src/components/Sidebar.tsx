import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Compass, Settings, Shield, LogOut, ChevronDown, ChevronUp, Building2, Search, Users, FileText, Server, GitBranch, FileCheck, Export, UsersRound } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { RouteConstants } from '@enums/route.constants';
import { AppConstants } from '@enums/app.constants';

const navGroups = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    items: [
      { name: 'Hospitals Dashboard', path: RouteConstants.DASHBOARD },
      { name: 'Ain Shams Hospital', path: RouteConstants.HOSPITAL_AIN_SHAMS }
    ]
  },
  {
    title: 'Navigation',
    icon: Compass,
    items: [
      { name: 'Smart Search', path: RouteConstants.SMART_SEARCH },
      { name: 'Patient', path: RouteConstants.PATIENT },
      { name: 'Studies', path: RouteConstants.STUDIES }
    ]
  },
  {
    title: 'Configuration',
    icon: Settings,
    items: [
      { name: 'Devices', path: RouteConstants.DEVICES },
      { name: 'Application Entities (AE)', path: RouteConstants.AE },
      { name: 'HL7 Application', path: RouteConstants.HL7 },
      { name: 'Routing Rules', path: RouteConstants.ROUTING },
      { name: 'Transform Rules', path: RouteConstants.TRANSFORM },
      { name: 'Export Rules', path: RouteConstants.EXPORT }
    ]
  },
  {
    title: 'Administration',
    icon: Shield,
    items: [
      { name: 'Users', path: RouteConstants.USERS }
    ]
  }
];

export function Sidebar({ onClose }: { onClose?: () => void }) {
  const location = useLocation();
  const [openGroups, setOpenGroups] = useState<string[]>(['Dashboard', 'Navigation', 'Configuration']);

  const toggleGroup = (title: string) => {
    setOpenGroups(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  return (
    <div className="w-[280px] bg-white h-full lg:h-screen border-r border-[#E5F3F3] flex flex-col shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)] flex-shrink-0 relative z-20">
      {/* Logo Section */}
      <div className="p-6 border-b border-[#E5F3F3]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A919E] to-[#0D9488] flex items-center justify-center shadow-lg shadow-[#1A919E]/20">
            <svg viewBox="0 0 100 100" className="w-7 h-7 fill-white">
              <path d="M50 10C27.9 10 10 27.9 10 50s17.9 40 40 40 40-17.9 40-40S72.1 10 50 10zm0 70C33.4 80 20 66.6 20 50s13.4-30 30-30 30 13.4 30 30-13.4 30-30 30z"></path>
              <path d="M50 30c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 30c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"></path>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#1A919E] tracking-tight">{AppConstants.APP_NAME}</h1>
            <p className="text-[10px] text-gray-400 font-medium">where care connects</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1 no-scrollbar">
        {navGroups.map((group) => {
          const isOpen = openGroups.includes(group.title);
          const GroupIcon = group.icon;
          return (
            <div key={group.title} className="mb-1">
              <button
                onClick={() => toggleGroup(group.title)}
                className={twMerge(
                  "w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-sm transition-all",
                  "text-gray-600 hover:bg-[#F0FDFD] hover:text-[#1A919E]"
                )}
              >
                <div className="flex items-center gap-3">
                  <GroupIcon className="w-5 h-5 text-[#1A919E]" strokeWidth={2} />
                  <span className="font-semibold">{group.title}</span>
                </div>
                {isOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>

              {isOpen && (
                <div className="mt-1 ml-4 pl-3 border-l-2 border-[#E5F3F3] space-y-0.5">
                  {group.items.map(item => {
                    const isActive = location.pathname === item.path || (location.pathname.startsWith(RouteConstants.HOSPITAL) && item.path === RouteConstants.HOSPITAL_AIN_SHAMS);
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={onClose}
                        className={twMerge(
                          "block py-2 px-3 rounded-lg text-sm font-medium transition-all",
                          isActive
                            ? "bg-[#1A919E] text-white shadow-md shadow-[#1A919E]/20"
                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        )}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-[#E5F3F3] bg-gradient-to-t from-gray-50/80 to-white">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1A919E] to-[#0D9488] flex items-center justify-center text-white font-bold text-sm shadow-md">
            A
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-gray-700">admin</div>
            <div className="text-xs text-gray-400">(Curalink mode)</div>
          </div>
        </div>
        <Link
          to={RouteConstants.LOGOUT}
          onClick={onClose}
          className="flex items-center gap-2.5 text-gray-600 font-medium text-sm hover:text-[#1A919E] hover:bg-[#F0FDFD] w-full px-3 py-2 rounded-lg transition-all"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Link>
      </div>
    </div>
  );
}
