import { apiRequest } from '@/lib/axios';
import type { Item } from '@/types/item';
import type { ResponseType } from '@/types/common';

export const list = async (): Promise<ResponseType<Item>> => {
  return await apiRequest<ResponseType<Item>>('/items', 'GET');
};

export const create = async (data: Item): Promise<Item> => {
  return await apiRequest<Item>('/items', 'POST', data);
};
