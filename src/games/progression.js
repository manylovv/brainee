import { getResultObject, getRandomNumber } from '../utils.js';
import { gameLogic } from '../index.js';

const getProgression = () => {
  const progression = [];
  let answer = '';
  const number = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 11);
  const randomIndex = getRandomNumber(0, 6);
  for (let i = 0; i <= 6; i += 1) {
    progression.push(String(number + step * (i + 1)));
    if (i === randomIndex) {
      answer = String(progression[i]);
      progression[i] = '..';
    }
  }
  const resultProgression = progression.join(' ');
  return { question: resultProgression, answer: answer };
};

const description = 'What number is missing in the progression?';
const brainProgressionLogic = () => {
  const progression = getProgression();
  const {question, answer} = progression;
  const result = getResultObject(question, answer);
  return result;
};

const startBrainProgressionGame = () => gameLogic(brainProgressionLogic, description);
export default startBrainProgressionGame;
