import { FC } from 'react';

import { cn } from '../lib/utils';
import { HeadingProps } from '../types';

const Heading: FC<HeadingProps> = ({
  as: Element,
  size = 'large',
  weight = 'bold',
  align = 'inherit',
  children,
}) => {
  return (
    <Element
      className={cn(
        size === 'small' && 'text-sm',
        size === 'medium' && 'text-lg',
        size === 'large' && 'text-xl',
        weight === 'regular' && 'font-normal',
        weight === 'medium' && 'font-medium',
        weight === 'semi-bold' && 'font-semibold',
        weight === 'bold' && 'font-bold',
        align === 'inherit' && 'text-inherit',
        align === 'right' && 'text-right',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        'text-foreground',
      )}
    >
      {children}
    </Element>
  );
};

export default Heading;
