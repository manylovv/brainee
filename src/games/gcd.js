import getRandomNumber from '../utils.js';
import { getResultObject } from '../utils.js';
import { gameLogic } from '../index.js';

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};
const description = 'Find the greatest common divisor of given numbers.';
const brainGCDLogic = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));
  const result = getResultObject(question, answer)
  return result;
};

const startBrainGCDGame = () => gameLogic(brainGCDLogic, description);
export default startBrainGCDGame;
