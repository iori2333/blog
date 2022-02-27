import dayjs from 'dayjs';

export const formatDate = (timestamp: number, format = 'YYYY-M-D HH:m:ss') => {
  return dayjs(timestamp).format(format);
};
