import { getRandomNumber } from '../utils.js';
import { getGameLogic } from '../index.js';

const getProgression = () => {
  const progression = [];
  let hiddenElement = '';
  const number = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 11);
  const randomIndex = getRandomNumber(0, 6);
  const progressionLength = 6;

  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(String(number + step * (i + 1)));
    if (i === randomIndex) {
      hiddenElement = String(progression[i]);
      progression[i] = '..';
    }
  }
  const progressionWithHiddenElement = progression.join(' ');
  return { progressionWithHiddenElement, hiddenElement };
};

const description = 'What number is missing in the progression?';
const getBrainProgressionLogic = () => {
  const progression = getProgression();
  const question = progression.progressionWithHiddenElement
  const answer = progression.hiddenElement
  const result = { question, answer };
  return result;
};

const startBrainProgressionGame = () => getGameLogic(getBrainProgressionLogic, description);
export default startBrainProgressionGame;
