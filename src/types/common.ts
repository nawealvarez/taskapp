export const STATUS_VALUES = ['Open', 'In Progress', 'Closed', 'Cancelled'] as const;
export const RESPONSE_VALUES = ['Approve', 'Reject', 'Pending'] as const;
export const PRIORITY_VALUES = ['Low', 'Normal', 'High'] as const;


export type Status = (typeof STATUS_VALUES)[number];
export type Response = (typeof RESPONSE_VALUES)[number];
export type Priority = (typeof PRIORITY_VALUES)[number];

export interface ResponseType<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
