import { Table } from '../../components';
import Pagination from '../../components/pagination/Pagination';
import { Badge } from '../../components/ui/badge';

const ImportFileTable = () => {
  return (
    <div className='drop-shadow-sm dark:drop-shadow-md'>
      <div className='overflow-x-auto'>
        <Table>
          <Table.Thead>
            <Table.Th>#</Table.Th>
            <Table.Th>العنوان</Table.Th>
            <Table.Th>الوصف</Table.Th>
            <Table.Th>الصورة</Table.Th>
            <Table.Th>الرابط</Table.Th>
            <Table.Th>الصنف</Table.Th>
            <Table.Th>الماركة</Table.Th>
            <Table.Th>السعر</Table.Th>
            <Table.Th>العملة</Table.Th>
            <Table.Th>التوفر</Table.Th>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Th scope='row'>1</Table.Th>
              <Table.Td>عنوان افتراضي للمنتج</Table.Td>
              <Table.Td>وصف افتراضي للمنتح</Table.Td>
              <Table.Td>صورة</Table.Td>
              <Table.Td>https://www.google.com</Table.Td>
              <Table.Td>التكنولوجيا</Table.Td>
              <Table.Td>DELL</Table.Td>
              <Table.Td>450.00</Table.Td>
              <Table.Td>ريال سعودي</Table.Td>
              <Table.Td>
                <Badge variant={'success'}>متوفر</Badge>
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Th scope='row'>2</Table.Th>
              <Table.Td>عنوان افتراضي للمنتج</Table.Td>
              <Table.Td>وصف افتراضي للمنتح</Table.Td>
              <Table.Td>صورة</Table.Td>
              <Table.Td>https://www.google.com</Table.Td>
              <Table.Td>التكنولوجيا</Table.Td>
              <Table.Td>DELL</Table.Td>
              <Table.Td>450.00</Table.Td>
              <Table.Td>ريال سعودي</Table.Td>
              <Table.Td>
                <Badge variant={'error'}>غير متوفر</Badge>
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Th scope='row'>3</Table.Th>
              <Table.Td>عنوان افتراضي للمنتج</Table.Td>
              <Table.Td>وصف افتراضي للمنتح</Table.Td>
              <Table.Td>صورة</Table.Td>
              <Table.Td>https://www.google.com</Table.Td>
              <Table.Td>التكنولوجيا</Table.Td>
              <Table.Td>DELL</Table.Td>
              <Table.Td>450.00</Table.Td>
              <Table.Td>ريال سعودي</Table.Td>
              <Table.Td>
                <Badge variant={'success'}>متوفر</Badge>
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Th scope='row'>4</Table.Th>
              <Table.Td>عنوان افتراضي للمنتج</Table.Td>
              <Table.Td>وصف افتراضي للمنتح</Table.Td>
              <Table.Td>صورة</Table.Td>
              <Table.Td>https://www.google.com</Table.Td>
              <Table.Td>التكنولوجيا</Table.Td>
              <Table.Td>DELL</Table.Td>
              <Table.Td>450.00</Table.Td>
              <Table.Td>ريال سعودي</Table.Td>
              <Table.Td>
                <Badge variant={'success'}>متوفر</Badge>
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Th scope='row'>5</Table.Th>
              <Table.Td>عنوان افتراضي للمنتج</Table.Td>
              <Table.Td>وصف افتراضي للمنتح</Table.Td>
              <Table.Td>صورة</Table.Td>
              <Table.Td>https://www.google.com</Table.Td>
              <Table.Td>التكنولوجيا</Table.Td>
              <Table.Td>DELL</Table.Td>
              <Table.Td>450.00</Table.Td>
              <Table.Td>ريال سعودي</Table.Td>
              <Table.Td>
                <Badge variant={'error'}>غير متوفر</Badge>
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Th scope='row'>6</Table.Th>
              <Table.Td>عنوان افتراضي للمنتج</Table.Td>
              <Table.Td>وصف افتراضي للمنتح</Table.Td>
              <Table.Td>صورة</Table.Td>
              <Table.Td>https://www.google.com</Table.Td>
              <Table.Td>التكنولوجيا</Table.Td>
              <Table.Td>DELL</Table.Td>
              <Table.Td>450.00</Table.Td>
              <Table.Td>ريال سعودي</Table.Td>
              <Table.Td>
                <Badge variant={'success'}>متوفر</Badge>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
      <Pagination />
    </div>
  );
};

export default ImportFileTable;
