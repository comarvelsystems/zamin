import { useContext } from 'react';

import { SidebarCollapseContext } from '../context/sidebarCollapseContext';
import { SidebarCollapseContextProps } from '../types';

const useSidebarCollapse = () => {
  const { collapse, setCollapse } = useContext<SidebarCollapseContextProps>(
    SidebarCollapseContext,
  );

  return {
    collapse,
    setCollapse,
  };
};

export default useSidebarCollapse;
