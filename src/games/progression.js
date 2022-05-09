import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getProgression = (length) => {
  const number = getRandomNumber(1, 25);
  const step = getRandomNumber(1, 9);
  const progression = Array(length).fill(0).map((n, i) => (n + number + (i * step)).toString());
  return progression;
};

const description = 'What number is missing in the progression?';
const getBrainProgression = () => {
  const progressionLength = getRandomNumber(5, 7);
  const progression = getProgression(progressionLength);
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);
  let hiddenElement = '';

  progression.map((n, i) => {
    if (progression.indexOf(n) === hiddenElementIndex) {
      hiddenElement = n;
      progression[i] = '..';
    }
    return n
  });

  const question = progression.join(' ');
  const answer = hiddenElement;
  return { question, answer };
};

const startBrainProgressionGame = () => runEngine(getBrainProgression, description);
export default startBrainProgressionGame;
