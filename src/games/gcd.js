import getRandomNumber from '../utils.js';
import { getGameLogic } from '../index.js';

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};
const description = 'Find the greatest common divisor of given numbers.';
const getBrainGCDLogic = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));
  const result = { question, answer };
  return result;
};

const startBrainGCDGame = () => getGameLogic(getBrainGCDLogic, description);
export default startBrainGCDGame;
