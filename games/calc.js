const getRandomOperator = () => {
    const arrOperators = ["+", "-", "*"]
    const random = Math.floor((Math.random() * arrOperators.length))
    return arrOperators[random]
}

export const brainCalcGame = () => {
    const arrQuestions = []
    const arrAnswers = []
    const gameRules = "What is the result of the expression?"

    for (let i = 0; i < 3; i++) {
        let numRandom1 = (Math.ceil(Math.random() * 15))
        let numRandom2 = (Math.ceil(Math.random() * 15))
        let randomOperator = getRandomOperator()
        arrQuestions.push(`${numRandom1} ${randomOperator} ${numRandom2}`)

        switch (randomOperator) {
            case "+":
                arrAnswers.push(String(numRandom1 + numRandom2))
                break
            case "-":
                arrAnswers.push(String(numRandom1 - numRandom2))
                break
            case "*":
                arrAnswers.push(String(numRandom1 * numRandom2))
                break
        }
    }

    return [arrQuestions, arrAnswers, gameRules]
}