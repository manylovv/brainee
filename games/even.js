export const brainEvenGame = () => {
    const arrQuestions = []
    const arrAnswers = []
    const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'
    for (let i = 0; i < 3; i++) {
        arrQuestions.push(Math.ceil(Math.random() * 100)) //случайное число от 1 до 100

        if (arrQuestions[i] % 2 === 0) {
            arrAnswers.push("yes")
        } else {
            arrAnswers.push("no")
        }
    }
    return [arrQuestions, arrAnswers, gameRules]
}