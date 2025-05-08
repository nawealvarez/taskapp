import type { RouteObject } from 'react-router-dom';
import { SubmittalsPage } from '@/pages/Submittals';

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <SubmittalsPage />,
  },
  {
    path: '/tasks/:id',
    element: <div>Task id</div>,
  },
];
