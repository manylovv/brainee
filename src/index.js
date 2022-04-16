import readlineSync from 'readline-sync'
import { getName } from './cli.js'

export const gameLogic = (arr) => { // на вход принимается массив, состоящий из двух массивов (вопросы и ответы)
    console.log('Welcome to the Brain Games!')
    const name = getName()
    console.log(`Hello, ${name}!`)

    console.log(arr[2]) // правила игры

    for (let i = 0; i < 3; i += 1) {
        console.log(`Question: ${arr[0][i]}`)
        const answer = readlineSync.question("Your answer: ")

        if (answer === arr[1][i]) {
            console.log('Correct!')
        } else {
            return `'${answer}' is wrong answer ;(. Correct answer was '${arr[1][i]}'.\nLet's try again, ${name}!`
        }
    }
    return `Congratulations, ${name}!`
}