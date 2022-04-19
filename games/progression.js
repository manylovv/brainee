const  randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  const result = min + Math.random() * (max + 1 - min);
  return Math.floor(result);
};
export const gameRules = 'What number is missing in the progression?';
export const brainProgressionGame = () => {
  const resultArray = [];
  const progression = [];
  let hidden = ''; 
  const num1 = randomInteger(1, 100);
  const step = randomInteger(1, 11);
  const randomIndex = randomInteger(0, 6);
  for (let i = 0; i <= 6; i += 1) {
    progression.push(String(num1 + step * (i + 1)));
    if (i === randomIndex) {
      hidden = String(progression[i]);
      progression[i] = '..';
    }
  }
  resultArray.push(progression.join(' '));
  resultArray.push(hidden);
  return resultArray;
};
