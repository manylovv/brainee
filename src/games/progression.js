import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getProgression = () => {
  const progression = [];
  const number = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 11);
  const progressionLength = 6;
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(String(number + step * (i + 1)));
  }
  return progression;
};

const hideElementOfProgression = (progression) => {
  const resultProgression = progression.slice();
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const hiddenElement = '..';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === randomIndex) {
      resultProgression[i] = hiddenElement;
    }
  }
  return resultProgression;
};

const getHiddenElement = (progression) => {
  let result = '';
  const hiddenElement = '..';
  const { length } = progression;
  for (let i = 0; i < length; i += 1) {
    if (progression[i] === hiddenElement) {
      const difference = (i > length / 2)
      ? +progression[1] - +progression[0]
      : +progression[length - 1] - +progression[length - 2];
      result = (i === 0) ? +progression[i + 1] - difference : +progression[i - 1] + difference;
    }
  }
  return String(result);
};

const description = 'What number is missing in the progression?';
const getBrainProgression = () => {
  const progression = hideElementOfProgression(getProgression());
  const question = progression.join(' ');
  const answer = getHiddenElement(progression);
  const result = { question, answer };
  return result;
};

const startBrainProgressionGame = () => runEngine(getBrainProgression, description);
export default startBrainProgressionGame;
