import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './layout';
import { ExportPage, FbnOrderPage, HomePage, ImportPage } from './pages';
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
        <Route path='import' element={<ImportPage />} />
        <Route path='export' element={<ExportPage />} />
        <Route path='fbn-order' element={<FbnOrderPage />} />
      </Route>
    </Routes>
  );
};

export default App;
