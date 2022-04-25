import { getRandomNumber } from '../src/utils.js';
import { gameLogic } from '../src/index.js';

const isPrime = (num) => {
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const brainPrimeLogic = () => {
  const arr = [];
  const num = getRandomNumber(1, 100);
  arr.push(num);
  if (isPrime(num)) {
    arr.push('yes');
  } else {
    arr.push('no');
  }
  return arr;
};

const brainPrimeGame = () => gameLogic(brainPrimeLogic, gameRules);
export default brainPrimeGame;
