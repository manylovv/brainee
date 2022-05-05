import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1)
  return operators[randomIndex];
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
      throw new Error(`Unknown operator: '${operator}!'`)
  }
};

const description = 'What is the result of the expression?';
const getBrainCalc = () => {
  const number1 = getRandomNumber(2, 10);
  const number2 = getRandomNumber(2, 10);
  const randomOperator = getRandomOperator();

  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = calculate(number1, number2, randomOperator);
  const result = { question, answer };
  return result;
};

const startBrainCalcGame = () => runEngine(getBrainCalc, description);
export default startBrainCalcGame;
