import { Target } from 'lucide-react';
import { HeaderBanner } from '@components/common/HeaderBanner';
import { NetworkStatCard } from '@features/network/NetworkStatCard';
import { NetworkSearch } from '@features/network/NetworkSearch';
import { HospitalCard } from '@features/network/HospitalCard';

const stats = [
  { label: 'Total Institutions', value: '3', sub: '3 Active' },
  { label: 'Total Patients', value: '1,620' },
  { label: 'Total Studies', value: '1,676' },
  { label: 'Total Series', value: '978', sub: 'Across all studies' },
  { label: 'Total Images', value: '107,170', sub: 'DICOM instances' },
  { label: 'Modality Types', value: '2', sub: 'CT, CR' }
];

const hospitals = [
  {
    id: 1,
    name: 'Ain Shams General',
    address: 'Initial Street Name Cairo Egypt',
    patients: '910',
    studies: '966',
    modalities: ['CR'],
    departments: ['Radiology']
  },
  {
    id: 2,
    name: 'AIN SHAMS GENERAL HOSPITAL',
    address: 'HOSPITAL ADDRESS',
    patients: '701',
    studies: '701',
    modalities: ['CT'],
    departments: ['ID_DEPARTMENT']
  },
  {
    id: 3,
    name: 'SUN SCAN',
    address: 'City ZIP Street StreetNo',
    patients: '9',
    studies: '9',
    modalities: ['CT', 'PT'],
    departments: ['Department']
  }
];

export function NetworkDashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10 w-full">
      <HeaderBanner
        title="Network Dashboard"
        icon={<Target className="w-6 h-6 text-[#1A919E]" strokeWidth={2} />}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {stats.map((stat, i) => (
          <NetworkStatCard key={i} stat={stat} />
        ))}
      </div>

      <NetworkSearch count={hospitals.length} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {hospitals.map(hospital => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </div>
  );
}
