import { Navigate, Route, Routes } from 'react-router';

import { MainLayout } from '@components/layouts/MainLayout';
import { RigView } from '@pages/RigView';
import { Management } from '@pages/Management';

export const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<RigView />} />
        <Route path="/management" element={<Management />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
