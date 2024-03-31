import { ChildrenProp } from '../types';

interface TableTh extends ChildrenProp {
  scope?: 'col' | 'row';
}

const Tr = ({ children }: ChildrenProp) => {
  return (
    <tr className='border-b border-border transition-colors duration-300 hover:bg-secondary'>
      {children}
    </tr>
  );
};

const Th = ({ scope = 'col', children }: TableTh) => {
  return (
    <th scope={scope} className='px-3 py-4 text-center'>
      {children}
    </th>
  );
};

const Td = ({ children }: ChildrenProp) => {
  return (
    <td className='px-6 py-4 text-center text-sm font-medium'>{children}</td>
  );
};

const Thead = ({ children }: ChildrenProp) => {
  return (
    <thead className='border-b border-border bg-foreground text-xs uppercase text-primary-foreground dark:bg-muted'>
      <tr>{children}</tr>
    </thead>
  );
};

const Tbody = ({ children }: ChildrenProp) => {
  return <tbody className='relative'>{children}</tbody>;
};

const Table = ({ children }: ChildrenProp) => {
  return (
    <table className='w-full border border-border bg-background text-sm'>
      {children}
    </table>
  );
};

Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;
Table.Thead = Thead;
Table.Tbody = Tbody;

export default Table;
