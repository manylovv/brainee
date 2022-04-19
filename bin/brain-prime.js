#!/usr/bin/env node

import { gameLogic } from '../src/index.js'
import { brainPrimeGame } from '../games/prime.js'
import { gameRules } from '../games/prime.js'

console.log(gameLogic(brainPrimeGame, gameRules))