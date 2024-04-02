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
import ImportFileTable from '../features/import-file/ImportFileTable';

const ImportFilePage = () => {
  const { t } = useTranslation('', { keyPrefix: 'importPage' });

  return (
    <>
      <TopBar title='اسم الملف'>
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
        <ImportFileTable />
      </section>
    </>
  );
};

export default ImportFilePage;
