import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Slash } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

const BreadcrumbDynamic = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation('', { keyPrefix: 'sidebar' });

  const crumbs = pathname.split('/').filter(crumb => crumb !== '');

  return (
    <Breadcrumb className='bg-background px-10 py-2.5'>
      <BreadcrumbList>
        {crumbs.map((crumb, index) => {
          const lastIndex = index === crumbs.length - 1;
          const keyId = `${crumb}-${index}-${Math.random()}`;

          return (
            <Fragment key={keyId}>
              <BreadcrumbItem>
                {!lastIndex ? (
                  <BreadcrumbLink href={`/${crumb}`}>{t(crumb)}</BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{t(crumb)}</BreadcrumbPage>
                )}
              </BreadcrumbItem>

              {!lastIndex && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbDynamic;
