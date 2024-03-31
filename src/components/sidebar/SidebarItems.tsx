import { useTranslation } from 'react-i18next';

import { SIDEBAR_ITEMS } from '../../constants';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import SidebarItem from './SidebarItem';

const SidebarItems = () => {
  const { t } = useTranslation('', { keyPrefix: 'sidebar' });

  const itemsForUser = SIDEBAR_ITEMS.user.map(item => (
    <SidebarItem key={item.label} {...item} />
  ));
  const itemsForPages = SIDEBAR_ITEMS.pages.map(item => (
    <SidebarItem key={item.label} {...item} />
  ));
  const itemsForOthers = SIDEBAR_ITEMS.others.map(item => (
    <SidebarItem key={item.label} {...item} />
  ));

  return (
    <div className='space-y-5 divide-y divide-border/10'>
      <div className='mt-10 space-y-4'>
        <div className='flex-items-center gap-3'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' width={40} />
            <AvatarFallback>AH</AvatarFallback>
          </Avatar>
          <div>
            <p className='text-primary-foreground'>أحمد قاسم</p>
            <span className='text-muted-foreground'>Premium account</span>
          </div>
        </div>
        <ul>{itemsForUser}</ul>
      </div>

      <div className='space-y-6 pt-6'>
        <span className='font-medium text-muted-foreground'>{t('pages')}</span>
        <ul className='space-y-3'>{itemsForPages}</ul>
      </div>

      <div className='space-y-6 pt-6'>
        <span className='font-medium text-muted-foreground'>{t('others')}</span>
        <ul className='space-y-3'>{itemsForOthers}</ul>
      </div>
    </div>
  );
};

export default SidebarItems;
