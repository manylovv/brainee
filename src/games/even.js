import getRandomNumber from '../utils.js';
import { getGameLogic } from '../index.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getBrainEvenLogic = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  const result = { question, answer };
  return result;
};

const startBrainEvenGame = () => getGameLogic(getBrainEvenLogic, description);
export default startBrainEvenGame;
