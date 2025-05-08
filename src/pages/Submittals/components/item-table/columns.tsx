import { Button } from '@/components/ui/button';
import type { Item } from '@/types/item';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

export const columns: ColumnDef<Item>[] = [
  { accessorKey: 'status', header: 'Status' },
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button
          variant="outline"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          #
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  { accessorKey: 'spec', header: 'Spec', enableColumnFilter: true },
  { accessorKey: 'rev', header: 'Rev' },
  { accessorKey: 'title', header: 'Title', enableColumnFilter: true, },
  { accessorKey: 'type', header: 'Type' },
  { accessorKey: 'priority', header: 'Priority' },
  { accessorKey: 'package', header: 'Package' },
  { accessorKey: 'builtInCount', header: 'Ball in court', enableColumnFilter: true, },
  { accessorKey: 'dueDate', header: 'Due date' },
  {
    accessorKey: 'response',
    header: 'Response',
    cell: ({ getValue }) => (
      <span className="text-green-600 font-semibold">
        {getValue() as string}
      </span>
    ),
  },
];
