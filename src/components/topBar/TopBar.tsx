import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Heading from '../Heading';
import TopBarMenu from './TopBarMenu';
import TopBarSearch from './TopBarSearch';
import { TopBarProps } from '../../types';
import { ModeToggle } from '../ModeToggle';

const TopBar: FC<TopBarProps> = ({ title, children }) => {
  const { t } = useTranslation();

  return (
    <header className='sm:flex-between flex flex-col gap-3 border-b border-border bg-background px-2 py-6 sm:flex-row sm:gap-0 sm:px-10'>
      <div className='sm:flex-center flex gap-3'>
        <TopBarMenu />
        <Heading as='h1'>{t(title)}</Heading>
      </div>

      <div className='flex-items-center gap-4'>
        <ModeToggle />
        <TopBarSearch />
        {children}
      </div>
    </header>
  );
};

export default TopBar;
