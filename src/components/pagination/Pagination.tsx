import { useTranslation } from 'react-i18next';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import PaginationChevron from './PaginationChevron';

const Pagination = () => {
  const { t } = useTranslation('', { keyPrefix: 'pagination' });

  return (
    <div className='flex-between rounded-b-lg border-x border-b border-border bg-background p-4 text-sm'>
      <p className='text-muted-foreground'>
        {t('selected')} 0 {t('from')} 100 {t('rows')}.
      </p>
      <div className='flex-items-center gap-3'>
        <p>
          {t('page')} 1 {t('from')} 10
        </p>
        <div className='flex-items-center gap-1'>
          <PaginationChevron isMuted handleClick={() => {}}>
            <ChevronsRight size={20} />
          </PaginationChevron>
          <PaginationChevron isMuted handleClick={() => {}}>
            <ChevronRight size={20} />
          </PaginationChevron>
          <PaginationChevron handleClick={() => {}}>
            <ChevronLeft size={20} />
          </PaginationChevron>
          <PaginationChevron handleClick={() => {}}>
            <ChevronsLeft size={20} />
          </PaginationChevron>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
