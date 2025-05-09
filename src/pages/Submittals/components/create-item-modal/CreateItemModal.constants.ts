import {
  PRIORITY_VALUES,
  RESPONSE_VALUES,
  STATUS_VALUES,
} from '@/types/common';
import type { FormValues } from './CreateItemModal.types';

export const defaultFormValues: FormValues = {
  id: 9999,
  status: 'Open',
  spec: '',
  rev: 0,
  title: '',
  type: '',
  priority: 'Normal',
  package: '-',
  ballInCourt: '-',
  dueDate: '-',
  response: 'Pending',
  createAnother: false,
};
export const statusOptions = STATUS_VALUES.map((s) => ({ label: s, value: s }));
export const responseOptions = RESPONSE_VALUES.map((r) => ({
  label: r,
  value: r,
}));
export const priorityOptions = PRIORITY_VALUES.map((p) => ({
  label: p,
  value: p,
}));
