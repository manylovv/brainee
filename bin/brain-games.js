#!/usr/bin/env node

import { getName } from "../src/cli.js"


const greeting = () => {
    console.log('Welcome to the Brain Games!')
    const name = getName()
    return `Hello, ${name}!`
}

console.log(greeting())