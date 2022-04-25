import { getRandomNumber } from '../src/utils.js';
import { gameLogic } from '../src/index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEvenLogic = () => {
  const arr = [];
  arr.push(getRandomNumber(1, 100)); // случайное число от 1 до 100
  if (arr[0] % 2 === 0) {
    arr.push('yes');
  } else {
    arr.push('no');
  }
  return arr;
};

export const brainEvenGame = () => {
  return gameLogic(brainEvenLogic, gameRules)
};
