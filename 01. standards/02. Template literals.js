const pointsArray = [523, 6000, 5001];

const ending = (number) => {
  let result;
  if (!Number.isInteger(number)) throw `${number} is not an integer number`;
  const lastDigit = number % 10;
  switch (lastDigit) {
    case 1: 
      result = '';
      break;
    case 2:
    case 3:
    case 4:
      result = 'а';
      break;
    default:
      result = 'ов';
  }
  return result;
}

pointsArray.forEach((number) => {
  const string = `Ваш баланс: ${number} балл${ending(number)}`;
  console.log(string);
});
