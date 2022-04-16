#!/usr/bin/env node

import { getName } from '../src/cli.js'
import readlineSync from 'readline-sync'

const getRandomNumber = () => Math.floor(Math.random() * 100 + 1)

const brainEvenGame = () => {

    console.log('Welcome to the Brain Games!')
    const name = getName()
    console.log(`Hello, ${name}!`)
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    let i = 0
    while (i < 3) {
        const randomNumber = getRandomNumber()
        console.log(`Question: ${randomNumber}`)
        const answer = readlineSync.question('Your answer: ')

        if ((answer === "yes" && randomNumber % 2 === 0) || (answer === "no" && randomNumber % 2 !== 0)) {
            console.log('Correct!')
            i++
        } else if (answer === "yes" && randomNumber % 2 !== 0) {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`)
            i = 0
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`)
            i = 0
        }
    }
    return `Congratulations, ${name}!`
}

console.log(brainEvenGame())