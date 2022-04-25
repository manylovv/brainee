import { getRandomNumber } from '../src/utils.js';
import { gameLogic } from '../src/index.js';

const gameRules = 'What number is missing in the progression?';
const brainProgressionLogic = () => {
  const resultArray = [];
  const progression = [];
  let hidden = '';
  const num1 = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 11);
  const randomIndex = getRandomNumber(0, 6);
  for (let i = 0; i <= 6; i += 1) {
    progression.push(String(num1 + step * (i + 1)));
    if (i === randomIndex) {
      hidden = String(progression[i]);
      progression[i] = '..';
    }
  }
  resultArray.push(progression.join(' '));
  resultArray.push(hidden);
  return resultArray;
};

export const brainProgressionGame = () => {
  return gameLogic(brainProgressionLogic, gameRules)
};