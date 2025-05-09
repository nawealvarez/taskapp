import type {
  ColumnDef,
  SortingState,
  OnChangeFn,
  FilterFnOption,
} from '@tanstack/react-table';

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  globalFilter?: string;
  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
  onGlobalFilterChange?: OnChangeFn<string>;
  globalFilterFn?: FilterFnOption<TData>;
}
