import readlineSync from 'readline-sync';

export const gameLogic = (func, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description); 
  let questionAndAnswer = {};
  for (let i = 0; i < 3; i += 1) {
    questionAndAnswer = func();
    console.log(`Question: ${questionAndAnswer.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === questionAndAnswer.answer) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${questionAndAnswer.answer}'.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export default gameLogic;