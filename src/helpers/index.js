const findById = (resources, id) => resources.find((r) => r.id === id);

const checkDateIsPast = (date) => {
  const reverseString = (reverseDate) => {
    const [yearNew, monthNew, dateNew] = reverseDate;
    return `${yearNew}/${monthNew}/${dateNew}`;
  };
  const dateToday = Date.now();
  const dateCompare = Date.parse(reverseString(date.split('.').reverse()));

  return dateToday > dateCompare;
};

const formatDate = (date) => {
  if (date === 'TBA') { return 'TBA'; }
  let day = date.split('.')[0];
  let month = date.split('.')[1];
  const year = date.split('.')[2];

  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  return `${day}.${month}.${year}`;
};

export { findById, checkDateIsPast, formatDate };