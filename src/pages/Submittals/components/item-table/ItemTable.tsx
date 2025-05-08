import Table from '@/components/table/Table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { list } from '@/services/item';
import type { Item } from '@/types/item';
import type { ColumnFiltersState, SortingState } from '@tanstack/react-table';
import { Download, Plus, SlidersHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { columns } from './columns';
import styles from './ItemTable.module.scss';

function ItemTable() {
  const [data, setData] = useState<Item[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  useEffect(() => {
    list().then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className={styles.itemTable__wrapper}>
      <div className={styles.itemTable__actions}>
        <div className="flex items-center gap-2">
          <Button variant="default" onClick={() => console.log('Open modal')}>
            <Plus className="mr-2 h-4 w-4" /> Create item
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Input
            placeholder="Search by title, spec or ball in court"
            value={
              (columnFilters.find((f) => f.id === 'title')?.value as string) ??
              ''
            }
            onChange={(e) =>
              setColumnFilters([{ id: 'title', value: e.target.value }])
            }
            className="w-80"
          />
          <Button variant="outline">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Table
        columns={columns}
        data={data}
        sorting={sorting}
        onSortingChange={setSorting}
        columnFilters={columnFilters}
        onColumnFiltersChange={setColumnFilters}
      />
    </div>
  );
}

ItemTable.displayName = 'ItemTable';
export default ItemTable;
