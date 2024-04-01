export const formatDate = (date: string) => {
  if (!date) return '';

  const dateArr = date.split('-');
  const year = dateArr[0];
  const month = dateArr[1];
  const day = dateArr[2];

  return `${day}.${month}.${year}`;
};
