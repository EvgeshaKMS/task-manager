// date to DD.MM.YYYY format
export const formatDate = (date: string) => {
  if (!date) return '';

  const dateArr = date.split('-');
  const year = dateArr[0];
  const month = dateArr[1];
  const day = dateArr[2];

  return `${day}.${month}.${year}`;
};

// date to YYYY-MM-DD format
export const formatDateToOriginal = (date: string) => {
  if (!date) return '';

  const dateArr = date.split('.');
  const year = dateArr[2];
  const month = dateArr[1];
  const day = dateArr[0];


  return `${year}-${month}-${day}`;
};
