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
import { BreadcrumbDynamic } from '../components';

const ImportPage = () => {
  const { t } = useTranslation('', { keyPrefix: 'importPage' });

  return (
    <div>
      <TopBar title='sidebar.import'>
        <Dialog>
          <DialogTrigger className='flex-center basis-2/5 gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm text-muted sm:basis-auto'>
            <CloudUpload size={18} />
            {t('button')}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </TopBar>
      <BreadcrumbDynamic />
    </div>
  );
};

export default ImportPage;
