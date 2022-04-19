const gcd = (a, b) => {
  !b ? a : gcd(b, a % b);
};
export const gameRules = 'Find the greatest common divisor of given numbers.';
export const brainGCDGame = () => {
  const arr = [];
  const num1 = (Math.ceil(Math.random() * 20 + 2));
  const num2 = (Math.ceil(Math.random() * 50));
  arr.push(`${num1} ${num2}`);
  arr.push(String(gcd(num1, num2)));
  return arr;
};
