import type { Status, Response, Priority } from "./common";

export interface Item {
  status: Status;
  id: number;
  spec: string;
  rev: number;
  title: string;
  type: string;
  priority: Priority;
  package: string;
  ballInCourt: string;
  dueDate: string;
  response: Response;
}
