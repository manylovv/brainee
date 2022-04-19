import readlineSync from 'readline-sync';
import getName from './cli.js';

// на вход принимается функция, возвращающая массив,
// состоящий из двух элементов (вопрос и ответ),
// которая затем вызывается несколько раз (в зависимости от количества раундов в игре)
// (в нашем случае 3 раза)
const gameLogic = (func, rules) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log(rules); // правила игры
  let arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr = func();
    console.log(`Question: ${arr[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === arr[1]) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${arr[1]}'.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export default gameLogic;
