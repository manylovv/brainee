#!/usr/bin/env node

import { gameLogic } from '../src/index.js'
import { brainCalcGame } from '../games/calc.js'
import { gameRules } from '../games/calc.js'

console.log(gameLogic(brainCalcGame, gameRules))