import * as z from 'zod';

export interface CreateItemModalProps {
  open: boolean;
  onClose: VoidFunction;
}

export const formSchema = z.object({
  id: z.number(),
  status: z.enum(['Open', 'In Progress', 'Closed', 'Cancelled']),
  spec: z.string().min(1, 'Spec section is required'),
  rev: z.number(),
  title: z.string().min(1, 'Title is required'),
  type: z.string().min(1, 'Type is required'),
  priority: z.enum(['Normal', 'High', 'Low']),
  package: z.string(),
  ballInCourt: z.string(),
  dueDate: z.string(),
  response: z.enum(['Approve', 'Reject', 'Pending']),
  createAnother: z.boolean(),
});

export type FormValues = z.infer<typeof formSchema>;