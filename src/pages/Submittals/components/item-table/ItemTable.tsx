import Table from '@/components/table/Table';
import Button from '@/components/button/Button';
import { Input } from '@/components/ui/input';
import type { SortingState } from '@tanstack/react-table';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { columns } from './columns';
import styles from './ItemTable.module.scss';
import { useItemsContext } from '@/context/items-context';
import { useFetchItems } from '@/hooks/useFetchItems';
import { globalItemFilter } from './ItemTable.utils';
import CreateItemModal from '../create-item-modal/CreateItemModal';

function ItemTable() {
  const { items } = useItemsContext();
  const { loading, error } = useFetchItems();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [open, setOpen] = useState(false);

  function handleChangeFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setGlobalFilter(e.target.value);
  }

  if (!items || loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div className={styles.itemTable__wrapper}>
        <div className={styles.itemTable__actions}>
          <div className="flex items-center gap-2">
            <Button variant="default" onClick={() => setOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Create item
            </Button>
          </div>
          <div className="flex gap-2 items-center">
            <Input
              placeholder="Search by title, spec or ball in court"
              value={globalFilter}
              onChange={handleChangeFilter}
              className="w-80"
            />
          </div>
        </div>

        <Table
          columns={columns}
          data={items}
          sorting={sorting}
          onSortingChange={setSorting}
          globalFilter={globalFilter}
          onGlobalFilterChange={setGlobalFilter}
          globalFilterFn={globalItemFilter}
        />
      </div>
      <CreateItemModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

ItemTable.displayName = 'ItemTable';
export default ItemTable;
