import { getRandomNumber } from '../utils.js';
import { getGameLogic } from '../index.js';

const isPrime = (num) => {
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getBrainPrimeLogic = () => {
  const number = getRandomNumber(2, 100);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  const result = { question, answer };
  return result;
};

const startBrainPrimeGame = () => getGameLogic(getBrainPrimeLogic, description);
export default startBrainPrimeGame;
