import { StrictMode, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { NetworkDashboard } from '@pages/NetworkDashboard';
import { StudiesPage } from '@pages/StudiesPage';
import { HospitalDashboard } from '@pages/HospitalDashboard';
import { DummyPage } from '@pages/DummyPage';
import { RouteConstants } from '@enums/route.constants';

function PathRedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for path query parameter from 404.html redirect
    const params = new URLSearchParams(location.search);
    const pathFromQuery = params.get('path');

    if (pathFromQuery) {
      // Navigate to the preserved path and clean up the URL
      navigate(pathFromQuery, { replace: true });
    }
  }, [navigate, location.search]);

  return null;
}

function AppRoutes() {
  return (
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
  );
}

export function App() {
  return (
    <StrictMode>
      <BrowserRouter basename={RouteConstants.BASE}>
        <PathRedirectHandler />
        <AppRoutes />
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
