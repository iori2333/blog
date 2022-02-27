import axios from 'axios';

export const get = (url: string, params?: string[]) => {
  return axios.get(url, { params });
};
