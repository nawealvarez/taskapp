import axios, { type AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || 'https://myawesomeproject.free.beeceptor.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiRequest = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: T
): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient({
    method,
    url,
    data,
  });

  return response.data;
};
