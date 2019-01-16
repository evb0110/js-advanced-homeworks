const bonusStarts = 10000;
const bonusPercent = 5;
const prices = [200, 550, 4000, 23, 58, 5000, 485, 711];

const calculateBonus = (starts, percent, prices) => {

  let totalPrice = 0;
  
  for (let price of prices) {
    if (typeof price !== "number") throw(`${price} is a ${typeof price}, not a number!`);
    totalPrice += price;
  }

  let bonus = (totalPrice - starts) * percent / 100;
  return bonus;
};

let result = calculateBonus(bonusStarts, bonusPercent, prices);
result = Math.round(result);

console.log(result);