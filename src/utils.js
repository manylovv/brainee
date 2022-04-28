export const getRandomNumber = (min, max) => {
  const result = min + Math.random() * (max + 1 - min);
  return Math.floor(result);
};

export const getResultObject = (question, answer) => {
  const result = {};
  result.question = question;
  result.answer = answer;
  return result;
};
