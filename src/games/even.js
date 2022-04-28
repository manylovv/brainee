import getRandomNumber from '../utils.js';
import { getResultObject } from '../utils.js';
import { gameLogic } from '../index.js';

const isEven = (number) => number % 2 === 0 ? 'yes' : 'no';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEvenLogic = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question);
  const result = getResultObject(question, answer);
  return result;
};

const startBrainEvenGame = () => gameLogic(brainEvenLogic, description);
export default startBrainEvenGame;
