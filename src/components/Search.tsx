import { useTranslation } from 'react-i18next';
import { Search as SearchIcon } from 'lucide-react';

import { Input } from './ui/input';

const Search = () => {
  const { t } = useTranslation();

  return (
    <div className='relative basis-3/5 sm:w-64 sm:basis-auto'>
      <div className='absolute top-1/2 -translate-y-1/2 ltr:left-2 rtl:right-2'>
        <SearchIcon size={18} className='text-muted-foreground' />
      </div>
      <Input
        type='text'
        placeholder={t('global.search')}
        className='w-full rounded-lg border-2 indent-5 focus:border-primary focus:!ring-0'
        onChange={e => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
