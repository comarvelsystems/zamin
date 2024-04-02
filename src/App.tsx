import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './layout';
import {
  ExportPage,
  FbnOrderPage,
  HomePage,
  ImportFilePage,
  ImportPage,
} from './pages';
import SideBarCollapseProvider from './context/sidebarCollapseContext';

const App = () => {
  return (
    <Routes>
      <Route
        path='/dashboard'
        element={
          <SideBarCollapseProvider>
            <MainLayout />
          </SideBarCollapseProvider>
        }
      >
        <Route index element={<HomePage />} />
        <Route path='import'>
          <Route index element={<ImportPage />} />
          <Route path=':slug' element={<ImportFilePage />} />
        </Route>
        <Route path='export' element={<ExportPage />} />
        <Route path='fbn-order' element={<FbnOrderPage />} />
      </Route>
    </Routes>
  );
};

export default App;
