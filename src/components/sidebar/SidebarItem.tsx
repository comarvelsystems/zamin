import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { cn } from '../../lib/utils';
import { SidebarItemProps } from '../../types';

const SidebarItem: FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
  isCount,
}) => {
  const { t } = useTranslation('', { keyPrefix: 'sidebar' });

  return (
    <li>
      <NavLink
        to={href}
        end
        className={({ isActive }) =>
          cn(
            'flex-between w-full rounded-xl p-[10px] text-muted transition-colors hover:bg-primary',
            isActive && 'bg-primary',
          )
        }
      >
        <div className='flex-items-center gap-3 font-medium'>
          <Icon size={20} />
          {t(label)}
        </div>
        {isCount && (
          <span className='flex-center h-6 w-6 rounded-full bg-primary text-center text-sm font-bold'>
            12
          </span>
        )}
      </NavLink>
    </li>
  );
};

export default SidebarItem;
