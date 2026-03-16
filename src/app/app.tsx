import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { NetworkDashboard } from '@pages/NetworkDashboard';
import { StudiesPage } from '@pages/StudiesPage';
import { HospitalDashboard } from '@pages/HospitalDashboard';
import { DummyPage } from '@pages/DummyPage';
import { RouteConstants } from '@enums/route.constants';

export function App() {
  return (
    <StrictMode>
      <BrowserRouter basename={RouteConstants.BASE}>
        <Routes>
          <Route path={RouteConstants.HOME} element={<Navigate to={RouteConstants.DASHBOARD} replace />} />
          <Route element={<Layout />}>
            <Route path={RouteConstants.DASHBOARD} element={<NetworkDashboard />} />
            <Route path={RouteConstants.STUDIES} element={<StudiesPage />} />
            <Route path={RouteConstants.HOSPITAL_DETAILS} element={<HospitalDashboard />} />
            <Route path={RouteConstants.SETTINGS} element={<DummyPage />} />
            <Route path={RouteConstants.LOGOUT} element={<DummyPage />} />
            <Route path="*" element={<DummyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
