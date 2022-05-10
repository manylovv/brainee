import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const isPrime = (number) => {
  if (number % 1 || number < 2) return false;
  const sqrt = Math.sqrt(number);
  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getBrainPrime = () => {
  const number = getRandomNumber(1, 100);
  const question = number.toString();
  const answer = isPrime(number) ? 'yes' : 'no';
  return { question, answer };
};

const startBrainPrimeGame = () => console.log(runEngine(getBrainPrime, description));
export default startBrainPrimeGame;