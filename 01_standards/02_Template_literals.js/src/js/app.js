const pointsArray = [523, 6000, 5001];

const ending = number => {
  let result;
  if (!Number.isInteger(number)) throw `${number} is not an integer number`;
  const lastDigit = number % 10;
  switch (lastDigit) {
    case 1:
      result = "";
      break;
    case 2:
    case 3:
    case 4:
      result = "а";
      break;
    default:
      result = "ов";
  }
  return result;
};

const createFormatter = endingFunction => (strings, number) =>
  `${strings[0]}${number}${strings[1]}${endingFunction(number)}`;

const formatter = createFormatter(ending);

pointsArray.forEach(number => {
  try {
    const string = formatter`Ваш баланс: ${number} балл`;
    console.log(string);
  } catch (err) {
    console.error(err);
  }
});

// on Tagged Templates see
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates
