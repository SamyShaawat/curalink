import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { NetworkDashboard } from '@pages/NetworkDashboard';
import { StudiesPage } from '@pages/StudiesPage';
import { HospitalDashboard } from '@pages/HospitalDashboard';
import { DummyPage } from '@pages/DummyPage';

export function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<NetworkDashboard />} />
            <Route path="/studies" element={<StudiesPage />} />
            <Route path="/hospital/:id" element={<HospitalDashboard />} />
            <Route path="*" element={<DummyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
