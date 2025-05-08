import { TableCell, TableRow } from '@/components/ui/table';

interface TableEmptyRowProps {
  colLength: number;
}
function TableEmptyRow({ colLength }: TableEmptyRowProps) {
  return (
    <TableRow>
      <TableCell colSpan={colLength} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  );
}

TableEmptyRow.displayName = 'TableEmptyRow';
export default TableEmptyRow;
