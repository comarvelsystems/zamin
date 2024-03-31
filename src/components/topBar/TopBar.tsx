import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Heading from '../Heading';
import TopBarMenu from './TopBarMenu';
import TopBarSearch from './TopBarSearch';
import { TopBarProps } from '../../types';

const TopBar: FC<TopBarProps> = ({ title, children }) => {
  const { t } = useTranslation();

  return (
    <header className='flex-between border-b border-border bg-background px-10 py-6'>
      <div className='flex-center gap-3'>
        <TopBarMenu />
        <Heading as='h1'>{t(title)}</Heading>
      </div>

      <div className='flex-items-center gap-4'>
        <TopBarSearch />
        {children}
      </div>
    </header>
  );
};

export default TopBar;
