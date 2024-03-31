import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';

import { Input } from '../ui/input';

const TopBarSearch = () => {
  const { t } = useTranslation('', { keyPrefix: 'global' });

  return (
    <div className='relative w-64'>
      <div className='absolute top-1/2 -translate-y-1/2 ltr:left-2 rtl:right-2'>
        <Search size={18} className='text-muted-foreground' />
      </div>
      <Input
        type='text'
        placeholder={t('search')}
        className='w-full rounded-lg border-2 bg-input indent-5 focus:border-primary focus:!ring-0'
        onChange={e => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
};

export default TopBarSearch;
