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
  if (date === 'TBA' || date === 'T.B.A' || date === 't.b.a' || date === 'tba') { return 'TBA'; }
  let day = date.split('.')[0];
  let month = date.split('.')[1];
  const year = date.split('.')[2];

  if (day < 10) {
    day = ` ${day}`;
  }

  switch (month) {
    case '1':
      month = 'Jan';
      break;
    case '2':
      month = 'Feb';
      break;
    case '3':
      month = 'Mar';
      break;
    case '4':
      month = 'Apr';
      break;
    case '5':
      month = 'May';
      break;
    case '6':
      month = 'Jun';
      break;
    case '7':
      month = 'Jul';
      break;
    case '8':
      month = 'Aug';
      break;
    case '9':
      month = 'Sep';
      break;
    case '10':
      month = 'Oct';
      break;
    case '11':
      month = 'Nov';
      break;
    case '12':
      month = 'Dec';
      break;
    default:
      break;
  }

  // if (month < 10) {
  //   month = `0${month}`;
  // }
 // return multiple values
  return [day, month, year];
};

export { findById, checkDateIsPast, formatDate };