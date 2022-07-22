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

export { findById, checkDateIsPast };