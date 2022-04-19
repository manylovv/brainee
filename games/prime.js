const isPrime = (num) => {
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const brainPrimeGame = () => {
   const arr = [];
  const num = (Math.ceil(Math.random() * 100));
  arr.push(num);
  if (isPrime(num)) {
    arr.push('yes');
  } else {
    arr.push('no');
  }
  return arr;
};
