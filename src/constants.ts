import {
  StickyNote,
  User,
  LayoutDashboard,
  CloudUpload,
  CloudDownload,
  Truck,
  LineChart,
  BarChart2,
  Bolt,
  CircleHelp,
  ShoppingCart,
} from 'lucide-react';
import { SidebarItemsProps } from './types';

export const SIDEBAR_ITEMS: SidebarItemsProps = {
  user: [
    {
      label: 'account',
      icon: User,
      href: 'dashboard/account',
    },
    {
      label: 'bills',
      icon: StickyNote,
      href: 'dashboard/bills',
      isCount: true,
    },
  ],
  pages: [
    {
      label: 'dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
    },
    {
      label: 'import',
      icon: CloudUpload,
      href: '/dashboard/import',
    },
    {
      label: 'export',
      icon: CloudDownload,
      href: '/dashboard/export',
    },
    {
      label: 'fbn',
      icon: Truck,
      href: 'dashboard/fbn-orders',
    },
    {
      label: 'statistics',
      icon: LineChart,
      href: '/dashboard/statistics',
    },
    {
      label: 'competitors',
      icon: BarChart2,
      href: '/dashboard/competitors',
    },
    {
      label: 'product-management',
      icon: ShoppingCart,
      href: '/dashboard/product-management',
    },
  ],
  others: [
    {
      label: 'settings',
      icon: Bolt,
      href: '/dashboard/settings',
    },
    {
      label: 'help',
      icon: CircleHelp,
      href: '/dashboard/help-center',
    },
  ],
};
