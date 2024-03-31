import { FC } from 'react';

import { cn } from '../../lib/utils';
import { PaginationChevronProps } from '../../types';

const PaginationChevron: FC<PaginationChevronProps> = ({
  isMuted,
  children,
  handleClick,
}) => {
  return (
    <button
      className={cn(
        isMuted
          ? 'cursor-default text-muted-foreground'
          : 'transition-colors hover:bg-secondary',
        'rounded-sm border border-border p-1  ',
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default PaginationChevron;
