import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const isPrime = (number) => {
  if (isNaN(number) || !isFinite(number) || number % 1 || number < 2) return false;
  const sqrt = Math.sqrt(number); //returns the square root of the passed value
  for (var i = 2; i <= sqrt; i++)
      if (number % i == 0) return false;
  return true;
}


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
