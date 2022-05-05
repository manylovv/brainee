import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const isPrime = (num) => {
  if (num > 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getBrainPrime = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  const result = { question, answer };
  return result;
};

const startBrainPrimeGame = () => runEngine(getBrainPrime, description);
export default startBrainPrimeGame;
