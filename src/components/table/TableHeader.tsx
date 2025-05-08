import {
  TableHead,
  TableHeader as ShadcnTableHeader,
  TableRow,
} from '@/components/ui/table';
import { flexRender, type HeaderGroup } from '@tanstack/react-table';

interface TableHeaderProps<TData> {
  headers: HeaderGroup<TData>[];
}
function TableHeader<TData>({ headers }: TableHeaderProps<TData>) {
  return (
    <ShadcnTableHeader className="sticky top-0 z-10 bg-secondary">
      {headers.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </ShadcnTableHeader>
  );
}

TableHeader.displayName = 'TableHeader';
export default TableHeader;
