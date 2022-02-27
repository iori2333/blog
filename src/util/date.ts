import dayjs from 'dayjs';

export const formatDate = (timestamp: number, format = 'YYYY-M-D H:mm:ss') => {
  return dayjs(timestamp).format(format);
};
