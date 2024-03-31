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
    <main
      className={cn(
        collapse && 'overflow-y-hidden',
        !collapse && 'overflow-hidden sm:overflow-y-hidden',
        'h-screen',
      )}
    >
      <Sidebar />
      <section
        className={cn(
          !collapse && 'mr-[270px]',
          'w-full transition-all sm:w-auto',
        )}
      >
        <Outlet />
      </section>
    </main>
  );
};

export default MainLayout;
