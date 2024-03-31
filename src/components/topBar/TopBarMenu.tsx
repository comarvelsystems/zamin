import { Menu, X } from 'lucide-react';

import { useSidebarCollapse } from '../../hooks';
import { SidebarCollapseContextProps } from '../../types';

const TopBarMenu = () => {
  const { collapse, setCollapse } = useSidebarCollapse();

  const handleCollapse = () => {
    setCollapse((prev: SidebarCollapseContextProps) => !prev);
  };

  return (
    <div
      className='cursor-pointer rounded-sm p-1 text-foreground'
      onClick={handleCollapse}
    >
      {collapse ? <X /> : <Menu />}
    </div>
  );
};

export default TopBarMenu;
