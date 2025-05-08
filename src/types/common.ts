export type Status = 'Open' | 'In Progress' | 'Closed' | 'Cancelled';
export type Response = 'Approve' | 'Reject' | 'Pending';
export type Priority = 'Normal' | 'High' | 'Low';

export interface ResponseType<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
