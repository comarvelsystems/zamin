import { useSidebarCollapse } from '../../hooks';
import { cn } from '../../lib/utils';
import SidebarItems from './SidebarItems';
import SidebarLogo from './SidebarLogo';

const Sidebar = () => {
  const { collapse } = useSidebarCollapse();

  return (
    <aside
      className={cn(
        collapse && 'ltr:!-left-[270px] rtl:!-right-[270px]',
        'fixed inset-0 h-screen w-[270px] overflow-x-auto bg-black p-8 transition-all',
      )}
    >
      <SidebarLogo />
      <SidebarItems />
    </aside>
  );
};

export default Sidebar;
