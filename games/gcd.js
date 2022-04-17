const gcd = (a, b) => !b ? a : gcd(b, a % b)

export const brainGCDGame = () => {
    const arrQuestions = []
    const arrAnswers = []
    const gameRules = 'Find the greatest common divisor of given numbers.'
    for (let i = 0; i < 3; i++) {
        let numRandom1 = (Math.ceil(Math.random() * 20 + 2))
        let numRandom2 = (Math.ceil(Math.random() * 100))
        arrQuestions.push(`${numRandom1} ${numRandom2}`)
        arrAnswers.push(String(gcd(numRandom1, numRandom2)))
    }
    return [arrQuestions, arrAnswers, gameRules]
}