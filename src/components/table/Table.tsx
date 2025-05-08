import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import TableHeader from './TableHeader';
import TableEmptyRow from './TableEmptyRow';
import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { DataTableProps } from './Table.types';
import styles from './Table.module.scss';

function Table<TData, TValue>({
  columns,
  data,
  columnFilters,
  sorting,
  onSortingChange,
  onColumnFiltersChange,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange,
    onColumnFiltersChange,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });

  const headers = table.getHeaderGroups();
  const rows = table.getRowModel().rows;
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 50,
    overscan: 28,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();

  return (
    <div className={styles.table__wrapper} ref={tableContainerRef}>
      <ShadcnTable>
        <TableHeader headers={headers} />
        <TableBody className={styles.table__body}>
          {virtualRows?.length ? (
            virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index];
              return (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })
          ) : (
            <TableEmptyRow colLength={columns.length} />
          )}
        </TableBody>
      </ShadcnTable>
    </div>
  );
}

Table.displayName = 'Table';
export default Table;
