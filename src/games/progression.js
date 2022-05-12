import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getProgression = (start, step, length) => Array(length)
  .fill(0)
  .map((_, i) => (start + (i * step)));

const description = 'What number is missing in the progression?';
const getBrainProgression = () => {
  const progressionLength = getRandomNumber(5, 7);
  const progressionStep = getRandomNumber(1, 9);
  const progressionStart = getRandomNumber(1, 25);
  const progression = getProgression(progressionStart, progressionStep, progressionLength);

  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);
  const hiddenElement = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';

  const question = progression.join(' ');
  const answer = hiddenElement.toString();
  return { question, answer };
};

const startBrainProgressionGame = () => console.log(runEngine(getBrainProgression, description));
export default startBrainProgressionGame;
