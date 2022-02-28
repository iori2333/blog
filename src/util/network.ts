import axios, { AxiosResponse } from 'axios';

export async function get<T>(
  url: string,
  params?: Record<string, unknown>
): Promise<AxiosResponse<T>> {
  return axios.get(url, { params });
}
