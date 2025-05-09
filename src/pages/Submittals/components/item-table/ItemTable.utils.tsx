import type { Item } from '@/types/item';
import type { Row } from '@tanstack/react-table';
import { searchableColumns } from './ItemTable.constants';

export const globalItemFilter = (
  row: Row<Item>,
  _columnId: string,
  value: string
) => {
  const needle = value.toLowerCase().trim();

  return searchableColumns.some((column) => {
    const cellValue = row.getValue(column);
    return cellValue?.toString().toLowerCase().includes(needle);
  });
};
