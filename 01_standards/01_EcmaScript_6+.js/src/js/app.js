const bonusStarts = 10000;
const bonusPercent = 5;
const prices = [200, 550, 4000, 23, 58, 5000, 485, 711, "a"];

const calculateBonus = (starts, percent, prices) => {
  let totalPrice = 0;

  for (let price of prices) {
    if (typeof price !== "number")
      throw `${price} is a ${typeof price}, not a number!`;
    totalPrice += price;
  }

  return (bonus = ((totalPrice - starts) * percent) / 100);
};

let bonus;

try {
  bonus = calculateBonus(bonusStarts, bonusPercent, prices);
  bonus = Math.round(bonus);
  console.log(`Размер бонуса: ${bonus}`);
} catch (err) {
  console.error(err);
}
