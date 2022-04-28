import getRandomNumber from '../utils.js';
import { getResultObject } from '../utils.js';
import { gameLogic } from '../index.js';

const isPrime = (num) => {
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (number) => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const brainPrimeLogic = () => {
  const number = getRandomNumber(2, 100);
  const question = String(number);
  const answer = getAnswer(number);
  const result = getResultObject(question, answer);
  return result;
};

const startBrainPrimeGame = () => gameLogic(brainPrimeLogic, description);
export default startBrainPrimeGame;
