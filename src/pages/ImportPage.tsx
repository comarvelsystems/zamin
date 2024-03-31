import { useTranslation } from 'react-i18next';
import { CloudUpload } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import TopBar from '../components/topBar/TopBar';
import { BreadcrumbDynamic, TableOperational } from '../components';
import ImportTable from '../features/import/ImportTable';

const ImportPage = () => {
  const { t } = useTranslation('', { keyPrefix: 'importPage' });

  return (
    <>
      <TopBar title='sidebar.import'>
        <Dialog>
          <DialogTrigger className='flex-center basis-2/5 gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm text-primary-foreground sm:basis-auto'>
            <CloudUpload size={18} />
            {t('button')}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t('modal.title')}</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </TopBar>
      <BreadcrumbDynamic />

      <section className='px-2 pt-4 sm:px-10'>
        <TableOperational />
        <ImportTable />
      </section>
    </>
  );
};

export default ImportPage;
