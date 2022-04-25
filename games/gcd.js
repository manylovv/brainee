import getRandomNumber from '../src/utils.js';
import { gameLogic } from '../src/index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
const gameRules = 'Find the greatest common divisor of given numbers.';
const brainGCDLogic = () => {
  const arr = [];
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 100);
  arr.push(`${num1} ${num2}`);
  arr.push(String(gcd(num1, num2)));
  return arr;
};

const brainGCDGame = () => gameLogic(brainGCDLogic, gameRules);
export default brainGCDGame;
