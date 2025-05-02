import { Navigate, Route, Routes } from 'react-router';

import { MainLayout } from '@components/layouts/MainLayout';
import { RigView } from '@pages/RigView';

export const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<RigView />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
