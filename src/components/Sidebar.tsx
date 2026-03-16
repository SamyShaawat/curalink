import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Compass, Settings, Shield, LogOut, ChevronDown, ChevronUp } from 'lucide-react';
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
    <div className="w-64 bg-white/40 backdrop-blur-xl h-full lg:h-screen border-r border-white/40 flex flex-col shadow-[8px_0_32px_-12px_rgba(0,0,0,0.1)] flex-shrink-0 relative z-20">
      <div className="p-6 hidden lg:block">
        <div className="flex items-center gap-2">
          <div className="text-teal-600">
            {/* Logo placeholder, using an icon for now */}
            <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current">
              <path d="M50 10C27.9 10 10 27.9 10 50s17.9 40 40 40 40-17.9 40-40S72.1 10 50 10zm0 70C33.4 80 20 66.6 20 50s13.4-30 30-30 30 13.4 30 30-13.4 30-30 30z"></path>
              <path d="M50 30c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 30c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"></path>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-teal-600 tracking-tight leading-tight">{AppConstants.APP_NAME}</h1>
            <p className="text-[10px] text-teal-400 font-medium">{AppConstants.APP_SLOGAN}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 no-scrollbar">
        {navGroups.map((group) => {
          const isOpen = openGroups.includes(group.title);
          const GroupIcon = group.icon;
          return (
            <div key={group.title} className="mb-2">
              <button 
                onClick={() => toggleGroup(group.title)}
                className={twMerge("w-full flex items-center justify-between p-2 rounded-lg font-medium text-sm transition-colors", 
                  "text-teal-600 hover:bg-teal-50"
                )}
              >
                <div className="flex items-center gap-3">
                  <GroupIcon className="w-5 h-5 text-[#1A919E]" strokeWidth={2.5} />
                  <span className="font-bold text-gray-700">{group.title}</span>
                </div>
                {isOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>
              
              {isOpen && (
                <div className="mt-1 ml-4 pl-4 border-l-2 border-gray-100 space-y-1">
                  {group.items.map(item => {
                    const isActive = location.pathname === item.path || (location.pathname.startsWith(RouteConstants.HOSPITAL) && item.path === RouteConstants.HOSPITAL_AIN_SHAMS);
                    return (
                      <Link 
                        key={item.name}
                        to={item.path}
                        onClick={onClose}
                        className={twMerge(
                          "block py-2.5 px-4 rounded-xl text-sm font-semibold transition-all my-0.5",
                          isActive 
                            ? "bg-[#EAF5F5] text-[#1A919E]" 
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

      <div className="p-4 border-t border-gray-100 bg-gray-50/50">
        <div className="text-sm font-semibold text-gray-700">admin</div>
        <div className="text-xs text-gray-500 mb-4">(Curalink mode)</div>
        <button className="flex items-center gap-2 text-teal-600 font-medium text-sm hover:text-teal-700 w-full transition-colors">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
}
