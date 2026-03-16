import { StrictMode, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { NetworkDashboard } from '@pages/NetworkDashboard';
import { StudiesPage } from '@pages/StudiesPage';
import { HospitalDashboard } from '@pages/HospitalDashboard';
import { DummyPage } from '@pages/DummyPage';
import { RouteConstants } from '@enums/route.constants';

// Get preserved path from query parameter (set by 404.html redirect)
function getPreservedPath(): string | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  return params.get('path');
}

function PathRedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();
  const [handled, setHandled] = useState(false);

  useEffect(() => {
    const pathFromQuery = getPreservedPath();

    if (pathFromQuery && !handled) {
      setHandled(true);
      // Navigate to the preserved path and clean up the URL
      navigate(pathFromQuery, { replace: true });
    }
  }, [navigate, location.search, handled]);

  return null;
}

function HomeRedirect() {
  const preservedPath = getPreservedPath();
  
  // If there's a preserved path, redirect to it instead of dashboard
  if (preservedPath) {
    return <Navigate to={preservedPath} replace />;
  }
  
  // Otherwise redirect to dashboard as normal
  return <Navigate to={RouteConstants.DASHBOARD} replace />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path={RouteConstants.HOME} element={<HomeRedirect />} />
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
