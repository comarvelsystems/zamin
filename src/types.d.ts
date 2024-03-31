import { type LucideIcon } from 'lucide-react';

type ChildrenProp = {
  children: React.ReactNode;
};

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'large';
  weight?: 'regular' | 'medium' | 'semi-bold' | 'bold';
  align?: 'inherit' | 'right' | 'center' | 'left';
  children: React.ReactNode;
};

type SidebarItemProps = {
  label: string;
  icon: LucideIcon;
  href: string;
  isCount?: boolean;
};

type SidebarItemsProps = {
  user: SidebarItemProps[];
  pages: SidebarItemProps[];
  others: SidebarItemProps[];
};

type TopBarProps = {
  title: string;
  children?: ReactNode;
};

type SidebarCollapseContextProps = {
  collapse: boolean;
  setCollapse: Dispatch<SetStateAction<boolean>>;
};
