import { Sidebar } from '@components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { AppConstants } from '@enums/app.constants';

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#EAF5F5] font-sans antialiased relative overflow-hidden">
      {/* Dynamic Background Elements for Glassmorphism */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#1A919E]/20 to-transparent blur-[120px]"></div>
        <div className="absolute bottom-[5%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#0BB68C]/15 to-transparent blur-[100px]"></div>
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-b from-indigo-400/5 to-transparent blur-[80px]"></div>
        
        {/* Abstract lines (Optional but helps with movement) */}
        <div className="absolute top-0 right-0 w-[80%] h-full opacity-30 pointer-events-none hidden md:block">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="w-full h-full text-teal-200 fill-current opacity-20">
            <path d="M0 1000C150 700 300 900 600 500C900 100 1000 0 1000 0L1000 1000Z"></path>
          </svg>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-40 shadow-sm">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 100 100" className="w-8 h-8 fill-current text-teal-600">
            <path d="M50 10C27.9 10 10 27.9 10 50s17.9 40 40 40 40-17.9 40-40S72.1 10 50 10zm0 70C33.4 80 20 66.6 20 50s13.4-30 30-30 30 13.4 30 30-13.4 30-30 30z"></path>
            <path d="M50 30c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 30c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"></path>
          </svg>
          <div>
            <h1 className="text-lg font-bold text-teal-600 tracking-tight leading-tight">{AppConstants.APP_NAME}</h1>
          </div>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-500 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors">
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-[#A0AEC0]/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Wrapper */}
      <div className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      <main className="flex-1 flex flex-col z-10 w-full h-screen overflow-y-auto px-4 lg:px-6 pt-20 lg:pt-6">
        <div className="max-w-[1400px] w-full mx-auto pb-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
