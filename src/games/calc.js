import { getResultObject, getRandomNumber } from '../utils.js';
import { gameLogic } from '../index.js';

const getRandomOperator = () => {
  const arrOperators = ['+', '-', '*'];
  return arrOperators[getRandomNumber(0, arrOperators.length - 1)];
};

const getСalculationResult = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      return null;
  }
};

const description = 'What is the result of the expression?';
const brainCalcLogic = () => {
  const number1 = getRandomNumber(2, 10);
  const number2 = getRandomNumber(2, 10);
  const randomOperator = getRandomOperator();

  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = getСalculationResult(number1, number2, randomOperator);
  const result = getResultObject(question, answer);
  return result;
};

const startBrainCalcGame = () => gameLogic(brainCalcLogic, description);
export default startBrainCalcGame;
