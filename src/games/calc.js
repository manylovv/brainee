import getRandomNumber from '../utils.js';
import { getGameLogic } from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, operators.length - 1)];
};

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      throw new Error('Unknown state!');
  }
};

const description = 'What is the result of the expression?';
const getBrainCalcLogic = () => {
  const number1 = getRandomNumber(2, 10);
  const number2 = getRandomNumber(2, 10);
  const randomOperator = getRandomOperator();

  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = calculate(number1, number2, randomOperator);
  const result = { question, answer };
  return result;
};

const startBrainCalcGame = () => getGameLogic(getBrainCalcLogic, description);
export default startBrainCalcGame;
