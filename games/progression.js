function randomInteger(min, max) {
    // случайное число от min до (max+1)
    const result = min + Math.random() * (max + 1 - min)
    return Math.floor(result)
}

const getProgression = () => {
    const arr = []
    let hidden = ''

    const num1 = randomInteger(1, 100)
    const step = randomInteger(1, 11)

    const randomIndex = randomInteger(0, 6)
    for (let i = 0; i <= 6; i++) {
        arr.push(String(num1 + step * (i + 1)))
        if (i === randomIndex) {
            hidden = String(arr[i])
            arr[i] = '..'
        }
    }
    const result = arr.join(' ')
    return [result, hidden]
}

export const brainProgressionGame = () => {
    const arrQuestions = []
    const arrAnswers = []
    const gameRules = 'What number is missing in the progression?'

    for (let i = 0; i < 3; i++) {
        let progression = getProgression()

        arrQuestions.push(progression[0])
        arrAnswers.push(progression[1])
    }
    return [arrQuestions, arrAnswers, gameRules]
}