import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};
const description = 'Find the greatest common divisor of given numbers.';
const getBrainGCD = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2).toString();
  return { question, answer };
};

const startBrainGCDGame = () => console.log(runEngine(getBrainGCD, description));
export default startBrainGCDGame;
