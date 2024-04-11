import { TTask } from '../types/general';

export const sortByDate = (a: TTask, b: TTask) => {
  const dateA = a.date.split('.');
  const dayA = parseInt(dateA[0]);
  const monthA = parseInt(dateA[1]);
  const yearA = parseInt(dateA[2]);
  const timeA = a.time.split(':');
  const hoursA = parseInt(timeA[0]);
  const minutesA = parseInt(timeA[1]);

  const dateB = b.date.split('.');
  const dayB = parseInt(dateB[0]);
  const monthB = parseInt(dateB[1]);
  const yearB = parseInt(dateB[2]);
  const timeB = b.time.split(':');
  const hoursB = parseInt(timeB[0]);
  const minutesB = parseInt(timeB[1]);

  if (yearA > yearB) return 1;
  if (yearA < yearB) return -1;

  if (monthA > monthB) return 1;
  if (monthA < monthB) return -1;

  if (dayA > dayB) return 1;
  if (dayA < dayB) return -1;

  if (hoursA > hoursB) return 1;
  if (hoursA < hoursB) return -1;

  if (minutesA > minutesB) return 1;
  if (minutesA < minutesB) return -1;
  return 0;
};
