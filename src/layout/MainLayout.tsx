import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../components/sidebar/Sidebar';
import { useSidebarCollapse } from '../hooks';
import { cn } from '../lib/utils';

const MainLayout = () => {
  const { collapse, setCollapse } = useSidebarCollapse();

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setCollapse(true);
    }
  }, [setCollapse]);

  return (
    <main>
      <Sidebar />
      <div className={cn(!collapse && 'mr-[270px]', 'transition-all')}>
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
