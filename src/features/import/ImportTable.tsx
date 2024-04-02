import { Link } from 'react-router-dom';
import { Table } from '../../components';
import Pagination from '../../components/pagination/Pagination';
import { Badge } from '../../components/ui/badge';

const ImportTable = () => {
  return (
    <div className='drop-shadow-sm dark:drop-shadow-md'>
      <div className='overflow-x-auto'>
        <Table>
          <Table.Thead>
            <Table.Th>#</Table.Th>
            <Table.Th>النوع الرئيسي</Table.Th>
            <Table.Th>نوع الملف</Table.Th>
            <Table.Th>التخصيص</Table.Th>
            <Table.Th>التاريخ</Table.Th>
            <Table.Th>الحالة</Table.Th>
            <Table.Th>رسالة الحالة</Table.Th>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Th scope='row'>1</Table.Th>
              <Table.Td>
                <Link to='/dashboard/import/slug' className='hover:underline'>
                  اسم الملف
                </Link>
              </Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>
                <Badge variant={'success'}>صحيح</Badge>
              </Table.Td>
              <Table.Td>افتراضي</Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Th scope='row'>2</Table.Th>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>
                <Badge variant={'error'}>خطأ</Badge>
              </Table.Td>
              <Table.Td>افتراضي</Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Th scope='row'>3</Table.Th>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>
                <Badge variant={'success'}>خطأ</Badge>
              </Table.Td>
              <Table.Td>افتراضي</Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Th scope='row'>4</Table.Th>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>
                <Badge variant={'success'}>خطأ</Badge>
              </Table.Td>
              <Table.Td>افتراضي</Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Th scope='row'>5</Table.Th>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>
                <Badge variant={'error'}>خطأ</Badge>
              </Table.Td>
              <Table.Td>افتراضي</Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Th scope='row'>6</Table.Th>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>افتراضي</Table.Td>
              <Table.Td>
                <Badge variant={'success'}>خطأ</Badge>
              </Table.Td>
              <Table.Td>افتراضي</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
      <Pagination />
    </div>
  );
};

export default ImportTable;
