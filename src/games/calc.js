import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}!'`);
  }
};

const description = 'What is the result of the expression?';
const getBrainCalc = () => {
  const number1 = getRandomNumber(2, 15);
  const number2 = getRandomNumber(2, 15);
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  const randomOperator = operators[randomIndex]

  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = calculate(number1, number2, randomOperator).toString();
  return { question, answer };
};

const startBrainCalcGame = () => runEngine(getBrainCalc, description);
export default startBrainCalcGame;