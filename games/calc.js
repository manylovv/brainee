import { getRandomNumber } from '../src/utils.js';
import { gameLogic } from '../src/index.js';

const getRandomOperator = () => {
  const arrOperators = ['+', '-', '*'];
  return arrOperators[getRandomNumber(0, arrOperators.length - 1)];
};

const gameRules = 'What is the result of the expression?';
const brainCalcLogic = () => {
  const arr = [];
  const num1 = getRandomNumber(2, 10);
  const num2 = getRandomNumber(2, 10);
  const randomOperator = getRandomOperator();
  arr.push(`${num1} ${randomOperator} ${num2}`);
  switch (randomOperator) {
    case '+':
      arr.push(String(num1 + num2));
      break;
    case '-':
      arr.push(String(num1 - num2));
      break;
    case '*':
      arr.push(String(num1 * num2));
      break;
    default:
      return null;
  }
  return arr;
};

const brainCalcGame = () => gameLogic(brainCalcLogic, gameRules);
export default brainCalcGame;
